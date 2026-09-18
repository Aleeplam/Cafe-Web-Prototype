/**
 * KALA SENJA COFFEE & ROASTERY — MODALS & OVERLAYS COMPONENT
 * File: js/components/Modals.js
 * Fungsi: Merender Order Modal, Cart Drawer, Gallery Lightbox, Floating WhatsApp/Scroll button, dan Toast Container.
 */

export function renderModals() {
  return `
    <!-- Floating Action Buttons -->
    <div class="floating-actions">
      <a href="https://wa.me/6285815057089?text=Halo%20Kala%20Senja%20Coffee,%20saya%20ingin%20tanya%20reservasi" target="_blank" rel="noopener noreferrer" class="float-btn float-wa" title="Chat WhatsApp" aria-label="WhatsApp">
        <i class="ri-whatsapp-fill"></i>
        <span class="float-tooltip">Chat WhatsApp</span>
      </a>
      <button class="float-btn float-scroll-top" id="scrollTopBtn" title="Kembali ke Atas" aria-label="Scroll ke Atas">
        <i class="ri-arrow-up-line"></i>
      </button>
    </div>

    <!-- Product Detail & Quick Order Modal -->
    <div class="modal-overlay" id="orderModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-content">
        <button class="modal-close-btn" id="modalCloseBtn" aria-label="Tutup"><i class="ri-close-line"></i></button>
        <div class="modal-body-grid">
          <div class="modal-img-container">
            <img src="" alt="Menu Image" id="modalImg">
            <div class="modal-badge-container" id="modalBadges"></div>
          </div>
          <div class="modal-details">
            <span class="modal-category" id="modalCategory">Kategori</span>
            <h3 class="modal-title" id="modalTitle">Nama Menu</h3>
            <p class="modal-desc" id="modalDesc">Deskripsi menu</p>
            <div class="modal-notes" id="modalNotes"><i class="ri-compass-3-line"></i> Notes: -</div>
            
            <div class="modal-customizer">
              <div class="custom-option-group" id="tempOptionGroup">
                <label class="custom-label">Pilihan Suhu:</label>
                <div class="custom-chips">
                  <button type="button" class="chip active" data-opt="temp" data-val="Iced">Dingin (Iced)</button>
                  <button type="button" class="chip" data-opt="temp" data-val="Hot">Hangat (Hot)</button>
                </div>
              </div>

              <div class="custom-option-group" id="sugarOptionGroup">
                <label class="custom-label">Level Gula / Manis:</label>
                <div class="custom-chips">
                  <button type="button" class="chip active" data-opt="sugar" data-val="Normal (100%)">Normal (100%)</button>
                  <button type="button" class="chip" data-opt="sugar" data-val="Less Sweet (50%)">Less Sweet (50%)</button>
                  <button type="button" class="chip" data-opt="sugar" data-val="No Sugar (0%)">No Sugar (0%)</button>
                </div>
              </div>

              <div class="custom-option-group" id="milkOptionGroup">
                <label class="custom-label">Pilihan Susu (Dairy / Plant-Based):</label>
                <div class="custom-chips">
                  <button type="button" class="chip active" data-opt="milk" data-val="Fresh Milk">Fresh Milk</button>
                  <button type="button" class="chip" data-opt="milk" data-val="Oat Milk (+Rp 8.000)">Oat Milk (+8k)</button>
                  <button type="button" class="chip" data-opt="milk" data-val="Almond Milk (+Rp 8.000)">Almond Milk (+8k)</button>
                </div>
              </div>

              <div class="quantity-row">
                <label class="custom-label">Jumlah:</label>
                <div class="qty-control">
                  <button type="button" class="qty-btn" id="qtyMinus"><i class="ri-subtract-line"></i></button>
                  <span class="qty-val" id="qtyVal">1</span>
                  <button type="button" class="qty-btn" id="qtyPlus"><i class="ri-add-line"></i></button>
                </div>
              </div>
            </div>

            <div class="modal-action-row">
              <div class="modal-price-box">
                <span class="label">Total Harga</span>
                <span class="modal-price" id="modalPrice">Rp 0</span>
              </div>
              <button class="btn btn-primary btn-lg" id="addToTrayBtn">
                <i class="ri-shopping-cart-2-line"></i> Tambahkan ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart / Order Drawer -->
    <div class="cart-drawer-overlay" id="cartOverlay"></div>
    <div class="cart-drawer" id="cartDrawer" role="dialog" aria-label="Keranjang Pesanan">
      <div class="cart-header">
        <div class="cart-title-wrap">
          <i class="ri-shopping-bag-3-line"></i>
          <h3>Keranjang Pesanan (<span id="cartTotalItems">0</span>)</h3>
        </div>
        <button class="cart-close-btn" id="cartCloseBtn" aria-label="Tutup Keranjang"><i class="ri-close-line"></i></button>
      </div>
      
      <div class="cart-body" id="cartItemsList">
        <div class="empty-cart-state" id="emptyCartState">
          <i class="ri-cup-line"></i>
          <h4>Keranjang Masih Kosong</h4>
          <p>Pilih menu favorit Anda di atas dan pesan untuk dinikmati langsung atau take away.</p>
          <a href="#menu" class="btn btn-outline btn-sm" id="cartExploreMenuBtn">Pilih Menu</a>
        </div>
      </div>

      <div class="cart-footer" id="cartFooter" style="display: none;">
        <div class="cart-summary-row">
          <span>Subtotal</span>
          <strong id="cartSubtotal">Rp 0</strong>
        </div>
        <div class="cart-summary-row text-muted-small">
          <span>PPN 10% & Servis</span>
          <span id="cartTax">Rp 0</span>
        </div>
        <div class="cart-summary-divider"></div>
        <div class="cart-summary-row total-row">
          <span>Total Perkiraan</span>
          <strong class="total-amount" id="cartGrandTotal">Rp 0</strong>
        </div>
        
        <div class="cart-action-buttons">
          <button class="btn btn-primary btn-block" id="checkoutWhatsappBtn">
            <i class="ri-whatsapp-line"></i> Pesan Langsung via WhatsApp
          </button>
          <button class="btn btn-outline btn-block btn-sm" id="clearCartBtn">
            <i class="ri-delete-bin-line"></i> Kosongkan Keranjang
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery Lightbox Modal -->
    <div class="lightbox-modal" id="lightboxModal" role="dialog" aria-modal="true" aria-label="Preview Foto">
      <button class="lightbox-close" id="lightboxClose"><i class="ri-close-line"></i></button>
      <div class="lightbox-content">
        <img src="" alt="Zoom Foto" id="lightboxImg">
        <p class="lightbox-caption" id="lightboxCaption"></p>
      </div>
    </div>

    <!-- Toast Container -->
    <div class="toast-container" id="toastContainer"></div>
  `;
}
