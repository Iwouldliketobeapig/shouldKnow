import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
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

// 缓存成功后，立即生效
clientsClaim();

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST || []);

const handler = createHandlerBoundToURL('/');
const navigationRoute = new NavigationRoute(handler);
registerRoute(navigationRoute, new StaleWhileRevalidate());

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', function (event) {
  console.log('installed');
});
