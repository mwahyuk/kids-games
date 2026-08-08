# Kumpulan Prompt Vibe Coding — Website Game Anak Usia 4-6 Tahun

Gunakan prompt ini satu per satu di Gemini Flash 3.6, Claude Opus, atau GPT 4.6. Setiap prompt menghasilkan game single-file HTML+Canvas yang bisa langsung dites di browser sebelum dipecah jadi komponen React/Next.js.

---

## 1. Tebak Angka & Berhitung

```
Buat game edukasi HTML5 Canvas single-file (HTML+CSS+JS dalam satu file) untuk anak usia 4-6 tahun berjudul "Berapa Jumlahnya?".

Mekanik:
- Tampilkan 1-5 gambar buah (apel, jeruk, pisang — gunakan emoji besar sebagai pengganti aset gambar) secara acak di tengah layar.
- Di bawahnya tampilkan 3 tombol angka besar (ukuran minimal 100x100px) sebagai pilihan jawaban, salah satu benar dan dua acak salah.
- Anak harus tap angka yang sesuai jumlah buah yang tampil.

Desain:
- Warna cerah dan playful (palet pastel + warna primer cerah).
- Font besar, bulat, dan ramah anak (gunakan font-family rounded seperti Comic Sans MS atau sejenis).
- Saat jawaban benar: animasi confetti sederhana (particle jatuh warna-warni) + suara "yeay" pakai Web Audio API beep nada naik.
- Saat jawaban salah: buah goyang sedikit (shake animation), jangan ada suara negatif atau teks "Salah", cukup ulangi soal.
- Setiap 5 soal benar, tampilkan layar "Bintang" dengan animasi bintang berputar sebagai reward, lalu lanjut otomatis.
- Tidak ada timer, tidak ada skor kompetitif, tidak ada tombol "Game Over".
- Semua interaksi via tap/klik besar, minim teks tertulis, gunakan ikon dan warna sebagai panduan.

Output: satu file HTML lengkap yang bisa langsung dibuka di browser.
```

---

## 2. Cocokkan Warna/Bentuk

```
Buat game edukasi HTML5 Canvas single-file untuk anak usia 4-6 tahun berjudul "Cocokkan Bentuknya!".

Mekanik:
- Tampilkan 3-4 "slot" berbentuk lingkaran, kotak, segitiga, dan bintang di bagian bawah layar, masing-masing dengan outline berwarna berbeda.
- Tampilkan bentuk-bentuk lepas (draggable) di bagian atas layar dengan warna dan bentuk yang harus dicocokkan ke slot yang sesuai.
- Gunakan drag-and-drop (mouse dan touch events) — anak menyeret bentuk ke slot yang cocok.

Desain:
- Bentuk besar (minimal 80px) agar mudah disentuh jari kecil.
- Snap-to-slot: jika bentuk didekatkan ke slot yang benar, otomatis "terkunci" di tempat dengan animasi pop.
- Jika diseret ke slot salah, bentuk kembali (bounce back) ke posisi awal tanpa pesan error.
- Setiap bentuk berhasil dicocokkan: efek confetti kecil + suara "ding" ceria.
- Setelah semua slot terisi: animasi seluruh layar bertepuk tangan (emoji tangan bertepuk beterbangan) dan otomatis reset ke set bentuk baru setelah 3 detik.
- Palet warna cerah, tanpa teks instruksi tertulis — cukup panah kecil animasi di awal yang menunjukkan cara drag.

Output: satu file HTML lengkap dengan drag-and-drop yang berfungsi di desktop dan mobile/touch.
```

---

## 3. Memory Card Hewan

