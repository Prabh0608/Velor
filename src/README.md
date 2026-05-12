# VELOR UI - Crown Clothing Rebrand

## Files Changed/Added

### Global Styles
- `src/index.scss` - Complete CSS variable system, typography, scrollbar styling

### Navigation
- `src/routes/navigation/navigation.component.jsx` - New navbar with scroll effects, mobile hamburger menu
- `src/routes/navigation/navigation.styles.jsx` - Glassmorphism nav, mobile overlay

### Cart
- `src/components/cart-icon/cart-icon.component.jsx` - Minimalist cart icon
- `src/components/cart-icon/cart-icon.styles.jsx` - CSS-only shopping bag icon
- `src/components/cart-dropdown/cart-dropdown.component.jsx` - Styled dropdown
- `src/components/cart-dropdown/cart-dropdown.styles.jsx` - Modern card design
- `src/components/cart-item/cart-item.component.jsx` - Cart item display
- `src/components/cart-item/cart-item.styles.jsx` - Clean item layout

### Home Page
- `src/routes/home/home.component.jsx` - Full redesign: Hero, New Drops, Featured, Promo, Gallery, Newsletter
- `src/routes/home/home.styles.jsx` - All section styling with responsive grids

### Directory / Categories
- `src/components/directory/directory.component.jsx` - Category grid
- `src/components/directory/directory.styles.jsx` - 3-column responsive grid
- `src/components/directory-item/directory-item.component.jsx` - Category card
- `src/components/directory-item/directory-item.styles.jsx` - Overlay hover effects

### Product Cards
- `src/components/product-card/product-card.component.jsx` - Hover add-to-cart
- `src/components/product-card/product-card.styles.jsx` - Clean card with overlay button

### Category Preview
- `src/components/category-preview/category-preview.component.jsx` - Section header + grid
- `src/components/category-preview/category-preview.styles.jsx` - 4-column product grid

### Shop Page
- `src/routes/shop/shop.component.jsx` - Shop header + routes
- `src/routes/shop/shop.styles.jsx` - Centered header styling
- `src/routes/category/category.component.jsx` - Category listing page
- `src/routes/category/category.styles.jsx` - Product grid for category
- `src/routes/categories-preview/categories-preview.component.jsx` - All categories preview
- `src/routes/categories-preview/categories-preview.styles.jsx` - Preview container

### Authentication
- `src/routes/authentication/authentication.components.jsx` - Split screen auth layout
- `src/routes/authentication/authentication.styles.jsx` - Dark hero panel + forms
- `src/components/sign-in-form/sign-in-form.component.jsx` - Updated layout
- `src/components/sign-in-form/sign-in-form.styles.jsx` - Clean form styling
- `src/components/sign-up-form/sign-up-form.component.jsx` - Updated layout
- `src/components/sign-up-form/sign-up-form.styles.jsx` - Clean form styling
- `src/components/form-input/form-input.component.jsx` - Floating label input
- `src/components/form-input/form-input.styles.jsx` - Modern input design
- `src/components/button/button.component.jsx` - Button variants
- `src/components/button/button.styles.jsx` - Pill-shaped buttons

### Checkout
- `src/routes/checkout/checkout.component.jsx` - Checkout page layout
- `src/routes/checkout/checkout.styles.jsx` - Clean table design
- `src/components/checkout-item/checkout-item.compnent.jsx` - Checkout row
- `src/components/checkout-item/checkout-item.styles.jsx` - Responsive grid row

### Footer
- `src/components/footer/footer.component.jsx` - 4-column footer
- `src/components/footer/footer.styles.jsx` - Dark footer with brand, links, social

### App Entry
- `src/App.js` - Added Footer component

## Brand Changes
- All "Crown Clothing" / "CRWN" references replaced with "VELOR"
- Logo updated to text-based "VELOR" wordmark
- Crown SVG logo removed (using text logo now)

## Design System
- **Colors**: Sage green primary (#8B9A84), black, cream, gray scale
- **Typography**: Inter font family, bold headlines, clean hierarchy
- **Spacing**: CSS custom properties for consistent spacing
- **Radius**: 4px-16px rounded corners, pill buttons
- **Shadows**: Subtle layered shadows
- **Animations**: Smooth transitions, hover transforms, marquee

## Responsive Breakpoints
- Desktop: > 968px
- Tablet: 640px - 968px  
- Mobile: < 640px

## Installation
1. Copy all files into your `src/` directory
2. Install Inter font (already included via Google Fonts in index.scss)
3. Run `npm start`
