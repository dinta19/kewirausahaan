# Landing Page Merchandise: Lanyard + Carabiner SI Telkom University Jakarta

Website statis satu halaman (*Single-Page Landing Page*) untuk mempromosikan dan menerima **Pre-Order (PO) Batch 1** produk **Lanyard Sublimasi + Carabiner Logam** khas Program Studi **Sistem Informasi Telkom University Jakarta** oleh **Kelompok 5 (Minangkabau United)**.

Dibangun menggunakan arsitektur **`design-taste-frontend` (`tasteskill 2.5.0`)**: sistem desain satu kesatuan (`assets/system.css`, `assets/layout/layout.css`, `assets/motion/motion.css`), ritme satu section per layar, *equal left & right edges* (`.wrap` 12 kolom), tipografi **Funnel Display + Funnel Sans**, palet **Merah Telkom (`#b01c22`) + Krem Hangat (`#f7f3ec`) + Ink (`#221f1c`)**, serta *quiet micro-interactions*.

---

## 📁 Struktur Folder Proyek

```text
/
├── index.html                        # Halaman utama (berbasis starter.html taste-skill 2.5)
├── css/
│   └── style.css                     # Ekstensi komponen proyek di atas system.css & layout.css
├── js/
│   └── main.js                       # Objek CONFIG terpusat + filter tab desain & image fallback
├── assets/
│   ├── favicon.svg                   # Ikon tab browser bertema SI Merah Telkom
│   ├── system.css                    # Sistem token, grid 12 kolom, nav, kartu, FAQ & footer (taste-skill)
│   ├── system.js                     # Handler navigasi mobile sheet, tab & guard (taste-skill)
│   ├── layout/                       # Layout ritme layar & hero split (layout.css, layout.js)
│   ├── motion/                       # Micro-interactions hover, press & zoom (motion.css, motion.js)
│   ├── ui/                           # Komponen kartu & panel (cards.css, base.css, ui.js)
│   ├── backgrounds/                  # Token ground (backgrounds.css, backgrounds.js)
│   ├── icons/                        # Stylesheet ikon (icon.css)
│   └── images/
│       ├── hero-mockup.png           # Mockup produk 2-in-1 (dari foto yang dilampirkan)
│       ├── bundle.png                # Gambar kartu Paket Bundling (dari foto yang dilampirkan)
│       ├── topographic-front.png     # Potongan tampak depan desain #02 Topographic
│       ├── topographic-back.png      # Potongan tampak belakang desain #02 Topographic
│       ├── topographic-card.png      # Preview utuh Front & Back desain #02 Topographic
│       ├── heritage-front.png        # Potongan tampak depan desain #04 Heritage
│       ├── heritage-back.png         # Potongan tampak belakang desain #04 Heritage
│       ├── heritage-card.png         # Preview utuh Front & Back desain #04 Heritage
│       ├── lanyard-catalog.png       # Lembar katalog desain lengkap
│       └── carabiner-placeholder.svg # Ilustrasi vektor studio Carabiner (foto asli menyusul)
├── vercel.json                       # Konfigurasi static site untuk Vercel
└── README.md                         # Dokumentasi & panduan kustomisasi
```

---

## 🚀 1. Cara Menjalankan Secara Lokal

1. **Membuka Langsung**: Klik dua kali file **`index.html`** untuk membukanya di browser (Chrome / Edge / Firefox).
2. **Menjalankan dengan Local Server (Disarankan untuk Menguji ES Modules `system.js` & `motion.js` atau Membuka dari HP)**:
   Buka terminal/PowerShell di folder proyek ini, lalu jalankan:
   ```powershell
   python -m http.server 8080 --bind 0.0.0.0
   ```
   Lalu buka `http://localhost:8080` di laptop, atau `http://<IP-Wi-Fi-Laptop>:8080` dari browser HP Anda.

---

## ✏️ 2. Daftar Placeholder yang Harus Diganti

