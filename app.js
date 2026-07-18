document.addEventListener('DOMContentLoaded', () => {
    // --- STICKY NAV HEADER ---
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page was loaded scrolled down

    // --- MOBILE DRAWER TOGGLE ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger animation state
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
        });

        // Close mobile drawer when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // --- PERFECT PUTT FOOTER ANIMATION CONTROLLER ---
    const puttBall = document.querySelector('.putt-ball');
    const puttFlag = document.querySelector('.putt-flag');
    if (puttBall && puttFlag) {
        // The ball animation is 12s. It sinks into the hole at ~45% (5.4 seconds).
        // Let's shake the flag stick at exactly 5.4s in every 12s loop.
        const shakeFlag = () => {
            setTimeout(() => {
                puttFlag.classList.add('flag-vibe');
                // Remove shake after animation finishes so it can be re-triggered
                setTimeout(() => {
                    puttFlag.classList.remove('flag-vibe');
                }, 600);
            }, 5400);
        };
        
        shakeFlag(); // Start first loop
        setInterval(shakeFlag, 12000); // Repeat every 12 seconds
    }

    // --- DYNAMIC PRICING TOGGLE WIDGET ---
    const priceToggle = document.getElementById('priceToggle');
    if (priceToggle) {
        priceToggle.addEventListener('change', (e) => {
            const isMember = e.target.checked;
            const priceElements = document.querySelectorAll('.price-val');
            
            priceElements.forEach(el => {
                const publicVal = el.getAttribute('data-public');
                const memberVal = el.getAttribute('data-member');
                
                if (isMember) {
                    el.textContent = memberVal;
                    el.classList.add('member-price-highlight');
                } else {
                    el.textContent = publicVal;
                    el.classList.remove('member-price-highlight');
                }
            });
        });
    }

    // --- TABBED INTERFACE HANDLING (RENTALS) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const activeContent = document.getElementById(targetTab);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
    }

    // --- INQUIRY FORM SUCCESS STATE OVERLAYS ---
    const inquiryForms = document.querySelectorAll('.svgc-form');
    inquiryForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Highlight inputs with a glowing orange pulse and clear them
            const inputs = form.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.style.borderColor = 'var(--primary-sunset)';
                input.style.boxShadow = '0 0 15px rgba(255, 126, 71, 0.4)';
            });

            // Replace form inner content with a beautiful success message card
            setTimeout(() => {
                form.innerHTML = `
                    <div class="form-success-card" style="text-align: center; padding: 2rem 0; animation: fadeIn 0.8s ease;">
                        <svg viewBox="0 0 24 24" style="width: 64px; height: 64px; fill: var(--secondary-amber); margin-bottom: 1.5rem; filter: drop-shadow(0 0 10px rgba(255,176,58,0.4));">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h3 style="font-family: var(--font-heading); color: var(--text-cream); margin-bottom: 1rem; font-size: 1.5rem;">Request Submitted</h3>
                        <p style="color: var(--text-muted); font-weight: 300;">Thank you for reaching out to Snohomish Valley Golf Center. A member of our family will get back to you within 24 hours.</p>
                    </div>
                `;
            }, 600);
        });
    });
});
