export class Navigation {
  private hamburger: HTMLElement | null;
  private navMenu: HTMLElement | null;

  constructor() {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('navMenu');
    this.init();
  }

  private init(): void {
    if (this.hamburger && this.navMenu) {
      this.hamburger.addEventListener('click', () => {
        this.toggleMenu();
      });

      // Close menu when clicking on a link
      const navLinks = this.navMenu.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            this.closeMenu();
          }
        });
      });
    }
  }

  private toggleMenu(): void {
    if (this.hamburger && this.navMenu) {
      this.hamburger.classList.toggle('active');
      this.navMenu.classList.toggle('active');
    }
  }

  private closeMenu(): void {
    if (this.hamburger && this.navMenu) {
      this.hamburger.classList.remove('active');
      this.navMenu.classList.remove('active');
    }
  }
}


