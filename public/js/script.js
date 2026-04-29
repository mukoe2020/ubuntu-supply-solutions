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
    
    // Start alternating after 5 seconds to allow typewriter to complete, then every 5 seconds
    if (textSlides.length > 1) {
        setTimeout(() => {
            console.log('Starting text alternation');
            switchText();
            setInterval(switchText, 5000);
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

// Product Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterBtns.length > 0 && productCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Filter products
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.4s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Add fadeIn animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Product Catalog Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return; // Only run on products page

    const cards = Array.from(catalogGrid.querySelectorAll('.catalog-card'));
    const searchInput = document.getElementById('catalogSearch');
    const searchBtn = document.querySelector('.catalog-search-btn');
    const popularTags = document.querySelectorAll('.popular-tag');
    const categoryCheckboxes = document.querySelectorAll('.filter-checkbox input[data-category]');
    const resultCountEl = document.getElementById('resultCount');
    const searchTermEl = document.getElementById('searchTerm');
    const showingCountEl = document.getElementById('showingCount');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let visibleCount = 12; // Show 12 cards initially

    function filterCards() {
        const query = searchInput.value.toLowerCase().trim();
        const checkedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.dataset.category);

        let matchCount = 0;
        cards.forEach(card => {
            const category = card.dataset.category;
            const text = card.textContent.toLowerCase();
            const matchesSearch = !query || text.includes(query);
            const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(category);

            if (matchesSearch && matchesCategory) {
                card.style.display = '';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update counts
        if (resultCountEl) resultCountEl.textContent = matchCount;
        if (searchTermEl) searchTermEl.textContent = query || 'All Supplies';
        if (showingCountEl) showingCountEl.textContent = matchCount;

        // Apply visible limit
        applyVisibleLimit();
    }

    function applyVisibleLimit() {
        let shown = 0;
        cards.forEach(card => {
            if (card.style.display !== 'none') {
                shown++;
                if (shown > visibleCount) {
                    card.style.display = 'none';
                }
            }
        });
        // Toggle load more button
        const totalVisible = cards.filter(c => {
            const query = searchInput.value.toLowerCase().trim();
            const checkedCategories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.category);
            const text = c.textContent.toLowerCase();
            const matchesSearch = !query || text.includes(query);
            const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(c.dataset.category);
            return matchesSearch && matchesCategory;
        }).length;

        if (loadMoreBtn) {
            loadMoreBtn.style.display = visibleCount >= totalVisible ? 'none' : 'inline-block';
        }
        if (showingCountEl) {
            showingCountEl.textContent = Math.min(visibleCount, totalVisible);
        }
    }

    // Search
    if (searchBtn) searchBtn.addEventListener('click', filterCards);
    if (searchInput) searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') filterCards();
    });

    // Popular tags
    popularTags.forEach(tag => {
        tag.addEventListener('click', function() {
            searchInput.value = this.dataset.search;
            visibleCount = 50;
            filterCards();
        });
    });

    // Category checkboxes
    categoryCheckboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            visibleCount = 12;
            filterCards();
        });
    });

    // Load more
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            visibleCount += 12;
            filterCards();
        });
    }

    // Initial display - show first 12
    filterCards();
});

// ============================================
// WhatsApp Integration Manager
// Production-ready solution for WhatsApp inquiries
// ============================================

const WhatsAppManager = {
    // Configuration
    PHONE_NUMBER: '263778009374', // International format without +
    BASE_URL: 'https://wa.me/',

    // Message Templates
    MESSAGES: {
        general: 'Hi Ubuntu Supply Solutions, I would like to request a quote for your medical supplies. Please assist me.',
        product: 'Hi Ubuntu Supply Solutions, I\'m interested in the {{PRODUCT}}. Could you please share pricing and availability?'
    },

    /**
     * Build WhatsApp URL with encoded message
     * @param {string} message - Message text
     * @returns {string} WhatsApp URL
     */
    buildUrl: function(message) {
        const encodedMessage = encodeURIComponent(message);
        return `${this.BASE_URL}${this.PHONE_NUMBER}?text=${encodedMessage}`;
    },

    /**
     * Open WhatsApp in new tab
     * @param {string} url - WhatsApp URL
     */
    openChat: function(url) {
        window.open(url, '_blank');
    },

    /**
     * General inquiry message (used for CTAs, hero buttons, "Get a Quote")
     */
    sendGeneralInquiry: function() {
        const url = this.buildUrl(this.MESSAGES.general);
        this.openChat(url);
    },

    /**
     * Product-specific inquiry message
     * @param {string} productName - Name of the product
     */
    sendProductInquiry: function(productName) {
        if (!productName) {
            console.warn('Product name is required');
            return;
        }
        const message = this.MESSAGES.product.replace('{{PRODUCT}}', productName);
        const url = this.buildUrl(message);
        this.openChat(url);
    },

    /**
     * Custom message
     * @param {string} customMessage - Custom message text
     */
    sendCustomMessage: function(customMessage) {
        if (!customMessage) {
            this.openChat(`${this.BASE_URL}${this.PHONE_NUMBER}`);
            return;
        }
        const url = this.buildUrl(customMessage);
        this.openChat(url);
    },

    /**
     * Initialize data attribute event listeners
     * Supports: data-whatsapp-type="general|product"
     *           data-whatsapp-product="Product Name"
     */
    initDataAttributes: function() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-whatsapp-type]');
            if (!target) return;

            e.preventDefault();

            const type = target.getAttribute('data-whatsapp-type');
            const productName = target.getAttribute('data-whatsapp-product');

            if (type === 'general') {
                this.sendGeneralInquiry();
            } else if (type === 'product' && productName) {
                this.sendProductInquiry(productName);
            }
        });
    }
};

// Initialize data attribute listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    WhatsAppManager.initDataAttributes();
});

// ============================================
// Clean, Simple API Functions
// ============================================

/**
 * Open WhatsApp with general inquiry message
 * No product specified - used for CTAs and hero buttons
 */
function openWhatsAppGeneral() {
    WhatsAppManager.sendGeneralInquiry();
}

/**
 * Open WhatsApp with product-specific inquiry message
 * @param {string} productName - The name of the product to inquire about
 */
function openWhatsAppProduct(productName) {
    WhatsAppManager.sendProductInquiry(productName);
}

// ============================================
// Backward compatibility functions
// ============================================

/**
 * Open WhatsApp with a pre-filled quote request message
 */
function openWhatsAppQuote() {
    WhatsAppManager.sendGeneralInquiry();
}

/**
 * Open WhatsApp with a pre-filled product inquiry message
 * @param {string} productName - The name of the product to inquire about
 */
function inquireProduct(productName) {
    WhatsAppManager.sendProductInquiry(productName);
}

/**
 * Open WhatsApp with a custom message
 * @param {string} messageText - Custom message text
 */
function openWhatsAppChat(messageText = '') {
    WhatsAppManager.sendCustomMessage(messageText);
}