export function smoothScrollTo(targetId: string): void {
  const target = document.querySelector(targetId);
  if (target) {
    const offsetTop = (target as HTMLElement).offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

export function setupSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        smoothScrollTo(href);
      }
    });
  });
}


