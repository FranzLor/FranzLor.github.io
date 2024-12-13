document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    const html = document.documentElement;

    if (hamburger && mobileMenu) {
        // Toggle the menu open/close
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('active');
            // Prevent body scrolling
            body.classList.toggle('menu-open');
            html.classList.toggle('menu-open');
        });

        // Close the menu when a menu item is clicked and scroll to the section
        const menuLinks = document.querySelectorAll('.mobile-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Scroll to the section (your scroll animation logic)
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

                    // Close the menu
                    mobileMenu.classList.remove('open');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    html.classList.remove('menu-open');
                }
            });
        });
    }
});
