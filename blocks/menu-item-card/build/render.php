<?php
/**
 * Render callback for the menu-item-card block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block output.
 */
function acrobits_render_menu_item_card_block($attributes, $content, $block) {
    $title = isset($attributes['title']) ? $attributes['title'] : 'Menu Item';
    $text = isset($attributes['text']) ? $attributes['text'] : 'Add your text here';
    $image = isset($attributes['image']) ? $attributes['image'] : array('url' => '', 'id' => null);
    $featuredImage = isset($attributes['featuredImage']) ? $attributes['featuredImage'] : array('url' => '', 'id' => null);
    
    $wrapper_attributes = get_block_wrapper_attributes();
    
    $output = sprintf(
        '<div %1$s><div class="menu-item-card__container">',
        $wrapper_attributes
    );

    if (!empty($image['url'])) {
        $output .= sprintf(
            '<div class="menu-item-card__image-container"><div class="menu-item-card__image"><img src="%1$s" alt="%2$s" /></div>',
            esc_url($image['url']),
            esc_attr($title)
        );

        $output .= sprintf(
            '<h2 class="menu-item-card__title">%1$s</h2><p class="menu-item-card__text">%2$s</p></div>',
            esc_html($title),
            esc_html($text)
        );
    }

    if (!empty($featuredImage['url'])) {
        $output .= sprintf(
            '<div class="menu-item-card__featured-image-container"><div class="menu-item-card__featured-image"><img src="%1$s" alt="%2$s" /></div></div>',
            esc_url($featuredImage['url']),
            esc_attr($title)
        );
    }

    $output .= '</div></div>';
    
    return $output;
} 