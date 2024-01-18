class SmoothScroll {
    constructor() {
      document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', this.handleLinkClick.bind(this));
      });
    }
  
    handleLinkClick(e) {
      e.preventDefault();
  
      const targetId = e.currentTarget.getAttribute('href').substring(1);
  
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  const smoothScroll = new SmoothScroll();
  