document.addEventListener('DOMContentLoaded', () => {
    // Animation configuration
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Animation callback
    const animateDevblogPosts = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Calculate delay based on position (stagger effect)
                const delay = (index % 3) * 150;

                // Apply animation with staggered delay
                setTimeout(() => {
                    entry.target.classList.add('devblog-visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    };

    // Create observer
    const devblogObserver = new IntersectionObserver(animateDevblogPosts, animationOptions);

    // Target all devblog posts
    const devblogPosts = document.querySelectorAll('.devblog-post');
    devblogPosts.forEach(post => {
        post.classList.add('devblog-hidden');
        devblogObserver.observe(post);
    });
});