<?php
// Centralized server-side gold rate proxy + cache for PHP/Apache hosting environments (e.g., Hostinger)
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=60, stale-while-revalidate=120');

$cacheFile = __DIR__ . '/.gold_rate_cache.json';
$cacheTtlSeconds = 180; // 3 minutes
$upstreamUrl = 'https://api.oropocket.com/public/prices';

$cachedData = null;
if (file_exists($cacheFile)) {
    $rawCache = @file_get_contents($cacheFile);
    if ($rawCache !== false) {
        $decoded = json_decode($rawCache, true);
        if (
            is_array($decoded) &&
            isset($decoded['rate24k'], $decoded['rate22k'], $decoded['rate18k'], $decoded['updatedAt'], $decoded['fetchedAt']) &&
            is_numeric($decoded['rate24k']) && $decoded['rate24k'] > 0
        ) {
            $cachedData = $decoded;
        }
    }
}

$now = time();
if ($cachedData !== null && ($now - intval($cachedData['fetchedAt'])) < $cacheTtlSeconds) {
    echo json_encode([
        'rate24k' => intval($cachedData['rate24k']),
        'rate22k' => intval($cachedData['rate22k']),
        'rate18k' => intval($cachedData['rate18k']),
        'updatedAt' => $cachedData['updatedAt'],
        'sourceStatus' => 'live',
    ]);
    exit;
}

$ctx = stream_context_create([
    'http' => [
        'method' => 'GET',
        'timeout' => 7,
        'header' => "Accept: application/json\r\nUser-Agent: AashreyaGoldHubRateService/1.0\r\n",
    ],
]);

$response = @file_get_contents($upstreamUrl, false, $ctx);
if ($response !== false) {
    $payload = json_decode($response, true);
    $goldSell = isset($payload['data']['gold']['sell']) ? floatval($payload['data']['gold']['sell']) : 0;
    $goldBuy = isset($payload['data']['gold']['buy']) ? floatval($payload['data']['gold']['buy']) : 0;
    $timestamp = isset($payload['data']['timestamp']) ? strval($payload['data']['timestamp']) : '';

    if ($goldSell > 0 && $goldBuy > 0 && $timestamp !== '') {
        $rate24k = intval(round($goldSell));
        $rate22k = intval(round(($goldSell * 22) / 24));
        $rate18k = intval(round(($goldSell * 18) / 24));

        $newCache = [
            'rate24k' => $rate24k,
            'rate22k' => $rate22k,
            'rate18k' => $rate18k,
            'updatedAt' => $timestamp,
            'fetchedAt' => $now,
        ];
        @file_put_contents($cacheFile, json_encode($newCache), LOCK_EX);

        echo json_encode([
            'rate24k' => $rate24k,
            'rate22k' => $rate22k,
            'rate18k' => $rate18k,
            'updatedAt' => $timestamp,
            'sourceStatus' => 'live',
        ]);
        exit;
    }
}

if ($cachedData !== null) {
    echo json_encode([
        'rate24k' => intval($cachedData['rate24k']),
        'rate22k' => intval($cachedData['rate22k']),
        'rate18k' => intval($cachedData['rate18k']),
        'updatedAt' => $cachedData['updatedAt'],
        'sourceStatus' => 'cached',
    ]);
    exit;
}

echo json_encode([
    'rate24k' => null,
    'rate22k' => null,
    'rate18k' => null,
    'updatedAt' => null,
    'sourceStatus' => 'unavailable',
]);
