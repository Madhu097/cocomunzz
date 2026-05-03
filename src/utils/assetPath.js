// Prepends Vite's base URL to asset paths so images work on GitHub Pages
// Usage: asset('images/hero-bakery.png') => '/cocomunzz/images/hero-bakery.png'
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
