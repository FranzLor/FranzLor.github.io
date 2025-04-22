// src/scripts/hamburger.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        // Toggle menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('active', isOpen);
            // Set overflow on both html and body
            document.documentElement.style.overflow = isOpen ? 'hidden' : '';
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('active');
                // Reset overflow on both html and body
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('active');
                // Reset overflow on both html and body
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
            }
        });
    }
});