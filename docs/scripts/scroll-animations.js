document.addEventListener('DOMContentLoaded', () => {
    const animationSettings = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('project-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, animationSettings);

    const projectTiles = document.querySelectorAll('.project-tile');
    projectTiles.forEach(tile => {
        tile.classList.add('project-hidden');
        observer.observe(tile);
    });
});