'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "024fc7ace41473e10423fe3f874f786e",
"version.json": "99f00589a235413eb50350428db67eaa",
"index.html": "9ca909c9e00a455cb48ef3b59e791605",
"/": "9ca909c9e00a455cb48ef3b59e791605",
"main.dart.js": "a3d540e8de3ebec7a098ad279699893b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "f832e31eaa69f2fe1ce53dc9cacb6ee0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e014112b982dcefa6721fc4399a9a21",
"assets/AssetManifest.json": "d3c00ff75c975f1e977614a39d795f75",
"assets/NOTICES": "4cfee003933bc6b96e5224a66c44c2e0",
"assets/FontManifest.json": "7d8878a3db5f5a4ed96c3bfa2cced405",
"assets/AssetManifest.bin.json": "fdce017da4c816be99ea80b25451b8dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1dc74e3c6abcdcda2b4f0d44b8413993",
"assets/fonts/MaterialIcons-Regular.otf": "4a1c38c024cd7a1b265cb7683f5b8ecc",
"assets/assets/screenshots/hrms_2.png": "c63a807f2c4761c68504b050ea156bae",
"assets/assets/screenshots/hrms_3.png": "e41aed91e7ec70fb2b689b1e0662688c",
"assets/assets/screenshots/hrms_1.png": "a6d1b9cb1a78e3998f54a4b05f1f23b8",
"assets/assets/screenshots/hrms_4.png": "00e729595f9b8e28f740eadaa5517d5c",
"assets/assets/screenshots/hrms_5.png": "879be0d7a395e975dc34544f16a3ca3e",
"assets/assets/screenshots/fitfix_2.png": "5446fcf91bf875acafe97bc9ed1024c6",
"assets/assets/screenshots/movie_app.png": "c0cd8abfb0b526930f500c0355baa03e",
"assets/assets/screenshots/fitfix_3.png": "7e98e0ccde79a801577bf48cd071566d",
"assets/assets/screenshots/fitfix_1.png": "3240674053ae76a44008fb153ee2244d",
"assets/assets/screenshots/laundry_app.png": "7b7e8f2134ee8164940f6078f4c5a7fa",
"assets/assets/screenshots/fitfix_4.png": "b62d4c59bd7ab32b3706c9e7a1dd380f",
"assets/assets/screenshots/fitfix_5.png": "c72d8c436c021d3ec169492814fd4859",
"assets/assets/screenshots/fitfix_6.png": "eeb04a747156624f139e392c148396d2",
"assets/assets/screenshots/ps_1.png": "24e9eff01e8ab2fe74c69371c827d7ef",
"assets/assets/screenshots/ps_3.png": "03d524afeada9cce45758cc7dac04a0b",
"assets/assets/screenshots/ps_2.png": "accc0e33d33cfc8625174784bee4ab94",
"assets/assets/screenshots/ps_4.png": "adf721166f5f6e3263546e5b6623a6dd",
"assets/assets/images/jonathan-ricky.jpg": "aa7d973c2c5fc725d87d9451aadfcedf",
"assets/assets/images/InBug-White.png": "933375fd56532e378d23db0e60f7c792",
"assets/assets/images/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/images/header_icon.png": "f53115f784d4967ca2eec0fbe73cedec",
"assets/assets/icons/hrms_icon.png": "d0ea9b5c933821427d4909b726b63cc0",
"assets/assets/icons/fitfix_icon.png": "7b4ed0070ad5513ddcd7f0516d477716",
"assets/assets/icons/movie_icon.png": "14e5fdf2c73a2a1bd8dfddce565015bf",
"assets/assets/icons/laundry_icon.jpg": "baaa4defad5a416fb1bc9f4f7a386d4d",
"assets/assets/icons/ps_staff_icon.png": "ff815ececa3958737b8493619fa4164a",
"assets/assets/icons/ps_student_icon.png": "cd8401c5a0344285e9dc01323198d639",
"assets/assets/icons/ps_parent_icon.png": "74eda3dcbfdc9c785a54ee5ccd4cab38",
"assets/assets/cv/CV%2520-%2520Jonathan%2520Ricky%2520Sandjaja.pdf": "d48e6c9b0db5d8da2963a9b67a14cf76",
"assets/assets/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf": "6dce17792107f0321537c2f1e9f12866",
"assets/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf": "5167cf388af3d3c88bc10cf14369bc3b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
