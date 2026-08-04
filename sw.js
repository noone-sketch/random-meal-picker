/**
 * Service Worker — "随机干饭选择器"
 * Caches the app shell for offline access.
 * Strategy: Cache-first for app assets, network-first fallback.
 */

const CACHE_NAME = 'meal-picker-v1';
const APP_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

/** Install: pre-cache app shell */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_ASSETS);
    }).catch(() => {
      // Individual file failures don't kill the SW
    })
  );
  // Activate immediately — don't wait for old SW to close
  self.skipWaiting();
});

/** Activate: clean up old caches */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  // Claim all clients so the SW controls the page immediately
  self.clients.claim();
});

/** Fetch: serve from cache, falling back to network */
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Return cached immediately; fetch update in background
        const fetchPromise = fetch(event.request).then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cloned);
            });
          }
          return response;
        }).catch(() => null);
        return cached;
      }

      // Not in cache — fetch from network
      return fetch(event.request).then((response) => {
        // Cache successful same-origin responses
        if (response && response.status === 200) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cloned);
          });
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // For other resources, just fail gracefully
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
