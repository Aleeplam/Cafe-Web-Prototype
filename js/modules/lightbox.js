/**
 * KALA SENJA COFFEE & ROASTERY — LIGHTBOX MODULE
 * File: js/modules/lightbox.js
 * Fungsi: Mengatur tampilan popup zoom foto galeri.
 */

export function initLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightboxModal || !lightboxImg || !lightboxCaption) return;

  // Bind click on gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-caption') || item.querySelector('.gallery-caption')?.textContent || '';
      if (img) lightboxImg.src = img.src;
      lightboxCaption.textContent = caption;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
