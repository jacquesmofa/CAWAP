<?php
/**
 * CMS login, step 2: GitHub sends the editor back here with a one-time code.
 * We exchange it for an access token (using the secret that only lives on the
 * server) and hand the token to the /admin window that opened the popup, but
 * only if that window is on one of this site's own addresses.
 */
require __DIR__ . '/oauth-common.php';

/** Renders the popup page that passes the result to Sveltia CMS, then exits. */
function cms_finish(bool $ok, string $tokenOrMessage): void
{
    $message = $ok
        ? 'authorization:github:success:' . json_encode(['token' => $tokenOrMessage, 'provider' => 'github'])
        : 'authorization:github:error:' . json_encode(['message' => $tokenOrMessage]);
    // JSON inside <script>: escape "<" etc. so the data can never close the tag.
    $data = json_encode(
        ['message' => $message, 'origins' => CMS_ALLOWED_ORIGINS],
        JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES
    );
    $text = $ok ? 'Signed in. You can close this window.' : 'Sign-in failed: ' . htmlspecialchars($tokenOrMessage, ENT_QUOTES) . ' Close this window and try again.';

    // Clear the one-time state cookie.
    setcookie('cms_oauth_state', '', ['expires' => time() - 3600, 'path' => '/api/', 'secure' => true, 'httponly' => true, 'samesite' => 'Lax']);
    http_response_code($ok ? 200 : 400);
    header('Content-Type: text/html; charset=utf-8');
    cms_no_cache();
    echo <<<HTML
<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Signing in…</title></head>
<body><p>{$text}</p>
<script>
(function () {
  var d = {$data};
  function receive(e) {
    if (d.origins.indexOf(e.origin) === -1 || !window.opener) return;
    window.opener.postMessage(d.message, e.origin);
    window.removeEventListener('message', receive);
  }
  window.addEventListener('message', receive);
  if (window.opener) window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>
HTML;
    exit;
}

$config = cms_oauth_config();
if ($config === null) {
    cms_finish(false, 'GitHub sign-in is not set up yet.');
}

if (isset($_GET['error'])) {
    cms_finish(false, (string) ($_GET['error_description'] ?? 'GitHub refused the sign-in.'));
}

$code = isset($_GET['code']) ? (string) $_GET['code'] : '';
$state = isset($_GET['state']) ? (string) $_GET['state'] : '';
$expected = isset($_COOKIE['cms_oauth_state']) ? (string) $_COOKIE['cms_oauth_state'] : '';
if ($code === '' || $state === '' || $expected === '' || !hash_equals($expected, $state)) {
    cms_finish(false, 'The sign-in expired or did not start here. Please try again.');
}

$body = http_build_query([
    'client_id' => $config['client_id'],
    'client_secret' => $config['client_secret'],
    'code' => $code,
    'redirect_uri' => CMS_CANONICAL_ORIGIN . '/api/callback.php',
]);

$response = false;
if (function_exists('curl_init')) {
    $ch = curl_init('https://github.com/login/oauth/access_token');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $body,
        CURLOPT_HTTPHEADER => ['Accept: application/json', 'User-Agent: cawap-cms-auth'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
} else {
    $response = @file_get_contents('https://github.com/login/oauth/access_token', false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\nAccept: application/json\r\nUser-Agent: cawap-cms-auth\r\n",
            'content' => $body,
            'timeout' => 15,
        ],
    ]));
}

if ($response === false) {
    cms_finish(false, 'Could not reach GitHub. Please try again.');
}

$data = json_decode((string) $response, true);
if (!is_array($data) || empty($data['access_token'])) {
    cms_finish(false, is_array($data) && !empty($data['error_description']) ? (string) $data['error_description'] : 'GitHub did not return a token.');
}

cms_finish(true, (string) $data['access_token']);