Seluruh data yang perlu disesuaikan oleh tim sudah dikumpulkan di **satu objek `CONFIG`** pada bagian paling atas file **[js/main.js](file:///c:/Users/HP/Downloads/Landing%20Page%20KWU/js/main.js)**:

| Properti di `CONFIG` (`js/main.js`) | Nilai Saat Ini | Keterangan & Contoh Pengisian |
| :--- | :--- | :--- |
| `whatsappNumber` | `"6281234567890"` | Nomor WA Admin format `62` tanpa `+` atau spasi (contoh: `"6281398765432"`) |
| `whatsappDisplay` | `"0812-XXXX-XXXX (Admin SI Merch)"` | Teks nomor WA yang tampil di Footer |
| `googleFormUrl` | `"https://forms.gle/ISI_LINK_GOOGLE_FORM_PO"` | Tautan Google Form / Linktree Pre-Order Batch 1 |
| `prices.bundling` | `"Rp XX.000"` | Harga Paket Bundling Lanyard + Carabiner (contoh: `"Rp 35.000"`) |
| `prices.bundlingStrike` | `"Rp XX.000"` | Harga normal jika beli terpisah (contoh: `"Rp 45.000"`) |
| `prices.lanyardOnly` | `"Rp XX.000"` | Harga satuan Lanyard Saja (contoh: `"Rp 25.000"`) |
| `prices.carabinerOnly` | `"Rp XX.000"` | Harga satuan Carabiner Saja (contoh: `"Rp 15.000"`) |
| `poCloseDate` | `"Batch 1 (Segera Ditutup)"` | Tanggal penutupan PO Batch 1 (contoh: `"25 November 2026"`) |
| `productionEstimate` | `"7–10 Hari Kerja"` | Estimasi lama produksi vendor |
| `codLocation` | `"Area Kampus Tel-U Jakarta & Market Day"` | Lokasi pengambilan COD gratis di kampus |
| `dpPolicy` | `"Bisa DP atau Langsung Lunas via QRIS"` | Ketentuan pembayaran DP pada bagian FAQ |
| `warrantyClaimWindow` | `"Maksimal 2x24 Jam Sejak COD"` | Batas waktu klaim garansi tukar produk baru |
| `social.instagramUrl` | `"https://instagram.com/ISI_USERNAME_IG"` | Link profil Instagram resmi tim |
| `social.instagramHandle` | `"@minangkabau.united"` | Username Instagram tim |
| `social.tiktokUrl` | `"https://tiktok.com/@ISI_USERNAME_TIKTOK"` | Link profil TikTok resmi tim |
| `social.tiktokHandle` | `"@minangkabau.united"` | Username TikTok tim |

---

## 🖼️ 3. Daftar Gambar Produk & Ukuran yang Disarankan

| Nama File di `assets/images/` | Status Saat Ini | Fungsi di Halaman | Ukuran / Rasio yang Disarankan |
| :--- | :--- | :--- | :--- |
| `hero-mockup.png` | ✅ Sudah terpasang | Gambar utama di Hero Section (Lanyard + Carabiner + ID Card + Flashdisk) | `800 × 800 px` (Rasio 1:1) |
| `bundle.png` | ✅ Sudah terpasang | Gambar kartu **Paket Bundling (Paling Hemat / Best Value)** & Mega Menu | `800 × 800 px` (Rasio 1:1) |
| `topographic-front.png` | ✅ Sudah terpasang | Pita tampak depan (Front) Desain **#02 Topographic** | `1200 × 60 px` |
| `topographic-back.png` | ✅ Sudah terpasang | Pita tampak belakang (Back) Desain **#02 Topographic** | `1200 × 60 px` |
| `topographic-card.png` | ✅ Sudah terpasang | Preview kartu menu Desain **#02 Topographic** | `1000 × 120 px` |
| `heritage-front.png` | ✅ Sudah terpasang | Pita tampak depan (Front) Desain **#04 Heritage** | `1200 × 60 px` |
| `heritage-back.png` | ✅ Sudah terpasang | Pita tampak belakang (Back) Desain **#04 Heritage** | `1200 × 60 px` |
| `heritage-card.png` | ✅ Sudah terpasang | Preview kartu menu & paket Lanyard Saja **#04 Heritage** | `1000 × 128 px` |
| `lanyard-catalog.png` | ✅ Sudah terpasang | Gambar katalog desain lengkap pada bagian penutup (`close--photo`) | `1200 × 800 px` |
| `carabiner.png` | ⏳ **Menyusul** (Memakai `carabiner-placeholder.svg`) | Gambar produk pada kartu **Carabiner Saja** | `600 × 450 px` (Rasio 4:3) |

### Cara Memasang Foto Carabiner Saat Sudah Tersedia:
1. Simpan foto carabiner Anda ke `assets/images/carabiner.png`.
2. Buka `js/main.js` dan ubah `useRealCarabinerPhoto: true` di dalam objek `CONFIG`.

---

## 🎨 4. Cara Mengubah Warna & Font (`design-taste-frontend`)

Token warna dan tipografi hasil *deal* (`start.mjs brand`) berada pada blok `<style>:root { ... }</style>` di dalam `<head>` file **[index.html](file:///c:/Users/HP/Downloads/Landing%20Page%20KWU/index.html)**:

```css
:root {
  --p-bg: #f7f3ec;         /* Latar utama krem hangat */
  --p-surface: #ede6da;    /* Latar sekunder (ground-surface) */
  --p-ink: #221f1c;        /* Warna teks utama */
  --p-muted: #625a52;      /* Warna teks sekunder */
  --p-accent: #b01c22;     /* Merah utama Telkom University */
  --p-action: #b01c22;     /* Warna tombol CTA utama */
  --font-display: "Funnel Display", system-ui, sans-serif;
  --font-text: "Funnel Sans", system-ui, sans-serif;
}
```
