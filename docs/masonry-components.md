# Masonry Components

## Description
A dynamic ACF component that creates a masonry-style layout displaying content in an irregular grid pattern. This component is ideal for showcasing portfolios, galleries, or any content that benefits from a visually interesting, Pinterest-style layout with varying content heights and responsive behavior.

## Technologies Used
- PHP
- ACF (Advanced Custom Fields)
- SCSS/CSS
- JavaScript (for masonry layout)
- WordPress Template System
- CSS Grid and Flexbox

## Screenshot
![Masonry Layout](../showcase/masonry-components-frontend.png)

## How to Use
1. Add the "Masonry Components" ACF field group
2. Configure the section title and description
3. Add masonry items using the repeater field
4. For each item, set the image, title, description, and optional link
5. Choose the masonry layout style and column configuration
6. Configure responsive behavior and animation options

## Key Features
- **Dynamic Layout**: Automatic masonry positioning with JavaScript
- **Responsive Grid**: Adapts to different screen sizes
- **Image Optimization**: Automatic image sizing and lazy loading
- **Hover Effects**: Interactive animations on item hover
- **Filter Options**: Optional category filtering system
- **Lightbox Integration**: Image gallery with lightbox functionality
- **Performance Optimized**: Efficient rendering and loading

## Field Structure
- `section_title` (text): Main section heading
- `masonry_items` (repeater): Array of masonry items
  - `image` (image): Item image
  - `title` (text): Item title
  - `description` (textarea): Item description
  - `link` (link): Optional item link
  - `category` (select): Item category for filtering
- `columns_desktop` (select): Number of columns on desktop
- `columns_tablet` (select): Number of columns on tablet
- `animation_enabled` (boolean): Enable scroll animations

## Layout Options
- **Classic Masonry**: Traditional masonry layout
- **Grid Masonry**: Uniform grid with masonry positioning
- **Waterfall**: Pinterest-style layout
- **Responsive**: Adaptive column configuration

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+ 