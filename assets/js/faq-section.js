class FAQManager {
    constructor() {
        this.contentSwitchers = document.querySelectorAll('.switcher');
        this.accordeonContents = document.querySelectorAll('.accordeon__content');
        this.accordions = document.querySelectorAll('.accordeon__rec');

        this.init();
    }

    init() {
        if (this.contentSwitchers.length && this.accordeonContents.length) {
            this.contentSwitchers.forEach((switcher) => {
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

        this.accordeonContents.forEach((content) => {
            content.classList.remove('active-content');
        });

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active-content');
        }

        this.contentSwitchers.forEach((switcher) => {
            switcher.classList.remove('switcher--active');
            const arrowIcon = switcher.querySelector('.switcher__arrow');
            if (arrowIcon) {
                arrowIcon.classList.remove('active-arrow');
            }
        });

        clickedSwitcher.classList.add('switcher--active');
        const arrowIcon = clickedSwitcher.querySelector('.switcher__arrow');
        if (arrowIcon) {
            arrowIcon.classList.add('active-arrow');
        }
    }

    toggleAccordion(clickedAccordion) {
        this.accordions.forEach(item => {
            if (item !== clickedAccordion) {
                item.classList.remove('active');
                item.setAttribute('aria-expanded', 'false');
                const answer = item.querySelector('.accordeon__expand');
                answer.setAttribute('aria-hidden', 'true');
            }
        });

        clickedAccordion.classList.toggle('active');
        const isExpanded = clickedAccordion.classList.contains('active');
        clickedAccordion.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const answer = clickedAccordion.querySelector('.accordeon__expand');
        answer.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqManager = new FAQManager();
});