```
Buat game edukasi HTML5 Canvas/DOM single-file untuk anak usia 4-6 tahun berjudul "Cari Pasangannya!" (memory card game).

Mekanik:
- Grid 3x2 atau 4x2 kartu tertutup (gunakan emoji hewan sebagai isi kartu: 🐶🐱🐰🐸🦁🐻, masing-masing muncul 2x berpasangan).
- Anak tap satu kartu untuk membuka, lalu tap kartu kedua. Jika cocok, kartu tetap terbuka dengan animasi confetti kecil. Jika tidak cocok, kedua kartu tertutup lagi otomatis setelah 1 detik.

Desain:
- Kartu besar (minimal 100x120px) dengan warna belakang cerah dan pola sederhana.
- Animasi flip 3D CSS saat kartu dibuka/ditutup.
- Suara "ding" lembut saat kartu dibuka, suara "yeay" ceria saat pasangan cocok ditemukan.
- Tidak ada penalti waktu atau skor — cukup progress visual sederhana (misal jumlah pasangan ditemukan dengan ikon hati di pojok atas).
- Saat semua pasangan ditemukan: layar penuh animasi hewan-hewan menari/beterbangan sebagai reward, lalu tombol besar "Main Lagi" dengan ikon (bukan teks panjang) untuk reset dengan set hewan baru.

Output: satu file HTML lengkap yang responsif untuk mobile dan desktop.
```

---

## 4. Puzzle Susun Gambar

```
Buat game edukasi HTML5 Canvas single-file untuk anak usia 4-6 tahun berjudul "Susun Gambarnya!".

Mekanik:
- Sediakan satu gambar sederhana penuh warna (gambar dengan CSS/Canvas shapes: misalnya rumah, matahari, pohon — buat manual dengan shapes, jangan pakai aset eksternal).
- Potong gambar jadi 4 keping puzzle (grid 2x2) untuk level mudah.
- Keping-keping puzzle diacak posisinya di sekitar area kerja, anak drag tiap keping ke posisi yang benar dalam frame outline.

Desain:
- Frame outline transparan menunjukkan bentuk keping yang seharusnya di tempat itu (bayangan samar sebagai panduan visual).
- Snap otomatis jika keping didekatkan ke posisi benar (dalam radius toleransi cukup besar, jangan terlalu presisi mengingat motorik anak).
- Efek suara "klik" halus saat keping terpasang benar.
- Setelah puzzle selesai tersusun: gambar utuh berkedip cerah + confetti + suara tepuk tangan, lalu otomatis tawarkan level berikutnya dengan potongan 6 keping (3x2).
- Tombol "keping berikutnya" berupa ikon besar, tanpa teks rumit.

Output: satu file HTML lengkap dengan drag-and-drop touch-friendly, dua level kesulitan (2x2 dan 3x2).
```

---

## 5. Tebak Suara Hewan

```
Buat game edukasi HTML5 single-file untuk anak usia 4-6 tahun berjudul "Suara Siapa Ini?".

Mekanik:
- Tombol besar berbentuk speaker/telinga di tengah layar yang jika ditekan memutar suara hewan (gunakan Web Audio API dengan oscillator sederhana untuk mensimulasikan bunyi berbeda per hewan — misal nada rendah panjang untuk sapi, nada tinggi pendek berulang untuk anak ayam, dst — karena tidak ada file audio eksternal).
- Di bawah tombol suara, tampilkan 3 pilihan gambar hewan (emoji besar) sebagai jawaban.
- Anak tap gambar hewan yang sesuai dengan suara yang didengar.

Desain:
- Animasi gelombang suara (sound wave) beranimasi saat suara diputar agar anak paham kapan harus mendengarkan.
- Jawaban benar: hewan yang dipilih "melompat" kegirangan + confetti + suara ceria.
- Jawaban salah: suara diulang otomatis, hewan pilihan salah tidak menghilang (agar anak bisa coba lagi tanpa rasa gagal).
- Tanpa skor kompetitif, tanpa timer.
- Tambahkan tombol "Putar Ulang" berikon speaker besar agar anak bisa dengar suara berulang kali sesuka mereka.

Output: satu file HTML lengkap, gunakan Web Audio API oscillator untuk semua efek suara karena tidak ada file audio eksternal yang bisa diakses.
```

---

## 6. Pop Balon Huruf/Angka

