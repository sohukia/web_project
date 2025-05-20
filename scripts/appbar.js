// Responsive menu toggle and highlight active link
(function () {
    // Wait for header to be loaded if injected dynamically
    function onReady(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    onReady(function () {
        // Wait for header injection if needed
        function tryInitAppbar() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const links = document.querySelectorAll('.appbar-link');
            if (!menuButton || !mobileMenu || links.length === 0) {
                setTimeout(tryInitAppbar, 50);
                return;
            }

            // Hamburger/Cross icon toggle and menu show/hide
            const icons = menuButton.querySelectorAll('svg');
            menuButton.addEventListener('click', function () {
                const isOpen = mobileMenu.classList.toggle('hidden') === false;
                if (icons.length > 1) {
                    icons[0].classList.toggle('hidden', isOpen); // hamburger
                    icons[1].classList.toggle('hidden', !isOpen); // cross
                }
                menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });

            // Hide menu on load (small screens)
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (icons.length > 1) {
                    icons[0].classList.remove('hidden');
                    icons[1].classList.add('hidden');
                }
                menuButton.setAttribute('aria-expanded', 'false');
            }

            // Hide menu and reset icon when a link is clicked (mobile)
            mobileMenu.addEventListener('click', function (e) {
                if (e.target.classList.contains('appbar-link')) {
                    mobileMenu.classList.add('hidden');
                    if (icons.length > 1) {
                        icons[0].classList.remove('hidden');
                        icons[1].classList.add('hidden');
                    }
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Highlight the correct link based on current page
            function highlightActiveLinks() {
                // Get current filename (ignore query/hash)
                let path = window.location.pathname.split('/').pop().toLowerCase();
                if (!path) path = 'home.html'; // fallback for root
                links.forEach(link => {
                    link.classList.remove('appbar-link-active');
                    const href = link.getAttribute('href');
                    if (href && href.toLowerCase() === path) {
                        link.classList.add('appbar-link-active');
                    }
                });
            }
            highlightActiveLinks();

            // Hide mobile menu when resizing to large screen
            window.addEventListener('resize', function () {
                if (window.innerWidth >= 640) {
                    mobileMenu.classList.add('hidden');
                    if (icons.length > 1) {
                        icons[0].classList.remove('hidden');
                        icons[1].classList.add('hidden');
                    }
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
        tryInitAppbar();
    });
})();