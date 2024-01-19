class FAQManager {
    constructor() {
        this.faqSwitchers = document.querySelectorAll('.faq-switcher');
        this.faqContents = document.querySelectorAll('.faq-content');

        this.init();
    }

    init() {
        if (this.faqSwitchers.length && this.faqContents.length) {
            this.faqSwitchers.forEach((switcher) => {
                switcher.addEventListener('click', (event) => this.handleSwitcherClick(event, switcher));
            });
        }
    }

    handleSwitcherClick(event, clickedSwitcher) {
        event.preventDefault();

        const targetId = clickedSwitcher.getAttribute('data-target');

        this.faqContents.forEach((content) => {
            content.classList.remove('active-content');
        });

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active-content');
        }

        this.faqSwitchers.forEach((switcher) => {
            switcher.classList.remove('active-switcher');
            const arrowIcon = switcher.querySelector('.faq-switcher__arrow');
            if (arrowIcon) {
                arrowIcon.classList.remove('active-arrow');
            }
        });

        clickedSwitcher.classList.add('active-switcher');
        const arrowIcon = clickedSwitcher.querySelector('.faq-switcher__arrow');
        if (arrowIcon) {
            arrowIcon.classList.add('active-arrow');
        }
    }
}

const faqManager = new FAQManager();
