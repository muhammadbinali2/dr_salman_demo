import type { ConsultationFormData, ContactFormData } from '../types/index.js';

export function validateConsultationForm(data: ConsultationFormData): boolean {
  if (!data.procedure || data.procedure === '') {
    return false;
  }
  if (!data.agreedToTerms) {
    return false;
  }
  return true;
}

export function validateContactForm(data: ContactFormData): boolean {
  if (!data.name || data.name.trim() === '') {
    return false;
  }
  if (!data.email || !isValidEmail(data.email)) {
    return false;
  }
  if (!data.phone || data.phone.trim() === '') {
    return false;
  }
  if (!data.message || data.message.trim() === '') {
    return false;
  }
  return true;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function showNotification(message: string, type: 'success' | 'error' = 'success'): void {
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    max-width: 400px;
    animation: slideIn 0.3s ease;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}


