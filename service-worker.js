const CACHE_NAME = "birthday-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/day1.html",
  "/day2.html",
  "/birthday.html",
  "/css/style.css",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
