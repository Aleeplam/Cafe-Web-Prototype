/**
 * KALA SENJA COFFEE & ROASTERY — FOOTER & SOCIAL FEED COMPONENT
 * File: js/components/Footer.js
 * Fungsi: Merender Instagram Feed Preview, Newsletter Subscription, dan Footer Copyright.
 */

export function renderFooter() {
  return `
    <!-- Instagram Feed Preview -->
    <section class="social-feed-section">
      <div class="container">
        <div class="feed-header reveal-item">
          <div>
            <span class="section-tag">Sosial Media</span>
            <h2 class="section-title">Ikuti Cerita Kami di Instagram</h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <i class="ri-instagram-line"></i> @kalasenja.coffee
          </a>
        </div>

        <div class="feed-grid reveal-item">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="feed-card">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" alt="Instagram Post 1" loading="lazy">
            <div class="feed-hover"><i class="ri-instagram-line"></i></div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="feed-card">
            <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80" alt="Instagram Post 2" loading="lazy">
            <div class="feed-hover"><i class="ri-instagram-line"></i></div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="feed-card">
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80" alt="Instagram Post 3" loading="lazy">
            <div class="feed-hover"><i class="ri-instagram-line"></i></div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="feed-card">
            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80" alt="Instagram Post 4" loading="lazy">
            <div class="feed-hover"><i class="ri-instagram-line"></i></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-col brand-col">
            <div class="logo">
              <div class="logo-icon"><i class="ri-cup-line"></i></div>
              <div class="logo-text">
                <span class="logo-title">Kala Senja</span>
                <span class="logo-subtitle">Artisan Coffee & Roastery</span>
              </div>
            </div>
            <p class="footer-brand-desc">
              Menghadirkan kenikmatan secangkir kopi berkualitas specialty dan ketenangan suasana di tengah ritme kehidupan kota.
            </p>
            <div class="footer-socials">
              <a href="https://instagram.com" aria-label="Instagram" class="social-btn"><i class="ri-instagram-line"></i></a>
              <a href="https://tiktok.com" aria-label="TikTok" class="social-btn"><i class="ri-tiktok-line"></i></a>
              <a href="https://spotify.com" aria-label="Spotify Playlist" class="social-btn" title="Dengarkan Senja Playlist"><i class="ri-spotify-line"></i></a>
              <a href="https://wa.me/6285815057089" aria-label="WhatsApp" class="social-btn"><i class="ri-whatsapp-line"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Navigasi Cepat</h4>
            <ul class="footer-links">
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#menu">Menu Minuman & Makanan</a></li>
              <li><a href="#keunggulan">Fasilitas & Keunggulan</a></li>
              <li><a href="#galeri">Galeri Foto</a></li>
              <li><a href="#reservasi">Reservasi Meja</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Jam & Kontak</h4>
            <ul class="footer-contact-list">
              <li><i class="ri-time-line"></i> Senin - Jumat: 07.00 - 22.00</li>
              <li><i class="ri-time-line"></i> Sabtu - Minggu: 07.00 - 23.00</li>
              <li><i class="ri-map-pin-line"></i> Jl. Senopati No. 42, Jaksel</li>
              <li><i class="ri-phone-line"></i> +62 858-1505-7089</li>
              <li><i class="ri-mail-line"></i> hello@kalasenjacoffee.com</li>
            </ul>
          </div>

          <div class="footer-col newsletter-col">
            <h4 class="footer-col-title">Buletin & Penawaran Eksklusif</h4>
            <p>Dapatkan diskon 15% untuk kunjungan pertama dan info promo musiman kami.</p>
            <form id="newsletterForm" class="newsletter-form">
              <div class="input-with-button">
                <input type="email" id="newsEmail" placeholder="Masukkan email Anda..." required aria-label="Email Newsletter">
                <button type="submit" class="btn btn-primary" aria-label="Berlangganan">
                  <i class="ri-arrow-right-line"></i>
                </button>
              </div>
              <span class="form-helper" id="newsletterMsg"></span>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; <span id="currentYear">2026</span> Kala Senja Coffee & Roastery. Hak Cipta Dilindungi.</p>
          <div class="footer-legal-links">
            <a href="#">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#">Karir Barista</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
