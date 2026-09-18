/**
 * KALA SENJA COFFEE & ROASTERY — LOCATION SECTION COMPONENT
 * File: js/components/Location.js
 * Fungsi: Merender Alamat, Jam Operasional, Fasilitas Parkir, dan Google Maps.
 */

export function renderLocation() {
  return `
    <section class="location-section" id="lokasi">
      <div class="container">
        <div class="section-header text-center reveal-item">
          <span class="section-tag">Kunjungi Kami</span>
          <h2 class="section-title">Lokasi Strategis & Jam Buka</h2>
          <p class="section-subtitle">Temukan kami dengan mudah di jantung area Senopati, Jakarta Selatan.</p>
        </div>

        <div class="location-grid">
          <div class="location-info-cards reveal-item">
            <!-- Address Card -->
            <div class="info-box-card">
              <div class="info-box-icon"><i class="ri-map-pin-2-fill"></i></div>
              <div class="info-box-content">
                <h4>Alamat Lengkap</h4>
                <p>Jl. Senopati No. 42, Selong, Kebayoran Baru, Jakarta Selatan 12110</p>
                <a href="https://maps.google.com/?q=Jl.+Senopati+No.+42+Jakarta+Selatan" target="_blank" rel="noopener noreferrer" class="btn-text-link">
                  <i class="ri-navigation-line"></i> Buka Petunjuk Arah Google Maps
                </a>
              </div>
            </div>

            <!-- Hours Card -->
            <div class="info-box-card">
              <div class="info-box-icon"><i class="ri-time-fill"></i></div>
              <div class="info-box-content">
                <h4>Jam Operasional</h4>
                <div class="hours-row">
                  <span class="day-label">Senin — Jumat (Weekday)</span>
                  <span class="time-badge">07.00 - 22.00 WIB</span>
                </div>
                <div class="hours-row">
                  <span class="day-label">Sabtu — Minggu (Weekend)</span>
                  <span class="time-badge weekend-badge">07.00 - 23.00 WIB</span>
                </div>
                <p class="sub-notice">*Dapur makanan berat beroperasi hingga pukul 21.00 WIB.</p>
              </div>
            </div>

            <!-- Facilities Info Card -->
            <div class="info-box-card">
              <div class="info-box-icon"><i class="ri-parking-box-fill"></i></div>
              <div class="info-box-content">
                <h4>Fasilitas Parkir & Transportasi</h4>
                <p>Parkir mobil & motor luas dengan petugas valet gratis. Hanya 5 menit jalan kaki dari Halte TransJakarta Senopati.</p>
              </div>
            </div>
          </div>

          <!-- Interactive Google Maps Frame Preview -->
          <div class="map-container reveal-item">
            <div class="map-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2754668589073!2d106.80496157573133!3d-6.22736466099307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14f52f36d23%3A0x13c7c25eb7b37060!2sJl.%20Senopati%2C%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kala Senja">
              </iframe>
              <div class="map-floating-card">
                <strong>Kala Senja Roastery</strong>
                <p>4.9 ★ (1.280 ulasan)</p>
                <a href="https://maps.google.com/?q=Jl.+Senopati+No.+42+Jakarta+Selatan" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs">
                  <i class="ri-directions-line"></i> Petunjuk Arah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
