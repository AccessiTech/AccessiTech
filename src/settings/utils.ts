import { useState, useLayoutEffect } from "react";

/**
 * Get Viewport Width
 * @returns {number} the width of the window
 */
export const getViewportWidth = (): number => {
  return Math.max(window.innerWidth,
      document.documentElement.clientWidth,
      document.body.clientWidth,
      0,
  );
};

/**
 * Get Viewport Height
 * @returns {number} the height of the window
 */
export const getViewportHeight = ():number => {
  return Math.max(
    window.innerHeight,
      document.documentElement.clientHeight,
      document.body.clientHeight,
      0,
  );
};

/**
 * Get the current window size and set it to the state.
 * src - https://stackoverflow.com/a/19014495
 * @returns {[number, number]} - [width, height]
 */
export const useWindowSize = ():number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([getViewportWidth(), getViewportHeight()]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export const useOutsideClick = (ref:any, callback:any) => {
  const handleClick = (e:any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
      document.removeEventListener("click", handleClick);
    }
  };
  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
};
