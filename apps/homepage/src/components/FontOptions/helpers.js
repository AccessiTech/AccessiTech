import store from '../../store/store';
import { MONOSPACE, SANS_SERIF, SERIF } from './FontOptions';
import {
  getFontFamilyClass,
  getFontSizeClass,
  setFontFamily,
  setFontSize,
  toggleFontOptions,
} from './reducer';

// Magic Strings
export const BODY = 'body';

/** On Font Options Toggle
 * @param {Event} e
 */
export const onFontOptionsToggle = (e) => {
  e.preventDefault();
  store.dispatch(toggleFontOptions());
}

/** On font size change
 * @param {Event} e
 * @param {Number} fontSize
*/
export const onFontSizeChange = (e) => {
  e.preventDefault();
  const newFontSize = Number(e.target.value).toFixed(1);
  const body = document.querySelector(BODY);
  if (body) {
    for (let i = 0.5; i <= 5; i += 0.1) {
      body.classList.remove(getFontSizeClass((Math.round(i * 10) / 10).toFixed(1)));
    }
    body.classList.add(getFontSizeClass(newFontSize));
  }
  store.dispatch(setFontSize(newFontSize));
};

/** On Font Family Change
 * @param {object} e event
 * @param {string} fontFamily font family
*/
export const onFontFamilyChange = (e) => {
  e.preventDefault();
  const body = document.querySelector(BODY);
  const fontFamilyClass = getFontFamilyClass(e.target.value)
  if (body) {
    if (body.classList.contains(fontFamilyClass)) {
      body.classList.remove(fontFamilyClass);
    } else  {
      body.classList.remove(getFontFamilyClass(SERIF));
      body.classList.remove(getFontFamilyClass(SANS_SERIF));
      body.classList.remove(getFontFamilyClass(MONOSPACE));
    }
    body.classList.add(fontFamilyClass);
  }
  store.dispatch(setFontFamily(fontFamilyClass));
}
