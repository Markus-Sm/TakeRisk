class FAQManager {
    constructor() {
        this.faqSwitchers = document.querySelectorAll('.faq__switcher');
        this.faqContents = document.querySelectorAll('.faq__content');
        this.accordions = document.querySelectorAll('.faq__rec');

        this.init();
    }

    init() {
        if (this.faqSwitchers.length && this.faqContents.length) {
            this.faqSwitchers.forEach((switcher) => {
                switcher.addEventListener('click', (event) => this.handleSwitcherClick(event, switcher));
                switcher.addEventListener('touchstart', (event) => this.handleSwitcherClick(event, switcher));
            });
        }

        if (this.accordions.length) {
            this.accordions.forEach(faq => {
                faq.addEventListener('click', () => this.toggleAccordion(faq));
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
            const arrowIcon = switcher.querySelector('.faq__arrow');
            if (arrowIcon) {
                arrowIcon.classList.remove('active-arrow');
            }
        });

        clickedSwitcher.classList.add('active-switcher');
        const arrowIcon = clickedSwitcher.querySelector('.faq__arrow');
        if (arrowIcon) {
            arrowIcon.classList.add('active-arrow');
        }
    }

    toggleAccordion(clickedAccordion) {
        this.accordions.forEach(item => {
            if (item !== clickedAccordion) {
                item.classList.remove('active');
                item.setAttribute('aria-expanded', 'false');
                const answer = item.querySelector('.faq__answer');
                answer.setAttribute('aria-hidden', 'true');
            }
        });

        clickedAccordion.classList.toggle('active');
        const isExpanded = clickedAccordion.classList.contains('active');
        clickedAccordion.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const answer = clickedAccordion.querySelector('.faq__answer');
        answer.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqManager = new FAQManager();
});
