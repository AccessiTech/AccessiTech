import { useState, useLayoutEffect } from "react";

/**
 * Get Viewport Width
 * @returns {number} the width of the window
 */
export const getViewportWidth = () => {
  return Math.max([window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0]);
}

/**
 * Get Viewport Height
 * @returns {number} the height of the window
 */
export const getViewportHeight = () => {
  return Math.max([window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0]);
}

/**
 * Get the current window size and set it to the state.
 * src - https://stackoverflow.com/a/19014495
 * @returns {[number, function]} - [width, setWidth]
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([getViewportWidth(), getViewportHeight()]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
