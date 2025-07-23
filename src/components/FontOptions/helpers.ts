import type { FontFamily } from './reducer';

// Magic Strings
export const BODY = 'body';

/** On font size change
 * @param {Event} e
 * @returns {string} new font size value (toFixed(1))
 */
export const onFontSizeChange = (e: any) => {
  const newFontSize = Number(e.target.value).toFixed(1);
  return newFontSize;
};

/** On Font Family Change
 * @param {object} e event
 * @returns {string} font family class
 */
export const onFontFamilyChange = (e: any) => {
  const fontFamilyClass = getFontFamilyClass(e.target.value);
  return fontFamilyClass;
};

// Utils
/** Debounce
 * @param {function} fn function to debounce
 * @param {number} delay time to wait in ms
 * @returns {function} debounced function
 * @example const debouncedFunction = debounce(() => { console.log('hello'); }, 1000);
 */
export const debounce = (fn: any, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

/** Get Font Size Class
 * @param {string} fontSize font size in rem
 * @returns {string} font size class
 */
export const getFontSizeClass = (fontSize: string): string => {
  const string = fontSize.toString().replace('.', '-');
  return `font-size-${string}`;
};

/** Get Font Family Class
 * @param {FontFamily} fontFamily font family
 * @returns {string} font family class
 * @example const fontFamilyClass = getFontFamilyClass('sans-serif');
 */
export const getFontFamilyClass = (fontFamily: FontFamily): string => {
  return `font-family-${fontFamily}`;
};
