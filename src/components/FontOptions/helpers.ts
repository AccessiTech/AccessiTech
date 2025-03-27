import store from "../../store/store";

import {
  setFontFamily,
  setFontSize,
  toggleFontOptions,
  MONOSPACE,
  SANS_SERIF,
  SERIF,
  FontFamily,
} from "./reducer";

// Magic Strings
export const BODY = "body";

/** On Font Options Toggle
 * @param {Event} e
 */
export const onFontOptionsToggle = (e:any) => {
  e.preventDefault();
  store.dispatch(toggleFontOptions());
};

/** On font size change
 * @param {Event} e
 * @param {Number} fontSize
 */
export const onFontSizeChange = (e:any) => {
  e.preventDefault();
  const newFontSize = Number(e.target.value).toFixed(1);
  const body = document.querySelector(BODY);
  if (body) {
    for (let i = 0.5; i <= 5; i += 0.1) {
      body.classList.remove(
        getFontSizeClass((Math.round(i * 10) / 10).toFixed(1))
      );
    }
    body.classList.add(getFontSizeClass(newFontSize));
  }
  store.dispatch(setFontSize(newFontSize));
};

/** On Font Family Change
 * @param {object} e event
 * @param {string} fontFamily font family
 */
export const onFontFamilyChange = (e:any) => {
  e.preventDefault();
  const body = document.querySelector(BODY);
  const fontFamilyClass = getFontFamilyClass(e.target.value);
  if (body) {
    if (body.classList.contains(fontFamilyClass)) {
      body.classList.remove(fontFamilyClass);
    } else {
      body.classList.remove(getFontFamilyClass(SERIF));
      body.classList.remove(getFontFamilyClass(SANS_SERIF));
      body.classList.remove(getFontFamilyClass(MONOSPACE));
    }
    body.classList.add(fontFamilyClass);
  }
  store.dispatch(setFontFamily(fontFamilyClass));
};

// Utils
/** Debounce
 * @param {function} fn function to debounce
 * @param {number} delay time to wait in ms
 * @returns {function} debounced function
 * @example const debouncedFunction = debounce(() => { console.log('hello'); }, 1000);
 */
export const debounce = (fn:any, delay:number) => {
  let timer: NodeJS.Timeout;
  return (...args:any[]) => {
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
export const getFontSizeClass = (fontSize: string):string => {
  const string = fontSize.toString().replace(".", "-");
  return `font-size-${string}`;
};

/** Get Font Family Class
 * @param {FontFamily} fontFamily font family
 * @returns {string} font family class
 * @example const fontFamilyClass = getFontFamilyClass('sans-serif');
 */
export const getFontFamilyClass = (fontFamily:FontFamily):string => {
  return `font-family-${fontFamily}`;
};