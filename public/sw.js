// ganti angka versi setiap kali index.html diperbarui supaya HP mengambil yang baru
const V='checkin-v1',CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
// cache dulu, perbarui diam-diam di belakang: aplikasi tetap jalan offline, termasuk pustaka PDF/Excel yang sudah pernah dimuat
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))caches.open(V).then(c=>c.put(r,res.clone()));return res}).catch(()=>hit);return hit||net}))});
