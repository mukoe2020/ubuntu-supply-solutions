// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Alternating Hero Text
document.addEventListener('DOMContentLoaded', function() {
    const textSlides = document.querySelectorAll('.text-slide');
    let currentSlide = 0;
    
    console.log('Found', textSlides.length, 'text slides');
    
    // Make sure first slide is visible
    if (textSlides.length > 0) {
        textSlides[0].classList.add('active');
        console.log('First slide activated');
    }
    
    function switchText() {
        console.log('Switching from slide', currentSlide);
        
        // Remove active class from current slide (stops typewriter animation)
        textSlides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % textSlides.length;
        console.log('Switching to slide', currentSlide);
        
        // Bring new slide from the left with typewriter effect
        setTimeout(() => {
            textSlides[currentSlide].classList.add('active');
            console.log('New slide activated with typewriter effect');
        }, 200);
    }
    
    // Start alternating after 5 seconds to allow typewriter to complete, then every 8 seconds
    if (textSlides.length > 1) {
        setTimeout(() => {
            console.log('Starting text alternation');
            switchText();
            setInterval(switchText, 8000);
        }, 5000);
    }
});

// Smooth Scrolling for Navigation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const catalogBtn = document.querySelector('.primary-btn');
    const missionBtn = document.querySelector('.secondary-btn');
    
    if (catalogBtn) {
        catalogBtn.addEventListener('click', function() {
            console.log('View Product Catalog clicked');
            // Scroll to products section or navigate
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Product catalog coming soon!');
            }
        });
    }
    
    if (missionBtn) {
        missionBtn.addEventListener('click', function() {
            console.log('About Our Mission clicked');
            // Scroll to about section
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('About section coming soon!');
            }
        });
    }
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // TODO: Add actual form submission logic here
            // You can integrate with an email service, backend API, etc.
        });
    }
});