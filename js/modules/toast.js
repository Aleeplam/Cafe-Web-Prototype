/**
 * KALA SENJA COFFEE & ROASTERY — TOAST NOTIFICATION MODULE
 * File: js/modules/toast.js
 * Fungsi: Menampilkan notifikasi popup mengambang yang reusable dan elegan.
 */

export function showToast(text, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? 'ri-checkbox-circle-fill' : 'ri-information-fill';
  toast.innerHTML = `<i class="${icon}"></i><span>${text}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
