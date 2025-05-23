document.addEventListener('DOMContentLoaded', function() {
  // Menu tabs functionality
  const tabBtns = document.querySelectorAll('.menu-tabs .tab-btn');
  const menuGrids = document.querySelectorAll('.menu-content .menu-grid');

  function showTab(tabId) {
    menuGrids.forEach(grid => {
      grid.classList.remove('active');
    });
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active');
    }
    
    tabBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      showTab(tabId);
    });
  });

  // Set default tab
  showTab('breakfast');

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
  const prevBtn = document.querySelector('.prev-testimonial');
  const nextBtn = document.querySelector('.next-testimonial');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    if (index >= testimonials.length) {
      currentTestimonial = 0;
    } else if (index < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === currentTestimonial);
    });
  }

  showTestimonial(currentTestimonial);

  prevBtn.addEventListener('click', function() {
    currentTestimonial--;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', function() {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
  });

  // Lightbox initialization
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': 'Image %1 of %2'
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Parallax effect
  const heroSection = document.querySelector('.restaurant-hero');
  if (heroSection) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
  }
});