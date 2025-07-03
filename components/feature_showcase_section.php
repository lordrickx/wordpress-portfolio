<?php
$feature_grid_elements = $layout['feature_grid_elements'];
$feature_showcase_images = $layout['feature_showcase_image'];
$feature_showcase_images_responsive = $layout['feature_showcase_image_responsive'];
$feature_showcase_cta_background = $layout['feature_showcase_cta_background'];
$feature_showcase_cta_text = $layout['feature_showcase_cta_text'];
$feature_showcase_cta_button_text = $layout['feature_showcase_cta_button_text'];
$feature_showcase_cta_button_link = $layout['feature_showcase_cta_button_link'];

?>





<section class="feature-showcase-section">
    <div class="feature-showcase-section_cont">
        <div class="feature-showcase-section_top">
            <div class="feature-showcase-grid">
                <?php foreach ($feature_grid_elements as $element) { ?>
                    <div class="feature-showcase-item">
                        <?php if ($element['feature_grid_element_icon']) { ?>
                            <div class="feature-showcase-icon">
                                <div class="feature_showcase_icon_cont">
                                    <img src="<?php echo $element['feature_grid_element_icon']['url']; ?>" alt="<?php echo $element['feature_grid_element_icon']['alt']; ?>">
                                </div>
                            </div>
                        <?php } ?>
                        <?php if ($element['feature_grid_element_text']) { ?>
                            <p class="feature-showcase-text"><?php echo $element['feature_grid_element_text']; ?></p>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
            <?php if ($feature_showcase_cta_text) { ?>
                <div class="feature-showcase-section_bottom show-on-mobile" style="background-image: url('<?php echo $feature_showcase_cta_background['url']; ?>');">

                    <div class="feature-showcase-cta-content">
                        <h2 class="feature-showcase-cta-text"><?php echo $feature_showcase_cta_text; ?></h2>
                        <?php if ($feature_showcase_cta_button_text && $feature_showcase_cta_button_link) { ?>
                            <a href="<?php echo $feature_showcase_cta_button_link; ?>" class="menu-cta feature-showcase-cta-button">
                                <?php echo $feature_showcase_cta_button_text; ?>
                            </a>
                        <?php } ?>
                    </div>

                </div>
            <?php } ?>
            <?php if ($feature_showcase_images) { ?>
                <div class="feature-showcase-image">
                    <div class="swiper feature-showcase-swiper">
                        <div class="swiper-wrapper">
                            <?php foreach ($feature_showcase_images as $index => $image) { ?>
                                <div class="swiper-slide">
                                    <div class="feature-showcase-slide" 
                                         data-desktop-bg="<?php echo $image['url']; ?>"
                                         data-mobile-bg="<?php echo isset($feature_showcase_images_responsive[$index]) ? $feature_showcase_images_responsive[$index]['url'] : $image['url']; ?>"
                                         style="background-image: url('<?php echo $image['url']; ?>');">
                                        <?php if (isset($feature_showcase_images_responsive[$index])) { ?>
                                            <picture>
                                                <source media="(max-width: 768px)" srcset="<?php echo $feature_showcase_images_responsive[$index]['url']; ?>">
                                                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                            </picture>
                                        <?php } else { ?>
                                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                        <?php } ?>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <?php if (empty($feature_showcase_cta_text)) { ?>
                        <div class="feature-showcase-image_button">
                            <a href="<?php echo $feature_showcase_cta_button_link; ?>" class="menu-cta feature-showcase-cta-button">
                                Schedule a Demo
                            </a>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
        <?php if ($feature_showcase_cta_text) { ?>
            <div class="feature-showcase-section_bottom show-on-desktop" style="background-image: url('<?php echo $feature_showcase_cta_background['url']; ?>');">

                <div class="feature-showcase-cta-content">
                    <h2 class="feature-showcase-cta-text"><?php echo $feature_showcase_cta_text; ?></h2>
                    <?php if ($feature_showcase_cta_button_text && $feature_showcase_cta_button_link) { ?>
                        <a href="<?php echo $feature_showcase_cta_button_link; ?>" class="menu-cta feature-showcase-cta-button">
                            <?php echo $feature_showcase_cta_button_text; ?>
                        </a>
                    <?php } ?>
                </div>

            </div>
        <?php } ?>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Desktop slider configuration
        const swiper = new Swiper('.feature-showcase-swiper', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: true,
                },
                993: {
                    slidesPerView: 1,
                }
            },
            on: {
                slideChange: function() {
                    updateBackgroundImages();
                }
            }
        });

        // Función para actualizar los background-images
        function updateBackgroundImages() {
            const isMobile = window.innerWidth <= 768;
            const slides = document.querySelectorAll('.feature-showcase-slide');
            
            slides.forEach(slide => {
                const desktopBg = slide.getAttribute('data-desktop-bg');
                const mobileBg = slide.getAttribute('data-mobile-bg');
                const currentBg = isMobile ? mobileBg : desktopBg;
                
                if (slide.style.backgroundImage !== `url('${currentBg}')`) {
                    slide.style.backgroundImage = `url('${currentBg}')`;
                }
            });
        }

        // Actualizar background-images al cambiar el tamaño de la ventana
        let resizeTimeoutBg;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeoutBg);
            resizeTimeoutBg = setTimeout(updateBackgroundImages, 250);
        });

        // Actualizar background-images al cargar
        updateBackgroundImages();

        // Función para sincronizar alturas
        function syncHeights() {
            // Solo aplicar en pantallas grandes
            if (window.innerWidth >= 992) {
                const gridColumn = document.querySelector('.feature-showcase-grid');
                const swiperContainer = document.querySelector('.feature-showcase-swiper');
                const buttonContainer = document.querySelector('.feature-showcase-image_button');
                
                if (gridColumn && swiperContainer) {
                    const gridHeight = gridColumn.offsetHeight;
                    let swiperHeight = gridHeight;

                    // Si existe el botón, restamos su altura y el gap
                    if (buttonContainer) {
                        const buttonHeight = buttonContainer.offsetHeight;
                        const gap = 20;
                        swiperHeight = gridHeight - buttonHeight - gap;
                    }
                    
                    // Aplicamos la altura al swiper
                    swiperContainer.style.height = `${swiperHeight}px`;

                    // Ajustamos las imágenes dentro del swiper
                    const slides = swiperContainer.querySelectorAll('.feature-showcase-slide');
                    slides.forEach(slide => {
                        slide.style.height = `${swiperHeight}px`;
                    });
                }
            } else {
                // En móviles, resetear las alturas
                const swiperContainer = document.querySelector('.feature-showcase-swiper');
                if (swiperContainer) {
                    swiperContainer.style.height = 'auto';
                    const slides = swiperContainer.querySelectorAll('.feature-showcase-slide');
                    slides.forEach(slide => {
                        slide.style.height = 'auto';
                    });
                }
            }
        }

        // Sincronizar alturas al cargar
        syncHeights();

        // Sincronizar alturas cuando cambia el tamaño de la ventana
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(syncHeights, 250);
        });

        // Sincronizar alturas cuando cambia el contenido
        const observer = new MutationObserver(syncHeights);
        const config = { 
            childList: true, 
            subtree: true,
            attributes: true,
            characterData: true
        };
        
        // Observar cambios en ambas columnas
        const gridColumn = document.querySelector('.feature-showcase-grid');
        const imageColumn = document.querySelector('.feature-showcase-image');
        
        if (gridColumn) {
            observer.observe(gridColumn, config);
        }
        if (imageColumn) {
            observer.observe(imageColumn, config);
        }

        // Sincronizar cuando las imágenes se cargan
        const images = document.querySelectorAll('.feature-showcase-slide img');
        images.forEach(img => {
            if (img.complete) {
                syncHeights();
            } else {
                img.addEventListener('load', syncHeights);
            }
        });
    });
</script>