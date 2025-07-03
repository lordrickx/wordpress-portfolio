<?php
/**
 * Render callback for the menu-back-button block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block output.
 */
function acrobits_render_menu_back_button_block($attributes, $content, $block) {
    // Debug message
    error_log('Menu Back Button Block: Starting render');
    
    try {
        $text = isset($attributes['text']) ? $attributes['text'] : 'Back';
        $level = isset($attributes['level']) ? $attributes['level'] : '1';
        
        error_log('Menu Back Button Block: Attributes - text: ' . $text . ', level: ' . $level);
        
        $wrapper_attributes = get_block_wrapper_attributes([
            'class' => 'menu-back-button-block',
            'data-level' => $level
        ]);
        
        error_log('Menu Back Button Block: Wrapper attributes created');
        
        $output = sprintf(
            '<div %1$s><button class="menu-back-button">%2$s</button></div>',
            $wrapper_attributes,
            esc_html($text)
        );
        
        error_log('Menu Back Button Block: Output created successfully');
        return $output;
    } catch (Exception $e) {
        error_log('Menu Back Button Block: ERROR - ' . $e->getMessage());
        return '';
    }
} 