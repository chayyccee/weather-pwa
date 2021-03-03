const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

// write events for 3 different things
// 1). install serviceWorker
const self = this; // use this because
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');
            return cache.addAll(urlsToCache);
        })
    );
}); // self is a restricted global and eslints warns against use of restricted globals
// 2). listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('offline.html'));
        })
    )
});
// 3). activated serviceWorker
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});
