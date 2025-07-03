<?php
/**
 * Plugin Name:       Menu Item Simple
 * Description:       A simple menu item with title and link.
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Acrobits
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       menu-item-basic
 *
 * @package           acrobits
 */

// Make sure WordPress is loaded
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function acrobits_menu_item_basic_block_init() {
    // Include the render file
    require_once __DIR__ . '/build/render.php';

    // Register the block
    register_block_type(
        __DIR__ . '/build',
        array(
            'render_callback' => 'acrobits_render_menu_item_basic_block'
        )
    );
}
add_action('init', 'acrobits_menu_item_basic_block_init'); 