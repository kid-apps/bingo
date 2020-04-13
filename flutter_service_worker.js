'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8ee90cad4379a6bb495821747647a7e8",
"assets/assets/button.mp3": "0842992fa9be7d1170b1af3214509458",
"assets/assets/complete.mp3": "b3a284d0a4a216b4b0d8f395d3fe89a0",
"assets/assets/done.mp3": "417087eee53e29def688ccc5ed41ffb8",
"assets/assets/lose.mp3": "154047ae3653e5108a81e90940a444a9",
"assets/assets/newday.mp3": "3830f7b98f845e15c3ba0194a5690437",
"assets/assets/onepoint.mp3": "4086c172df8a6c46e63411107fe32724",
"assets/assets/strike.mp3": "3381a980f2497b94b67c55b3cedee018",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "14238135649a8d66cb9ce4bd74702334",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "8d84b7b2a6d9b2576c7a98447a3c9504",
"/": "8d84b7b2a6d9b2576c7a98447a3c9504",
"main.dart.js": "2958845026c07456c7e45c79154bcceb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
