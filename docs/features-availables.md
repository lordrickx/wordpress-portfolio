# Features Available Component

## Description
An ACF component designed to display a comprehensive list of available features, services, or capabilities in an organized and visually appealing format. This component is perfect for showcasing product features, service offerings, or company capabilities with clear categorization and easy scanning.

## Technologies Used
- PHP
- ACF (Advanced Custom Fields)
- SCSS/CSS
- WordPress Template System
- Icon integration

## Screenshot
![Features Available](../showcase/features-availables-frontend.png)

## How to Use
1. Add the "Features Available" ACF field group
2. Configure the section title and description
3. Add feature categories using the repeater field
4. For each category, add individual features with icons and descriptions
5. Choose the display layout and styling options

## Key Features
- **Categorized Display**: Organize features by categories
- **Icon Support**: Visual icons for each feature
- **Responsive Layout**: Adapts to all screen sizes
- **Interactive Elements**: Hover effects and animations
- **Accessibility**: Proper semantic markup and ARIA labels
- **Custom Styling**: Multiple visual style variants

## Field Structure
- `section_title` (text): Main section heading
- `feature_categories` (repeater): Array of feature categories
  - `category_name` (text): Category title
  - `category_icon` (image): Category icon
  - `features` (repeater): Features within category
    - `feature_name` (text): Feature name
    - `feature_description` (textarea): Feature description
    - `feature_icon` (image): Feature icon
- `layout_style` (select): Visual layout style
- `show_icons` (boolean): Display feature icons

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 