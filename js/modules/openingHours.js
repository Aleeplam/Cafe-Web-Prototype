/**
 * KALA SENJA COFFEE & ROASTERY — OPENING HOURS DETECTOR
 * File: js/modules/openingHours.js
 * Fungsi: Mendeteksi waktu lokal dan mengupdate status buka/tutup secara otomatis.
 */

export function initOpeningStatus() {
  const statusDot = document.getElementById('openStatusDot');
  const statusText = document.getElementById('openStatusText');
  if (!statusDot || !statusText) return;

  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0: Sunday, 6: Saturday

  const isWeekend = (currentDay === 0 || currentDay === 6);
  const closeHour = isWeekend ? 23 : 22;
  const openHour = 7;

  if (currentHour >= openHour && currentHour < closeHour) {
    statusDot.className = 'status-indicator active';
    statusText.textContent = `🟢 Buka Sekarang • Tutup pukul ${closeHour}.00 WIB`;
  } else {
    statusDot.className = 'status-indicator';
    statusDot.style.backgroundColor = '#ef4444';
    statusDot.style.boxShadow = '0 0 8px #ef4444';
    statusText.textContent = `🔴 Sedang Tutup • Buka kembali besok pukul 07.00 WIB`;
  }
}
