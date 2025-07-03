<?php
$feature_cards_section_title = $layout['feature_cards_section_title'];
$feature_cards_section_cards = $layout['feature_cards_section_card'];
?>

<section class="feature-cards-section">
    <div class="feature-cards-section_cont">
        <?php if ($feature_cards_section_title) { ?>
            <h2 class="feature-cards-section_title"><?php echo $feature_cards_section_title; ?></h2>
        <?php } ?>

        <div class="feature-cards-grid">
            <?php foreach ($feature_cards_section_cards as $card) { ?>
                <div class="feature-card">
                    <div class="feature-card_header">
                        <div class="feature-card_header_title">
                            <?php if ($card['feature_cards_section_card_title']) { ?>
                                <h3 class="feature-card_title"><?php echo $card['feature_cards_section_card_title']; ?></h3>
                            <?php } ?>
                            <?php if ($card['feature_cards_section_card_title_icon']) { ?>
                                <div class="feature-card_icon">
                                    <div class="feature_card_icon_cont">
                                        <img src="<?php echo $card['feature_cards_section_card_title_icon']['url']; ?>" alt="<?php echo $card['feature_cards_section_card_title_icon']['alt']; ?>">
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <?php if ($card['feature_cards_section_card_desc']) { ?>
                            <div class="feature-card_description">
                                <?php if ($card['feature_cards_section_card_desc_icon']) { ?>
                                    <div class="feature-card_description_icon">
                                        <img src="<?php echo $card['feature_cards_section_card_desc_icon']['url']; ?>" alt="<?php echo $card['feature_cards_section_card_desc_icon']['alt']; ?>">
                                    </div>
                                <?php } ?>
                                <p class="feature-card_description_text"><?php echo $card['feature_cards_section_card_desc']; ?></p>
                            </div>
                        <?php } ?>
                    </div>


                    <?php if ($card['feature_cards_section_card_image']) { ?>
                        <div class="feature-card_image">
                            <img src="<?php echo $card['feature_cards_section_card_image']['url']; ?>" alt="<?php echo $card['feature_cards_section_card_image']['alt']; ?>">
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>
        </div>
    </div>
</section>