const CACHE_NAME = 'kiddo-games-v18';
const ASSETS = [
  './',
  './index.html',
  './berhitung.html',
  './bentuk.html',
  './memory.html',
  './puzzle.html',
  './suara.html',
  './balon.html',
  './mewarnai.html',
  './urutan.html',
  './labirin.html',
  './manifest.json',
  './icons/favicon.svg',
  './icons/app-icon.jpg',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/icon-192.jpg',
  './icons/icon-512.jpg',
  './images/counting.jpg',
  './images/shapes.jpg',
  './images/memory.jpg',
  './images/puzzle.jpg',
  './images/sound.jpg',
  './images/balloon.jpg',
  './images/coloring.jpg',
  './images/sorting.jpg',
  './images/maze.jpg',
  './images/puzzle_dino.jpg',
  './images/puzzle_safari.jpg'
];

// Install: pre-cache all game files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return caches.match('./index.html');
      });
    })
  );
});
