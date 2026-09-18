# ☕ Kala Senja Coffee & Roastery — Modular & Clean Architecture

Website Landing Page modern, responsif, dan estetis untuk **Kala Senja Coffee & Roastery**, dibangun dengan arsitektur **Clean Code & Modular (Separation of Concerns)** menggunakan Vanilla ES6 Modules dan Modular CSS.

---

## 📁 Struktur File & Arsitektur Modular

```text
tess/
├── index.html                   # Root HTML entry (sangat bersih, memuat #app & script module)
├── styles.css                   # Master CSS (mengimpor seluruh sub-modul CSS)
│
├── css/                         # MODULAR STYLESHEETS
│   ├── variables.css            # Token desain, warna earth tones, font, shadow, radius
│   ├── base.css                 # Reset CSS, tipografi dasar, tombol reusable, animasi
│   ├── layout.css               # Top bar, header/navbar, mobile drawer, footer
│   ├── sections.css             # Styling section (Hero, About, Highlights, Menu, Gallery, dll)
│   └── components.css           # Modal customizer, Cart drawer, Lightbox, Toast, Media Queries
│
├── js/                          # MODULAR JAVASCRIPT
│   ├── app.js                   # Main Entry Point (merakit semua komponen ke DOM)
│   │
│   ├── data/                    # ISOLATED DATASETS
│   │   ├── menuData.js          # Dataset menu produk, harga, kategori, tasting notes
│   │   ├── galleryData.js       # Dataset foto galeri & kategori filter
│   │   └── reviewsData.js       # Dataset ulasan pelanggan & rating
│   │
│   ├── components/              # REUSABLE UI COMPONENTS
│   │   ├── Header.js            # TopBar, Sticky Navbar & Mobile Drawer
│   │   ├── Hero.js              # Hero Section & Quick Metrics
│   │   ├── About.js             # Story & Filosofi Café
│   │   ├── Highlights.js        # Grid 4 Fitur Unggulan
│   │   ├── Menu.js              # Interactive Menu, Tabs Filter & Search
│   │   ├── Gallery.js           # Gallery Grid & Filter System
│   │   ├── Reviews.js           # Testimonials & Google Badge
│   │   ├── Reservation.js       # Form Booking Meja & Area Selector
│   │   ├── Location.js          # Jam Buka, Google Maps & Info
│   │   ├── Footer.js            # Instagram Feed Preview & Footer Links
│   │   └── Modals.js            # Order Modal, Cart Drawer, Lightbox, Toasts
│   │
│   └── modules/                 # STATE & BUSINESS LOGIC
│       ├── cart.js              # Keranjang pesanan & WhatsApp checkout generator
│       ├── reservation.js       # Validasi reservasi & WhatsApp concierge booking link
│       ├── openingHours.js      # Detektor live jam buka/tutup (WIB)
│       ├── lightbox.js          # Zoom foto galeri modal
│       ├── toast.js             # Notifikasi melayang reusable
│       └── scrollSpy.js         # Sticky navbar, active section highlight, & scroll reveal
│
└── README.md                    # Dokumentasi lengkap proyek
```

---

## 🎨 Spesifikasi Visual & Desain

| Elemen | Spesifikasi |
|---|---|
| **Gaya Desain** | *Warm Cozy Minimalist x Elegant Classic* |
| **Palet Warna** | **Deep Espresso** (`#2C1810`), **Espresso Darker** (`#150C07`), **Warm Cream** (`#FBF7F2`), **Latte Beige** (`#D7B999`), **Warm Gold** (`#D4AF37`) |
| **Tipografi** | Headline: `Playfair Display` (Serif)<br>Body: `Plus Jakarta Sans` (Sans-serif) |
| **Ikon** | Remix Icon CDN (Vector SVGs) |

---

## 🚀 Cara Menjalankan Website

Karena proyek ini menggunakan fitur modern **JavaScript ES6 Modules (`type="module"`)**, browser memerlukan local server agar modul dapat dimuat dengan aman (CORS standard):

### 1. Menggunakan Perintah Terminal (Paling Direkomendasikan)
Di terminal PowerShell:
```powershell
Start-Process "http://localhost:3000"; python -m http.server 3000
```
atau dengan Node.js:
```bash
npx live-server
```

### 2. Menggunakan VS Code Extension
Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"** (atau klik tombol **"Go Live"** di pojok kanan bawah VS Code).

---

## ⚙️ Panduan Kustomisasi

1. **Mengubah Menu Café**:
   Edit file [`js/data/menuData.js`](file:///c:/Users/Aleep/Desktop/tess/js/data/menuData.js). Anda dapat menambah produk baru, mengubah harga, gambar, maupun tasting notes.
2. **Mengubah Galeri Foto**:
   Edit file [`js/data/galleryData.js`](file:///c:/Users/Aleep/Desktop/tess/js/data/galleryData.js).
3. **Mengubah Nomor WhatsApp**:
   Di file [`js/modules/cart.js`](file:///c:/Users/Aleep/Desktop/tess/js/modules/cart.js) dan [`js/modules/reservation.js`](file:///c:/Users/Aleep/Desktop/tess/js/modules/reservation.js), ganti nomor `6285815057089` dengan nomor WhatsApp café Anda.
4. **Mengubah Styling / Warna**:
   Cukup ubah variabel warna di [`css/variables.css`](file:///c:/Users/Aleep/Desktop/tess/css/variables.css).
