import { Navigation } from './components/Navigation.js';
import { FAQ } from './components/FAQ.js';
import { ConsultationForm, ContactForm } from './components/Form.js';
import { setupSmoothScroll } from './utils/scroll.js';

// Add notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  new Navigation();
  
  // FAQ Accordion
  new FAQ();
  
  // Forms
  new ConsultationForm('consultationForm');
  new ContactForm('contactForm');
  
  // Smooth scroll
  setupSmoothScroll();
  
  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
      if (currentScroll > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    lastScroll = currentScroll;
  });
});


