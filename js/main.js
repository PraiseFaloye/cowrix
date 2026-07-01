/* ==========================================================================
   ZOENIX PLATFORM INITIALIZATION SCRIPT
   Architecture Design: Modular Vanilla Event Processing Ecosystem
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Structural Global Node Registry Initialization Lifecycle
    initNavigationDrawer();
    initStickyNavbarEngine();
    initAccordionEcosystem();
    initIntersectionObserverRouter();
    initCountdownTimerEngine();
    initFormSubmissionPipeline();
});

/* ==========================================================================
   1. MOBILE MENU DRAWER ENGINE
   ========================================================================== */
function initNavigationDrawer() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuBtn || !mobileDropdown) return;

    const toggleMenu = () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileDropdown.classList.toggle('hidden');
        
        // Transform SVG Hamburger Asset Path dynamically 
        if (!isExpanded) {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close open context menu frames instantly when link coordinates hit click operations
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileDropdown.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });
}

/* ==========================================================================
   2. NAVBAR STICKY GLASSMORPHISM ENGINE
   ========================================================================== */
function initStickyNavbarEngine() {
    const container = document.getElementById('navbar-container');
    const navbar = document.getElementById('main-navbar');
    const scrollTopBtn = document.getElementById('scroll-to-top');

    if (!container || !navbar) return;

    const handleScrollMetrics = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 40) {
            // Apply Premium Float Pill Glassmorphism Transformation State
            container.classList.remove('py-6');
            container.classList.add('py-3');
            
            navbar.classList.remove('rounded-none', 'bg-transparent', 'border-transparent');
            navbar.classList.add(
                'bg-white/80', 
                'backdrop-blur-xl', 
                'shadow-lg', 
                'shadow-slate-100/40', 
                'border', 
                'border-slate-200/40', 
                'rounded-full', 
                'max-w-5xl'
            );
            
            // Enable floating top-scroll navigation action node
            if (scrollTopBtn) {
                scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                scrollTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        } else {
            // Return to Default Transparent Structural Top Section Context Layout
            container.classList.remove('py-3');
            container.classList.add('py-6');
            
            navbar.classList.remove(
                'bg-white/80', 
                'backdrop-blur-xl', 
                'shadow-lg', 
                'shadow-slate-100/40', 
                'border', 
                'border-slate-200/40', 
                'rounded-full', 
                'max-w-5xl'
            );
            navbar.classList.add('rounded-none', 'bg-transparent');

            if (scrollTopBtn) {
                scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                scrollTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        }
    };

    // Debounce wrapper performance optimized event router mapping target
    let executionFrame;
    window.addEventListener('scroll', () => {
        if (executionFrame) cancelAnimationFrame(executionFrame);
        executionFrame = requestAnimationFrame(handleScrollMetrics);
    }, { passive: true });

    // Scroll to top programmatic operations context logic bound to button node
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ==========================================================================
   3. INTERACTIVE FAQ ACCORDION ECOSYSTEM
   ========================================================================== */
function initAccordionEcosystem() {
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const currentItem = trigger.closest('.accordion-item');
            const currentContent = currentItem.querySelector('.accordion-content');
            const currentSvg = trigger.querySelector('svg');
            const isCurrentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';

            // Mutate and isolate configuration to enforce single active segment logic path
            document.querySelectorAll('.accordion-item').forEach(item => {
                const itemTrigger = item.querySelector('.accordion-trigger');
                const itemContent = item.querySelector('.accordion-content');
                const itemSvg = itemTrigger.querySelector('svg');

                itemTrigger.setAttribute('aria-expanded', 'false');
                itemContent.style.maxHeight = null;
                itemContent.classList.remove('opacity-100');
                itemContent.classList.add('opacity-0');
                if (itemSvg) itemSvg.classList.remove('rotate-180');
                item.classList.remove('bg-white', 'shadow-md', 'border-slate-200/60');
                item.classList.add('bg-slate-50/50', 'border-slate-100');
            });

            // Toggle selected item status context mapping criteria checks
            if (!isCurrentlyExpanded) {
                trigger.setAttribute('aria-expanded', 'true');
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
                currentContent.classList.remove('opacity-0');
                currentContent.classList.add('opacity-100');
                if (currentSvg) currentSvg.classList.add('rotate-180');
                currentItem.classList.remove('bg-slate-50/50', 'border-slate-100');
                currentItem.classList.add('bg-white', 'shadow-md', 'border-slate-200/60');
            }
        });
    });
}

