const VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // get
  if (request.method !== "GET") {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/public/index.html",
    "/public/assets/BigBuckBunny.mp4",
    "/public/js/plugins/autoPause.js",
    "/public/js/plugins/autoPlay.js",
    "/public/js/index.js",
    "/public/js/mediaPlayer.js",
    "/public/styles/index.css",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
