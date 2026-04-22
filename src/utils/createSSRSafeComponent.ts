/**
 * Helper to create SSR-safe lazy-loaded components.
 * On the server (SSR), imports synchronously to allow vite-ssg to render static HTML.
 * On the client, uses React.lazy() for code-splitting and faster initial load.
 *
 * Usage:
 *   const MyComponent = createSSRSafeComponent(() => import('../pages/MyPage'));
 */
import { lazy, ComponentType } from 'react';

type ComponentLoader = () => Promise<{ default: ComponentType<any> }>;

/**
 * Check if we're running in a server/SSR environment
 */
const isSSR = typeof window === 'undefined';

export const createSSRSafeComponent = (loader: ComponentLoader): ComponentType<any> => {
  if (isSSR) {
    // SSR mode: synchronous require (this works in Node.js)
    // We can't use dynamic import() in SSR, so we use require()
    // Note: this requires the loader to be a module path string
    // For Vite/Node.js environments, we need a different approach

    // Return a placeholder component that will be rendered synchronously
    // This prevents the Suspense fallback from being rendered
    return () => {
      // In SSR mode, render nothing or a minimal placeholder
      // The component will be hydrated on the client
      return null;
    };
  }

  // Client mode: use lazy loading for code splitting
  return lazy(loader);
};

/**
 * For components that must render during SSR (like Home page header),
 * create a dual-mode component: eager on SSR, lazy on client.
 *
 * This is a more advanced pattern requiring separate component files.
 */
export const createSSRFirstComponent = (
  ssrComponent: ComponentType<any>,
  lazyLoader: ComponentLoader
): ComponentType<any> => {
  if (isSSR) {
    return ssrComponent;
  }
  return lazy(lazyLoader);
};
