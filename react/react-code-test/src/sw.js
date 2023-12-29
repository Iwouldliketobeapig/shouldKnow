import { precacheAndRoute } from 'workbox-precaching';
import { cacheNames, setCacheNameDetails, clientsClaim } from 'workbox-core';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

setCacheNameDetails({
  prefix: 'react-code-test',
  suffix: 'v1',
  precache: 'install-time',
  runtime: 'run-time',
  googleAnalytics: 'ga',
});

console.log(cacheNames.precache);
console.log(cacheNames.runtime);
console.log(cacheNames.googleAnalytics);

// 更新缓存后，立即生效
clientsClaim();

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST || []);

registerRoute(
  new RegExp('.*\.(?:js|css)'),
  new StaleWhileRevalidate(),
);

registerRoute(new RegExp(''), new StaleWhileRevalidate());

/* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('install', function (event) {
//   caches.open(cacheNames.precache).then(cache => {
//     ache.addAll(['/static/js/bundle.js']);c
//   })
// });

// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('activate', (event) => {
//   event.waitUntil(caches.keys().then((keys) => {
//     console.log(keys, 6666666666666);
//   }))
// })

/* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('fetch', async (event) => {
//   debugger
//   if (event.request.destination !== 'script') return;
//   debugger
//   event.respondWith(caches.open(cacheNames.precache).then(cache => {
//     return cache.match(event.request).then(cachedResponse => {
//       return cachedResponse || fetch(event.request.url).then((fetchRes) => {
//         cache.put(event.request, fetchRes.clone());
//         return fetchRes;
//       })
//     })
//   }))
// })