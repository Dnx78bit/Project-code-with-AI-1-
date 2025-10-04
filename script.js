document.addEventListener('DOMContentLoaded', function() {

    // --- Intersection Observer for Fade-in Animations ---
    const animatedElements = document.querySelectorAll('.hero-content, .category-content, .banner-content');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Hamburger Menu Logic (Optional, but good practice) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links'); // Assuming a nav-links container will be added for mobile

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Note: Smooth scrolling is handled by CSS `scroll-behavior: smooth;`
    // Hover effects are handled by CSS `:hover` pseudo-class.
    // No additional JS is needed for these core features as per the plan.

});