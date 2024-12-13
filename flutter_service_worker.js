'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84e18635c2c11219ae261c7254f9d96c",
"assets/AssetManifest.bin.json": "c96750388dba52ac3e5020605dd9bbcf",
"assets/AssetManifest.json": "0f1ef0d3171995e460bd686aad28ecbe",
"assets/assets/fonts/CustomIcons.ttf": "1a72e11168b00f6364e46be30c8742a8",
"assets/assets/images/bands/%25C3%2598stkystHustlers.jpg": "c1ac81e518f01eafb5b833174c7722f8",
"assets/assets/images/bands/Adele.jpg": "861dd4a059af54a5b4451c5464a936c4",
"assets/assets/images/bands/Anne-Marie.jpg": "6620019be1852a57325e3d51f42f4621",
"assets/assets/images/bands/Avicii.jpg": "aba84701d21288d78bf9c23f513f2e68",
"assets/assets/images/bands/AvrilLavigne.jpg": "8bf712515c96a9223691f1b8b7b2f467",
"assets/assets/images/bands/Beethoven.jpg": "386e0a24a9d2b6c7ec8fa261c34564dd",
"assets/assets/images/bands/Blackbear.jpg": "88697122254fdb570d4a90b3abacf9db",
"assets/assets/images/bands/BlackEyedPeas.jpg": "d191cba3fd95b7e46017a749ef9303e6",
"assets/assets/images/bands/BloodhoundGang.jpg": "a6d0cde01be29fb7bee2375a706aeb0a",
"assets/assets/images/bands/BobMarley.jpg": "699bf34b731b06e997f899261f51794f",
"assets/assets/images/bands/Cascada.jpg": "477e1a4749741401cd7fafaf28ece0ed",
"assets/assets/images/bands/Coldplay.jpg": "18c50b5e9f2c089ee811ef2cf06ea32f",
"assets/assets/images/bands/CoreyTaylor.jpg": "f1d679b7248c465d6390dd4325d42dc9",
"assets/assets/images/bands/Daughtry.jpg": "8f4316f7efa2bacb8b33951dd65dbb1f",
"assets/assets/images/bands/Deadmau5.jpg": "ab5ddfd45f348abf70c3baaecd728691",
"assets/assets/images/bands/Eminem.jpg": "f35e7e988d6ca1c023038dd56ae0915d",
"assets/assets/images/bands/FallOutBoy.jpg": "14591a8859c629a04d11ebfd1de775bf",
"assets/assets/images/bands/GlenHansard.jpg": "8905f1b8282359368741b365cae8c5dc",
"assets/assets/images/bands/GreenDay.jpg": "cdc210ded6de29ffa96f9f221caf55c5",
"assets/assets/images/bands/HanzZimmer.jpg": "6f553c8075fe55801a8fc901cbb2bd12",
"assets/assets/images/bands/ILoveMusic!.jpg": "a0a7e13b574dfb48755667164ab27404",
"assets/assets/images/bands/JeffBuckley.jpg": "e8a9fcd208b28b1864eeda3fbff5ea18",
"assets/assets/images/bands/JustinTimberlake.jpg": "ae6aaf7360c90dc05ad56e6c8226d47d",
"assets/assets/images/bands/KattyPerry.jpg": "31082ac9b10d5fc86ef208ca8588df73",
"assets/assets/images/bands/KingsOfLeon.jpg": "345cca5d3bd8543757628a96588c8bd2",
"assets/assets/images/bands/Korn.jpg": "dff911d92300e536ab8f13771911085f",
"assets/assets/images/bands/LeonaLewis.jpg": "25c8b89700c53b862f4666e9a57ac331",
"assets/assets/images/bands/LinkinPark.jpg": "8f94f3a25ce0f4862a0677d6e3ce2e09",
"assets/assets/images/bands/LukasGraham.jpg": "4d3c689f73f9ebcd09dde18b75942c91",
"assets/assets/images/bands/Macklemore.jpg": "3815a406b9a8a873f7c494a2c8227139",
"assets/assets/images/bands/Maroon5.jpg": "8c747f74576b060f11f4345ba53d82fd",
"assets/assets/images/bands/MenWithoutHats.jpg": "cb4c52561d0902bc41e0ee4926b09cf3",
"assets/assets/images/bands/MichaelJackson.jpg": "055b6416dc811c82273d780f0ebe29a8",
"assets/assets/images/bands/MShawnCrahan.jpg": "07c2a789cd8e78d21272a3584bdb2f60",
"assets/assets/images/bands/Nickelback.jpg": "f2a7f43134bf9f0de01333d1868d2ef3",
"assets/assets/images/bands/P!nk.jpg": "986b0ac14a232f2706a064b0fc9c0c38",
"assets/assets/images/bands/PhilCollins.jpg": "ecdc4dc755109966f3ba297fa18149d4",
"assets/assets/images/bands/Queen.jpg": "8cfd4bbebee08fc2287f88c89339a11a",
"assets/assets/images/bands/RedHotChiliPeppers.jpg": "8e0d6539e46605f64801052c10b6ce7e",
"assets/assets/images/bands/Rihanna.jpg": "82f02de89ca9762f199e01a3b9d1c4d2",
"assets/assets/images/bands/S3rl.jpg": "aea12c659ab43ce9a7d0d7d5fea6e41a",
"assets/assets/images/bands/SkolekoretNursing.jpg": "b272d76cf5d04e9199c0a83f504b981a",
"assets/assets/images/bands/SleepToken.jpg": "37fadd068e292ce7359ffdeb426f3a55",
"assets/assets/images/bands/Slipknot.jpg": "d85022eb1e3ace67037b591780541f1f",
"assets/assets/images/bands/Springer.jpg": "4bc8e6b3f4c0bc7b30b7cfecf9323426",
"assets/assets/images/bands/StoneSour.jpg": "7cf2f842f06508b7611c3a433f149c18",
"assets/assets/images/bands/SystemOfADown.jpg": "94cc655d1ca0e4b199c49df5d4649da2",
"assets/assets/images/bands/TaylorSwift.jpg": "8a77d8c2e23d73a53b42953cc6f434c9",
"assets/assets/images/bands/TheBeatles.jpg": "7da5e0f76da862fc8465b115d60b54db",
"assets/assets/images/bands/TheCranberries.jpg": "c4ef3994b6f2632f8d5048d2bc308670",
"assets/assets/images/bands/TheGlitchMob.jpg": "d58af91a6d264fb0bad8936f7b07cb27",
"assets/assets/images/bands/ThePrettyReckless.jpg": "5f385c8dad9c63dd1549a177c8e04c03",
"assets/assets/images/bands/TheSettingSon.jpg": "bb2a94dbceffddf1f080dbb06ad027f8",
"assets/assets/images/bands/VanCanto.jpg": "d77b2a44b97a5d03c2791c56e39660f7",
"assets/assets/images/bands/Volbeat.jpg": "65602855c4dd7c01757afc2516695e07",
"assets/assets/images/bands/Zelize.jpg": "1c39b6651ac34039ad145b003919c8c5",
"assets/assets/images/Claes-Cartoon.png": "e73d1a8bdc8182be612bf2af64d910cd",
"assets/assets/images/Claes.png": "a1b5d50ec919d3988369348722b706b6",
"assets/assets/images/Daniel-Cartoon.png": "db14606b6cf8c1dadd787d9ba0774221",
"assets/assets/images/Daniel.png": "369a8104807f557406fa419f95dddc82",
"assets/assets/images/drinks/%25C3%2598l.png": "2bfa3291db0802e627089324c19ac2b8",
"assets/assets/images/drinks/BaileysCoffee.png": "d63fc7467685f1ece64494a0d170d03a",
"assets/assets/images/drinks/Brandbil.png": "e31fec0d75140749f5ad61b05f8f682a",
"assets/assets/images/drinks/DarkNStormy.png": "50d0295bf7cbc06b95741bdb036e7f86",
"assets/assets/images/drinks/Filur.png": "3b7ce2d0adbad7442b25e19627494843",
"assets/assets/images/drinks/GinHass.png": "5c95f05c06405a4be1f74e0e1a095169",
"assets/assets/images/drinks/Gl%25C3%25B8gg.png": "799ab8aec8491eb96fb4c90f9db02684",
"assets/assets/images/drinks/HonningSnaps.png": "a562b0bf104bda2703d1e2d7d9b58ea2",
"assets/assets/images/drinks/IrishCoffee.png": "977548c28b9fcd665505adcfeb79ed8f",
"assets/assets/images/drinks/Isbj%25C3%25B8rn.png": "b5f2f96fb9bc4e62f20753af7012e540",
"assets/assets/images/drinks/PinaColada.png": "30abee70f00626a28155bc9fd921c462",
"assets/assets/images/drinks/RomToddy.png": "a3695a68cbf36005f45fc3921c45f018",
"assets/assets/images/drinks/SexOnTheBeach.png": "7a09daa866af92a66a2be5f5f6ac410c",
"assets/assets/images/drinks/Sommersby.png": "15833edfee9d2a9c62141404d77516f3",
"assets/assets/images/drinks/StrawberryDaiquiri.png": "11466595c06d071d376f4d73e2f86b96",
"assets/assets/images/drinks/Vin.png": "378ac1fde89c99d492cf96a4fccda5c9",
"assets/assets/images/drinks/WhiteRussian.png": "b8c06503eef8d207f091513c0e5d2f16",
"assets/assets/images/Hanne-Cartoon.png": "2464b5eb42374a4130d3c7bb483cc030",
"assets/assets/images/Hanne.png": "3097f83fd688a6703a93a34aff3f566c",
"assets/assets/images/Nanna-Cartoon.png": "47c3581ab508a1f7384fb5c24c412fcb",
"assets/assets/images/Nanna.png": "3df3a547cb2cb0736431b208f7b87eaa",
"assets/assets/images/Oliver-Cartoon.png": "fe304638f30b9e107fb8fd84dc6d2bbd",
"assets/assets/images/Oliver.png": "a1e6a7ff4191fb4c7c5c94be73b81ce2",
"assets/assets/images/slaenget-card.png": "1a1cde5742f9af284ea3ec87543d2186",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "c5c9047ceeda9fd1bb1a72f2f43a3b46",
"assets/NOTICES": "7cdf15d498b7442a36f18aa20eab8f9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "3e7ff1caa11f746ece50be6b144023db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0dfdafeb2259e49d7fc79147d2c77a60",
"/": "0dfdafeb2259e49d7fc79147d2c77a60",
"main.dart.js": "374ce30a5b5c96606cdb9efedc10d718",
"manifest.json": "6f1c137867f89d7f9e458516df073229",
"version.json": "02dd84889e1fd3167441a1536b21066d"};
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
