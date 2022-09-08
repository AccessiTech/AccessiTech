import store from '../../store/store';
import {
  getFontFamilyClass,
  getFontSizeClass,
  setFontFamily,
  setFontSize,
  toggleFontOptions,
} from './reducer';

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
  const body = document.querySelector('body');
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
  const body = document.querySelector('body');
  const fontFamilyClass = getFontFamilyClass(e.target.value)
  if (body) {
    if (body.classList.contains(fontFamilyClass)) {
      body.classList.remove(fontFamilyClass);
    } else  {
      body.classList.remove(getFontFamilyClass('serif'));
      body.classList.remove(getFontFamilyClass('sans-serif'));
      body.classList.remove(getFontFamilyClass('monospace'));
    }
    body.classList.add(fontFamilyClass);
  }
  store.dispatch(setFontFamily(fontFamilyClass));
}
