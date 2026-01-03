export class FAQ {
  private faqItems: NodeListOf<HTMLElement>;

  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    this.init();
  }

  private init(): void {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          this.toggleItem(item);
        });
      }
    });
  }

  private toggleItem(item: HTMLElement): void {
    const isActive = item.classList.contains('active');
    
    // Close all items
    this.faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  }
}


