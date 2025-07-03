<?php
/**
 * Render callback for the menu-item-basic-tab block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block output.
 */
function acrobits_render_menu_item_basic_tab_block($attributes, $content, $block) {
    $title = isset($attributes['title']) ? $attributes['title'] : 'Menu Item';
    $paragraph = isset($attributes['paragraph']) ? $attributes['paragraph'] : 'Add your paragraph here';
    $level = isset($attributes['level']) ? $attributes['level'] : 1;
    
    $wrapper_attributes = get_block_wrapper_attributes([
        'data-level' => $level,
        'class' => 'menu-item-basic-tab__container'
    ]);
    
    return sprintf(
        '<div %1$s><div class="menu-item-basic-tab__container"><h3 class="menu-item-basic-tab__title">%2$s</h3><p class="menu-item-basic-tab__paragraph">%3$s</p></div></div>',
        $wrapper_attributes,
        esc_html($title),
        esc_html($paragraph)
    );
} 