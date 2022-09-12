importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

// 图片请求: 缓存优先
workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:pdf|doc(x)?|xlsx|)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'workbox:file',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  'https://cdn.google.com/example-script.min.js',
  workbox.strategies.staleWhileRevalidate(),
);
