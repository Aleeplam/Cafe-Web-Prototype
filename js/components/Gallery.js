/**
 * KALA SENJA COFFEE & ROASTERY — GALLERY SECTION COMPONENT
 * File: js/components/Gallery.js
 * Fungsi: Merender Galeri Foto, Tab Filter Galeri, dan Grid Masonry.
 */

import { galleryData, galleryFilters } from '../data/galleryData.js';

export function renderGallery() {
  const filterButtonsHtml = galleryFilters.map((f, idx) => `
    <button class="gallery-filter-btn ${idx === 0 ? 'active' : ''}" data-gallery="${f.id}">
      ${f.name}
    </button>
  `).join('');

  const itemsHtml = galleryData.map(item => `
    <div class="gallery-item reveal-item" data-gallery-type="${item.type}" data-caption="${item.caption}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${item.tag}</span>
        <p class="gallery-caption">${item.title}</p>
        <i class="ri-zoom-in-line zoom-icon"></i>
      </div>
    </div>
  `).join('');

  return `
    <section class="gallery-section" id="galeri">
      <div class="container">
        <div class="section-header text-center reveal-item">
          <span class="section-tag">Galeri Visual & Suasana</span>
          <h2 class="section-title">Sudut Estetis di Setiap Sudut</h2>
          <p class="section-subtitle">Didesain dengan perpaduan elemen kayu hangat, tanaman asri, dan pencahayaan temaram yang nyaman.</p>
        </div>

        <!-- Gallery Category Tabs -->
        <div class="gallery-filters reveal-item">
          ${filterButtonsHtml}
        </div>

        <div class="gallery-masonry" id="galleryGrid">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initGalleryEvents() {
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-gallery');

      galleryItems.forEach(item => {
        const itemType = item.getAttribute('data-gallery-type');
        if (category === 'all' || itemType === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
