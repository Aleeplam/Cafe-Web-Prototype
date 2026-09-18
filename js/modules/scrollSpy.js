/**
 * KALA SENJA COFFEE & ROASTERY — SCROLLSPY & ANIMATION MODULE
 * File: js/modules/scrollSpy.js
 * Fungsi: Sticky navbar scroll detection, active section highlighter, back to top button, dan scroll reveal animations.
 */

import { showToast } from './toast.js';

export function initScrollSpyAndAnimations() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Scroll listener
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Active Nav Highlight
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-reservasi-btn');

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // IntersectionObserver for Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Newsletter Form & PDF Download
  const newsForm = document.getElementById('newsletterForm');
  const newsEmail = document.getElementById('newsEmail');
  const newsMsg = document.getElementById('newsletterMsg');
  const downloadMenuBtn = document.getElementById('downloadMenuBtn');

  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsEmail?.value.trim();
      if (email && email.includes('@')) {
        if (newsMsg) {
          newsMsg.className = 'form-helper success';
          newsMsg.textContent = '🎉 Selamat! Kode promo diskon 15% telah dikirim ke email Anda.';
        }
        if (newsEmail) newsEmail.value = '';
        showToast('Berhasil berlangganan buletin Kala Senja!', 'success');
      }
    });
  }

  if (downloadMenuBtn) {
    downloadMenuBtn.addEventListener('click', () => {
      showToast('📄 Mengunduh Katalog Menu Digital Kala Senja PDF...', 'info');
      setTimeout(() => {
        showToast('✓ Menu PDF siap dibuka!', 'success');
      }, 1200);
    });
  }

  // Copyright Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
