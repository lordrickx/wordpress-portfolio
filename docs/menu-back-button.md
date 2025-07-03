# Menu Back Button Block

## Description
A navigation-focused Gutenberg block that creates a back button with customizable styling and behavior. This block is essential for improving user experience by providing clear navigation paths, especially useful in multi-page flows, product catalogs, or any content that requires hierarchical navigation.

## Technologies Used
- PHP
- JavaScript (React)
- SCSS
- WordPress Gutenberg API
- Navigation state management

## Screenshot
![Menu Back Button Block](../showcase/menu-back-button-editor.png)

## How to Use
1. Add the "Menu Back Button" block to your WordPress page or post
2. Configure the button text and destination URL
3. Choose the button style and icon
4. Set navigation behavior (browser back, specific URL, or custom action)
5. Customize the appearance and positioning

## Code Example
```php
// Back button block registration
register_block_type('my-theme/menu-back-button', array(
    'editor_script' => 'menu-back-button-editor',
    'editor_style'  => 'menu-back-button-editor-style',
    'style'         => 'menu-back-button-style',
    'render_callback' => 'render_menu_back_button_block',
    'attributes' => array(
        'buttonText' => array('type' => 'string', 'default' => 'Back'),
        'destinationUrl' => array('type' => 'string'),
        'navigationType' => array('type' => 'string', 'default' => 'browser'),
        'icon' => array('type' => 'string', 'default' => 'arrow-left'),
        'position' => array('type' => 'string', 'default' => 'left')
    )
));
```

## Key Features
- **Multiple Navigation Types**: Browser back, specific URL, or custom JavaScript action
- **Customizable Icons**: Built-in icon library with popular navigation icons
- **Flexible Positioning**: Left, right, center, or custom positioning
- **Responsive Design**: Adapts to mobile and desktop layouts
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Custom Styling**: Multiple button styles and hover effects
- **Breadcrumb Integration**: Can be used as part of breadcrumb navigation
- **Analytics Ready**: Built-in tracking for navigation events

## Block Attributes
- `buttonText` (string): Text displayed on the button
- `destinationUrl` (string): Target URL for navigation
- `navigationType` (string): Type of navigation (browser, url, custom)
- `icon` (string): Icon name from the icon library
- `position` (string): Button positioning (left, right, center)
- `buttonStyle` (string): Visual style variant
- `showIcon` (boolean): Whether to display the icon

## Navigation Types
- **Browser Back**: Uses `window.history.back()`
- **Specific URL**: Navigate to a defined URL
- **Custom Action**: Execute custom JavaScript function
- **Modal Close**: Close modal or overlay (if applicable)

## Button Styles
- **Default**: Standard button appearance
- **Outline**: Transparent background with border
- **Text Only**: Minimal styling with just text and icon
- **Floating**: Fixed position button
- **Breadcrumb**: Styled for breadcrumb navigation

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 