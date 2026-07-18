# BLUEPRINT: SNOHOMISH VALLEY GOLF CENTER WEBSITE REDESIGN

## 1. Architectural Constraints
- **Framework Target:** Pure static HTML5, CSS3, and JavaScript. Optimized for instant load times (SSG target).
- **Design Aesthetic:** Sunset Speakeasy (warm amber, fire glow, emerald/dark backgrounds, glassmorphic navigation and cards).
- **SEO & Structure:** Semantic HTML (header, main, section, footer), single H1 per page, valid schema tags.
- **Performance Budget:** Under 150kb initial bundle weight (no heavy JS libraries).

## 2. Golf-Themed Micro-Animations
- **"Perfect Putt" Footer Animation:** A CSS/JS-driven golf ball rolls across a turf-green line in the margins/footer, drops into a glowing cup, and triggers a soundless flag vibration and amber glow.
- **"Toptracer Tracer" Page Transitions:** Glowing golf ball with an amber tracer line overlay that runs during initial page render.
- **Fire Glow flickering lights:** Ambient pulsing box-shadows mimicking fires for buttons/cards.

## 3. Dependency & Impact Graph
- `style.css` -> Shared across all pages. Holds sunset Speakeasy variables, animations, grids.
- `app.js` -> Loaded on all pages. Mobile hamburger menu, forms validation, putt animations.
- HTML Pages -> All link to `style.css` and `app.js`.

## 4. Milestone Checklist
- [ ] **Milestone 1:** Establish global design system and styling variables in `style.css`.
- [ ] **Milestone 2:** Generate sunset golf range, fire table, and mini-golf images.
- [ ] **Milestone 3:** Create shared HTML header, footer, and "Perfect Putt" animated assets.
- [ ] **Milestone 4:** Build the 10 consolidated pages (`index.html`, `toptracer.html`, `mini-golf.html`, `grill.html`, `memberships.html`, `rentals.html`, `pro-shop.html`, `gift-cards.html`, `about.html`, `privacy.html`), embedding all scraped details and pricing.
- [ ] **Milestone 5:** Implement responsive grid styles and forms processing in `app.js`.
- [ ] **Milestone 6:** Validate files, SEO configurations, and page loads.

## 5. Verification Commands
- Ensure local files open cleanly in any web browser.
- Run tests on layout flow and mobile screen responsiveness.
