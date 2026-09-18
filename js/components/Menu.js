/**
 * KALA SENJA COFFEE & ROASTERY — MENU SECTION COMPONENT
 * File: js/components/Menu.js
 * Fungsi: Merender Menu Interaktif, Filter Kategori, Live Search, dan Grid Kartu Menu.
 */

import { menuData, menuCategories } from '../data/menuData.js';

export function renderMenu() {
  const tabsHtml = menuCategories.map((cat, idx) => `
    <button class="menu-tab-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}" role="tab">
      <i class="${cat.icon}"></i> ${cat.name}
    </button>
  `).join('');

  const cardsHtml = menuData.map(item => `
    <div class="menu-card" data-category="${item.category}" data-id="${item.id}">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `
          <span class="product-badge ${item.badgeClass || 'badge-signature'}">
            <i class="${item.badgeIcon || 'ri-star-fill'}"></i> ${item.badge}
          </span>
        ` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-meta-tags">
          <span class="tag-pill">${item.categoryName}</span>
          <span class="tag-pill hot-iced"><i class="${item.tempIcon || 'ri-temp-hot-line'}"></i> ${item.tempLabel}</span>
        </div>
        <h3 class="menu-item-title">${item.name}</h3>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="flavor-notes">
          <i class="ri-compass-3-line"></i> Notes: ${item.notes}
        </div>
        <div class="menu-card-footer">
          <div class="price-wrap">
            <span class="currency">Rp</span>
            <span class="amount">${item.price.toLocaleString('id-ID')}</span>
          </div>
          <button class="btn-order-quick" data-id="${item.id}" title="Tambah ke Pesanan">
            <i class="ri-add-line"></i> Pesan
          </button>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="menu-section" id="menu">
      <div class="container">
        <div class="section-header text-center reveal-item">
          <span class="section-tag">Kreasi Istimewa Kami</span>
          <h2 class="section-title">Jelajahi Menu Pilihan Kala Senja</h2>
          <p class="section-subtitle">Dari racikan espresso legendaris hingga pastry renyah bercita rasa tinggi.</p>
        </div>

        <!-- Menu Filter Controls & Search -->
        <div class="menu-controls-wrapper reveal-item">
          <div class="menu-tabs" id="menuTabs" role="tablist">
            ${tabsHtml}
          </div>

          <div class="menu-search-box">
            <i class="ri-search-line search-icon"></i>
            <input type="text" id="menuSearchInput" placeholder="Cari kopi, pastry, atau matcha..." aria-label="Cari Menu">
            <button class="clear-search-btn" id="clearSearchBtn" aria-label="Hapus Pencarian"><i class="ri-close-circle-fill"></i></button>
          </div>
        </div>

        <!-- Menu Grid Container -->
        <div class="menu-grid" id="menuGrid">
          ${cardsHtml}
        </div>

        <!-- No results message -->
        <div class="no-results-msg" id="noResultsMsg" style="display: none;">
          <i class="ri-search-eye-line"></i>
          <h3>Menu Tidak Ditemukan</h3>
          <p>Coba kata kunci lain atau pilih kategori di atas.</p>
          <button class="btn btn-outline" id="resetSearchBtn">Lihat Semua Menu</button>
        </div>

        <!-- Download & Full Menu CTA -->
        <div class="menu-download-banner reveal-item">
          <div class="banner-content">
            <i class="ri-file-pdf-2-line banner-icon"></i>
            <div>
              <h4>Ingin melihat seluruh 40+ varian minuman & hidangan utama?</h4>
              <p>Unduh katalog menu digital lengkap kami beserta informasi alergen dan takaran kalori.</p>
            </div>
          </div>
          <button class="btn btn-primary" id="downloadMenuBtn">
            <i class="ri-download-cloud-2-line"></i> Unduh Menu PDF
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initMenuEvents() {
  const menuTabs = document.querySelectorAll('.menu-tab-btn');
  const menuCards = document.querySelectorAll('.menu-card');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const resetSearchBtn = document.getElementById('resetSearchBtn');

  let activeCategory = 'all';

  function filterMenu() {
    const searchTerm = menuSearchInput?.value.toLowerCase().trim() || '';
    let visibleCount = 0;

    menuCards.forEach(card => {
      const categoryData = card.getAttribute('data-category') || '';
      const cardTitle = card.querySelector('.menu-item-title')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.menu-item-desc')?.textContent.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'all') || categoryData.includes(activeCategory);
      const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (clearSearchBtn) {
      if (searchTerm.length > 0) {
        clearSearchBtn.classList.add('visible');
      } else {
        clearSearchBtn.classList.remove('visible');
      }
    }
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      filterMenu();
    });
  });

  if (menuSearchInput) menuSearchInput.addEventListener('input', filterMenu);

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (menuSearchInput) {
        menuSearchInput.value = '';
        filterMenu();
        menuSearchInput.focus();
      }
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (menuSearchInput) menuSearchInput.value = '';
      activeCategory = 'all';
      menuTabs.forEach(t => t.classList.remove('active'));
      document.querySelector('.menu-tab-btn[data-category="all"]')?.classList.add('active');
      filterMenu();
    });
  }
}
