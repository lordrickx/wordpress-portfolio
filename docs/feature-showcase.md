# Feature Showcase Component

## Description
An advanced ACF component designed to create compelling feature showcases with alternating layouts, images, and detailed content sections. This component is ideal for highlighting key product features, service benefits, or company capabilities with a professional, engaging presentation that alternates between left and right content positioning.

## Technologies Used
- PHP
- ACF (Advanced Custom Fields)
- SCSS/CSS
- WordPress Template System
- CSS Grid and Flexbox
- Image optimization

## Screenshot
![Feature Showcase](../showcase/feature-showcase-frontend.png)

## How to Use
1. Add the "Feature Showcase" ACF field group to your page
2. Configure the main section settings (title, background, etc.)
3. Add showcase items using the repeater field
4. For each item, set the image, title, description, and features list
5. Choose the layout direction (left/right alternating)
6. Configure call-to-action buttons and styling options

## Code Example
```php
// ACF Field Group for Feature Showcase
acf_add_local_field_group(array(
    'key' => 'group_feature_showcase',
    'title' => 'Feature Showcase',
    'fields' => array(
        array(
            'key' => 'field_showcase_title',
            'label' => 'Section Title',
            'name' => 'showcase_title',
            'type' => 'text',
        ),
        array(
            'key' => 'field_showcase_items',
            'label' => 'Showcase Items',
            'name' => 'showcase_items',
            'type' => 'repeater',
            'layout' => 'block',
            'sub_fields' => array(
                array(
                    'key' => 'field_item_image',
                    'label' => 'Feature Image',
                    'name' => 'image',
                    'type' => 'image',
                    'return_format' => 'array',
                ),
                array(
                    'key' => 'field_item_title',
                    'label' => 'Feature Title',
                    'name' => 'title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_item_description',
                    'label' => 'Description',
                    'name' => 'description',
                    'type' => 'wysiwyg',
                ),
                array(
                    'key' => 'field_item_features',
                    'label' => 'Key Features',
                    'name' => 'features',
                    'type' => 'repeater',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_feature_text',
                            'label' => 'Feature',
                            'name' => 'feature_text',
                            'type' => 'text',
                        ),
                    ),
                ),
                array(
                    'key' => 'field_item_cta',
                    'label' => 'Call to Action',
                    'name' => 'cta',
                    'type' => 'link',
                ),
            ),
        ),
    ),
));
```

## Key Features
- **Alternating Layout**: Automatic left/right positioning for visual interest
- **Rich Content**: Support for images, titles, descriptions, and feature lists
- **Responsive Images**: Automatic image optimization and responsive sizing
- **Feature Lists**: Bullet-point lists for highlighting key benefits
- **Call-to-Action**: Optional buttons for each showcase item
- **Smooth Animations**: CSS transitions and scroll-triggered animations
- **SEO Optimized**: Proper heading structure and image alt tags
- **Accessibility**: WCAG compliant with proper semantic markup

## Field Structure
- `showcase_title` (text): Main section heading
- `showcase_subtitle` (textarea): Section subtitle
- `showcase_items` (repeater): Array of showcase items
  - `image` (image): Feature image
  - `title` (text): Feature title
  - `description` (wysiwyg): Detailed description
  - `features` (repeater): List of key features
  - `cta` (link): Call-to-action button
- `background_style` (select): Background styling option
- `animation_enabled` (boolean): Enable scroll animations

## Layout Options
- **Alternating**: Left/right positioning for each item
- **Stacked**: All items in vertical layout
- **Grid**: Items displayed in grid format
- **Carousel**: Slider-style presentation

## Background Styles
- **Default**: Clean white background
- **Gradient**: Subtle gradient background
- **Pattern**: Geometric pattern overlay
- **Image**: Background image with overlay

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 