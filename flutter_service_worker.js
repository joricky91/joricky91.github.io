'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "470a433f74bda7cb505d76a814fbc9c0",
"version.json": "99f00589a235413eb50350428db67eaa",
"index.html": "9ca909c9e00a455cb48ef3b59e791605",
"/": "9ca909c9e00a455cb48ef3b59e791605",
"main.dart.js": "a1f524fed9eb98fb1254929933cd04f7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "f832e31eaa69f2fe1ce53dc9cacb6ee0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e014112b982dcefa6721fc4399a9a21",
".git/config": "361074f08cd1dd8d93c74140f9e436a0",
".git/objects/95/4ddd5a62eff4d61d44a44f9edd63ee1b2af934": "5379355926c3baaf5ff628f4684fea0e",
".git/objects/59/e0aa74d924076990881a48ca8aa02d45c3354f": "861085c372911223b225d1e99462979f",
".git/objects/0c/80a0dd6cd4bddf8ead1284e32d7f98a75883c8": "a6aaed5b5dd84608b3c7fff2599353a5",
".git/objects/50/b81752278d084ba9d449fff25f4051df162b0f": "0ddbe11c79b98dec806590815f7676a8",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/1b696e84fdfaf41d30762ebec383934dcca1db": "b488cad05019684fa992cdc92a3e272f",
".git/objects/0e/6f9f49c557ffa2623a88bdae8280b258287e7c": "09f8ea880cb2d7938a57df93628b46dd",
".git/objects/02/c6ae2fd23e2d09c43efb5aa9c38748e7250bdc": "ab16755a99889804c4e4dab3febf9cb2",
".git/objects/d9/6e6261def55599fbb8c967b90e23bf3752b959": "d0dc4c33ff13e6815e41b08bab3bd438",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/9dd670235330c60c2501bee7791f1337d141f0": "cf2adcd68a4f630e398c487d7c62bac1",
".git/objects/a5/445950b468cad8d094c2ec1e4cd84ba1268b46": "5401b4e18e7398a8c0188787e911acf3",
".git/objects/d1/49c3c005e3b4d95e5a2ac7f7d4d274b47e8b2e": "9d06e2bd97204420bafc2b2752e87af4",
".git/objects/d6/9c02ce41c855d32d62f05ed88ef85cce1d3757": "4dbe10535e178076e6d964088cb3d72c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/f3/814272809899f413e8535eb2587f501c6025b1": "b0033e05d9628d183c33d84f910cff82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/329ac07386938be0b76b58d8eaa62fc6948f9a": "caa2e1ae18883b864c6f60efac0d3d82",
".git/objects/ee/bc1467af56966fc60aa332701b82c9478088fa": "9daa06d23a08ab9444f237fb111f9b8e",
".git/objects/ee/4715b95a12da22e9ba6c978326c96180300db7": "f616dec51fb79d8bdbcfebbba8eb7651",
".git/objects/fd/b9e5475d0661a4d34d55fd06e4c2a880041df9": "c73a22643f2ac3f5c562286ff0aaf3f1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/a8c18d3ca95759023d6733b72132df2a120733": "82b3a4dc7abc8610005f9046258f3668",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e3/2d0fe6d177d3cee7dc25815a8f41270529727f": "bf56720ad6c1d77f4ab8fb061c859ffd",
".git/objects/ca/e3bba6f26de693ca1207917b7f9c0af8daab7d": "700f05228a394273fe42f2f3efe0d82d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c6/a41b21e39d22797f231432fef0af99708393c3": "b2e82b2f96e0aab50693327946ccd9b2",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/4b/93abd25f43296c2a57465ba797c52c97face5d": "e2663d7eea6831440755a419ffd241e7",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/16/142521c21cd2f84180e66939a40026b882d652": "c2e2b3e0b33f2808e08c38ed8c031b3a",
".git/objects/16/7db3fd25f68006c0794078b97d77dc0d6c8c0c": "bbac0a3fa15664da26dfa3ef893ce8f1",
".git/objects/45/b4805d0311f569143e79c8c4640af4d9cbed69": "95f85e8bddef1d81d41c967aae0c0c16",
".git/objects/8a/3c0ac4e7f09344fd9f70b918dc3f15fa4b6fe6": "5c2c43d98ed3a99f0a3914f346923fe0",
".git/objects/4c/eb028e319d0933620f76f8194515caff715bae": "30d896ca037d2b622e137b6dce7b7775",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/6034151f0530bc3e74c1761c176d4a657553f8": "71c254a7044175a253926e527c646187",
".git/objects/75/acaa68b389472a88c4d8c5a209898c032e0d77": "6179e0cebbffb49dad76693d1a0170b4",
".git/objects/81/c0c2b17678eb35d7af5593f095d3cb6e4fdcd2": "6842f259ea74f8dc0bab56db4a04648e",
".git/objects/72/918100071d3f6328278db80acb413760b0c8c9": "c33344d723bcebbdaa9fa67b9b3151f7",
".git/objects/43/ed4f5ee6cb01173b448af26edb9d7459f9d365": "f186d42343e916c98435cd538a94e1b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/86a4beec57d6c003f41b3a306ae647cf857810": "03cdd9470c005f30984aa6dd6b61f02b",
".git/objects/00/bd4a0a64bd8689281a8147880b58545fb1dd07": "22b13cfa7333833d30af69dc2b39df4a",
".git/objects/9a/2b9cfcb998288b8179b0fbd084eb6cb709702b": "d241bbbbdfea75593613186faf16d3ac",
".git/objects/9a/cba4fb65a7af445c1372fe9266fc73cfab5312": "b66264e83811c5b50f6d88dddcc019f7",
".git/objects/65/94f4e4b8a1302bb8564b64374e0209c2cc912d": "99ebb7f57bb2e03d93352e89549f202b",
".git/objects/62/7f6b5a1c1cbfdbb0f43d6d72f64e8a2672268d": "8722f0b0ae2fc44d909b228e63a10a6e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/55/745181f44bd84381a9d00aefd900cad391f035": "997644d4b72a383602c01bf7d2cbd35c",
".git/objects/63/93a86863758d87569d968cc7ddfbf8a6b67a07": "1f100b31824e23c4fd3f2d3435a2f47e",
".git/objects/64/a685f55b04123ad145f915fd32f7500efcbf29": "b95a2289c05ae8bdd9d35be62eba8a36",
".git/objects/64/bbb5d1f5c4520fe0f16f9bfc5be981b1cf0c51": "70d5f8ff92cc633ed4af9add98bf51de",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d5/3d2b36d54ea01735b9d2649baef2ab48520df1": "e5372c22a837f49259c3892d797c6526",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/50479941960b3968420fecfeb8b9a2f856b14b": "0e1ca549b2712662cb853a8d8a4488c9",
".git/objects/b0/ea28154523b1e3a23de66572e4e34a67ea3df5": "f1759c0cdb22a22f31855a51e9708cb4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/91def5c5efca6c79b44e50a914500a8bdab7a1": "72db07a8ac7ab508d3e4e996d6cf7591",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/bae4c5ed16cc4b5a5e5090068b8a50328c15de": "c8a7c302e3e3eb931f94b861ed642226",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/8f49163492cfa6129f4afc6bbb2981bcf33ede": "9073409d4dce6aafef2a27f49b5d5c92",
".git/objects/2c/6cc59a28f5de26b15b3fb63285363585e7fbe2": "cc27ffe52433ddd8c96f7fdc6a8e341f",
".git/objects/1e/7f99fb896c2c1180af347e0c26c327851673bb": "19524320a28677a2494c47f15c66606b",
".git/objects/4a/2a2903ead0c52ea7aba763ee16f8c8cf08ef46": "d90060e509ac0fba0c04b612fb141411",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/15/e50267858a797a1154c12e032c7dddbf9945bc": "012c282cba28208935afb99adf9d54a5",
".git/objects/1c/8e14b9b871c94e37b0c0c93d93bdf63d344c14": "a63805b06f355bb864582a17e25dee58",
".git/objects/2e/07d9b768a8905b4389b61ad3d7753fd0f407cb": "d43e7dab83094f6fadb15b887487af89",
".git/objects/47/3c8c79b638253d966299e00eddec867543c207": "fea0db2430712fc28b3342cee26b071f",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91c9272740d5155dcf0816db6ec04104",
".git/logs/refs/heads/main": "a6038333dba6430223b6b28fc19816c4",
".git/logs/refs/remotes/origin/main": "66164172cd62f496a2c69899924d6b42",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2ac0e379f68a91a65dbf17e87d276abe",
".git/refs/remotes/origin/main": "2ac0e379f68a91a65dbf17e87d276abe",
".git/index": "00a136007dc73cf269c271efa1f7bfcf",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
"assets/assets/cv/CV%2520-%2520Jonathan%2520Ricky%2520Sandjaja.pdf": "040d69e60b74342084a50afb73244607",
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
