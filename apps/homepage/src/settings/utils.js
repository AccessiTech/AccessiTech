import { useState, useLayoutEffect } from "react";

/**
 * Get the current window size and set it to the state.
 * src - https://stackoverflow.com/a/19014495
 * @returns {[number, function]} - [width, setWidth]
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
