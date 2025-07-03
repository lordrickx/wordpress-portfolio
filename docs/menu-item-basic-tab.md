# Menu Item Basic Tab Block

## Description
An advanced Gutenberg block that creates tabbed menu items with multiple content sections. This block allows users to organize content into tabs, providing a clean and organized way to display related information without cluttering the page.

## Technologies Used
- PHP
- JavaScript (React)
- SCSS
- WordPress Gutenberg API
- Tab functionality with state management

## Screenshot
![Menu Item Basic Tab Block](../showcase/menu-item-basic-tab-editor.png)

## How to Use
1. Add the "Menu Item Basic Tab" block to your WordPress editor
2. Configure the main tab container settings
3. Add individual tab items using the nested block interface
4. Customize each tab's content, title, and styling
5. Preview the tabs in both editor and frontend modes

## Code Example
```php
// Tab block registration
register_block_type('my-theme/menu-item-basic-tab', array(
    'editor_script' => 'menu-item-basic-tab-editor',
    'editor_style'  => 'menu-item-basic-tab-editor-style',
    'style'         => 'menu-item-basic-tab-style',
    'render_callback' => 'render_menu_item_basic_tab_block',
    'attributes' => array(
        'tabs' => array(
            'type' => 'array',
            'default' => array()
        ),
        'activeTab' => array(
            'type' => 'number',
            'default' => 0
        )
    )
));
```

## Key Features
- **Multiple Tabs**: Create unlimited tab sections
- **Dynamic Content**: Each tab can contain any WordPress blocks
- **Responsive Tabs**: Mobile-friendly tab navigation
- **Smooth Transitions**: CSS animations for tab switching
- **Accessibility**: Keyboard navigation and screen reader support
- **Custom Styling**: Fully customizable tab appearance
- **State Management**: Maintains active tab state across page loads

## Block Attributes
- `tabs` (array): Array of tab objects with title and content
- `activeTab` (number): Index of the currently active tab
- `tabStyle` (string): Visual style variant (default, pills, underline)
- `className` (string): Additional CSS classes

## Tab Object Structure
```javascript
{
    title: "Tab Title",
    content: "Tab content or blocks",
    icon: "dashicon-name",
    disabled: false
}
```

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 