# WhatsApp Integration Implementation Guide

**Version:** 1.0 (Production-Ready)  
**WhatsApp Number:** +263 778 009 374 (263778009374)  
**Framework:** Pure JavaScript (No Backend Required)

---

## Overview

This integration provides two types of WhatsApp messages:

### 1. **General Inquiry Message**
Used for CTAs, hero buttons, and "Get a Quote" actions. Pre-filled with a standard quote request message.

**Message Template:**
```
Hello! I would like to request a quote for medical supplies. Could you please assist me?
```

### 2. **Product-Specific Message**
Used on product cards, product images, and inquiry buttons. Includes the product name dynamically.

**Message Template:**
```
Hi! I'm interested in inquiring about: [PRODUCT NAME]. Could you provide more details and pricing?
```

---

## Core JavaScript API

All functions are built into the `WhatsAppManager` object. You can use either the manager methods or backward-compatible functions.

### **Option A: Using WhatsAppManager (Recommended)**

```javascript
// General inquiry
WhatsAppManager.sendGeneralInquiry();

// Product inquiry
WhatsAppManager.sendProductInquiry('Product Name');

// Custom message
WhatsAppManager.sendCustomMessage('Your custom message here');
```

### **Option B: Using Backward-Compatible Functions**

```javascript
// General inquiry
openWhatsAppQuote();

// Product inquiry
inquireProduct('Product Name');

// Custom message
openWhatsAppChat('Your custom message here');
```

### **Option C: Using Data Attributes (Scalable)**

Add to any clickable element. The system will automatically handle clicks.

```html
<!-- General inquiry -->
<button data-whatsapp-type="general">Get a Quote</button>

<!-- Product inquiry -->
<button data-whatsapp-type="product" data-whatsapp-product="Product Name">
    Inquire About Product
</button>
```

---

## Implementation Examples

### 1. Hero Section Button (General Inquiry)

```html
<section class="hero">
    <div class="hero-content">
        <h1>Medical Supply Solutions</h1>
        <div class="hero-buttons">
            <!-- Method 1: onclick -->
            <button class="cta-btn" onclick="openWhatsAppQuote()">
                <i class="fab fa-whatsapp"></i>
                Get a Quote
            </button>

            <!-- Method 2: data attributes -->
            <button class="cta-btn" data-whatsapp-type="general">
                <i class="fab fa-whatsapp"></i>
                Contact Us
            </button>
        </div>
    </div>
</section>
```

---

### 2. Product Cards (Product Inquiry)

#### **Basic Product Card**

```html
<div class="product-card" data-product-name="Surgical Gloves">
    <img src="product.jpg" alt="Surgical Gloves" 
         onclick="inquireProduct('Surgical Gloves')">
    <h3>Surgical Gloves</h3>
    <p>Premium latex-free surgical gloves for maximum safety.</p>
    <button onclick="inquireProduct('Surgical Gloves')">
        <i class="fab fa-whatsapp"></i>
        Inquire
    </button>
</div>
```

#### **Advanced: Data Attributes Approach**

```html
<div class="product-card">
    <img src="product.jpg" alt="Surgical Gloves" 
         data-whatsapp-type="product" 
         data-whatsapp-product="Surgical Gloves"
         style="cursor: pointer;">
    <h3>Surgical Gloves</h3>
    <p>Premium latex-free surgical gloves for maximum safety.</p>
    <button data-whatsapp-type="product" 
            data-whatsapp-product="Surgical Gloves">
        <i class="fab fa-whatsapp"></i>
        Inquire
    </button>
</div>
```

---

### 3. Product Grid with Multiple Cards

```html
<section class="products">
    <div class="products-grid">
        <!-- Product 1 -->
        <div class="product-card">
            <img src="gloves.jpg" alt="Surgical Gloves" 
                 data-whatsapp-type="product" 
                 data-whatsapp-product="Surgical Gloves"
                 style="cursor: pointer;">
            <h3>Surgical Gloves</h3>
            <p>Premium latex-free surgical gloves.</p>
            <button data-whatsapp-type="product" 
                    data-whatsapp-product="Surgical Gloves">
                <i class="fab fa-whatsapp"></i>
                Inquire
            </button>
        </div>

        <!-- Product 2 -->
        <div class="product-card">
            <img src="bp-monitor.jpg" alt="Blood Pressure Monitor"
                 data-whatsapp-type="product" 
                 data-whatsapp-product="Blood Pressure Monitor"
                 style="cursor: pointer;">
            <h3>Blood Pressure Monitor</h3>
            <p>Digital BP monitor for clinics.</p>
            <button data-whatsapp-type="product" 
                    data-whatsapp-product="Blood Pressure Monitor">
                <i class="fab fa-whatsapp"></i>
                Inquire
            </button>
        </div>

        <!-- Product 3 -->
        <div class="product-card">
            <img src="oxygen.jpg" alt="Oxygen Concentrator"
                 data-whatsapp-type="product" 
                 data-whatsapp-product="Oxygen Concentrator"
                 style="cursor: pointer;">
            <h3>Oxygen Concentrator</h3>
            <p>Portable oxygen concentrator for remote areas.</p>
            <button data-whatsapp-type="product" 
                    data-whatsapp-product="Oxygen Concentrator">
                <i class="fab fa-whatsapp"></i>
                Inquire
            </button>
        </div>
    </div>
</section>
```

