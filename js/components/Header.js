/**
 * KALA SENJA COFFEE & ROASTERY — HEADER & NAVIGATION COMPONENT
 * File: js/components/Header.js
 * Fungsi: Merender Top Notification Bar, Header/Navbar Sticky, dan Mobile Drawer Menu.
 */

export function renderHeader() {
  return `
    <!-- Top Announcement Bar -->
    <aside class="top-bar" aria-label="Informasi Jam Operasional">
      <div class="container top-bar-inner">
        <div class="top-bar-item">
          <span class="status-indicator active" id="openStatusDot"></span>
          <span id="openStatusText">Memuat jam buka...</span>
        </div>
        <div class="top-bar-item hide-mobile">
          <i class="ri-map-pin-2-line"></i>
          <span>Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan</span>
        </div>
        <div class="top-bar-item hide-tablet">
          <i class="ri-wifi-line"></i>
          <span>High-Speed Wi-Fi 250 Mbps • Dedicated Power Outlets</span>
        </div>
      </div>
    </aside>

    <!-- Header / Navbar -->
    <header class="header" id="navbar">
      <div class="container header-container">
        <a href="#beranda" class="logo" aria-label="Kala Senja Coffee Home">
          <div class="logo-icon">
            <i class="ri-cup-line"></i>
          </div>
          <div class="logo-text">
            <span class="logo-title">Kala Senja</span>
            <span class="logo-subtitle">Artisan Coffee & Roastery</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-menu" id="navMenu">
          <ul class="nav-list">
            <li class="nav-item"><a href="#beranda" class="nav-link active">Beranda</a></li>
            <li class="nav-item"><a href="#tentang" class="nav-link">Tentang Kami</a></li>
            <li class="nav-item"><a href="#menu" class="nav-link">Menu Kami</a></li>
            <li class="nav-item"><a href="#keunggulan" class="nav-link">Keunggulan</a></li>
            <li class="nav-item"><a href="#galeri" class="nav-link">Galeri</a></li>
            <li class="nav-item"><a href="#ulasan" class="nav-link">Ulasan</a></li>
            <li class="nav-item"><a href="#lokasi" class="nav-link">Lokasi</a></li>
          </ul>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
          <button class="btn-icon" id="orderCartBtn" title="Lihat Keranjang Pesanan" aria-label="Keranjang">
            <i class="ri-shopping-bag-3-line"></i>
            <span class="cart-badge" id="cartBadgeCount">0</span>
          </button>
          <a href="#reservasi" class="btn btn-primary btn-nav-cta">
            <i class="ri-calendar-check-line"></i>
            <span>Reservasi Meja</span>
          </a>
          <button class="hamburger-btn" id="mobileMenuToggle" aria-label="Buka Menu Navigasi" aria-expanded="false">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-drawer-overlay" id="drawerOverlay"></div>
    <div class="mobile-drawer" id="mobileDrawer">
      <div class="drawer-header">
        <div class="logo">
          <div class="logo-icon"><i class="ri-cup-line"></i></div>
          <div class="logo-text">
            <span class="logo-title">Kala Senja</span>
            <span class="logo-subtitle">Coffee & Roastery</span>
          </div>
        </div>
        <button class="drawer-close" id="drawerCloseBtn" aria-label="Tutup Menu">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="drawer-body">
        <ul class="drawer-list">
          <li><a href="#beranda" class="drawer-link">Beranda</a></li>
          <li><a href="#tentang" class="drawer-link">Tentang Kami</a></li>
          <li><a href="#menu" class="drawer-link">Menu Signature</a></li>
          <li><a href="#keunggulan" class="drawer-link">Fasilitas & Keunggulan</a></li>
          <li><a href="#galeri" class="drawer-link">Galeri Suasana</a></li>
          <li><a href="#ulasan" class="drawer-link">Ulasan Pelanggan</a></li>
          <li><a href="#lokasi" class="drawer-link">Lokasi & Kontak</a></li>
        </ul>
        <div class="drawer-footer">
          <a href="#reservasi" class="btn btn-primary btn-block drawer-reservasi-btn">
            <i class="ri-calendar-check-line"></i> Reservasi Meja Sekarang
          </a>
          <div class="drawer-contact-info">
            <p><i class="ri-whatsapp-line"></i> +62 858-1505-7089</p>
            <p><i class="ri-time-line"></i> Buka 07.00 - 22.00 WIB</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
