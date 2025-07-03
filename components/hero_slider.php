<?php

$hero_slider_slide = $layout['hero_slider_slide'];

?>

<section class="hero_slider">
    <div class="container">
        <div class="swiper hero-slider">
            <div class="swiper-wrapper">
                <?php if ($hero_slider_slide): ?>
                    <?php foreach ($hero_slider_slide as $slide): ?>
                        <div class="swiper-slide">
                            <div class="slide" style="background-image: url(<?php echo $slide['hero_slider_slide_image']['url']; ?>);">
                                <div class="slide-content">
                                    <?php if ($slide['hero_slider_slide_title']): ?>
                                        <h2 class="title"><?php echo $slide['hero_slider_slide_title']; ?></h2>
                                    <?php endif; ?>
                                    
                                    <?php if ($slide['hero_slider_slide_sub_title']): ?>
                                        <h3 class="sub-title"><?php echo $slide['hero_slider_slide_sub_title']; ?></h3>
                                    <?php endif; ?>
                                    
                                    <?php if ($slide['hero_slider_slide_text']): ?>
                                        <div class="text"><?php echo $slide['hero_slider_slide_text']; ?></div>
                                    <?php endif; ?>
                                </div>
                                
                                <?php if ($slide['hero_slider_slide_image']): ?>
                                    <div class="slide-image">
                                        <img src="<?php echo $slide['hero_slider_slide_image']['url']; ?>"
                                             alt="<?php echo $slide['hero_slider_slide_image']['alt']; ?>" />
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        new Swiper('.hero-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    });
</script>