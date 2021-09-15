'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "45373f195da0a56044d4caf7d180cc04",
".git/config": "e9b3225266a286b113c14108d4f00301",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ebd58f51caf19f1bbeeb8f2b96d55f6b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05953a46ed163532d6159eb82d745acb",
".git/logs/refs/heads/master": "05953a46ed163532d6159eb82d745acb",
".git/logs/refs/remotes/origin/master": "52cd205019ef401a6ff0644c1c65a085",
".git/objects/04/16d765da8d5bcdbf0f23d59c720d2ddb737a80": "c607f5cd3f43970ddbd0da8fdeb013fa",
".git/objects/05/7ad256314a4b2e496d6dc2c2bac11972198377": "ad50a409807f1c0110b2e45a1b2ffeac",
".git/objects/07/88171b6e0b14ccdd8ce394e7f99f53d473c12f": "ad50748896485554a1da6bad24693843",
".git/objects/0b/df50bf7633d9a2fb7adae63f8a119de5a807cd": "c9855bf7165e4e038d867daebc64b53d",
".git/objects/0f/568c8ba19a1cf46324b757ee52c72c699f5152": "63355861b735638ed0a7eff8654614af",
".git/objects/12/ae31326c5b6640fa680c19e3d86c1097499cc0": "6da6937eca7789b0dbf6178d0265d041",
".git/objects/23/633fabd830fc1a2f0d8f8e740d46ad1071b5a3": "74afea6cea1aa14d523f1ca8c079e730",
".git/objects/29/71bc813acd121e3e747da602b602a25729145e": "d743df69015c048da5b9b26a95bf7448",
".git/objects/29/773c0d4b85c861ac664c7582d797475e6fb7b1": "40357d3f772ba9446a8f9a7145ebf0af",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/d89882f7ab9739910434f2b7ce362fa3792f78": "e8aa351cb3ec114cebb4b91352ec0696",
".git/objects/3c/5ca9426cc200371e336ec865c57c0b930f6047": "e56b544f73ce435bdc298455fb38118c",
".git/objects/3f/922bad00a7bee72361a92d29fcbe75d6b48247": "eb13eccec3fcdf9bc1a8f3be796a8113",
".git/objects/42/2666a4df5165c8cf04c249462353f21278c146": "08c8a48f53f55b5eb7be53b2f6628cab",
".git/objects/49/2b2c9381baf0f7c00679918ca1c85f0f261f44": "6754ff21912ad5997c509c3b013f7ba8",
".git/objects/4c/4cedcd6c9c6fe38b01befb178443d798957765": "ba73581900d519e0fd23e8663c4f9195",
".git/objects/54/667987c576132d56e85407db5f94487b07403f": "a30c51a3cc7b2e5ad558efaf0d66dab2",
".git/objects/56/de27fc15822ad898a79f67f9dabd9fe15e59b1": "29ebcc45520c9f1ff4f98c3e1e765962",
".git/objects/59/071f337a7333a98a5334dd6820aaf1b1b471af": "11e80628eae064334bfa71d55c42178e",
".git/objects/5a/cea56855689453f2b64a6a00562f0979005cf3": "74bf5244bbd131584ad692579e728013",
".git/objects/5d/e6d7d0109721e69b980fcb282d50a646426cee": "4beadbf7ac7e2fdfcf1f92e4f5c5c138",
".git/objects/60/3607bb23b1e9974dff5e62f5757b6d3d8e0f6b": "2b79d6948e9d1b6e3d52ff5a3c9f8311",
".git/objects/6a/a556c5827a3fbaa93482bf2767d79dea8c819d": "5cde54679a5b9aa7c90623a2d93fc40e",
".git/objects/6e/77710f69d5a04d78e8633c494efa92f251b7c0": "60cd55b619fb6b570ca22f80b5c64bd7",
".git/objects/76/64db41ae6e9f27ec1d45ac86d6e04424eb7e00": "09cb43ea103c7289e9bfff4eb930927a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8a/845f319f3f8e83ee598bc78cc252838a8bdf89": "9ab0b22556481b15236c26d883baa336",
".git/objects/91/0a8f88a20e97b43ef042708d63d8f98e0d567a": "e0459edc9d9d9d5ece75eb4eb503af2d",
".git/objects/97/36a2997e55685333dc118a6e8b6eec78ef9321": "aa94f6bf3556c618adc187a40df33a0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/b64654a637c276fc59eb8f6e7be3e1d6098a5c": "8a125b37378ef28c522017888b214b35",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ba/e10b45809d5ba54bfd919c90a8b04019cc4713": "589de4ab86be726a0f400a6d8e99d974",
".git/objects/c2/01e4fcaf37b799f0570af23393f0d7593115e0": "e38dbc0316b0ad1d10f587182fe36586",
".git/objects/d1/6c3ac40ffc3814b896baebfbe4a1d172a54a02": "77cf8848d300aed9760b4e58192b7f72",
".git/objects/dc/021ee72372ef3ef2e66c7c85c8686616839018": "edd7f84e13ced7e9dea15e7aba978ec5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/cd9350226a3e7a39a801a411ac1c9cc6bb686a": "e6ac259d0f49d2090b6a19a9812cbee3",
".git/objects/e7/9d2b365e98086ec05c8cedd7d9d2fd2db693ce": "75f6d9738976e09331dc08a7f46875be",
".git/objects/ec/5e6e8cbbf68e8c848787375f8f7811808dd5f5": "9943d61e7bdaeb2127ab2a3800050e14",
".git/objects/ed/17d08fd6c933cf56df9b759f0232a3b58ddedf": "4bd475bfc737bf0ed9e997cd578a07e5",
".git/objects/f0/4e9edb43c75f08f42421245a826acbae0f8024": "9a025494c3f7f9acfec8f7e177e47f38",
".git/objects/f1/3d87a2ae4fa0c02a42bd4a1041622e9c209026": "f4aeca42420d995e36557b9c27e84244",
".git/objects/f8/21cab4ffc17a0832ab30adfaac19f05caea45d": "e5280ffac5bbc007be8d10aec5338a5e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "25607009e70b7b835ffb4f639127b234",
".git/refs/remotes/origin/master": "25607009e70b7b835ffb4f639127b234",
"assets/AssetManifest.json": "d42a5e9a88786730b76e33241f757a80",
"assets/FontManifest.json": "387b31b6f9fc83a368e0a7f29b710d23",
"assets/fonts/Allison-Regular.ttf": "237a9ce39570240f90f04848e68e5bfc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1.png": "28284a5389d6d1d99100f25b78e18ed0",
"assets/images/2.png": "f1741e41c57eb6cb9b83af1c83d23a4b",
"assets/images/3.png": "de345fbaae3ff47d33094ae82a907cd2",
"assets/NOTICES": "dca02bf9219bd96ade316726d62c3a9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "390c677ff7925a9907f8d947daae58e7",
"icons/Icon-192.png": "5f9160d8e2ba9ef89dafe85781054162",
"icons/Icon-512.png": "fb4360f19193ca1fd6d65f9b397526f6",
"icons/Icon-maskable-192.png": "b997d22c45baaf1de961238e587aa8fa",
"icons/Icon-maskable-512.png": "fb4360f19193ca1fd6d65f9b397526f6",
"index.html": "6a404fa2d8be2b081821938633e23008",
"/": "6a404fa2d8be2b081821938633e23008",
"main.dart.js": "84c10241cd61ffe86152407a176844de",
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
