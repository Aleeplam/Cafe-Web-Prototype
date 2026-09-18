/**
 * KALA SENJA COFFEE & ROASTERY — REVIEWS SECTION COMPONENT
 * File: js/components/Reviews.js
 * Fungsi: Merender Ulasan Pelanggan dan Google Reviews Banner.
 */

import { reviewsData } from '../data/reviewsData.js';

export function renderReviews() {
  const cardsHtml = reviewsData.map(rev => `
    <div class="review-card ${rev.isFeatured ? 'featured-review' : ''} reveal-item">
      <div class="review-top">
        <div class="stars-gold">
          ${Array(rev.rating).fill('<i class="ri-star-fill"></i>').join('')}
        </div>
        <span class="review-badge ${rev.isFeatured ? 'badge-critic' : ''}">
          <i class="${rev.badgeIcon}"></i> ${rev.badgeText}
        </span>
      </div>
      <p class="review-quote">
        "${rev.quote}"
      </p>
      <div class="reviewer-meta">
        <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar">
        <div>
          <strong>${rev.name}</strong>
          <span>${rev.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="reviews-section" id="ulasan">
      <div class="container">
        <div class="section-header text-center reveal-item">
          <span class="section-tag">Kata Mereka</span>
          <h2 class="section-title">Pengalaman Mengesankan di Kala Senja</h2>
          <p class="section-subtitle">Lebih dari seribu pelanggan setia yang menemukan kenyamanan dan rasa favorit mereka di sini.</p>
        </div>

        <div class="reviews-grid">
          ${cardsHtml}
        </div>

        <!-- Google Reviews Aggregator Box -->
        <div class="google-rating-banner reveal-item">
          <div class="g-rating-left">
            <div class="g-logo"><i class="ri-google-fill"></i></div>
            <div class="g-info">
              <h3>Nilai 4.9 dari 5 Bintang</h3>
              <p>Berdasarkan 1.280+ ulasan asli di Google Maps</p>
            </div>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <i class="ri-external-link-line"></i> Baca Semua Ulasan
          </a>
        </div>
      </div>
    </section>
  `;
}
