# WhatsApp Inquiry Functionality

## Overview
This implementation provides WhatsApp integration for quote requests and product inquiries on your website.

**WhatsApp Number:** +263 778 009 374 (263778009374)

---

## JavaScript Functions

All functions are available globally in `script.js`:

### 1. `openWhatsAppQuote()`
Opens WhatsApp with a pre-filled quote request message.

```javascript
openWhatsAppQuote();
```

**Use Case:** Click the "Get a Quote" button

---

### 2. `inquireProduct(productName)`
Opens WhatsApp with a product inquiry message containing the product name.

```javascript
inquireProduct('Surgical Gloves');
inquireProduct('Blood Pressure Monitor');
```

**Use Case:** Product cards or inquiry buttons

**Parameters:**
- `productName` (string): Name of the product to inquire about

---

### 3. `openWhatsAppChat(messageText)`
Opens WhatsApp with a custom message.

```javascript
openWhatsAppChat('I need urgent medical supplies');
openWhatsAppChat(''); // Opens WhatsApp without pre-filled message
```

**Parameters:**
- `messageText` (string, optional): Custom message text

---

## HTML Implementation Examples

### Quote Request Button
```html
<button class="quote-btn" onclick="openWhatsAppQuote()">
    <i class="fab fa-whatsapp"></i>
    Get a Quote via WhatsApp
</button>
```

---

### Product Inquiry Button
```html
<div class="product-card">
    <h3>Surgical Gloves</h3>
    <p>Premium latex-free surgical gloves</p>
    <button onclick="inquireProduct('Surgical Gloves')">
        <i class="fab fa-whatsapp"></i>
        Inquire About This Product
    </button>
</div>
```

---

### Multiple Product Cards Example
```html
<div class="products-grid">
    <div class="product-card">
        <img src="images/product1.jpg" alt="Blood Pressure Monitor">
        <h3>Blood Pressure Monitor</h3>
        <p>Digital blood pressure monitor for clinics</p>
        <button onclick="inquireProduct('Blood Pressure Monitor')">
            Inquire via WhatsApp
        </button>
    </div>

    <div class="product-card">
        <img src="images/product2.jpg" alt="Oxygen Concentrator">
        <h3>Oxygen Concentrator</h3>
        <p>Portable oxygen concentrator for medical facilities</p>
        <button onclick="inquireProduct('Oxygen Concentrator')">
            Inquire via WhatsApp
        </button>
    </div>

    <div class="product-card">
        <img src="images/product3.jpg" alt="ECG Machine">
        <h3>ECG Machine</h3>
        <p>12-lead ECG recording system</p>
        <button onclick="inquireProduct('ECG Machine')">
            Inquire via WhatsApp
        </button>
    </div>
</div>
```

---

### CTA (Call to Action) Section
```html
<section class="cta-section">
    <h2>Need Medical Supplies?</h2>
    <p>Get a quote from our team via WhatsApp</p>
    <div class="cta-buttons">
        <button onclick="openWhatsAppQuote()" class="cta-btn primary">
            <i class="fab fa-whatsapp"></i>
            Request a Quote
        </button>
        <button onclick="openWhatsAppChat()" class="cta-btn secondary">
            <i class="fab fa-whatsapp"></i>
            Chat with Us
        </button>
    </div>
</section>
```

---

### Product Card with Extended Options
```html
<div class="product-card">
    <img src="images/product.jpg" alt="Product Name">
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Product description goes here</p>
        <p class="price">Price: On Request</p>
    </div>
    <div class="product-actions">
        <button class="btn-inquire" onclick="inquireProduct('Product Name')">
            <i class="fab fa-whatsapp"></i>
            Inquire
        </button>
        <button class="btn-quote" onclick="openWhatsAppQuote()">
            <i class="fas fa-quote"></i>
            Quote
        </button>
    </div>
</div>
```

---

## CSS Example Styles

```css
/* WhatsApp Button Styles */
button[onclick*="openWhatsApp"],
button[onclick*="inquireProduct"] {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

button[onclick*="openWhatsApp"]:hover,
button[onclick*="inquireProduct"]:hover {
    background: #1ebd56;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

button[onclick*="openWhatsApp"] i,
button[onclick*="inquireProduct"] i {
    font-size: 1.1rem;
}
```

---

## Integration Steps

1. **No Backend Required** - Just use the JavaScript functions directly in your HTML buttons
2. **Add onclick handlers** to your buttons: `onclick="openWhatsAppQuote()"` or `onclick="inquireProduct('Product Name')"`
3. **Functions are globally available** - They're defined in `script.js` and loaded on all pages
4. **Message encoding** - All messages are automatically URL-encoded using `encodeURIComponent()`
5. **Opens in new tab** - All WhatsApp links open in a new browser tab

---

## Features

✅ Pre-filled messages  
✅ Product-specific inquiries  
✅ URL-encoded for special characters  
✅ Opens in new tab  
✅ Mobile-responsive  
✅ No backend required  
✅ Easy to customize messages  

---

## Customization

To change the WhatsApp number, edit `script.js`:

```javascript
const WHATSAPP_NUMBER = 'YOUR_NEW_NUMBER'; // e.g., '263719697855'
```

To customize messages, modify the `openWhatsAppQuote()` or `inquireProduct()` functions in `script.js`.

---

## Message Examples

Current implementation sends:

**Quote Request:**
```
Hello! I would like to request a quote for medical supplies. Could you please assist me?
```

**Product Inquiry:**
```
Hi! I'm interested in inquiring about: [Product Name]. Could you provide more details and pricing?
```

You can customize these messages by editing the function in `script.js`.
