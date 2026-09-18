/**
 * KALA SENJA COFFEE & ROASTERY — HIGHLIGHTS SECTION COMPONENT
 * File: js/components/Highlights.js
 * Fungsi: Merender Grid 4 Fitur Unggulan (Wi-Fi, Co-working, Pastry, Garden).
 */

export function renderHighlights() {
  return `
    <section class="highlights-section" id="keunggulan">
      <div class="container">
        <div class="section-header text-center reveal-item">
          <span class="section-tag">Kenyamanan Prioritas</span>
          <h2 class="section-title">Mengapa Menghabiskan Waktu di Kala Senja?</h2>
          <p class="section-subtitle">Setiap sudut dirancang dengan cermat untuk memberikan pengalaman kafe yang tak terlupakan.</p>
        </div>

        <div class="highlights-grid">
          <div class="highlight-card reveal-item">
            <div class="highlight-icon-wrapper">
              <i class="ri-wifi-line"></i>
            </div>
            <h3>Ultra-Fast Wi-Fi (250 Mbps)</h3>
            <p>Koneksi internet serat optik stabil dengan jangkauan merata, siap mendukung rapat online & produktivitas kerja tanpa hambatan.</p>
            <span class="highlight-badge">Dedicated Fiber</span>
          </div>

          <div class="highlight-card reveal-item">
            <div class="highlight-icon-wrapper">
              <i class="ri-plug-2-line"></i>
            </div>
            <h3>Co-Working Friendly</h3>
            <p>Stopkontak di setiap meja, pencahayaan warm natural yang ramah mata, dan kursi ergonomis untuk kenyamanan seharian.</p>
            <span class="highlight-badge">Outlet di Semua Meja</span>
          </div>

          <div class="highlight-card reveal-item">
            <div class="highlight-icon-wrapper">
              <i class="ri-cake-3-line"></i>
            </div>
            <h3>Freshly Baked Pastries</h3>
            <p>Dibuat harian oleh in-house pastry chef menggunakan butter premium tanpa bahan pengawet sintetik.</p>
            <span class="highlight-badge">Harian Fresh</span>
          </div>

          <div class="highlight-card reveal-item">
            <div class="highlight-icon-wrapper">
              <i class="ri-plant-line"></i>
            </div>
            <h3>Lush Semi-Outdoor Garden</h3>
            <p>Area terbuka bernuansa taman tropis dengan sirkulasi udara alami sejuk, ideal untuk santai senja sambil menikmati kopi.</p>
            <span class="highlight-badge">Smoking & Pet Friendly</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
