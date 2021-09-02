'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/04/16d765da8d5bcdbf0f23d59c720d2ddb737a80": "c607f5cd3f43970ddbd0da8fdeb013fa",
".git/objects/05/7ad256314a4b2e496d6dc2c2bac11972198377": "ad50a409807f1c0110b2e45a1b2ffeac",
".git/objects/12/ae31326c5b6640fa680c19e3d86c1097499cc0": "6da6937eca7789b0dbf6178d0265d041",
".git/objects/29/773c0d4b85c861ac664c7582d797475e6fb7b1": "40357d3f772ba9446a8f9a7145ebf0af",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/49/2b2c9381baf0f7c00679918ca1c85f0f261f44": "6754ff21912ad5997c509c3b013f7ba8",
".git/objects/4c/4cedcd6c9c6fe38b01befb178443d798957765": "ba73581900d519e0fd23e8663c4f9195",
".git/objects/59/071f337a7333a98a5334dd6820aaf1b1b471af": "11e80628eae064334bfa71d55c42178e",
".git/objects/5a/cea56855689453f2b64a6a00562f0979005cf3": "74bf5244bbd131584ad692579e728013",
".git/objects/5d/e6d7d0109721e69b980fcb282d50a646426cee": "4beadbf7ac7e2fdfcf1f92e4f5c5c138",
".git/objects/60/3607bb23b1e9974dff5e62f5757b6d3d8e0f6b": "2b79d6948e9d1b6e3d52ff5a3c9f8311",
".git/objects/76/64db41ae6e9f27ec1d45ac86d6e04424eb7e00": "09cb43ea103c7289e9bfff4eb930927a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/845f319f3f8e83ee598bc78cc252838a8bdf89": "9ab0b22556481b15236c26d883baa336",
".git/objects/91/0a8f88a20e97b43ef042708d63d8f98e0d567a": "e0459edc9d9d9d5ece75eb4eb503af2d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/b64654a637c276fc59eb8f6e7be3e1d6098a5c": "8a125b37378ef28c522017888b214b35",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/c2/01e4fcaf37b799f0570af23393f0d7593115e0": "e38dbc0316b0ad1d10f587182fe36586",
".git/objects/dc/021ee72372ef3ef2e66c7c85c8686616839018": "edd7f84e13ced7e9dea15e7aba978ec5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/cd9350226a3e7a39a801a411ac1c9cc6bb686a": "e6ac259d0f49d2090b6a19a9812cbee3",
".git/objects/f1/3d87a2ae4fa0c02a42bd4a1041622e9c209026": "f4aeca42420d995e36557b9c27e84244",
".git/objects/f8/21cab4ffc17a0832ab30adfaac19f05caea45d": "e5280ffac5bbc007be8d10aec5338a5e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "2443e6eb3f73e972fc65dfc02df4667e",
".git/refs/remotes/origin/master": "2443e6eb3f73e972fc65dfc02df4667e",
"assets/AssetManifest.json": "d42a5e9a88786730b76e33241f757a80",
"assets/FontManifest.json": "387b31b6f9fc83a368e0a7f29b710d23",
"assets/fonts/Allison-Regular.ttf": "237a9ce39570240f90f04848e68e5bfc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1.png": "28284a5389d6d1d99100f25b78e18ed0",
"assets/images/2.png": "f1741e41c57eb6cb9b83af1c83d23a4b",
"assets/images/3.png": "79bda2d5c476cc5b3a202d1ec0a9f592",
"assets/NOTICES": "dca02bf9219bd96ade316726d62c3a9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "390c677ff7925a9907f8d947daae58e7",
"icons/Icon-192.png": "5f9160d8e2ba9ef89dafe85781054162",
"icons/Icon-512.png": "fb4360f19193ca1fd6d65f9b397526f6",
"icons/Icon-maskable-192.png": "b997d22c45baaf1de961238e587aa8fa",
"icons/Icon-maskable-512.png": "fb4360f19193ca1fd6d65f9b397526f6",
"index.html": "ea4f8d9657fa84559bd74bfe37499480",
"/": "ea4f8d9657fa84559bd74bfe37499480",
"main.dart.js": "692b4559db02a56a0ebc42493befd838",
"manifest.json": "6178d8468cac404510dd8c157a72cf81",
"version.json": "caa5c9212f882fbb1aeee16f4471b486"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
