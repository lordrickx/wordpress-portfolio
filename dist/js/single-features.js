console.log('Single Features JS file loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    jQuery(function ($) {
        console.log('jQuery ready');

        function setViewportWidth() {
            var viewportWidth = $(window).width(); // Get viewport width
            $(':root').css('--viewport-width', viewportWidth + 'px'); // Set CSS variable
        }

        setViewportWidth();

        // Update the variable on window resize
        $(window).resize(function() {
            setViewportWidth();
        });

        //remove mobile header fixed position and fix padding
        function fixMobileHeader() {
            // Get current post ID from WordPress global variable
            var currentPostId = window.acroCurrentPostId || 0;
            
            // Special behavior for post with ID 6274
            if (currentPostId == 6274) {
                // Make header sticky for this specific post
                $('.header').css({
                    'position': 'sticky',
                    'top': '0',
                    'z-index': '100',
                    'background-color': '#fff', // Ensure background is visible
                    'box-shadow': '0 2px 5px rgba(0,0,0,0.1)' // Optional: add shadow for better visibility
                });
                
                // Apply smooth scroll effect like in pages outside CPT
                applySmoothScroll();
                
                // Ensure main container has correct scroll behavior
                $('#smooth-wrapper').css({
                    'overflow': 'auto',
                    'height': 'auto'
                });
                
                // Apply smooth scroll to internal links
                $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top - 100 // Adjust for fixed header
                            }, 800);
                            return false;
                        }
                    }
                });
            } else {
                // Normal behavior for other posts
                $('.header').css({'position': 'relative', 'padding': '16px 0'});
                $('.logged-in .header').each(function () {
                    this.style.setProperty( 'top', '0', 'important' );
                });
            }
        }

        // Function to apply smooth scroll effect like in pages outside CPT
        function applySmoothScroll() {
            // Ensure main container has correct scroll behavior
            $('body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
            
            // Apply smooth scroll to internal links
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top - 100 // Adjust for fixed header
                        }, 800);
                        return false;
                    }
                }
            });
            
            // Ensure sticky elements work correctly
            $('.sticky-element').css({
                'position': 'sticky',
                'top': '100px', // Adjust as needed
                'z-index': '10'
            });
        }
        

        fixMobileHeader()

        function fixStickyScroll() {
            // Get current post ID from WordPress global variable
            var currentPostId = window.acroCurrentPostId || 0;
            
            // Special behavior for post with ID 6274
            if (currentPostId == 6274) {
                // For post 6274, don't apply these scroll restrictions
                $('.footer-holder').css({'overflow': 'auto'});
                $('#smooth-wrapper').css({'overflow': 'auto'});
            } else {
                // Normal behavior for other posts
                $('.footer-holder').css({'overflow': 'hidden'});
                $('#smooth-wrapper').css({'overflow': 'unset'});
            }
        }

        fixStickyScroll()

        // Check if elements exist before adding event listeners
        function initializeMobileMenu() {
            const mobileButton = document.querySelector('.feature_header__mobile_menu');
            const mobileMenu = document.querySelector('.feature_header');
            const featureHeaderContainer = document.querySelector('.feature_header_container');
            const mobileMenuClose = document.querySelector('.feature_header__mobile_menu-close');

            console.log('Elements found:', {
                mobileButton: !!mobileButton,
                mobileMenu: !!mobileMenu,
                featureHeaderContainer: !!featureHeaderContainer,
                mobileMenuClose: !!mobileMenuClose
            });

            // Function to handle scroll and container position
            function handleScroll() {
                const container = featureHeaderContainer;
                const containerRect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                console.log('Container bottom position:', containerRect.bottom);
                console.log('Window height:', windowHeight);
                console.log('Is container at bottom?', containerRect.bottom >= windowHeight);
                
                // If container is at the bottom of the window
                if (containerRect.bottom >= windowHeight) {
                    console.log('Adding bottom class');
                    container.classList.add('feature_header_container--bottom');
                } else {
                    console.log('Removing bottom class');
                    container.classList.remove('feature_header_container--bottom');
                }
            }

            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
            // Run once on load to set initial state
            console.log('Initializing scroll handler');
            handleScroll();

            // Only proceed if all required elements exist
            if (!mobileButton || !mobileMenu || !featureHeaderContainer || !mobileMenuClose) {
                console.log('Missing elements, exiting initialization');
                return; // Exit silently if any element is missing
            }

            mobileButton.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Configuración inicial
                featureHeaderContainer.style.position = 'fixed';
                featureHeaderContainer.style.marginLeft = '0';
                featureHeaderContainer.style.paddingTop = '10px';
                featureHeaderContainer.style.overflow = 'auto';
                featureHeaderContainer.style.zIndex = '9999';
                featureHeaderContainer.style.height = '100%';
                featureHeaderContainer.style.transform = 'translateY(100%)';
                featureHeaderContainer.style.transition = 'none';
                mobileMenu.style.overflow = 'auto';

                // Mostramos el menú
                mobileMenu.classList.remove('feature_header__mobile_menu--hidden');
                mobileButton.classList.add('hidden');
                document.body.style.overflow = 'hidden';

                // Forzamos un reflow
                featureHeaderContainer.offsetHeight;

                // Iniciamos la animación
                featureHeaderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                featureHeaderContainer.style.transform = 'translateY(0)';
            });

            mobileMenuClose.addEventListener('click', (e) => {
                e.preventDefault();

                // Iniciamos la animación de cierre
                featureHeaderContainer.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                featureHeaderContainer.style.transform = 'translateY(100%)';

                // Esperamos a que termine la animación
                setTimeout(() => {
                    mobileMenu.classList.add('feature_header__mobile_menu--hidden');
                    mobileButton.classList.remove('hidden');
                    document.body.style.overflow = '';
                    featureHeaderContainer.style.position = 'sticky';
                    featureHeaderContainer.style.marginLeft = '0%';
                    featureHeaderContainer.style.paddingTop = '0px';
                    featureHeaderContainer.style.overflow = 'none';
                    featureHeaderContainer.style.height = 'auto';
                    featureHeaderContainer.style.opacity = '1';
                    featureHeaderContainer.style.zIndex = '9999';
                    featureHeaderContainer.style.transform = 'none';
                    featureHeaderContainer.style.transition = 'none';
                    mobileMenu.style.overflow = 'none';
                }, 500);
            });

            // Agregar los estilos CSS necesarios
            const style = document.createElement('style');
            style.textContent = `
                .menu-slide-initial {
                    transform: translateY(100%);
                    transition: none !important;
                }
                .menu-slide-open {
                    transform: translateY(0);
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .menu-slide-close {
                    transform: translateY(100%);
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                /* Estilos para la animación persistente del hover */
                .feature-animated-cta_image_2,
                .feature-animated-cta_image_3 {
                    transition: all 0.5s ease-in-out;
                }

                .feature-animated-cta.hover-active .feature-animated-cta_image_2 {
                    bottom: 43px !important;
                    right: 80% !important;
                }

                .feature-animated-cta.hover-active .feature-animated-cta_image_3 {
                    bottom: 50px !important;
                    right: 117% !important;
                }
            `;
            document.head.appendChild(style);

            // Configurar la animación GSAP para el CTA animado
            const animatedCta = document.querySelector('.feature-animated-cta');
            if (animatedCta) {
                // Crear el ScrollTrigger
                gsap.to(animatedCta, {
                    scrollTrigger: {
                        trigger: animatedCta,
                        start: "top center", // Cuando el top del elemento llegue al centro del viewport
                        once: true, // La animación ocurrirá solo una vez
                        onEnter: () => {
                            // Agregar la clase hover-active cuando el elemento entre en el viewport
                            animatedCta.classList.add('hover-active');
                        }
                    }
                });
            }
        }

        // Call initialization function when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobileMenu);
        } else {
            initializeMobileMenu();
        }

        $j(document).ready(function () {
            linkInterno = $j('a[href^="#"]');
            linkInterno.on('click', function (e) {
                e.preventDefault();
                var href = $j(this).attr('href');
                var offset = 100; // Adjust this value for more or less space
                $j('html, body').animate({ 
                    scrollTop: $j(href).offset().top - offset 
                }, 'slow');
            });
        });
    });
});