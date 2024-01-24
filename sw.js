const cacheVersion = "v7";
const statiCache = "site-static-" + cacheVersion;
const dynamicCache = "site-dynamic-" + cacheVersion;

const maxCacheSize = 5000000;

const pages = [
    "/",
];
const pagesFullURL = [
    "/",
];
const jsS = [
    "/app.js"
];
const imgs = [
    "/img/touch/icon48.png",
    "/img/touch/icon72.png",
    "/img/touch/icon96.png",
    "/img/touch/icon144.png",
    "/img/touch/icon168.png",
    "/img/touch/icon192.png",
    "/img/touch/icon512.png",
    "/img/joystick.svg"
];
const thirdParty = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
];
const files = [
    "/manifest.json"
];
const hangmanCache = [
    "/hangman/images/hangman-0.svg",
    "/hangman/images/hangman-1.svg",
    "/hangman/images/hangman-2.svg",
    "/hangman/images/hangman-3.svg",
    "/hangman/images/hangman-4.svg",
    "/hangman/images/hangman-5.svg",
    "/hangman/images/hangman-6.svg",
    "/hangman/images/lost.gif",
    "/hangman/images/victory.gif",
    "/hangman/scripts/script-ai.js",
    "/hangman/scripts/word-list.js",
    "/hangman/",
    "/hangman/style.css"
];
const hangmanExpertCache = [
    "/hangman-expert/images/hangman-0.svg",
    "/hangman-expert/images/hangman-1.svg",
    "/hangman-expert/images/hangman-2.svg",
    "/hangman-expert/images/hangman-3.svg",
    "/hangman-expert/images/hangman-4.svg",
    "/hangman-expert/images/hangman-5.svg",
    "/hangman-expert/images/hangman-6.svg",
    "/hangman-expert/images/lost.gif",
    "/hangman-expert/images/victory.gif",
    "/hangman-expert/scripts/script-ai.js",
    "/hangman-expert/scripts/word-list.js",
    "/hangman-expert/",
    "/hangman-expert/style.css"
];

// Cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
}

// Install service worker
self.addEventListener("install", evt => {
    console.log("Service worker has been installed");
    evt.waitUntil(
        caches.open(statiCache).then(cache => {
            console.log("Caching shell assets");
            cache.addAll(pages);
            cache.addAll(pagesFullURL);
            cache.addAll(jsS);
            cache.addAll(imgs);
            cache.addAll(thirdParty);
            cache.addAll(files);
            cache.addAll(hangmanCache);
            cache.addAll(hangmanExpertCache);
        })
    );
});

// Activate service worker event
self.addEventListener("activate", evt => {
    console.log("Service worker has been activated");
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== statiCache && key !== dynamicCache)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch to service worker event
self.addEventListener("fetch", evt => {
    console.log("Fetch event", evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache, maxCacheSize);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if (evt.request.headers.get("accept").includes("text/html")) {
                return caches.match("/fallback.html");
            }
        })
    );
});