```
Buat game edukasi HTML5 Canvas single-file untuk anak usia 4-6 tahun berjudul "Pecahkan Balonnya!".

Mekanik:
- Balon-balon dengan huruf atau angka besar mengambang naik perlahan dari bawah ke atas layar (animasi loop kontinu, kecepatan lambat agar mudah ditangkap tap).
- Di bagian atas layar tampilkan instruksi visual (bukan teks, tapi highlight/animasi) huruf atau angka target yang harus di-tap.
- Anak harus tap balon yang berisi huruf/angka target sebelum balon itu keluar dari layar.

Desain:
- Balon besar (diameter minimal 80px), warna-warni cerah, dengan huruf/angka kontras tinggi dan font besar tebal.
- Saat balon benar di-tap: pecah dengan animasi partikel + suara "pop" ceria + confetti kecil, lanjut ke target huruf/angka berikutnya.
- Saat balon salah di-tap: balon memantul kembali (bounce) tanpa pecah, tanpa suara negatif, anak bisa coba lagi.
- Kecepatan balon konstan dan lambat — tidak ada elemen stres atau kegagalan permanen (balon yang lewat tanpa ditap muncul lagi dari bawah).
- Setiap 5 target berhasil: animasi langit penuh confetti dan suara tepuk tangan sebagai jeda reward, lalu lanjut otomatis dengan set huruf/angka baru.

Output: satu file HTML lengkap dengan animasi balon mengambang yang smooth menggunakan requestAnimationFrame.
```

---

## 7. Mewarnai Digital Sederhana

```
Buat game edukasi HTML5 Canvas single-file untuk anak usia 4-6 tahun berjudul "Ayo Mewarnai!".

Mekanik:
- Tampilkan gambar outline sederhana (buat manual dengan Canvas path: misalnya bentuk kupu-kupu, bunga, atau ikan dengan garis tebal hitam dan area kosong putih untuk diwarnai).
- Sediakan palet warna besar (minimal 8 warna cerah) sebagai tombol bundar di sisi layar.
- Anak pilih warna dari palet, lalu tap area di gambar untuk mengisi warna (flood fill algorithm sederhana pada area tertutup outline).

Desain:
- Tombol warna berbentuk lingkaran besar (minimal 50px) dengan border putih agar kontras.
- Saat warna dipilih, tampilkan indikator kecil (misal border animasi) pada tombol warna yang aktif.
- Setiap area berhasil diwarnai: efek sparkle kecil + suara "ting" lembut.
- Setelah semua area di gambar terisi warna: animasi gambar "hidup" (misal kupu-kupu terbang sedikit, sayap mengepak) + confetti + suara tepuk tangan, lalu tombol ikon besar "Gambar Baru" untuk memilih outline berikutnya.
- Sediakan tombol "Hapus Semua" berikon penghapus besar untuk reset pewarnaan tanpa perlu konfirmasi teks.

Output: satu file HTML lengkap dengan flood fill sederhana menggunakan Canvas ImageData, touch-friendly untuk tablet/mobile.
```

---

## Tips Tambahan Saat Menjalankan Prompt

- Jalankan satu prompt sekaligus per sesi chat AI agar hasil kode fokus dan tidak tercampur konteks game lain.
- Setelah dapat hasil HTML, langsung buka di browser untuk tes cepat sebelum lanjut ke prompt berikutnya (prinsip vibe coding: iterasi cepat, uji langsung).
- Jika ingin gabungkan semua game jadi satu website, gunakan prompt tambahan berikut setelah semua game individual jadi:

```
Saya punya 7 file HTML game anak terpisah (berhitung, cocokkan bentuk, memory card, puzzle, tebak suara, pop balon, mewarnai). Bantu saya konversi menjadi struktur project Next.js dengan App Router, di mana setiap game jadi halaman route sendiri (/game/berhitung, /game/bentuk, dst), dan buat landing page dengan grid ikon besar berwarna-warni untuk navigasi ke tiap game, cocok untuk anak usia 4-6 tahun yang dioperasikan bersama orang tua.
```