---

### 4. CTA Section (General Inquiry)

```html
<section class="cta-section">
    <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Let our team help you find the right medical supply solutions.</p>
        
        <div class="cta-buttons">
            <!-- Method 1: onclick -->
            <button class="btn-primary" onclick="openWhatsAppQuote()">
                <i class="fab fa-whatsapp"></i>
                Request a Quote
            </button>

            <!-- Method 2: data attributes -->
            <button class="btn-secondary" data-whatsapp-type="general">
                <i class="fab fa-whatsapp"></i>
                Chat with Us
            </button>
        </div>
    </div>
</section>
```

---

### 5. Contact Form Integration

```html
<section class="contact">
    <div class="contact-wrapper">
        <!-- Traditional Form -->
        <form id="contactForm">
            <!-- form fields -->
        </form>

        <!-- WhatsApp Alternative -->
        <div class="contact-alternative">
            <h3>Prefer Quick Response?</h3>
            <p>Chat with us directly via WhatsApp</p>
            <button onclick="openWhatsAppQuote()">
                <i class="fab fa-whatsapp"></i>
                Start WhatsApp Chat
            </button>
        </div>
    </div>
</section>
```

---

### 6. Product Listing Page

```html
<div class="product-listing">
    <div class="product-item">
        <div class="product-image">
            <img src="product.jpg" alt="ECG Machine"
                 onclick="inquireProduct('ECG Machine')"
                 style="cursor: pointer;">
        </div>
        <div class="product-details">
            <h4>12-Lead ECG Machine</h4>
            <p class="price">Price: On Request</p>
            <p class="description">Advanced ECG recording system for diagnostic accuracy.</p>
            <button onclick="inquireProduct('12-Lead ECG Machine')">
                <i class="fab fa-whatsapp"></i>
                Get Details
            </button>
        </div>
    </div>
</div>
```

---

## CSS Styling (Optional)

```css
/* WhatsApp Buttons */
[data-whatsapp-type],
button[onclick*="WhatsApp"],
button[onclick*="inquireProduct"] {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.8rem;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

[data-whatsapp-type]:hover,
button[onclick*="WhatsApp"]:hover,
button[onclick*="inquireProduct"]:hover {
    background: #1ebd56;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

[data-whatsapp-type] i,
button[onclick*="WhatsApp"] i,
button[onclick*="inquireProduct"] i {
    font-size: 1.1rem;
}

/* Clickable Image */
img[data-whatsapp-type="product"] {
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;
}

img[data-whatsapp-type="product"]:hover {
    transform: scale(1.05);
    filter: brightness(0.9);
}
```

---

## Customization

### Change WhatsApp Number

Edit in `public/js/script.js`:

```javascript
const WhatsAppManager = {
    PHONE_NUMBER: '263778009374', // Change this value
    // ... rest of code
};
```

### Customize Messages

Edit message templates in `script.js`:

```javascript
MESSAGES: {
    general: 'Your custom general message here',
    product: 'Hi! I\'m interested in: {{PRODUCT}}. More details?'
}
```

### Add New Message Types

Extend the WhatsAppManager:

```javascript
MESSAGES: {
    general: '...',
    product: '...',
    urgent: 'I need urgent medical supplies!',
    bulk: 'I am interested in bulk orders for {{PRODUCT}}'
}

// Usage:
sendUrgentInquiry: function() {
    const url = this.buildUrl(this.MESSAGES.urgent);
    this.openChat(url);
}
```

---

## Implementation Checklist

- [ ] Include Font Awesome 6 (for WhatsApp icon): `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">`
- [ ] Ensure `script.js` is loaded on all pages: `<script src="js/script.js"></script>`
- [ ] Use one of the three implementation methods (onclick, data attributes, or WhatsAppManager)
- [ ] Test on mobile and desktop
- [ ] Verify WhatsApp opens in new tab
- [ ] Confirm messages are properly URL-encoded

---

## Browser Compatibility

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  
✅ WhatsApp Web and WhatsApp Desktop

---

## Security & Best Practices

✅ **No sensitive data in messages** - Messages are public and visible to user  
✅ **URL encoding automatic** - All special characters handled safely  
✅ **No backend required** - Pure client-side solution  
✅ **No tracking** - Direct links to WhatsApp Web  
✅ **GDPR compliant** - No user data stored locally  

---

## Troubleshooting

### Message not appearing in WhatsApp?
- Check if WhatsApp is installed
- Verify phone number is correct
- Ensure message is URL-encoded (done automatically)

### Button not working?
- Check if onclick function name is correct
- Verify `script.js` is loaded
- Check browser console for JavaScript errors
- Use data attributes as fallback

### Need help?
Refer to the WhatsApp Business API docs: https://www.whatsapp.com/business/

---

## Production Deployment

1. ✅ Minify `script.js` if needed
2. ✅ Test all buttons across devices
3. ✅ Verify WhatsApp number works
4. ✅ Check console for errors
5. ✅ Deploy with confidence!

---

**Ready to integrate? Start with any of the implementation examples above!**
