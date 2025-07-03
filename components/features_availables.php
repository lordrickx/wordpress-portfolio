<?php
$section_title = isset($layout['section_title']) ? $layout['section_title'] : '';
$features = isset($layout['feature_available']) ? $layout['feature_available'] : [];
$block_title = isset($layout['block_title']) ? $layout['block_title'] : '';
?>




<section class="features-availables">
    <div class="features-availables_container">
        <div class="features-availables_top">
            <h2 class="features-availables_title"><?php echo $section_title; ?></h2>
        </div>
        <div class="features-availables_bottom">
            <div class="features-block_fixed">
                <h3 class="features-block_title">
                    <?php echo $block_title; ?>
                </h3>
            </div>
            <div class="feature_available_list">
                <?php if (!empty($features)): ?>
                    <?php foreach ($features as $feature): ?>
                        <div class="feature_available_list_item">
                            <div class="feature_available_list_item_icon">
                                <h4 class="feature_available_list_item_title"><?php echo htmlspecialchars($feature['feature_name'], ENT_QUOTES, 'UTF-8'); ?></h4>
                            </div>
                            <div class="feature_available_list_item_content">
                                <img src="<?php echo get_template_directory_uri(); ?>\inc\img\radio_button_checked.svg" alt="">
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="features-availables_note">
            <p>
                For a complete feature comparison across all our bundles, visit our <a href="/cloud-softphone/pricing/">pricing page</a>.
            </p>
        </div>
    </div>
</section>