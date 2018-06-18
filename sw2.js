importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "d329a59173c385052668f5e0ef662a1f"
  },
  {
    "url": "main.js",
    "revision": "eeadd24b785afa730465f21550336c05"
  },
  {
    "url": "sw.js",
    "revision": "2edbdc6db0c90721fa0dcb3b88bd840a"
  },
  {
    "url": "workbox-config.js",
    "revision": "1e865eb92874e688ae8960274c65dcdb"
  }
]);

  // workbox.routing.registerRoute(
  //   new RegExp('.*\.js'),
  //   workbox.strategies.staleWhileRevalidate()
  // );

  // workbox.routing.registerRoute(
  //   new RegExp('.*\.html'),
  //   workbox.strategies.staleWhileRevalidate()
  // );

  // workbox.routing.registerRoute(
  //   // Cache CSS files
  //   /.*\.css/,
  //   // Use cache but update in the background ASAP
  //   workbox.strategies.staleWhileRevalidate({
  //     // Use a custom cache name
  //     cacheName: 'css-cache',
  //   })
  // );
  
  // workbox.routing.registerRoute(
  //   // Cache image files
  //   /.*\.(?:png|jpg|jpeg|svg|gif)/,
  //   // Use the cache if it's available
  //   workbox.strategies.cacheFirst({
  //     // Use a custom cache name
  //     cacheName: 'image-cache',
  //     plugins: [
  //       new workbox.expiration.Plugin({
  //         // Cache only 20 images
  //         maxEntries: 20,
  //         // Cache for a maximum of a week
  //         maxAgeSeconds: 7 * 24 * 60 * 60,
  //       })
  //     ],
  //   })
  // );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}