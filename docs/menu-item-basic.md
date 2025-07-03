# Menu Item Basic Block

## Description
A custom Gutenberg block that creates a basic menu item with customizable text, link, and styling options. This block is designed for creating simple navigation elements within WordPress pages and posts.

## Technologies Used
- PHP
- JavaScript (React)
- SCSS
- WordPress Gutenberg API

## Screenshot
![Menu Item Basic Block](../showcase/menu-item-basic-editor.png)

## How to Use
1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Menu Item Basic" in the block library
3. Select the block to add it to your content
4. Configure the menu item text, link, and styling options in the block settings panel

## Code Example
```php
// Block registration in functions.php
register_block_type('my-theme/menu-item-basic', array(
    'editor_script' => 'menu-item-basic-editor',
    'editor_style'  => 'menu-item-basic-editor-style',
    'style'         => 'menu-item-basic-style',
    'render_callback' => 'render_menu_item_basic_block'
));
```

## Key Features
- **Customizable Text**: Easy-to-use text input for menu item labels
- **Link Management**: Built-in URL picker with validation
- **Responsive Design**: Automatically adapts to different screen sizes
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Custom Styling**: SCSS-based styling with CSS custom properties
- **WordPress Integration**: Seamless integration with WordPress editor

## Block Attributes
- `text` (string): The menu item text
- `url` (string): The destination URL
- `target` (string): Link target (_blank, _self)
- `className` (string): Additional CSS classes

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 