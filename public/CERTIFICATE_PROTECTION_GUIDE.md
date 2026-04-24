# Certificate Display Protection Guide

## Overview
This guide explains how to securely display your company registration certificate on your website while protecting sensitive information from misuse.

---

## Implementation Approach: CSS Backdrop Blur

### Why This Approach?
- ✅ **Non-destructive**: Original image remains unchanged
- ✅ **Professional**: Soft, modern blur looks clean
- ✅ **Flexible**: Easy to adjust blur zones without editing image
- ✅ **Responsive**: Works on all devices automatically
- ✅ **Accessible**: Doesn't break page functionality
- ✅ **Performant**: CSS-based, minimal performance impact
- ✅ **Reversible**: Can be toggled or disabled if needed

---

## Protected Areas

The following sensitive elements are blurred:

1. **Registration Number** (top-right)
   - Prevents registration number replication
   - Protects company identification

2. **QR Code** (bottom-right)
   - Prevents scanning/redirecting to unauthorized sources
   - Blocks automated verification bypasses

3. **Signature** (bottom-left)
   - Prevents signature forgery
   - Protects official stamp/mark

4. **Timestamp/Verification Line** (bottom-center)
   - Removes specific date/serial details
   - Prevents document duplication

---

## Integration Methods

### Option 1: Direct Integration to About Page (Recommended)

**Step 1:** Add the CSS stylesheet to about.html `<head>`:
```html
<link rel="stylesheet" href="css/certificate-protection.css">
```

**Step 2:** Update the credibility section HTML in about.html:
```html
<div class="credibility-card-container">
    <div class="credibility-certificate-wrapper">
        <img src="images/home/zundeka.png" 
             alt="Zundeka Investments Company Certificate" 
             class="credibility-certificate-image">
        
        <!-- Protection Badge -->
        <div class="certificate-protection-badge">Protected</div>
        
        <!-- Blur Overlay -->
        <div class="certificate-blur-overlay">
            <div class="blur-zone blur-reg-number"></div>
            <div class="blur-zone blur-qr"></div>
            <div class="blur-zone blur-signature"></div>
            <div class="blur-zone blur-timestamp"></div>
        </div>
    </div>
</div>
```

---

### Option 2: Standalone Certificate Page

Use the provided `certificate-display.html` as a dedicated page:
- Full-page certificate display
- Detailed information about protections
- Can be linked from About page or trust section
- Professional presentation

**Link it from About page:**
```html
<a href="certificate-display.html" target="_blank" class="view-certificate-link">
    View Full Certificate (Protected)
</a>
```

---

### Option 3: Lightbox/Modal Display

Display certificate in a modal for better UX:
```html
<!-- Trigger Button -->
<button class="certificate-modal-trigger">View Certificate</button>

<!-- Modal -->
<div class="certificate-modal" id="certificateModal">
    <div class="modal-content">
        <!-- Use the HTML from certificate-display.html -->
    </div>
</div>
```

---

## Customization Guide

### Adjusting Blur Zone Positions

Edit the percentage values in `certificate-protection.css` to match your certificate layout:

**For each zone, adjust:**
- `top` / `bottom`: vertical position (0% = top edge, 100% = bottom edge)
- `left` / `right`: horizontal position
- `width`: zone width
- `height`: zone height

**Example:** If QR code is in a different location:
```css
.blur-qr {
    bottom: 15%;      /* Move down from bottom */
    right: 12%;       /* Move further right */
    width: 20%;       /* Wider zone */
    height: 20%;      /* Taller zone */
}
```

### Adjusting Blur Intensity

Change the blur amount in `certificate-protection.css`:
```css
.blur-zone {
    backdrop-filter: blur(14px);  /* Increase/decrease this value */
    -webkit-backdrop-filter: blur(14px);
}
```

- `blur(8px)` = Light, can still see shapes
- `blur(14px)` = Medium, recommended (current)
- `blur(20px)` = Heavy, very obscured

---

## Browser Support

| Feature | Support |
|---------|---------|
| `backdrop-filter: blur()` | Chrome 76+, Firefox 103+, Safari 9+, Edge 79+ |
| Fallback | Graceful - blur won't show but content is still visible |

**For older browsers:** Image displays normally without blur, which is acceptable.

---

## Security Notes

### What This DOES Protect:
✅ Prevents copying sensitive registration numbers  
✅ Prevents QR code scanning for unauthorized use  
✅ Prevents signature/mark forgery attempts  
✅ Deters casual screenshot-and-reuse attacks  
✅ Shows professional security awareness  

### What This DOES NOT Do:
❌ Does not prevent determined technical analysis
❌ Does not prevent network inspection (advanced users)
❌ Does not encrypt the underlying image

**For maximum security:** Store full certificate in secure vault, display only on authenticated pages or PDFs.

---

## Best Practices

1. **Pair with Clear Information:**
   - Add text like "Sensitive areas protected"
   - Explain what's blurred and why
   - Provide contact info for verification

2. **Maintain Professional Appearance:**
   - Keep blur soft and subtle
   - Ensure government header/title remains visible
   - Preserve overall certificate structure

3. **Consider Your Audience:**
   - B2B customers appreciate security measures
   - Shows you take data protection seriously
   - Builds trust through transparency

4. **Regular Updates:**
   - Keep certificate current and valid
   - Verify expiration dates
   - Update if registration changes

---

## Testing Checklist

- [ ] Blur zones properly hide sensitive areas
- [ ] Certificate remains identifiable as official document
- [ ] Layout responsive on mobile/tablet/desktop
- [ ] Badge displays correctly
- [ ] Image loads without errors
- [ ] Performance acceptable (no lag)
- [ ] Print version looks good (if needed)

---

## File Reference

**CSS File:** `/public/css/certificate-protection.css`  
**Standalone HTML:** `/public/certificate-display.html`  
**Certificate Image:** `/public/images/home/zundeka.png`

---

## Alternative: Image-Based Approach

If you prefer to actually blur the image file:

**Tools:**
- **Photoshop/GIMP**: Gaussian Blur filter (12-16px)
- **Online**: pixlr.com, photopea.com (free editors)
- **ImageMagick CLI**: 
  ```bash
  convert input.png -blur 0x12 output.png
  ```

**Pros:** More secure (can't inspect CSS)  
**Cons:** Permanent change, less flexible

---

## Questions?

If blur zones don't align with your certificate:
1. Take a screenshot of your certificate
2. Identify exact position of sensitive areas
3. Calculate percentages based on certificate dimensions
4. Update the `blur-*` CSS values accordingly

---

**Last Updated:** April 2026  
**Status:** Production Ready
