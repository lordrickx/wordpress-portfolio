<?php
$title = $layout['masonry_component_title'];
$sub_title = $layout['masonry_component_sub_title'];
$cards = $layout['masonry_component_card'];
?>

<section class="masonry-component">
    <div class="masonry-component_container">
        <?php if ($title): ?>
            <h2 class="masonry-component_title"><?php echo $title; ?></h2>
        <?php endif; ?>

        <?php if ($sub_title): ?>
            <h3 class="masonry-component_subtitle"><?php echo $sub_title; ?></h3>
        <?php endif; ?>

        <?php if ($cards): ?>
            <div class="masonry-component_cards">
                <!-- Card 1 -->
                <div class="masonry-card card-1">
                    <div class="masonry_header">
                        <?php if ($cards[0]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[0]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[0]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[0]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[0]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[0]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[0]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[0]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[0]['masonry_card_more_images_2']): ?>
                                <div class="additional-image green_icon">
                                    <img src="<?php echo $cards[0]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[0]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[0]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[0]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[0]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[0]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[0]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 2 -->
                <div class="masonry-card card-2">
                    <div class="masonry_header">
                        <?php if ($cards[1]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[1]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[1]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[1]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[1]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[1]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[1]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[1]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[1]['masonry_card_more_images_2']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[1]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[1]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[1]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[1]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[1]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[1]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[1]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 3 -->
                <div class="masonry-card card-3">
                    <div class="masonry_header">
                        <?php if ($cards[2]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[2]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[2]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[2]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[2]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[2]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[2]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[2]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[2]['masonry_card_more_images_2']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[2]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[2]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[2]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[2]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[2]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[2]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[2]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 4 -->
                <div class="masonry-card card-4">
                    <div class="masonry_header">
                        <?php if ($cards[3]['icon_next_to_title']): ?>
                            <img src="<?php echo $cards[3]['icon_next_to_title']['url']; ?>"
                                alt="<?php echo $cards[3]['icon_next_to_title']['alt']; ?>" />
                            <?php if ($cards[3]['masonry_card_title']): ?>
                                <h4 class="masonry-card_title"><?php echo $cards[3]['masonry_card_title']; ?></h4>
                            <?php endif; ?>

                        <?php endif; ?>

                        <?php if ($cards[3]['masonry_card_more_images_1']): ?>
                            <div class="additional-image">
                                <img src="<?php echo $cards[3]['masonry_card_more_images_1']['url']; ?>"
                                    alt="<?php echo $cards[3]['masonry_card_more_images_1']['alt']; ?>" />
                            </div>
                        <?php endif; ?>
                        <?php if ($cards[3]['masonry_card_more_images_2']): ?>
                            <div class="additional-image">
                                <img src="<?php echo $cards[3]['masonry_card_more_images_2']['url']; ?>"
                                    alt="<?php echo $cards[3]['masonry_card_more_images_2']['alt']; ?>" />
                            </div>
                        <?php endif; ?>

                    </div>
                    <?php if ($cards[3]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[3]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[3]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[3]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[3]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 5 -->
                <div class="masonry-card card-5">
                    <div class="masonry_header">
                        <?php if ($cards[4]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[4]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[4]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[4]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[4]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[4]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[4]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[4]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[4]['masonry_card_more_images_2']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[4]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[4]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[4]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[4]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[4]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[4]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[4]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 6 -->
                <div class="masonry-card card-6">
                    <div class="masonry_header">
                        <?php if ($cards[5]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[5]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[5]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[5]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[5]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[5]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[5]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[5]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[5]['masonry_card_more_images_2']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[5]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[5]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[5]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[5]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[5]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[5]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[5]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Card 7 -->
                <div class="masonry-card card-7">
                    <div class="masonry_header">
                        <?php if ($cards[6]['icon_next_to_title']): ?>
                            <div class="masonry_card_icon">
                                <img src="<?php echo $cards[6]['icon_next_to_title']['url']; ?>"
                                    alt="<?php echo $cards[6]['icon_next_to_title']['alt']; ?>" />
                                <?php if ($cards[6]['masonry_card_title']): ?>
                                    <h4 class="masonry-card_title"><?php echo $cards[6]['masonry_card_title']; ?></h4>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="more_images">
                            <?php if ($cards[6]['masonry_card_more_images_1']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[6]['masonry_card_more_images_1']['url']; ?>"
                                        alt="<?php echo $cards[6]['masonry_card_more_images_1']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                            <?php if ($cards[6]['masonry_card_more_images_2']): ?>
                                <div class="additional-image">
                                    <img src="<?php echo $cards[6]['masonry_card_more_images_2']['url']; ?>"
                                        alt="<?php echo $cards[6]['masonry_card_more_images_2']['alt']; ?>" />
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if ($cards[6]['masonry_card_text']): ?>
                        <div class="masonry-card_text"><?php echo $cards[6]['masonry_card_text']; ?></div>
                    <?php endif; ?>
                    <?php if ($cards[6]['masonry_card_image']): ?>
                        <div class="masonry-card_image">
                            <img src="<?php echo $cards[6]['masonry_card_image']['url']; ?>"
                                alt="<?php echo $cards[6]['masonry_card_image']['alt']; ?>" />
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>