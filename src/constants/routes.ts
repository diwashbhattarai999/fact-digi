// Base path for the application
export const BASE_PATH = '/';

// Helper function to create routes with base path
const createRoute = (path: string) => `${BASE_PATH}${path}`;

// Page routes
export const ROUTES = {
  HOME: createRoute('/'),
  ABOUT: createRoute('/about-us'),
  BLOG: createRoute('/blog'),
  BLOG_POST: createRoute('/blog/:slug'),
  CONTACT: createRoute('/contact'),
} as const;

// Section IDs (used for hash navigation on the home page)
export const SECTIONS = {
  HOME: 'home',
  BENEFITS: 'benefits',
  HOW_IT_WORKS: 'how-it-works',
  TEAM: 'team',
  FAQ: 'faq',
  CONTACT: 'contact',
} as const;

// Helper to create section links (for home page sections)
export const getSectionLink = (sectionId: string) => `${ROUTES.HOME}#${sectionId}`;

// Helper to create blog post links
export const getBlogPostLink = (slug: string) => `${ROUTES.BLOG}/${slug}`;

// Navigation routes for navbar
export const NAV_ROUTES = [
  { href: getSectionLink(SECTIONS.BENEFITS), label: 'Benefits' },
  { href: getSectionLink(SECTIONS.HOW_IT_WORKS), label: 'How It Works' },
  { href: getSectionLink(SECTIONS.TEAM), label: 'Team' },
  { href: getSectionLink(SECTIONS.FAQ), label: 'FAQ' },
  { href: ROUTES.BLOG, label: 'Blogs' },
] as const;
