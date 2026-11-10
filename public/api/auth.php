<?php
/**
 * CMS login, step 1: Sveltia CMS opens this page in a popup.
 * We send the editor to GitHub to approve access.
 */
require __DIR__ . '/oauth-common.php';

$config = cms_oauth_config();
if ($config === null) {
    cms_plain_error(500, 'GitHub sign-in is not set up yet. Use "Sign In Using Access Token" for now.');
}

$provider = $_GET['provider'] ?? 'github';
if ($provider !== 'github') {
    cms_plain_error(400, 'Only GitHub sign-in is supported.');
}

$requested = $_GET['scope'] ?? 'repo';
$scope = in_array($requested, CMS_ALLOWED_SCOPES, true) ? $requested : 'repo';
$state = bin2hex(random_bytes(16));

// Checked in callback.php to make sure the sign-in started here.
setcookie('cms_oauth_state', $state, [
    'expires' => time() + 600,
    'path' => '/api/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Lax',
]);

$query = http_build_query([
    'client_id' => $config['client_id'],
    'redirect_uri' => CMS_CANONICAL_ORIGIN . '/api/callback.php',
    'scope' => $scope,
    'state' => $state,
]);

cms_no_cache();
header('Location: https://github.com/login/oauth/authorize?' . $query, true, 302);
exit;
