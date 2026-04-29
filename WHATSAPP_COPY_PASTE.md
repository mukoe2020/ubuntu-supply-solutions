# WhatsApp Integration - Copy-Paste Ready Code Snippets

**Status:** Production-Ready  
**WhatsApp Number:** +263 778 009 374  
**No Backend Required**

---

## Quick Start: Copy and Paste Ready Code

All snippets work immediately. Just replace product names and adjust styling as needed.

---

## 1. Hero Section Button (General Inquiry)

```html
<!-- HTML -->
<div class="hero-buttons">
    <button class="btn-cta" onclick="openWhatsAppQuote()">
        <i class="fab fa-whatsapp"></i>
        Get a Quote
    </button>
</div>

<!-- CSS -->
<style>
    .btn-cta {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.9rem 2.2rem;
        background: #25D366;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-cta:hover {
        background: #1ebd56;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
    }
    
    .btn-cta i {
        font-size: 1.2rem;
    }
</style>
```

**Usage:**
```html
<button onclick="openWhatsAppQuote()">Get a Quote</button>
```

---

## 2. Product Card (Product Inquiry)

### **Version A: Clickable Image + Button**

```html
<!-- HTML -->
<div class="product-card">
    <div class="product-image" onclick="inquireProduct('Surgical Gloves')">
        <img src="gloves.jpg" alt="Surgical Gloves" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="product-info">
        <h3>Surgical Gloves</h3>
        <p>Premium latex-free surgical gloves for maximum safety.</p>
        <p class="price">Price: On Request</p>
        <button onclick="inquireProduct('Surgical Gloves')">
            <i class="fab fa-whatsapp"></i>
            Inquire
        </button>
    </div>
</div>

<!-- CSS -->
<style>
    .product-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    
    .product-image {
        width: 100%;
        height: 200px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .product-image:hover {
        filter: brightness(0.9);
        transform: scale(1.05);
    }
    
    .product-info {
        padding: 20px;
    }
    
    .product-info h3 {
        color: #2D3436;
        margin-bottom: 8px;
        font-size: 1.1rem;
    }
    
    .product-info p {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    
    .price {
        color: #2CA7C9;
        font-weight: 600;
        margin: 15px 0 !important;
    }
    
    .product-card button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        padding: 0.75rem 1.5rem;
        background: #25D366;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .product-card button:hover {
        background: #1ebd56;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }
</style>
```

---

### **Version B: Data Attributes (Scalable)**

```html
<!-- HTML -->
<div class="product-card">
    <img src="gloves.jpg" alt="Surgical Gloves" 
         class="product-image"
         data-whatsapp-type="product" 
         data-whatsapp-product="Surgical Gloves">
    <div class="product-info">
        <h3>Surgical Gloves</h3>
        <p>Premium latex-free surgical gloves.</p>
        <button data-whatsapp-type="product" 
                data-whatsapp-product="Surgical Gloves">
            <i class="fab fa-whatsapp"></i>
            Inquire
        </button>
    </div>
</div>

<!-- CSS -->
<style>
    .product-image[data-whatsapp-type="product"] {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .product-image[data-whatsapp-type="product"]:hover {
        filter: brightness(0.85);
        transform: scale(1.05);
    }
    
    [data-whatsapp-type] {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.75rem 1.5rem;
        background: #25D366;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    [data-whatsapp-type]:hover {
        background: #1ebd56;
        transform: translateY(-2px);
    }
</style>
```

---

## 3. Product Grid (Multiple Products)

```html
<!-- HTML -->
<div class="products-grid">
    <!-- Product 1 -->
    <div class="product-card">
        <img src="gloves.jpg" alt="Surgical Gloves" 
             onclick="inquireProduct('Surgical Gloves')"
             style="cursor: pointer; width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #2D3436;">Surgical Gloves</h3>
            <p style="color: #666; margin: 0 0 15px 0; font-size: 0.9rem;">Premium latex-free gloves</p>
            <button onclick="inquireProduct('Surgical Gloves')" style="width: 100%; padding: 0.75rem; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                <i class="fab fa-whatsapp"></i> Inquire
            </button>
        </div>
    </div>

    <!-- Product 2 -->
    <div class="product-card">
        <img src="bp-monitor.jpg" alt="Blood Pressure Monitor"
             onclick="inquireProduct('Blood Pressure Monitor')"
             style="cursor: pointer; width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #2D3436;">Blood Pressure Monitor</h3>
            <p style="color: #666; margin: 0 0 15px 0; font-size: 0.9rem;">Digital BP monitor for clinics</p>
            <button onclick="inquireProduct('Blood Pressure Monitor')" style="width: 100%; padding: 0.75rem; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                <i class="fab fa-whatsapp"></i> Inquire
            </button>
        </div>
    </div>

    <!-- Product 3 -->
    <div class="product-card">
        <img src="oxygen.jpg" alt="Oxygen Concentrator"
             onclick="inquireProduct('Oxygen Concentrator')"
             style="cursor: pointer; width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #2D3436;">Oxygen Concentrator</h3>
            <p style="color: #666; margin: 0 0 15px 0; font-size: 0.9rem;">Portable oxygen for remote areas</p>
            <button onclick="inquireProduct('Oxygen Concentrator')" style="width: 100%; padding: 0.75rem; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                <i class="fab fa-whatsapp"></i> Inquire
            </button>
        </div>
    </div>
</div>

<!-- CSS for Grid -->
<style>
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin: 30px 0;
    }
    
    .product-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
    }
</style>
```

