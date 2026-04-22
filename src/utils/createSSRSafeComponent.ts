/**
 * Helper to create SSR-safe lazy-loaded components.
 *
 * During SSR (vite-ssg build):
 *   - Returns the eager component so full HTML can be rendered
 *   - Prevents Suspense fallback from being baked into static HTML
 *
 * During client hydration:
 *   - Returns a lazy-loaded component for code splitting
 *   - Maintains performance benefits on browser
 *
 * Usage:
 *   const HomeRoute = createSSRSafeComponent(Home, () => import('../pages/Home/Home'));
 *   const BlogRoute = createSSRSafeComponent(Blog, () => import('../pages/Blog/Blog'));
 */
import { lazy, ComponentType } from 'react';

type ComponentLoader = () => Promise<{ default: ComponentType<any> }>;

/**
 * Create a component that conditionally eager-loads on SSR, lazy-loads on client.
 * This is the single place where SSR/client mode logic lives.
 */
export const createSSRSafeComponent = (
  eagerComponent: ComponentType<any>,
  lazyLoader: ComponentLoader
): ComponentType<any> => {
  // Note: typeof window check cannot be used here because both SSR and client
  // need to return the same component type. Instead, we rely on App.tsx to
  // pass the correct component based on isSSR mode.
  // If this runs during SSR (Node.js), the eager component is already in memory.
  // If this runs on client, we wrap it with lazy().

  // We can detect SSR by checking if we're in a Node.js environment
  // but this needs to happen at runtime during SSG, not at module load time.
  // So we return a component that makes the decision at render time.

  if (typeof window === 'undefined') {
    // SSR environment - return eager component as-is
    return eagerComponent;
  }

  // Client environment - wrap with lazy() for code splitting
  return lazy(lazyLoader);
};
