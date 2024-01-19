function toggleFAQContent() {
    const faqSwitchers = document.querySelectorAll('.faq-switcher');
    const faqContents = document.querySelectorAll('.faq-content');

    if (faqSwitchers.length && faqContents.length) {
        faqSwitchers.forEach((switcher) => {
            switcher.addEventListener('click', (event) => {
                event.preventDefault();

                const targetId = switcher.getAttribute('data-target');

                faqContents.forEach((content) => {
                    content.classList.remove('active-content');
                });

                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active-content');
                }

                faqSwitchers.forEach((s) => {
                    s.classList.remove('active-switcher');
                });

                switcher.classList.add('active-switcher');
            });
        });
    }
}

toggleFAQContent();
