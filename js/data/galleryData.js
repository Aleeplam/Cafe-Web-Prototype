/**
 * KALA SENJA COFFEE & ROASTERY — GALLERY DATASET
 * File: js/data/galleryData.js
 * Fungsi: Menyimpan daftar foto galeri, kategori, dan caption.
 */

export const galleryFilters = [
  { id: 'all', name: 'Semua Foto' },
  { id: 'interior', name: 'Interior & Cozy Spot' },
  { id: 'barista', name: 'Barista Craft' },
  { id: 'coffee', name: 'Artisan Coffee' },
  { id: 'outdoor', name: 'Garden Outdoor' }
];

export const galleryData = [
  {
    id: 1,
    type: "interior",
    tag: "Interior",
    title: "Sudut Baca & Co-working Space",
    caption: "Sudut Baca & Co-working Space dengan pencahayaan hangat alami.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    type: "barista",
    tag: "Barista Craft",
    title: "Presisi Latte Art Hand-Poured",
    caption: "Barista kami menuangkan latte art dengan ketelitian tinggi.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    type: "coffee",
    tag: "Specialty Coffee",
    title: "Single Origin V60 Pour Over",
    caption: "Proses V60 pour over mengekstraksi kompleksitas cita rasa biji Gayo.",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    type: "outdoor",
    tag: "Garden Outdoor",
    title: "Ruang Terbuka Hijau & Sejuk",
    caption: "Area semi-outdoor rimbun dengan semilir angin sejuk saat senja.",
    image: "https://images.unsplash.com/photo-1445116572660-238413b882ac?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    type: "interior",
    tag: "Espresso Bar",
    title: "Modern Minimalist Main Bar",
    caption: "Espresso Bar Utama dengan mesin La Marzocco Strada Custom.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    type: "coffee",
    tag: "Pairing",
    title: "Cappuccino & French Pastry",
    caption: "Freshly baked Croissant dan Double Cappuccino pagi hari.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80"
  }
];
