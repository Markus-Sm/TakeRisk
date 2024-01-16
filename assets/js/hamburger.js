class MobileMenu {
    constructor() {
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
        this.menuBtn = document.querySelector('.hamburger');
        this.mobileMenu = document.querySelector('.mobile-nav');
        this.body = document.querySelector('body');

        this.menuBtn.addEventListener('click', () => this.toggleMenu());
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.menuBtn.classList.toggle('is-active');
        this.mobileMenu.classList.toggle('is-active');
        this.body.classList.toggle('no-scroll');
    }

    closeMenu() {
        this.mobileMenu.classList.remove('is-active');
        this.menuBtn.classList.remove('is-active');
        this.body.classList.remove('no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = new MobileMenu();
});
