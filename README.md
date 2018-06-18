# demo-paw
This is a demo on how to setup a basic PWA

## How to get there

1. create the `manifest.webmanifest` and import it on your `index.html`. Check [here](https://developer.mozilla.org/en-US/docs/Web/Manifest). Eg:
```html
<link rel="manifest" href="/manifest.webmanifest">
```
```json
{
  "name": "PWAed",
  "short_name": "pwaed",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#fff",
  "description": "A simple pwa demo and tutorial.",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }, {
    "src": "images/homescreen512.png",
    "sizes": "512x512",
    "type": "image/png"
  }]
}
```
1. create a file called `sw.js` with the following code:
```javascript
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
```
3. install the workbox CLI globally: `npm install workbox-cli --global``
1. on the root of your project, run: `workbox wizard --injectManifest`. When making changes to the `sw.js` file, run: `workbox injectManifest workbox-config.js`
1. import the generated service worker on the HEAD of your index.html:
```html
<script>
    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw2.js');
        });
    }
</script>
```
6. this should give you 90+ rate on lighthouse 👊🏻