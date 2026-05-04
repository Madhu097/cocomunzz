// Prepends Vite's base URL to asset paths so images work on GitHub Pages
// Usage: asset('images/hero-bakery.png') => '/cocomunzz/images/hero-bakery.png'
export const asset = (path) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
