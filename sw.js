const CACHE='tf-v8';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>{
    if(r)return r;
    return fetch(e.request).then(res=>{
      if(res&&res.ok){var cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}
      return res;
    }).catch(()=>caches.match(e.request));
  }));
});