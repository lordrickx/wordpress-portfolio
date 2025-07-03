# Feature Cards Section Component

## Description
An ACF (Advanced Custom Fields) component that creates a dynamic section displaying feature cards in a grid layout. This component is perfect for showcasing product features, service highlights, or any content that benefits from a card-based presentation. Each card can contain an icon, title, description, and optional call-to-action.

## Technologies Used
- PHP
- ACF (Advanced Custom Fields)
- SCSS/CSS
- WordPress Template System
- Responsive Grid Layout

## Screenshot
![Feature Cards Section](../showcase/feature-cards-section-frontend.png)

## How to Use
1. Create a new page or post in WordPress
2. Add the "Feature Cards Section" ACF field group
3. Configure the section title and description
4. Add feature cards using the repeater field
5. For each card, set the icon, title, description, and optional link
6. Choose the grid layout and styling options

## Code Example
```php
// ACF Field Group Configuration
acf_add_local_field_group(array(
    'key' => 'group_feature_cards_section',
    'title' => 'Feature Cards Section',
    'fields' => array(
        array(
            'key' => 'field_section_title',
            'label' => 'Section Title',
            'name' => 'section_title',
            'type' => 'text',
        ),
        array(
            'key' => 'field_feature_cards',
            'label' => 'Feature Cards',
            'name' => 'feature_cards',
            'type' => 'repeater',
            'sub_fields' => array(
                array(
                    'key' => 'field_card_icon',
                    'label' => 'Icon',
                    'name' => 'icon',
                    'type' => 'image',
                ),
                array(
                    'key' => 'field_card_title',
                    'label' => 'Title',
                    'name' => 'title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_card_description',
                    'label' => 'Description',
                    'name' => 'description',
                    'type' => 'textarea',
                ),
                array(
                    'key' => 'field_card_link',
                    'label' => 'Link',
                    'name' => 'link',
                    'type' => 'link',
                ),
            ),
        ),
    ),
));
```

## Key Features
- **Dynamic Content**: Repeater field allows unlimited feature cards
- **Icon Support**: Upload custom icons or use icon library
- **Flexible Grid**: Configurable columns (2, 3, 4 columns)
- **Responsive Design**: Automatically adapts to mobile devices
- **Hover Effects**: Interactive animations on card hover
- **SEO Optimized**: Proper heading structure and alt tags
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Custom Styling**: Multiple card style variants

## Field Structure
- `section_title` (text): Main section heading
- `section_description` (textarea): Section description
- `feature_cards` (repeater): Array of feature cards
  - `icon` (image): Card icon
  - `title` (text): Card title
  - `description` (textarea): Card description
  - `link` (link): Optional call-to-action link
- `layout_columns` (select): Number of columns (2, 3, 4)
- `card_style` (select): Visual style variant

## Grid Layout Options
- **2 Columns**: Side-by-side layout
- **3 Columns**: Three-column grid
- **4 Columns**: Four-column grid
- **Auto-fit**: Responsive grid that adapts to content

## Card Style Variants
- **Default**: Standard card with shadow
- **Minimal**: Clean, borderless design
- **Highlighted**: Featured card with accent color
- **Interactive**: Cards with hover animations

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 