---

## 4. CTA Section (Call to Action)

```html
<!-- HTML -->
<section class="cta-section" style="background: linear-gradient(135deg, #2CA7C9, #20a39e); padding: 60px 40px; border-radius: 12px; text-align: center; color: white;">
    <h2 style="font-size: 2rem; margin-bottom: 15px;">Ready to Get Started?</h2>
    <p style="font-size: 1.1rem; margin-bottom: 30px; opacity: 0.95;">Let our team help you find the right medical supply solutions.</p>
    
    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
        <!-- Method 1: onclick -->
        <button onclick="openWhatsAppQuote()" style="display: inline-flex; align-items: center; gap: 0.6rem; padding: 1rem 2.5rem; background: white; color: #2CA7C9; border: none; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer;">
            <i class="fab fa-whatsapp"></i>
            Request a Quote
        </button>
        
        <!-- Method 2: data attributes -->
        <button data-whatsapp-type="general" style="display: inline-flex; align-items: center; gap: 0.6rem; padding: 1rem 2.5rem; background: rgba(255, 255, 255, 0.2); color: white; border: 2px solid white; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer;">
            <i class="fab fa-whatsapp"></i>
            Chat with Us
        </button>
    </div>
</section>
```

---

## 5. Contact Form Alternative

```html
<!-- HTML -->
<div class="contact-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 40px;">
    <!-- Traditional Form -->
    <div>
        <h3>Send us a Message</h3>
        <form id="contactForm" style="display: flex; flex-direction: column; gap: 15px;">
            <input type="text" placeholder="Your Name" required style="padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
            <input type="email" placeholder="Your Email" required style="padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
            <textarea placeholder="Your Message" rows="5" style="padding: 10px; border: 1px solid #ddd; border-radius: 6px;"></textarea>
            <button type="submit" style="padding: 10px; background: #2CA7C9; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Send</button>
        </form>
    </div>

    <!-- WhatsApp Alternative -->
    <div style="background: #f0f8ff; padding: 30px; border-radius: 10px; display: flex; flex-direction: column; justify-content: center;">
        <h3 style="margin-bottom: 15px; color: #2D3436;">Prefer Quick Response?</h3>
        <p style="color: #666; margin-bottom: 25px;">Chat with us directly via WhatsApp and get an instant response from our team.</p>
        <button onclick="openWhatsAppQuote()" style="display: flex; align-items: center; justify-content: center; gap: 0.6rem; padding: 1rem 1.5rem; background: #25D366; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
            <i class="fab fa-whatsapp"></i>
            Start WhatsApp Chat
        </button>
    </div>
</div>

<!-- Responsive CSS -->
<style>
    @media (max-width: 768px) {
        .contact-container {
            grid-template-columns: 1fr;
            padding: 20px;
            gap: 20px;
        }
    }
</style>
```

---

## 6. Header/Navigation Link

```html
<!-- HTML -->
<header>
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
        <div class="logo">Logo</div>
        <ul style="display: flex; gap: 30px; list-style: none;">
            <li><a href="index.html">Home</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
                <button onclick="openWhatsAppQuote()" style="background: #25D366; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                    <i class="fab fa-whatsapp"></i> Get Quote
                </button>
            </li>
        </ul>
    </nav>
</header>
```

---

## 7. Product Listing Page

