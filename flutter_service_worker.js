'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9c8b1368df7603c1c12b404c7ef34473",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "1b8a8d89df66e3c51d3181d04c424255",
"/": "1b8a8d89df66e3c51d3181d04c424255",
"main.dart.js": "cd8fab0195356fa4dc3db5056a2c53c3",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "ebcdfcdf18c0dce40baf76e8eed57fc4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16ddc2fe140fe3e2c653ed739e520749",
"assets/AssetManifest.json": "48af245c05860dc3e41203e6ea4298df",
"assets/NOTICES": "7cde6ae88c07da69cfd46d3b4ade4b0e",
"assets/FontManifest.json": "a9cabf3b74db18248703b6a0240b534f",
"assets/AssetManifest.bin.json": "9ed2ff06d76ea68143ab181cf99ca2c7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "24985a70896bce93958669fe6a54e8bf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "189beaf56d54d48702fca63b01f2ef3e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "47aa73c7b892ebead314ee498adfe11d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "08c3c74210b2f01b30ac9fcb91545e64",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/etLogo.png": "764d550121dc9160e6c0f3f31b0a1e5c",
"assets/assets/images/bemo_project.jpeg": "c10aedd3bd26a520d9262a6bc17115f7",
"assets/assets/images/rockerbox_project.jpg": "1f29aad6869427d2cf6e1ca2c0f7af55",
"assets/assets/images/antique_project.jpg": "53c3b1c1ecb7e5419807f6d23ad724e8",
"assets/assets/images/needle_project.jpeg": "663463de437396ae2036d11e5da86e5e",
"assets/assets/images/aaa_project.jpg": "9d1c5f5b62e6bd7318d67266f986ef95",
"assets/assets/images/lfs_project.jpg": "16361e51d268ca2c7d99becdf20e0f7c",
"assets/assets/skills/jira.png": "5a3e57a51c56382455306695ef00071b",
"assets/assets/skills/flask.png": "04412d974d25a7162f1f8e89362fad7b",
"assets/assets/skills/lines.png": "71e25205e55b57c81c6a5d19af201ebf",
"assets/assets/skills/xcode.png": "007d3bc3426362d438a44f105ea61fae",
"assets/assets/skills/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/skills/docker.png": "968b730ff9e83d93723fcdd3fc01df3c",
"assets/assets/skills/kubernetes.png": "1f7461f14ada8b2f67b4e1f2814b802b",
"assets/assets/skills/python.png": "162ee83dbba7afc24d8f2009c7a22dc5",
"assets/assets/skills/windowBlack.png": "03e722f8027206f53a420fc4784d7f8e",
"assets/assets/skills/zoom.png": "2798d359c87674274003f0d6a2ed89fc",
"assets/assets/skills/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/skills/reactnative.png": "47a9b1a91adcaa85a7b88c0caaa0e56a",
"assets/assets/skills/sql.png": "4b5a07cfcb47c2fab8fcb715d5bae8da",
"assets/assets/skills/github.png": "1fc5ba73e0e63e36bc09e37a461a7cfc",
"assets/assets/skills/firebase.png": "1d5b23a07f936d78970ca1cf361c1537",
"assets/assets/skills/java.png": "8c7dd8dab5c39d6249c81fb40f05fe43",
"assets/assets/skills/bitbucket.png": "70a0a9899f287138d85f779051e3dc32",
"assets/assets/skills/gitlab.png": "deba9ffe0d941e5062d6053e42d1f368",
"assets/assets/skills/aws.png": "9de1b80fd0bc51c26f367e9bbdeadf20",
"assets/assets/skills/android.png": "df2e702629c1a73e440349c602142828",
"assets/assets/skills/js.png": "d357d431a0dde9992a84e6649c943d58",
"assets/assets/skills/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/skills/vscode.png": "5d2b14a7f9b02245f33cea896a974205",
"assets/assets/skills/keep.png": "65ac51705d134927b2d492da0b7edb41",
"assets/assets/skills/node.png": "5aa2ef3a0c465847f7bbcddc200e4298",
"assets/assets/skills/postgresql.png": "319fbe10f10f467a940e717f5a1aa299",
"assets/assets/skills/django.png": "69063a611603ff87fb26d6afabf5c6ec",
"assets/assets/skills/appwrite.png": "5537eded86ce228c46d002f6eb0b6160",
"assets/assets/skills/slack.png": "bcfe38e2ae4a2c654d7e51763d9daa34",
"assets/assets/skills/canva.png": "1351c4af40c400838e18aff75bf9ea5d",
"assets/assets/skills/swift.png": "6c054706cb7d9d8c21ea7abed25eda71",
"assets/assets/skills/react.png": "a6497109249cb373d0332a935a33a66f",
"assets/assets/skills/postman.png": "82a0d0900cb1a2801b2a0f5988991baf",
"assets/assets/skills/ios.png": "1575b93af8da95be149cea4911632e0c",
"assets/assets/skills/androidstudio.png": "fb10c2b7f98161dd942019aff17db203",
"assets/assets/skills/swiftui.png": "d98cf4929cea5ebdc734aa8c328d9c35",
"assets/assets/skills/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/skills/mongodb.png": "1f880244cf2b7f576a2dda575ecb44ed",
"assets/assets/skills/teams.png": "562dd4e719575cda9484f138b55ac452",
"assets/assets/fonts/BungeeHairline-Regular.ttf": "afd69b3eab643db862cd298162acf778",
"assets/assets/fonts/Arimo-Bold.ttf": "38ca58b61a8e638f9cb2cfeecf0fac9e",
"assets/assets/fonts/Arimo-Italic.ttf": "aa0219d869cac1e4b2966b8f314e5379",
"assets/assets/fonts/Arimo-Regular.ttf": "f308213411bb2ec3d44a93563cf441c0",
"assets/assets/fonts/YujiBoku-Regular.ttf": "5d80dd391f4f95bb72667160075f6106",
"assets/assets/fonts/Arimo-SemiBOldItalic.ttf": "a7b67b93efc33f1ffc53d532b8628cc0",
"assets/assets/fonts/Arimo-MediumItalic.ttf": "a65c96ddbf1cf906343ba9efe1b74864",
"assets/assets/fonts/Arimo-Medium.ttf": "916aadd4f935ccb98cd544a62f06a5ad",
"assets/assets/fonts/Arimo-SemiBold.ttf": "079d8c0292da280eef26c14815a86496",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
