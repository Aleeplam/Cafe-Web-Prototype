/**
 * KALA SENJA COFFEE & ROASTERY — RESERVATION SECTION COMPONENT
 * File: js/components/Reservation.js
 * Fungsi: Merender Formulir Reservasi Meja, Benefit Booking, dan Area Picker.
 */

export function renderReservation() {
  return `
    <section class="reservation-section" id="reservasi">
      <div class="container">
        <div class="reservation-wrapper">
          <div class="reservation-card-info reveal-item">
            <span class="section-tag">Booking Meja</span>
            <h2 class="section-title text-light">Amankan Spot Favorit Anda</h2>
            <p class="text-muted">
              Hindari antrean saat jam sibuk atau akhir pekan. Reservasi meja Anda dengan mudah dan dapatkan konfirmasi instan langsung via WhatsApp.
            </p>

            <div class="res-benefits">
              <div class="res-benefit-item">
                <i class="ri-check-double-line"></i>
                <span>Garansi meja siap saat Anda tiba tanpa waktu tunggu</span>
              </div>
              <div class="res-benefit-item">
                <i class="ri-check-double-line"></i>
                <span>Bisa request area: Indoor AC, Outdoor Garden, atau VIP Room</span>
              </div>
              <div class="res-benefit-item">
                <i class="ri-check-double-line"></i>
                <span>Gratis welcome beverage untuk booking di atas 4 orang</span>
              </div>
            </div>

            <div class="direct-contact-box">
              <p>Butuh reservasi cepat untuk event khusus / private meeting?</p>
              <a href="https://wa.me/6285815057089?text=Halo%20Kala%20Senja,%20saya%20ingin%20tanya%20reservasi%20meja/event" target="_blank" rel="noopener noreferrer" class="wa-direct-link">
                <i class="ri-whatsapp-fill"></i> Hubungi WhatsApp Concierge: <strong>+62 858-1505-7089</strong>
              </a>
            </div>
          </div>

          <div class="reservation-card-form reveal-item">
            <form id="reservationForm" class="booking-form" novalidate>
              <h3 class="form-title">Formulir Reservasi Meja</h3>

              <div class="form-group">
                <label for="resName"><i class="ri-user-line"></i> Nama Lengkap</label>
                <input type="text" id="resName" name="name" placeholder="Contoh: Dimas Bagaskara" required>
                <span class="field-error" id="nameError"></span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="resPhone"><i class="ri-whatsapp-line"></i> No. WhatsApp Aktif</label>
                  <input type="tel" id="resPhone" name="phone" placeholder="081234567890" required>
                  <span class="field-error" id="phoneError"></span>
                </div>
                <div class="form-group">
                  <label for="resGuests"><i class="ri-group-line"></i> Jumlah Tamu</label>
                  <select id="resGuests" name="guests" required>
                    <option value="1">1 Orang (Solo Work/Relax)</option>
                    <option value="2" selected>2 Orang (Duo / Date)</option>
                    <option value="3-4">3 - 4 Orang (Small Group)</option>
                    <option value="5-8">5 - 8 Orang (Family / Meeting)</option>
                    <option value="9+">> 8 Orang (Private Area)</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="resDate"><i class="ri-calendar-line"></i> Tanggal Kunjungan</label>
                  <input type="date" id="resDate" name="date" required>
                  <span class="field-error" id="dateError"></span>
                </div>
                <div class="form-group">
                  <label for="resTime"><i class="ri-time-line"></i> Jam Kedatangan</label>
                  <select id="resTime" name="time" required>
                    <option value="" disabled selected>Pilih Jam</option>
                    <option value="08:00">08:00 WIB (Pagi Segar)</option>
                    <option value="10:00">10:00 WIB (Brunch Time)</option>
                    <option value="13:00">13:00 WIB (After Lunch)</option>
                    <option value="15:30">15:30 WIB (Coffee Break)</option>
                    <option value="17:00">17:00 WIB (Golden Hour Senja)</option>
                    <option value="19:00">19:00 WIB (Dinner & Hangout)</option>
                    <option value="20:30">20:30 WIB (Night Chill)</option>
                  </select>
                  <span class="field-error" id="timeError"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="resArea"><i class="ri-store-2-line"></i> Pilihan Area Tempat Duduk</label>
                <div class="area-radio-group">
                  <label class="area-radio-card">
                    <input type="radio" name="seating_area" value="Indoor AC (Co-working & Bebas Asap)" checked>
                    <div class="area-card-inner">
                      <i class="ri-air-conditioner-line"></i>
                      <span>Indoor AC (No Smoking)</span>
                    </div>
                  </label>
                  <label class="area-radio-card">
                    <input type="radio" name="seating_area" value="Semi-Outdoor Garden (Smoking Friendly)">
                    <div class="area-card-inner">
                      <i class="ri-plant-line"></i>
                      <span>Garden Outdoor</span>
                    </div>
                  </label>
                  <label class="area-radio-card">
                    <input type="radio" name="seating_area" value="Bar Counter (Manual Brew Experience)">
                    <div class="area-card-inner">
                      <i class="ri-goblet-line"></i>
                      <span>Bar Counter</span>
                    </div>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="resNotes"><i class="ri-edit-line"></i> Catatan Khusus (Opsional)</label>
                <textarea id="resNotes" name="notes" rows="2" placeholder="Contoh: Butuh dekat colokan, ada ulang tahun, baby chair..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="submitResBtn">
                <i class="ri-send-plane-fill"></i> Konfirmasi & Kirim Reservasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
