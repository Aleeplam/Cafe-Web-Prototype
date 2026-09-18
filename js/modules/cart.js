/**
 * KALA SENJA COFFEE & ROASTERY — CART & ORDER MANAGEMENT
 * File: js/modules/cart.js
 * Fungsi: Mengelola state keranjang pesanan, modal kustomisasi, dan integrasi pesanan WhatsApp.
 */

import { menuData } from '../data/menuData.js?v=2.1';
import { showToast } from './toast.js?v=2.1';

let cart = [];
let currentActiveItem = null;
let modalSelectedTemp = "Iced";
let modalSelectedSugar = "Normal (100%)";
let modalSelectedMilk = "Fresh Milk";
let modalQuantity = 1;
const milkSurcharge = 8000;

export function initCartAndModal() {
  // Elements
  const orderModal = document.getElementById('orderModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalCategory = document.getElementById('modalCategory');
  const modalNotes = document.getElementById('modalNotes');
  const modalPrice = document.getElementById('modalPrice');
  const modalBadges = document.getElementById('modalBadges');

  const tempOptionGroup = document.getElementById('tempOptionGroup');
  const sugarOptionGroup = document.getElementById('sugarOptionGroup');
  const milkOptionGroup = document.getElementById('milkOptionGroup');

  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyVal = document.getElementById('qtyVal');
  const addToTrayBtn = document.getElementById('addToTrayBtn');

  // Cart Drawer Elements
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const orderCartBtn = document.getElementById('orderCartBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartFooter = document.getElementById('cartFooter');
  const emptyCartState = document.getElementById('emptyCartState');
  const cartTotalItems = document.getElementById('cartTotalItems');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTax = document.getElementById('cartTax');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const checkoutWhatsappBtn = document.getElementById('checkoutWhatsappBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');

  // Open Product Customization Modal
  window.openProductModal = function (itemId) {
    const item = menuData.find(m => m.id === parseInt(itemId));
    if (!item) return;

    currentActiveItem = item;
    modalQuantity = 1;
    if (qtyVal) qtyVal.textContent = '1';

    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.name;
    }
    if (modalTitle) modalTitle.textContent = item.name;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalCategory) modalCategory.textContent = item.categoryName;
    if (modalNotes) modalNotes.innerHTML = `<i class="ri-compass-3-line"></i> Notes: ${item.notes}`;

    if (modalBadges) {
      modalBadges.innerHTML = item.badge
        ? `<span class="product-badge ${item.badgeClass || 'badge-signature'}">${item.badge}</span>`
        : '';
    }

    if (tempOptionGroup) tempOptionGroup.style.display = item.hasTemp ? 'flex' : 'none';
    if (sugarOptionGroup) sugarOptionGroup.style.display = item.hasSugar ? 'flex' : 'none';
    if (milkOptionGroup) milkOptionGroup.style.display = item.hasMilk ? 'flex' : 'none';

    resetChips(tempOptionGroup, "Iced");
    resetChips(sugarOptionGroup, "Normal (100%)");
    resetChips(milkOptionGroup, "Fresh Milk");

    modalSelectedTemp = "Iced";
    modalSelectedSugar = "Normal (100%)";
    modalSelectedMilk = "Fresh Milk";

    updateModalPrice();

    if (orderModal) {
      orderModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function resetChips(groupEl, defaultVal) {
    if (!groupEl) return;
    const chips = groupEl.querySelectorAll('.chip');
    chips.forEach(c => {
      if (c.getAttribute('data-val') === defaultVal) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });
  }

  function updateModalPrice() {
    if (!currentActiveItem || !modalPrice) return;
    let base = currentActiveItem.price;
    if (modalSelectedMilk.includes('Oat Milk') || modalSelectedMilk.includes('Almond Milk')) {
      base += milkSurcharge;
    }
    const total = base * modalQuantity;
    modalPrice.textContent = `Rp ${total.toLocaleString('id-ID')}`;
  }

  function closeModal() {
    if (orderModal) {
      orderModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Bind Quick Order buttons on cards
  document.querySelectorAll('.btn-order-quick').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      window.openProductModal(id);
    });
  });

  // Modal Chip selection
  document.querySelectorAll('.modal-customizer .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.getAttribute('data-opt');
      const val = chip.getAttribute('data-val');
      const parent = chip.closest('.custom-option-group');

      if (parent) {
        parent.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }

      if (type === 'temp') modalSelectedTemp = val;
      if (type === 'sugar') modalSelectedSugar = val;
      if (type === 'milk') modalSelectedMilk = val;

      updateModalPrice();
    });
  });

  // Quantity controls
  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (modalQuantity > 1) {
        modalQuantity--;
        qtyVal.textContent = modalQuantity;
        updateModalPrice();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      if (modalQuantity < 20) {
        modalQuantity++;
        qtyVal.textContent = modalQuantity;
        updateModalPrice();
      }
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (orderModal) {
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) closeModal();
    });
  }

  // Cart Drawer Controls
  function openCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('active');
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('active');
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (orderCartBtn) orderCartBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Add to Tray Button
  if (addToTrayBtn) {
    addToTrayBtn.addEventListener('click', () => {
      if (!currentActiveItem) return;

      let itemUnitPrice = currentActiveItem.price;
      let customNotes = [];

      if (currentActiveItem.hasTemp) customNotes.push(modalSelectedTemp);
      if (currentActiveItem.hasSugar) customNotes.push(modalSelectedSugar);
      if (currentActiveItem.hasMilk) {
        customNotes.push(modalSelectedMilk);
        if (modalSelectedMilk.includes('Oat') || modalSelectedMilk.includes('Almond')) {
          itemUnitPrice += milkSurcharge;
        }
      }

      const cartItem = {
        id: Date.now(),
        productId: currentActiveItem.id,
        name: currentActiveItem.name,
        image: currentActiveItem.image,
        unitPrice: itemUnitPrice,
        quantity: modalQuantity,
        customs: customNotes.join(' • '),
        totalPrice: itemUnitPrice * modalQuantity
      };

      cart.push(cartItem);
      updateCartUI();
      closeModal();
      showToast(`✓ Ditambahkan: ${modalQuantity}x ${currentActiveItem.name}`, 'success');
    });
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadgeCount) cartBadgeCount.textContent = totalCount;
    if (cartTotalItems) cartTotalItems.textContent = totalCount;

    if (!cartItemsList) return;

    if (cart.length === 0) {
      if (emptyCartState) emptyCartState.style.display = 'block';
      if (cartFooter) cartFooter.style.display = 'none';
      cartItemsList.innerHTML = '';
      if (emptyCartState) cartItemsList.appendChild(emptyCartState);
    } else {
      if (emptyCartState) emptyCartState.style.display = 'none';
      if (cartFooter) cartFooter.style.display = 'block';
      cartItemsList.innerHTML = '';

      let subtotal = 0;
      cart.forEach((item, index) => {
        subtotal += item.totalPrice;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.name}</h5>
            <p class="cart-item-meta">${item.customs ? item.customs : 'Regular'}</p>
            <div class="cart-item-bottom">
              <span class="cart-item-price">${item.quantity}x @ Rp ${item.unitPrice.toLocaleString('id-ID')}</span>
              <button class="cart-item-del" data-index="${index}" title="Hapus item"><i class="ri-delete-bin-line"></i></button>
            </div>
          </div>
        `;
        cartItemsList.appendChild(itemEl);
      });

      const tax = Math.round(subtotal * 0.1);
      const grandTotal = subtotal + tax;

      if (cartSubtotal) cartSubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
      if (cartTax) cartTax.textContent = `Rp ${tax.toLocaleString('id-ID')}`;
      if (cartGrandTotal) cartGrandTotal.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;

      // Delete buttons
      document.querySelectorAll('.cart-item-del').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'));
          cart.splice(idx, 1);
          updateCartUI();
          showToast('Produk berhasil dihapus dari keranjang.', 'info');
        });
      });
    }
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      cart = [];
      updateCartUI();
      showToast('Keranjang dikosongkan', 'info');
    });
  }

  // Checkout WhatsApp
  if (checkoutWhatsappBtn) {
    checkoutWhatsappBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      let message = `*☕ PESANAN BARU — KALA SENJA COFFEE*\n\n`;
      message += `Halo Tim Barista Kala Senja, saya ingin memesan menu berikut:\n\n`;

      let subtotal = 0;
      cart.forEach((item, idx) => {
        subtotal += item.totalPrice;
        message += `${idx + 1}. *${item.name}* (x${item.quantity})\n`;
        if (item.customs) message += `   _Detail: ${item.customs}_\n`;
        message += `   Harga: Rp ${item.totalPrice.toLocaleString('id-ID')}\n\n`;
      });

      const tax = Math.round(subtotal * 0.1);
      const grandTotal = subtotal + tax;

      message += `---------------------------------\n`;
      message += `*Subtotal:* Rp ${subtotal.toLocaleString('id-ID')}\n`;
      message += `*PPN & Servis 10%:* Rp ${tax.toLocaleString('id-ID')}\n`;
      message += `*TOTAL PERKIRAAN:* Rp ${grandTotal.toLocaleString('id-ID')}\n\n`;
      message += `Mohon info ketersediaan & metode pembayarannya. Terima kasih! ✨`;

      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/6285815057089?text=${encoded}`, '_blank');
    });
  }
}
