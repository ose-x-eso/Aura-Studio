document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feature 1: Smooth Scroll Fade-In Animation ---
    // Select all elements that should fade in on scroll
    const fadeElements = document.querySelectorAll('.fade-on-scroll');

    // Setup Intersection Observer to trigger animations when elements enter viewport
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger CSS transition
                entry.target.classList.add('is-visible');
                // Unobserve the element once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // --- Feature 2: Back to Top Button ---
    const backToTopBtn = document.getElementById('backToTop');

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Prevent default form submission to fulfill the "no backend integration" requirement

});