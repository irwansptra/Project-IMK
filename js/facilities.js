// facilities.js (same as before)
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

    // Add touch support for mobile devices
    const facilityCards = document.querySelectorAll('.facility-card');
    
    facilityCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            // Toggle active class on touch devices
            facilityCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close facility cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.facility-card')) {
            facilityCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
});