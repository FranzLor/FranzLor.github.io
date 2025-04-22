// src/scripts/smooth-scrolling.js
document.addEventListener('DOMContentLoaded', () => {
    // Handle all anchor links
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if this is a mobile menu link (let hamburger.js handle it first)
            if (this.closest('.mobile-menu')) {
                return;
            }

            if (href.startsWith('#') || href.startsWith('/#')) {
                e.preventDefault();

                let targetId = href.startsWith('/#') ? href.substring(2) : href.substring(1);

                // Handle navigation between pages
                if (href.startsWith('/#') && window.location.pathname !== '/') {
                    window.location.href = `/#${targetId}`;
                    return;
                }

                // Scroll to section
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL
                    history.pushState(null, null, `/#${targetId}`);
                }
            }
        });
    });

    // Handle initial page load with hash
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});