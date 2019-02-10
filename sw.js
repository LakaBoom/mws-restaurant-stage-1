var cacheName = 'static-cache-1';

var cacheURL = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/css/under357.css',
  '/css/under445.css',
  '/css/under797.css',
  '/css/under1031.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/40.722216, -73.987501,12,0,60/600x600?access_token=pk.eyJ1IjoibGFrYWJvb20iLCJhIjoiY2pybGNyMmNyMDc3ZTQ5cG51ZXM3cGVrdSJ9.u9E7135UXHbNgYRCVCT1_g',
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css',
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(cacheName)
      .then(cache=>{
        return cache.addAll(cacheURL)
    })
  );
});

self.addEventListener('activate', event=>{
  event.waitUntil(
    caches.keys().then(cacheNames=>{
        cacheNames.forEach(key=>{
          if(key != cacheName ){
            return caches.delete(key);
          }
        });
      })
  );
});

self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(response =>{
      return response || fetch(event.request);
    })
  );
});
