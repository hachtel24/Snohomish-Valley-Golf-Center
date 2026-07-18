# BLUEPRINT: SVGC IMAGE AND CONTENT INTEGRATION

## 1. Architectural Constraints
- **Responsive Media:** All assets display in styled responsive cards. Uses CSS Flexbox/Grid for image layouts.
- **Speakeasy Glassmorphic Theme:** Flyers are embedded inside thin brass-bordered, rounded panels with light orange hover glow shadows.
- **Accessibility:** Valid `alt` tags and structured schema content.

## 2. Dependency & Impact Graph
- `style.css` -> Define flyer grids and media display styles.
- `memberships.html` -> Embeds `svgc-membership-pricing.png` and flyer text details.
- `pro-shop.html` -> Embeds lesson packages, group instruction, fittings schedule, and special marketing promo flyers.
- `grill.html` -> Embeds `restaurant-menu.png` and full menu lists.
- `mini-golf.html` -> Embeds `minigolf-course-bridge.jpg`.

## 3. Milestone Checklist
- [ ] **Milestone 1:** Add media styling rules to `style.css` (e.g. `.flyer-img`, `.media-grid`, `.grid-2-cols`).
- [ ] **Milestone 2:** Update `memberships.html` with membership pricing flyer and comprehensive benefits description.
- [ ] **Milestone 3:** Update `grill.html` with restaurant menu flyer and all detailed digitized items.
- [ ] **Milestone 4:** Update `pro-shop.html` with lesson table, clinic flyers, fitting schedule, and re-grip/GHIN promos.
- [ ] **Milestone 5:** Update `mini-golf.html` with mini-golf course bridge photo.
- [ ] **Milestone 6:** Verify page loading and styling layouts.

## 4. Verification Commands
- Ensure local files open cleanly and assets load.
