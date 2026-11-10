<?php
/**
 * Shared settings for the CMS "Sign In with GitHub" relay (Sveltia CMS at /admin).
 * Runs on HostGator. No Netlify, no outside login service.
 *
 * The GitHub OAuth App's Client ID and secret are NOT in the repository.
 * The deploy workflow writes them to oauth-config.php (from the GitHub Actions
 * secrets CMS_GITHUB_CLIENT_ID and CMS_GITHUB_CLIENT_SECRET) before uploading.
 */

// The one address the login runs on. Must match the OAuth App's callback URL:
// https://www.cawap.ca/api/callback.php
const CMS_CANONICAL_ORIGIN = 'https://www.cawap.ca';

// Addresses allowed to receive the login token (where /admin is opened).
const CMS_ALLOWED_ORIGINS = ['https://www.cawap.ca', 'https://cawap.ca'];

const CMS_ALLOWED_SCOPES = ['repo', 'public_repo', 'repo,user', 'public_repo,user'];

function cms_no_cache(): void
{
    header('Cache-Control: no-store');
    header('X-Robots-Tag: noindex, nofollow');
}

/** @return array{client_id: string, client_secret: string}|null */
function cms_oauth_config(): ?array
{
    $file = __DIR__ . '/oauth-config.php';
    if (!is_file($file)) {
        return null;
    }
    $config = include $file;
    if (!is_array($config) || empty($config['client_id']) || empty($config['client_secret'])) {
        return null;
    }
    return ['client_id' => (string) $config['client_id'], 'client_secret' => (string) $config['client_secret']];
}

function cms_plain_error(int $status, string $message): void
{
    http_response_code($status);
    header('Content-Type: text/plain; charset=utf-8');
    cms_no_cache();
    echo $message;
    exit;
}
