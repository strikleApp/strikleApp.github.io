'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/background.png": "6f2635f7eb16044d5e3d439d49638f43",
"assets/asset/logo.png": "aaaffbb6d5f6c407caa78a8a91391b76",
"assets/asset/melody.png": "69ee026329f15e9b3c68831d03a2226b",
"assets/asset/melody_online.png": "7d6e8e9066aeecc7ed1b35ebf9705029",
"assets/asset/Sandesh%2520Karo.png": "4efee293e0fc8041d44471196242c82e",
"assets/AssetManifest.json": "e9cb6f8510baa646ebaf3fe37b7f19af",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "36b31f0571f7a0c957e687ac5e9fdda1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/video/icon.png": "041d4394c4b477254fa49c96f3943627",
"assets/video/Melody.mp4": "bc9a8c04fd273a2f92bbb718ecd2d7ca",
"assets/video/MelodyOnline.mp4": "86c601b4591adbe6b7c22328ac703dd9",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "316bc483450530847819815b3dfffa49",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-icon-144x144.png": "8c5da14070f800a39c3b3830fe90f620",
"icons/android-icon-192x192.png": "7e78fd86fe98275cd0dc5fa86e9db9b3",
"icons/android-icon-36x36.png": "d91c32c3c629c5560860070fbe829d1c",
"icons/android-icon-48x48.png": "1df76048e5f06bb5bcec38bdd807cdf4",
"icons/android-icon-72x72.png": "974e29c6e214be1026db056fb562c6a7",
"icons/android-icon-96x96.png": "836d7c1d17afcc3c6faa7b7643981660",
"icons/apple-icon-114x114.png": "fc2905870c2b011eab4cfbbbb9e6c39f",
"icons/apple-icon-120x120.png": "36340722eb3287effc879acdd9ec6298",
"icons/apple-icon-144x144.png": "8c5da14070f800a39c3b3830fe90f620",
"icons/apple-icon-152x152.png": "5dfb9bc03fbb41a47cd1e15e969798e3",
"icons/apple-icon-180x180.png": "e63535edaa6f63d38f6ee321b3778847",
"icons/apple-icon-57x57.png": "d2470601a3ecb6005862acff5df6a620",
"icons/apple-icon-60x60.png": "9bc7fde929678202b1c7fc1dae33c8bd",
"icons/apple-icon-72x72.png": "974e29c6e214be1026db056fb562c6a7",
"icons/apple-icon-76x76.png": "9680923ab3a0eb08826ea81424694cc2",
"icons/apple-icon-precomposed.png": "570507474eba182e844a9ba1d4f39bf6",
"icons/apple-icon.png": "570507474eba182e844a9ba1d4f39bf6",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "b965b757b5550c982bdd79569e98717f",
"icons/favicon-32x32.png": "3a2def8baa119cce8127c2fe7657f975",
"icons/favicon-96x96.png": "836d7c1d17afcc3c6faa7b7643981660",
"icons/favicon.ico": "316bc483450530847819815b3dfffa49",
"icons/Icon-192.png": "7e78fd86fe98275cd0dc5fa86e9db9b3",
"icons/Icon-512.png": "5dfb9bc03fbb41a47cd1e15e969798e3",
"icons/Icon-maskable-192.png": "7e78fd86fe98275cd0dc5fa86e9db9b3",
"icons/Icon-maskable-512.png": "5dfb9bc03fbb41a47cd1e15e969798e3",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "8c5da14070f800a39c3b3830fe90f620",
"icons/ms-icon-150x150.png": "07a608e9aacca50420c7f947d5d3c51b",
"icons/ms-icon-310x310.png": "1a88180f4e737fb82131691808ba3de4",
"icons/ms-icon-70x70.png": "0c423fb160114b282b51da9d69bc9ca2",
"index.html": "3d5eba2053862a83e513c0c92b4e5d95",
"/": "3d5eba2053862a83e513c0c92b4e5d95",
"main.dart.js": "7854f8f1a1df924a2f9b40539b1d6a56",
"manifest.json": "b182e43acbf132b015d3c256e458f071",
"version.json": "bc2499358f00a36ab4174f1ec17d9364"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