/* ==========================================================================
   4. TRANSITION REVEAL INTERSECTION OBSERVER ROUTER
   ========================================================================== */
function initIntersectionObserverRouter() {
    // Injection styles defining visual core metrics states directly for transitions
    const styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
        .fade-in-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
        }
        .fade-in-up.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-slide-item {
            opacity: 0;
            transform: translateX(-16px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-slide-item.is-visible {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    document.head.appendChild(styleBlock);

    const entranceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop tracking elements once animation cycle finishes
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    // Target elements across global structures registers
    document.querySelectorAll('.fade-in-up, .reveal-slide-item').forEach(el => {
        entranceObserver.observe(el);
    });
}

/* ==========================================================================
   5. CTA CONSOLE LAUNCH COUNTDOWN ENGINE
   ========================================================================== */
function initCountdownTimerEngine() {
    const daysNode = document.getElementById('timer-days');
    const hoursNode = document.getElementById('timer-hours');
    const minsNode = document.getElementById('timer-mins');
    const secsNode = document.getElementById('timer-secs');

    if (!daysNode || !hoursNode || !minsNode || !secsNode) return;

    // Target allocation launch time calculations offset setup coordinates (e.g., 14 Days Out)
    const targetLaunchTimestamp = new Date().getTime() + (14 * 24 * 60 * 60 * 1000);

    const processTimeMatrix = () => {
        const structuralNow = new Date().getTime();
        const chronometerDelta = targetLaunchTimestamp - structuralNow;

        if (chronometerDelta <= 0) {
            clearInterval(timerInterval);
            return;
        }

        const calculatedDays = Math.floor(chronometerDelta / (1000 * 60 * 60 * 24));
        const calculatedHours = Math.floor((chronometerDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const calculatedMins = Math.floor((chronometerDelta % (1000 * 60 * 60)) / (1000 * 60));
        const calculatedSecs = Math.floor((chronometerDelta % (1000 * 60)) / 1000);

        // Render values padded structural definitions string formatting conversion
        daysNode.textContent = String(calculatedDays).padStart(2, '0');
        hoursNode.textContent = String(calculatedHours).padStart(2, '0');
        minsNode.textContent = String(calculatedMins).padStart(2, '0');
        secsNode.textContent = String(calculatedSecs).padStart(2, '0');
    };

    processTimeMatrix();
    const timerInterval = setInterval(processTimeMatrix, 1000);
}

/* ==========================================================================
   6. ONBOARDING SUBMISSION ENGINE PIPELINE
   ========================================================================== */
function initFormSubmissionPipeline() {
    const formNode = document.getElementById('onboarding-form');
    if (!formNode) return;

    formNode.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = formNode.querySelector('button[type="submit"]');
        const userEmail = document.getElementById('form-email')?.value;
        const fallbackContainer = formNode.parentNode;

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Validating Credentials...";
        }

        // Simulate secure API ledger transaction tracking verification responses
        setTimeout(() => {
            if (fallbackContainer) {
                fallbackContainer.innerHTML = `
                    <div class="text-center py-8 space-y-4 fade-in-up is-visible">
                        <div class="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                        <h4 class="text-lg font-bold text-slate-900">Allocation Spot Confirmed</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Priority access sequence parameters mapped directly to <strong>${userEmail}</strong>. Vetting instructions follow shortly.</p>
                    </div>
                `;
            }
        }, 1200);
    });
}


// Inside your main.js file
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(button => {
        button.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const isOpen = currentItem.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isOpen) {
                currentItem.classList.add('active');
            }
        });
    });
});