'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/background.png": "6f2635f7eb16044d5e3d439d49638f43",
"assets/asset/logo.png": "aaaffbb6d5f6c407caa78a8a91391b76",
"assets/asset/sandesh_karo/account.png": "ec7d906749766e5a8bef158792801656",
"assets/asset/sandesh_karo/backup_screen.png": "094c16f421fcd89664f8c1c34d4f07bd",
"assets/asset/sandesh_karo/color.png": "77acb4450c146a576e2362abf3616303",
"assets/asset/sandesh_karo/conversation.png": "798e52d4cb093436faadd15b39aa23b4",
"assets/asset/sandesh_karo/home.png": "3e45d7ac1e3d14bbd1373c1e29816f5d",
"assets/asset/sandesh_karo/notification.png": "382116ed7d5bc0c79eef945c4523b75b",
"assets/asset/sandesh_karo/number_screen.png": "b3d39f65197608a009be97fdb8e9ed96",
"assets/asset/sandesh_karo/onboarding_screen.png": "bb78ee4c581c89b871b728ba1214ef49",
"assets/asset/sandesh_karo/otp_screen.png": "132101de94a3213948ab8829be11655d",
"assets/asset/sandesh_karo/sandesh_karo_flow.jpg": "a60d422ce9b7f086217ffa8d3003f6a7",
"assets/asset/sandesh_karo/sandesh_karo_logo.png": "4144a787f3f53b81360fb85de6adf412",
"assets/asset/sandesh_karo/settings.png": "5cd57f64027ce3a5806d0e32aff1e6c2",
"assets/asset/sandesh_karo/setup_profile.png": "49884e5f5ddeee722f6ca2bb9ced3bd2",
"assets/asset/sandesh_karo/user.png": "0393c8ba9b267264c38cbb1ee87a4706",
"assets/AssetManifest.json": "dd1e90be54f4e1fbdf61304d0f2495e3",
"assets/certificate/flutter.png": "dc1513005998f58345177bd418430c44",
"assets/certificate/google.png": "ff5b25b0a14287fd568977fdaff02901",
"assets/certificate/java.png": "fbcd7d5ad394cb5e9cb976c39d9d289b",
"assets/certificate/python.png": "354405a835fd4aa6cb6ac884a52085be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/myPhoto/resume_pic.jpeg": "fb794e0e40233adb9cab1bcbc3ca01f7",
"assets/NOTICES": "49e72d884b13be3be926892299fff0d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "316bc483450530847819815b3dfffa49",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
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
"index.html": "01d66edc54e9b9a9f23d37e261cdb77b",
"/": "01d66edc54e9b9a9f23d37e261cdb77b",
"main.dart.js": "4faf0c179966a11771ea708450a71e18",
"manifest.json": "b182e43acbf132b015d3c256e458f071",
"version.json": "bc2499358f00a36ab4174f1ec17d9364"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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