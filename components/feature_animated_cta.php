<?php
$feature_animated_cta_background = $layout['feature_animated_cta_background'];
$feature_animated_cta_title = $layout['feature_animated_cta_title'];
$feature_animated_cta_text = $layout['feature_animated_cta_text'];
$feature_animated_cta_button_text = $layout['feature_animated_cta_button_text'];
$feature_animated_cta_button_text_link = $layout['feature_animated_cta_button_text_link'];
$feature_animated_cta_image_1 = $layout['feature_animated_cta_image_1'];
$feature_animated_cta_image_2 = $layout['feature_animated_cta_image_2'];
$feature_animated_cta_image_3 = $layout['feature_animated_cta_image_3'];
$feature_animated_cta_image_sm = $layout['feature_animated_cta_image_sm'];
?>

<section class="feature-animated-cta">
    <div class="feature-animated-cta_container" style="background-image: url('<?php echo $feature_animated_cta_background['url']; ?>');">
        <div class="feature-animated-cta_container_txt">
            <h2 class="feature-animated-cta_title"><?php echo $feature_animated_cta_title; ?></h2>
            <div class="feature-animated-cta_text"><?php echo $feature_animated_cta_text; ?></div>
            <div class="feature-animated-cta_button">
                <a class="menu-cta" href="<?php echo $feature_animated_cta_button_text_link; ?>"><?php echo $feature_animated_cta_button_text; ?></a>
            </div>
        </div>
        <div class="feature-animated-cta_images">
            <div class="feature-animated-cta_images_cont show-on-desktop">
                <img class="feature-animated-cta_image_1" src="<?php echo $feature_animated_cta_image_1['url']; ?>" alt="<?php echo $feature_animated_cta_image_1['alt']; ?>">
                <img class="feature-animated-cta_image_2" src="<?php echo $feature_animated_cta_image_2['url']; ?>" alt="<?php echo $feature_animated_cta_image_2['alt']; ?>">
                <img class="feature-animated-cta_image_3" src="<?php echo $feature_animated_cta_image_3['url']; ?>" alt="<?php echo $feature_animated_cta_image_3['alt']; ?>">
            </div>
            <div class="feature-animated-cta_image_sm_cont show-on-mobile">
                <img class="feature-animated-cta_image_sm" src="<?php echo $feature_animated_cta_image_sm['url']; ?>" alt="<?php echo $feature_animated_cta_image_sm['alt']; ?>">
            </div>
        </div>
    </div>
</section>