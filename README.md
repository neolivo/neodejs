#  NeodeJS Templating V0.3 - Nusanio Web Development

> Status: Publikasi Awal

Selamat datang di proyek *NeodeJS Templating* oleh Nusanio Web Development. Proyek ini dirancang untuk mengimplementasikan templating pada Node.js dengan pola arsitektur MVC (*Model-View-Controller*). Tujuan utama proyek ini adalah memberikan dasar pembelajaran bagi pemula untuk memahami sistem implementasi Node.js, termasuk struktur proyek, penggunaan pustaka, dan pengembangan aplikasi web sederhana.

Proyek ini menyediakan kerangka dasar untuk membangun aplikasi web berbasis Node.js dengan pendekatan MVC, menggunakan EJS sebagai mesin templating, serta struktur direktori yang disusun untuk memudahkan pemeliharaan dan pengembangan lebih lanjut.

## Panduan Modifikasi Direktori
- **Menambahkan Model atau Controller**: Untuk menambahkan fitur baru, buat file baru di folder `models/` atau `controllers/`. Pastikan file diekspor (`module.exports`) dan diimpor pada file yang relevan (misalnya di `routes/`).
- **Memodifikasi Tampilan (Views)**: Tambahkan atau ubah file di folder `views/` untuk menyesuaikan tampilan. Gunakan sintaks templating yang sesuai, seperti `<% %>` pada EJS.
- **Aset Statis**: Tambahkan file CSS, JavaScript, atau gambar ke folder `public/` dan akses melalui rute statis (misalnya `/css/style.css`).
- **Konfigurasi**: Sesuaikan pengaturan proyek, termasuk koneksi database, dengan mengubah file di folder `config/`.

## Pustaka Utama
Proyek ini menggunakan beberapa pustaka utama:
- **Express.js**: Kerangka kerja web untuk Node.js yang menangani rute, middleware, dan server HTTP. Instal dengan perintah:
  ```bash
  npm install express
  ```
- **EJS**: Mesin templating untuk menghasilkan HTML dinamis. Instal dengan:
  ```bash
  npm install ejs
  ```
- **Nodemon** *(opsional, untuk pengembangan)*: Alat untuk otomatis memulai ulang server saat ada perubahan kode. Instal secara global dengan:
  ```bash
  npm install -g nodemon
  ```
  atau sebagai dependensi pengembangan:
  ```bash
  npm install --save-dev nodemon
  ```

## Informasi Penting
- **Tujuan Pembelajaran**: Proyek ini ditujukan bagi pemula sebagai titik awal. Pengguna dapat mengembangkan lebih lanjut dengan menambahkan database (misalnya MongoDB atau MySQL), middleware tambahan, atau fitur autentikasi.
- **Pengembangan Lanjutan**: Untuk produksi, pertimbangkan penggunaan PM2 untuk manajemen proses atau penerapan ke VPS/PaaS seperti Heroku.
- **Catatan**: Pastikan semua dependensi telah diinstal sebelum menjalankan proyek dengan perintah:
  ```bash
  npm install
  ```
  File `.env` dapat digunakan untuk menyimpan variabel sensitif, seperti kredensial database, dengan pustaka `dotenv`:
  ```bash
  npm install dotenv
  ```

## Cara Menjalankan Proyek
1. Pastikan Node.js telah terinstal di sistem Anda. Jika belum, unduh di [nodejs.org](https://nodejs.org/).
2. Buka terminal dan arahkan ke direktori proyek:
   ```bash
   cd path/to/my-mvc-project
   ```
3. Instal semua dependensi:
   ```bash
   npm install
   ```
4. Jalankan proyek dengan Nodemon untuk pengembangan:
   ```bash
   npx nodemon app.js
   ```
5. Buka browser dan akses:
   ```bash
   http://localhost:3000
   ```

## Kontribusi
Jika Anda ingin berkontribusi, silakan *fork* repositori ini, buat perubahan, dan ajukan *pull request*. Saran atau pertanyaan dapat dikirim melalui *issue* di repositori.

> davis@nusanio.com

---
*NeodeJS V0 - Versi 0.3.1*

