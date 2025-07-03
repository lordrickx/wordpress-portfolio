<?php
/**
 * Render callback for the menu-item-basic block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block output.
 */

if (!defined('ABSPATH')) {
    exit;
}

function acrobits_render_menu_item_basic_block($attributes, $content, $block) {
    $title = isset($attributes['title']) ? $attributes['title'] : 'Menu Item';
    $url = isset($attributes['url']) ? $attributes['url'] : '#';
    $linkText = isset($attributes['linkText']) ? $attributes['linkText'] : 'Click here';
    
    $wrapper_attributes = get_block_wrapper_attributes();
    
    return sprintf(
        '<div %1$s><div class="menu-item-basic__container test" onclick="window.location.href=\'%2$s\'"><h3 class="menu-item-basic__title">%4$s</h3><a href="%2$s" class="menu-item-basic__link"><span class="menu-item-basic__link-text">%3$s</span></a></div></div>',
        $wrapper_attributes,
        esc_url($url),
        esc_html($linkText),
        esc_html($title)
    );
} 