```html
<!-- HTML -->
<div class="product-listing">
    <div class="product-item" style="display: grid; grid-template-columns: 200px 1fr; gap: 20px; padding: 20px; border-bottom: 1px solid #eee;">
        <div>
            <img src="product.jpg" alt="ECG Machine" 
                 onclick="inquireProduct('12-Lead ECG Machine')"
                 style="width: 100%; height: 150px; object-fit: cover; cursor: pointer; border-radius: 6px; transition: 0.3s; hover: filter brightness(0.9);">
        </div>
        
        <div>
            <h4 style="margin: 0 0 10px 0; color: #2D3436;">12-Lead ECG Machine</h4>
            <p style="color: #666; margin: 0 0 15px 0;">Advanced ECG recording system for diagnostic accuracy and quick results.</p>
            <p style="color: #2CA7C9; font-weight: 600; margin: 0 0 15px 0;">Price: On Request</p>
            
            <button onclick="inquireProduct('12-Lead ECG Machine')" style="padding: 0.75rem 1.5rem; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                <i class="fab fa-whatsapp"></i> Get Details
            </button>
        </div>
    </div>
</div>
```

---

## 8. WhatsApp Icon-Only Button (Floating)

```html
<!-- HTML -->
<a href="javascript:void(0)" 
   onclick="openWhatsAppQuote()"
   style="position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 28px; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); transition: 0.3s; text-decoration: none; z-index: 999;"
   onmouseover="this.style.transform='scale(1.1)'"
   onmouseout="this.style.transform='scale(1)'">
    <i class="fab fa-whatsapp"></i>
</a>
```

---

## 9. Loading All Required Assets

Include this in your `<head>`:

```html
<!-- Font Awesome for WhatsApp Icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

Include this before closing `</body>`:

```html
<!-- Main Script with WhatsApp Functions -->
<script src="js/script.js"></script>
```

---

## 10. Full Working Example Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Integration Example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; padding: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { margin: 30px 0 20px; color: #2D3436; }
        .btn { background: #25D366; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .btn:hover { background: #1ebd56; }
    </style>
</head>
<body>
    <div class="container">
        <h1>WhatsApp Integration Examples</h1>
        
        <button class="btn" onclick="openWhatsAppQuote()">
            <i class="fab fa-whatsapp"></i> Get a Quote
        </button>
        
        <button class="btn" onclick="inquireProduct('Surgical Gloves')" style="margin-left: 10px;">
            <i class="fab fa-whatsapp"></i> Inquire: Surgical Gloves
        </button>
        
        <button class="btn" data-whatsapp-type="general" style="margin-left: 10px;">
            <i class="fab fa-whatsapp"></i> Contact Us (Data Attributes)
        </button>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

---

## Common Use Cases

### Getting User Input and Sending Product Inquiry

```html
<select id="productSelect" onchange="handleProductSelection()">
    <option value="">Select a product</option>
    <option value="Surgical Gloves">Surgical Gloves</option>
    <option value="Blood Pressure Monitor">Blood Pressure Monitor</option>
    <option value="Oxygen Concentrator">Oxygen Concentrator</option>
</select>

<script>
function handleProductSelection() {
    const product = document.getElementById('productSelect').value;
    if (product) {
        inquireProduct(product);
    }
}
</script>
```

### Sending Custom Messages

```javascript
// Send custom message
openWhatsAppChat('I need to place a bulk order for surgical gloves');

// Or use WhatsAppManager
WhatsAppManager.sendCustomMessage('I need urgent delivery within 24 hours');
```

### Dynamic Product Cards with JavaScript

```javascript
const products = [
    { name: 'Surgical Gloves', emoji: '🧤' },
    { name: 'Blood Pressure Monitor', emoji: '🩺' },
    { name: 'Oxygen Concentrator', emoji: '🫁' }
];

const container = document.getElementById('products');
products.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <div style="font-size: 2rem;">${product.emoji}</div>
            <h3>${product.name}</h3>
            <button onclick="inquireProduct('${product.name}')">
                <i class="fab fa-whatsapp"></i> Inquire
            </button>
        </div>
    `;
    container.appendChild(card);
});
```

---

## Testing

Test in different scenarios:

1. ✅ Click buttons on desktop browser
2. ✅ Click buttons on mobile device
3. ✅ Verify WhatsApp Web opens in new tab
4. ✅ Check message displays correctly
5. ✅ Test data attributes
6. ✅ Test onclick handlers
7. ✅ Test WhatsAppManager API

---

## Ready for Production

All code in this file is:
- ✅ Production-ready
- ✅ Copy-paste compatible
- ✅ No backend required
- ✅ Mobile-responsive
- ✅ Fully functional
- ✅ Easy to customize

**Just pick what you need and paste it into your website!**
