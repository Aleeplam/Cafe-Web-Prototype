/**
 * KALA SENJA COFFEE & ROASTERY — MAIN APPLICATION ENTRY POINT
 * File: js/app.js
 * Fungsi: Mengimpor seluruh komponen UI, merender ke DOM, dan menginisialisasi modul interaktif.
 */

// 1. Import UI Components (dengan cache buster version query)
import { renderHeader } from './components/Header.js?v=2.1';
import { renderHero } from './components/Hero.js?v=2.1';
import { renderAbout } from './components/About.js?v=2.1';
import { renderHighlights } from './components/Highlights.js?v=2.1';
import { renderMenu, initMenuEvents } from './components/Menu.js?v=2.1';
import { renderGallery, initGalleryEvents } from './components/Gallery.js?v=2.1';
import { renderReviews } from './components/Reviews.js?v=2.1';
import { renderReservation } from './components/Reservation.js?v=2.1';
import { renderLocation } from './components/Location.js?v=2.1';
import { renderFooter } from './components/Footer.js?v=2.1';
import { renderModals } from './components/Modals.js?v=2.1';

// 2. Import Logic & State Modules (dengan cache buster version query)
import { initOpeningStatus } from './modules/openingHours.js?v=2.1';
import { initCartAndModal } from './modules/cart.js?v=2.1';
import { initReservation } from './modules/reservation.js?v=2.1';
import { initLightbox } from './modules/lightbox.js?v=2.1';
import { initScrollSpyAndAnimations } from './modules/scrollSpy.js?v=2.1';

// 3. Mount Application & Bind Events
function mountApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Render Full UI Structure
  appRoot.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderHighlights()}
      ${renderMenu()}
      ${renderGallery()}
      ${renderReviews()}
      ${renderReservation()}
      ${renderLocation()}
    </main>
    ${renderFooter()}
    ${renderModals()}
  `;

  // Initialize Modules & Event Listeners
  initOpeningStatus();
  initMenuEvents();
  initGalleryEvents();
  initCartAndModal();
  initReservation();
  initLightbox();
  initScrollSpyAndAnimations();
}

// DOM Ready Execution
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
