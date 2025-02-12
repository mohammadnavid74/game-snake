self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("snake-game-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/icons/snake.png",
        "/icons/snake.png",
        "/icons/snake.png",
        "/sounds/eat.mp3",
        "/sounds/eat.mp3",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

