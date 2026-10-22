# Hosting check-in: GitHub -> Cloudflare Workers

Struktur repo (hasil ekstrak zip ini harus persis begini di root repo):

    wrangler.jsonc
    public/
      index.html  manifest.webmanifest  sw.js  icon-192.png  icon-512.png

## 1. Naikkan ke GitHub
Lewat Termux:

    cd ~/check-in            # folder hasil ekstrak
    git init && git add . && git commit -m "check-in v1"
    git branch -M main
    git remote add origin https://github.com/Muhammadathoillah43/check-in.git
    git push -u origin main

(buat dulu repo kosong bernama `check-in` di github.com/new)
Lewat browser: repo baru -> Add file -> Upload files -> seret isi folder (pertahankan folder `public`).

## 2. Hubungkan ke Cloudflare
Dashboard Cloudflare -> Workers & Pages -> Create -> Import a repository -> pilih `check-in`.
Build command: kosongkan. Deploy command: `npx wrangler deploy`. Klik Deploy.
Setiap `git push` berikutnya otomatis ter-deploy.

## 3. Pasang di HP
Buka link `.workers.dev` di Chrome -> menu titik tiga -> Tambahkan ke layar utama.
Untuk APK: PWABuilder, sama seperti V KAS.

## Memperbarui aplikasi
Ganti `public/index.html`, naikkan angka `V='checkin-v1'` di `public/sw.js` (jadi v2, v3, ...), lalu git push.
Data absen tersimpan di browser HP masing-masing, bukan di server.
