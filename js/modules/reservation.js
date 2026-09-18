/**
 * KALA SENJA COFFEE & ROASTERY — RESERVATION MODULE
 * File: js/modules/reservation.js
 * Fungsi: Validasi formulir reservasi dan pembuatan tautan WhatsApp concierge.
 */

import { showToast } from './toast.js';

export function initReservation() {
  const resForm = document.getElementById('reservationForm');
  const resDateInput = document.getElementById('resDate');

  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
  }

  if (!resForm) return;

  resForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('resName')?.value.trim();
    const phone = document.getElementById('resPhone')?.value.trim();
    const guests = document.getElementById('resGuests')?.value;
    const date = document.getElementById('resDate')?.value;
    const time = document.getElementById('resTime')?.value;
    const area = document.querySelector('input[name="seating_area"]:checked')?.value || 'Indoor AC';
    const notes = document.getElementById('resNotes')?.value.trim();

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const timeError = document.getElementById('timeError');

    let valid = true;

    if (!name) {
      if (nameError) nameError.textContent = 'Nama lengkap wajib diisi.';
      valid = false;
    } else if (nameError) {
      nameError.textContent = '';
    }

    if (!phone || phone.length < 8) {
      if (phoneError) phoneError.textContent = 'Nomor WhatsApp tidak valid.';
      valid = false;
    } else if (phoneError) {
      phoneError.textContent = '';
    }

    if (!date) {
      if (dateError) dateError.textContent = 'Pilih tanggal kunjungan.';
      valid = false;
    } else if (dateError) {
      dateError.textContent = '';
    }

    if (!time) {
      if (timeError) timeError.textContent = 'Pilih jam kedatangan.';
      valid = false;
    } else if (timeError) {
      timeError.textContent = '';
    }

    if (!valid) return;

    let resMsg = `*📅 RESERVASI MEJA — KALA SENJA COFFEE*\n\n`;
    resMsg += `Halo Tim Kala Senja, saya ingin konfirmasi reservasi meja:\n\n`;
    resMsg += `• *Nama Pemesan:* ${name}\n`;
    resMsg += `• *No. WhatsApp:* ${phone}\n`;
    resMsg += `• *Tanggal:* ${date}\n`;
    resMsg += `• *Jam:* ${time} WIB\n`;
    resMsg += `• *Jumlah Tamu:* ${guests}\n`;
    resMsg += `• *Pilihan Area:* ${area}\n`;
    if (notes) resMsg += `• *Catatan Khusus:* ${notes}\n`;
    resMsg += `\nMohon konfirmasi ketersediaan meja untuk jadwal tersebut. Terima kasih! 🙏`;

    const encoded = encodeURIComponent(resMsg);
    window.open(`https://wa.me/6285815057089?text=${encoded}`, '_blank');

    showToast('🎉 Formulir reservasi berhasil! Menghubungkan ke WhatsApp Concierge...', 'success');
    resForm.reset();
  });
}
