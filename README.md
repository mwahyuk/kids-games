# 🎮 Kiddo Games — Ayo Bermain & Belajar!

> Kumpulan **9 game edukasi** interaktif untuk anak usia **4-6 tahun**. Dibuat sebagai Progressive Web App (PWA) — bisa di-install di tablet dan dimainkan offline!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

---

## ✨ Fitur Utama

- 🎨 **Desain Kids-Friendly** — Warna cerah, emoji besar, font playful, tanpa teks rumit
- 📱 **Progressive Web App** — Install di tablet/HP, main offline
- 🔊 **Web Audio API** — Efek suara ceria tanpa file audio eksternal
- 👆 **Touch-Friendly** — Tombol besar, drag-and-drop, swipe — cocok untuk jari kecil
- 😊 **Feedback Positif** — Tanpa "salah", tanpa timer, tanpa skor kompetitif
- 🚫 **Zero Dependencies** — Tidak perlu npm, framework, atau aset eksternal
- 🌐 **Offline Ready** — Service Worker cache semua game untuk akses tanpa internet

---

## 🎮 Daftar Game

| # | Game | Deskripsi | Fitur |
|---|------|-----------|-------|
| 🔢 | **Berapa Jumlahnya?** | Hitung emoji buah/hewan/kendaraan, pilih angka yang benar | 3 tema, range 1-10, mode penjumlahan |
| 🔷 | **Cocokkan Bentuknya!** | Drag bentuk ke slot yang cocok | 8 bentuk, 4 level progressif |
| 🐾 | **Cari Pasangannya!** | Memory card — cari pasangan kartu yang cocok | 3 tema, 3 ukuran grid |
| 🧩 | **Susun Gambarnya!** | Puzzle drag-and-drop, susun potongan gambar | 3 gambar Canvas, 3 level |
| 🔊 | **Suara Siapa Ini?** | Dengarkan suara, tebak hewan yang tepat | 12 hewan, Web Audio synth |
| 🎈 | **Pecahkan Balonnya!** | Pop balon yang berisi huruf/angka target | 3 mode, dynamic sky |
| 🎨 | **Ayo Mewarnai!** | Tap area untuk mewarnai gambar outline | 5 gambar, 12 warna, download PNG |
| 📊 | **Susun Urutannya!** | Urutkan angka, ukuran, atau alfabet | 3 mode, progressive difficulty |
| 🌟 | **Bantu Temannya!** | Navigasi labirin, bantu karakter sampai tujuan | 3 ukuran maze, hint button |

---

## 🚀 Cara Menggunakan

### Opsi 1: Buka Langsung di Browser
```
Buka index.html di browser (Chrome/Edge/Safari)
```

### Opsi 2: Serve Lokal (untuk PWA install)
```bash
npx -y serve .
```
Lalu buka `http://localhost:3000` di browser.

### Opsi 3: Deploy ke GitHub Pages
1. Buka **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `root`
4. Klik **Save**
5. Website akan tersedia di `https://mwahyuk.github.io/kids-games/`

### Opsi 4: Install sebagai PWA di Tablet
1. Buka website di Chrome/Edge
2. Tap banner **"📲 Install Kiddo Games"**
3. Game akan terinstall seperti aplikasi native
4. Bisa dimainkan offline! 🎉

---

## 📁 Struktur Proyek

```
kids-games/
├── index.html          # 🏠 Landing page hub
├── berhitung.html      # 🔢 Game berhitung
├── bentuk.html         # 🔷 Game cocokkan bentuk
├── memory.html         # 🐾 Game memory card
├── puzzle.html         # 🧩 Game puzzle
├── suara.html          # 🔊 Game tebak suara
├── balon.html          # 🎈 Game pop balon
├── mewarnai.html       # 🎨 Game mewarnai
├── urutan.html         # 📊 Game urutan
├── labirin.html        # 🌟 Game labirin
├── manifest.json       # 📱 PWA manifest
├── sw.js               # ⚙️ Service Worker
├── icons/
│   ├── icon-192.svg    # 🖼️ App icon 192px
│   └── icon-512.svg    # 🖼️ App icon 512px
└── kiddo-games.md      # 📋 Spesifikasi game
```

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **HTML5 Canvas** | Rendering game, animasi, partikel confetti |
| **CSS3** | Animasi, transitions, responsive layout, 3D transforms |
| **Vanilla JavaScript** | Game logic, drag-and-drop, touch events |
| **Web Audio API** | Efek suara (oscillator, gain) tanpa file audio |
| **Service Worker** | Offline caching, PWA support |
| **SVG** | App icons |

---

## 🎯 Prinsip Desain

1. **Aman untuk Anak** — Tidak ada konten negatif, iklan, atau link eksternal
2. **Tanpa Tekanan** — Tidak ada timer, skor kompetitif, atau pesan "salah"
3. **Feedback Positif** — Confetti, suara ceria, animasi reward di setiap pencapaian
4. **Mudah Digunakan** — Tombol besar, ikon intuitif, minim teks
5. **Dampingi Orang Tua** — Dirancang untuk dimainkan bersama orang tua

---

## 📱 PWA Support

| Fitur | Status |
|-------|--------|
| Install ke Home Screen | ✅ |
| Offline Support | ✅ |
| Standalone Mode | ✅ |
| Portrait Orientation | ✅ |
| Touch Optimized | ✅ |
| Responsive | ✅ |

---

## 📄 Lisensi

Proyek ini dibuat untuk tujuan edukasi. Silakan gunakan dan modifikasi sesuai kebutuhan.

---

<p align="center">
  Made with ❤️ untuk anak-anak Indonesia 🇮🇩
</p>
