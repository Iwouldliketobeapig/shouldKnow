console.log('进入了sw.js');

const cacheKey = 'CacheName_v1';

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(cacheKey).then(cache => {
    console.log(cache, 6666666666666);
    return cache.addAll([
      '/static/js/bundle.js',
    ])
  }))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => {
    console.log(keys);
  }))
})

self.addEventListener('fetch', async (event) => {
  console.log(event);
  if (event.request.destination !== 'script') return;
  event.respondWith(caches.open(cacheKey).then(cache => {
    return cache.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request.url).then((fetchRes) => {
        cache.put(event.request, fetchRes.clone());
        return fetchRes;
      })
    })  
  }))
})

// self.addEventListener('fetch', function(event) {
//   console.log(event, 666666666666);
//   event.respondWith(
//     new Response('bad')
//   );
// })