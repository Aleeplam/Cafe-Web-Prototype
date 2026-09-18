/**
 * KALA SENJA COFFEE & ROASTERY — HERO SECTION COMPONENT
 * File: js/components/Hero.js
 * Fungsi: Merender Hero section, visual kartu barista, dan quick metrics.
 */

export function renderHero() {
  return `
    <section class="hero-section" id="beranda">
      <div class="hero-bg-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-pill-badge reveal-item">
            <span class="badge-dot"></span>
            <span>Artisan Specialty Coffee & Warm Living Space</span>
          </div>
          <h1 class="hero-title reveal-item">
            Nikmati Momen Kopi Terbaik di <span class="highlight-text">Kala Senja</span>
          </h1>
          <p class="hero-description reveal-item">
            Diseduh dengan presisi dari biji kopi specialty pilihan Nusantara. Hadirkan kehangatan di setiap tegukan dalam suasana ruang yang tenang, estetik, dan menenangkan jiwa.
          </p>

          <div class="hero-cta-group reveal-item">
            <a href="#menu" class="btn btn-primary btn-lg">
              <i class="ri-restaurant-line"></i>
              <span>Jelajahi Menu</span>
            </a>
            <a href="#reservasi" class="btn btn-secondary btn-lg">
              <i class="ri-calendar-event-line"></i>
              <span>Reservasi Tempat</span>
            </a>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="hero-metrics-bar reveal-item">
            <div class="metric-item">
              <span class="metric-number">100%</span>
              <span class="metric-label">Single Origin Beans</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <div class="metric-rating">
                <span class="metric-number">4.9</span>
                <div class="stars">
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                  <i class="ri-star-fill"></i>
                </div>
              </div>
              <span class="metric-label">1.200+ Ulasan Google</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-number">24+</span>
              <span class="metric-label">Artisan Roast & Pastry</span>
            </div>
          </div>
        </div>

        <div class="hero-visual-card reveal-item">
          <div class="hero-card-inner">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80" alt="Espresso Barista Kala Senja" class="hero-main-img" loading="eager">
            <div class="floating-badge top-badge">
              <div class="badge-icon"><i class="ri-award-line"></i></div>
              <div>
                <strong>Barista Choice</strong>
                <p>Senja Velvet Latte</p>
              </div>
            </div>
            <div class="floating-badge bottom-badge">
              <div class="badge-icon green-icon"><i class="ri-leaf-line"></i></div>
              <div>
                <strong>Ethically Sourced</strong>
                <p>Gayo & Flores Bajawa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Scroll Hint -->
      <div class="hero-bottom-accent">
        <a href="#tentang" class="scroll-down-hint" aria-label="Scroll ke Bawah">
          <span>Scroll Kebawah</span>
          <i class="ri-arrow-down-double-line"></i>
        </a>
      </div>
    </section>
  `;
}
