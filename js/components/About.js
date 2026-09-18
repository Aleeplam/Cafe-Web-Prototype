/**
 * KALA SENJA COFFEE & ROASTERY — ABOUT SECTION COMPONENT
 * File: js/components/About.js
 * Fungsi: Merender Story & Filosofi Café serta profil barista/founders.
 */

export function renderAbout() {
  return `
    <section class="about-section" id="tentang">
      <div class="container">
        <div class="about-grid">
          <div class="about-visuals reveal-item">
            <div class="about-img-wrapper main-about-img">
              <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80" alt="Suasana Kala Senja Café" loading="lazy">
              <div class="experience-badge">
                <span class="exp-number">6+</span>
                <span class="exp-text">Tahun Melayani Rasa Otentik</span>
              </div>
            </div>
            <div class="about-img-wrapper sub-about-img">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" alt="Manual Brew Pour Over" loading="lazy">
            </div>
          </div>

          <div class="about-text-content reveal-item">
            <span class="section-tag">Filosofi & Kisah Kami</span>
            <h2 class="section-title">Harmoni Secangkir Kopi & Kedamaian Senja</h2>
            <p class="about-paragraph lead">
              Terinspirasi dari momen magis saat matahari terbenam—waktu di mana kesibukan hari mereda dan kehangatan mulai menyelimuti, <strong>Kala Senja</strong> hadir sebagai ruang perlindungan dari hiruk-pikuk kota.
            </p>
            <p class="about-paragraph">
              Kami bekerja sama langsung dengan para petani kopi lokal di dataran tinggi Gayo, Gunung Tilu Pangalengan, dan Bajawa Flores. Setiap biji disangrai dalam batch kecil secara berkala (micro-roasting) demi menjaga profil rasa floral, karamel manis, dan aroma nutty yang kaya.
            </p>

            <div class="about-features-list">
              <div class="feature-item-inline">
                <div class="feature-icon-box"><i class="ri-seedling-line"></i></div>
                <div>
                  <h4>100% Specialty Local Beans</h4>
                  <p>Biji kopi grade tertinggi dengan cupping score di atas 84+.</p>
                </div>
              </div>
              <div class="feature-item-inline">
                <div class="feature-icon-box"><i class="ri-bread-line"></i></div>
                <div>
                  <h4>Freshly Baked Artisanal Pastry</h4>
                  <p>Croissant butter Prancis dipanggang hangat setiap pagi.</p>
                </div>
              </div>
              <div class="feature-item-inline">
                <div class="feature-icon-box"><i class="ri-home-smile-line"></i></div>
                <div>
                  <h4>Sanctuary for Work & Rest</h4>
                  <p>Ruang tenang yang didesain ergonomis, nyaman untuk WFC ataupun bercengkerama.</p>
                </div>
              </div>
            </div>

            <div class="about-signature-block">
              <div class="founder-info">
                <strong>Arga Pratama & Vania L.</strong>
                <span>Head Roaster & Co-Founders</span>
              </div>
              <div class="signature-font">Kala Senja Artisans</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
