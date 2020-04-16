'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "92d9d1459f20dbadf8ead54d68d08aeb",
"assets/assets/button.mp3": "0842992fa9be7d1170b1af3214509458",
"assets/assets/complete.mp3": "b3a284d0a4a216b4b0d8f395d3fe89a0",
"assets/assets/done.mp3": "417087eee53e29def688ccc5ed41ffb8",
"assets/assets/lose.mp3": "154047ae3653e5108a81e90940a444a9",
"assets/assets/newday.mp3": "3830f7b98f845e15c3ba0194a5690437",
"assets/assets/onepoint.mp3": "4086c172df8a6c46e63411107fe32724",
"assets/assets/strike.mp3": "3381a980f2497b94b67c55b3cedee018",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "a7c2f03ba2c9e178e627766303cc167f",
"favicon.ico": "3bb4e13dc6d7a29148bdeba81dbbd413",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8d84b7b2a6d9b2576c7a98447a3c9504",
"/": "8d84b7b2a6d9b2576c7a98447a3c9504",
"main.dart.js": "d50c5aa3a1b421a762e58bea9ad66dc5",
"manifest.json": "db10256232186578bd2e7f9ae4b2315c"
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
