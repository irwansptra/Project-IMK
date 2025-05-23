// rooms.js
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });

    // Add animation to all image containers
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.image-caption');
            
            // Add animation class
            this.classList.add('active-hover');
            
            // Add slight delay for smoother transition
            setTimeout(() => {
                img.style.transform = 'scale(1.05)';
                caption.style.transform = 'translateY(0)';
            }, 50);
        });
        
        container.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.image-caption');
            
            // Remove animation class
            this.classList.remove('active-hover');
            
            // Reset transforms
            img.style.transform = 'scale(1)';
            caption.style.transform = 'translateY(100%)';
        });
    });

    // Add intersection observer for scroll animations
    const animateElements = document.querySelectorAll('.room-section, .suite-section, .presidential-hero, .presidential-detail, .presidential-bathroom, .presidential-balcony');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});