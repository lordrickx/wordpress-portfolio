# Hero Slider Component

## Description
A dynamic ACF component that creates a full-width hero slider with multiple slides, each containing images, text content, and call-to-action buttons. This component is perfect for creating engaging homepage banners, promotional sections, or any area that requires dynamic, rotating content with smooth transitions and responsive design.

## Technologies Used
- PHP
- ACF (Advanced Custom Fields)
- SCSS/CSS
- JavaScript (for slider functionality)
- WordPress Template System
- Responsive image handling

## Screenshot
![Hero Slider](../showcase/hero-slider-frontend.png)

## How to Use
1. Add the "Hero Slider" ACF field group to your page
2. Configure slider settings (autoplay, transition speed, etc.)
3. Add slides using the repeater field
4. For each slide, upload background image, add title, subtitle, and CTA
5. Set navigation options (arrows, dots, auto-play)
6. Configure responsive behavior and styling

## Code Example
```php
// ACF Field Group for Hero Slider
acf_add_local_field_group(array(
    'key' => 'group_hero_slider',
    'title' => 'Hero Slider',
    'fields' => array(
        array(
            'key' => 'field_slider_slides',
            'label' => 'Slides',
            'name' => 'slides',
            'type' => 'repeater',
            'layout' => 'block',
            'sub_fields' => array(
                array(
                    'key' => 'field_slide_image',
                    'label' => 'Background Image',
                    'name' => 'background_image',
                    'type' => 'image',
                    'return_format' => 'array',
                ),
                array(
                    'key' => 'field_slide_title',
                    'label' => 'Slide Title',
                    'name' => 'title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_slide_subtitle',
                    'label' => 'Subtitle',
                    'name' => 'subtitle',
                    'type' => 'textarea',
                ),
                array(
                    'key' => 'field_slide_cta',
                    'label' => 'Call to Action',
                    'name' => 'cta',
                    'type' => 'link',
                ),
            ),
        ),
        array(
            'key' => 'field_slider_settings',
            'label' => 'Slider Settings',
            'name' => 'slider_settings',
            'type' => 'group',
            'sub_fields' => array(
                array(
                    'key' => 'field_autoplay',
                    'label' => 'Autoplay',
                    'name' => 'autoplay',
                    'type' => 'true_false',
                ),
                array(
                    'key' => 'field_speed',
                    'label' => 'Transition Speed',
                    'name' => 'speed',
                    'type' => 'number',
                    'default_value' => 5000,
                ),
            ),
        ),
    ),
));
```

## Key Features
- **Multiple Slides**: Unlimited slides with repeater field
- **Responsive Images**: Automatic image optimization for all devices
- **Smooth Transitions**: CSS and JavaScript-powered animations
- **Navigation Controls**: Arrow buttons and dot indicators
- **Autoplay Functionality**: Configurable auto-rotation
- **Touch Support**: Swipe gestures for mobile devices
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance Optimized**: Lazy loading and efficient rendering

## Field Structure
- `slides` (repeater): Array of slider slides
  - `background_image` (image): Slide background image
  - `title` (text): Slide title
  - `subtitle` (textarea): Slide subtitle
  - `cta` (link): Call-to-action button
- `slider_settings` (group): Slider configuration
  - `autoplay` (boolean): Enable auto-rotation
  - `speed` (number): Transition speed in milliseconds
  - `show_arrows` (boolean): Display navigation arrows
  - `show_dots` (boolean): Display dot indicators

## Slider Options
- **Transition Effects**: Fade, slide, zoom transitions
- **Navigation**: Arrows, dots, or both
- **Autoplay**: Configurable timing and pause on hover
- **Responsive**: Different settings for mobile/desktop
- **Touch Gestures**: Swipe support for mobile devices

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 