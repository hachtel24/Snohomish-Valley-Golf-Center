# Blueprint: Fix Empty Card Spaces & Image Clipping

This plan addresses the layout bug where local flyer/photo images inside `.flyer-card` elements (e.g., Mini Golf practice green, Valley Grill breakfast menu, PGA pro-shop instruction flyer) appear clipped or invisible, leaving giant empty black spaces inside the cards.

## Root Cause Analysis
Inside the CSS Grid layout columns (`.grid-2-cols` or `.tab-content.active`):
1. The `.flyer-card` has a default stylesheet height of `height: 100%;`.
2. This stretches the card to match the height of the adjacent column (which contains long lists of text menu items or rules).
3. Under Flexbox layout rules inside the stretched `.flyer-card`, the browser shrinks the image (`<img>` tags default to `flex-shrink: 1;`) to try and fit everything within the forced height.
4. Because the text elements and padding cannot shrink, the image is compressed down to a tiny slice or zero height, making it invisible or heavily cropped, leaving a massive empty black space at the bottom of the card.

## Proposed Changes

### [Component: CSS Styles]

#### [MODIFY] [style.css](file:///C:/Users/hacht/OneDrive/Documents/Obsidian%20Vault/snohomishvalleygolfcenter/style.css)
- Change `.flyer-card` height property from `100%` to `auto` so that the card naturally wraps its contents without stretching flex elements.
- Add `flex-shrink: 0;` to `.flyer-img` to guarantee the browser never shrinks the image aspect ratio under flex calculations.

```diff
 .flyer-card {
     background: var(--bg-card);
     border: 1px solid var(--border-color);
     border-radius: 12px;
     padding: 1.5rem;
     display: flex;
     flex-direction: column;
     gap: 1.5rem;
     transition: var(--transition-smooth);
-    height: 100%;
+    height: auto;
 }
 .flyer-card:hover {
     border-color: var(--border-hover);
     box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255, 126, 71, 0.15);
 }
 .flyer-img {
     width: 100%;
     height: auto;
+    flex-shrink: 0;
     border-radius: 6px;
     border: 1px solid rgba(197, 160, 89, 0.25);
     transition: var(--transition-smooth);
 }
```

## Step-by-Step Milestones
1. **Apply CSS Fix:** Modify `style.css` with the updated height and flex-shrink declarations.
2. **Local Server Review:** Inspect `mini-golf.html`, `grill.html`, and `pro-shop.html` to confirm images are fully displayed and card empty spaces are removed.

## Verification Commands
- Visual verification by me 