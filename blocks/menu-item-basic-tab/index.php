<?php
/**
 * Plugin Name:       Menu Item Basic Tab
 * Description:       A menu item with title and paragraph.
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Acrobits
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       menu-item-basic-tab
 *
 * @package           acrobits
 */

// Make sure WordPress is loaded
if (!defined('ABSPATH')) {
    exit;
}

// Include the render file
require_once __DIR__ . '/build/render.php';

// Register the block
function acrobits_register_menu_item_basic_tab_block() {
    // Check if register_block_type function exists
    if (!function_exists('register_block_type')) {
        return;
    }
    
    register_block_type(__DIR__ . '/build', [
        'style' => 'file:./style-index.css',
        'script' => 'menu-item-basic-tab-script',
        'editor_style' => 'file:./index.css',
        'render_callback' => 'acrobits_render_menu_item_basic_tab_block'
    ]);
}
add_action('init', 'acrobits_register_menu_item_basic_tab_block'); 