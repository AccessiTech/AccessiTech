import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — mounts inside a Router context, fires on every location change.
 *
 * Behaviour:
 * - If the new URL contains a hash (e.g. `/services#consulting`), attempts to
 *   smooth-scroll to the matching element via `scrollIntoView`.
 * - Otherwise scrolls the window to the top of the page.
 *
 * Renders nothing — purely a side-effect component.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1); // strip leading '#'
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
