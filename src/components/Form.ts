import { validateConsultationForm, validateContactForm, showNotification } from '../utils/form.js';
import type { ConsultationFormData, ContactFormData } from '../types/index.js';

export class ConsultationForm {
  private form: HTMLFormElement | null;

  constructor(formId: string) {
    this.form = document.getElementById(formId) as HTMLFormElement | null;
    this.init();
  }

  private init(): void {
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }
  }

  private handleSubmit(): void {
    if (!this.form) return;

    const formData = new FormData(this.form);
    const data: ConsultationFormData = {
      procedure: formData.get('procedure') as string || '',
      agreedToTerms: formData.get('agreedToTerms') === 'on'
    };

    if (validateConsultationForm(data)) {
      // In production, send to server
      console.log('Consultation form submitted:', data);
      showNotification('Thank you! Your consultation request has been submitted. We will contact you soon.', 'success');
      this.form.reset();
    } else {
      showNotification('Please fill in all required fields and agree to the terms.', 'error');
    }
  }
}

export class ContactForm {
  private form: HTMLFormElement | null;

  constructor(formId: string) {
    this.form = document.getElementById(formId) as HTMLFormElement | null;
    this.init();
  }

  private init(): void {
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }
  }

  private handleSubmit(): void {
    if (!this.form) return;

    const formData = new FormData(this.form);
    const data: ContactFormData = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      message: formData.get('message') as string || ''
    };

    if (validateContactForm(data)) {
      // In production, send to server
      console.log('Contact form submitted:', data);
      showNotification('Thank you! Your message has been sent. We will get back to you soon.', 'success');
      this.form.reset();
    } else {
      showNotification('Please fill in all required fields correctly.', 'error');
    }
  }
}


