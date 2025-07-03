<?php

$title = $layout['title'];
$text = $layout['text'];
$button_text = $layout['button_text'];
$button_link = $layout['button_link'];
$image = $layout['image'];
?>

<section class="two-cols-image-text-button">
    <div class="two-cols-image-text-button_container">
        <div class="text_col">
            <?php if ($title): ?>
                <h2 class="title"><?php echo $title; ?></h2>
            <?php endif; ?>

            <?php if ($text): ?>
                <div class="text"><?php echo $text; ?></div>
            <?php endif; ?>

            <?php if ($button_text && $button_link): ?>
                <a href="<?php echo $button_link; ?>" class="menu-cta"><?php echo $button_text; ?></a>
            <?php endif; ?>
        </div>

        <div class="img_col">
            <?php if ($image): ?>
                <div class="image">
                    <img src="<?php echo $image['url']; ?>"
                        alt="<?php echo $image['alt']; ?>" />
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>