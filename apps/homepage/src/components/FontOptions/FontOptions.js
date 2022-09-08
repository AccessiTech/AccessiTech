import React  from 'react';
import {
  debounce,
  toggleFontOptions,
  useFontFamily,
  useFontSize,
  useIsOpen,
} from './reducer';
import store from '../../store/store';
import { onFontFamilyChange, onFontOptionsToggle, onFontSizeChange } from './helpers';

export const namespace = 'fontOptions/';

// Display Strings!
export const FONT_OPTIONS_TOGGLE_LABEL = 'Toggle Font Options Menu';
export const FONT_OPTIONS_TITLE = 'Font Options';
export const FONT_OPTIONS_DESCRIPTION = 'Change the font size and family of the page';
export const FONT_SIZE_LABEL = 'Font Size: ';
export const FONT_OPTIONS_FAMILY_LABEL = 'Font Family: ';
export const FONT_OPTIONS_SIZE_INPUT_LABEL = 'Font Size Range Input';
export const FONT_FAMILY_SELECT_LABEL = 'Font Family Select';
export const SERIF_DISPLAY = 'Serif';
export const SANS_SERIF_DISPLAY = 'Sans Serif';
export const MONOSPACE_DISPLAY = 'Monospace';

// Magic Strings!!
export const SERIF = 'serif';
export const SANS_SERIF = 'sans-serif';
export const MONOSPACE = 'monospace';
export const ESCAPE = 'Escape';

/** Font Options
 * @returns {object} font options component  
 **/
function FontOptions() {
  const isOpen = useIsOpen();
  const fontSize = Number(useFontSize() || 1).toFixed(1);
  const fontFamily = useFontFamily()
  
  const onEscapeKey = (e) => {
    if (e.key === ESCAPE && isOpen) {
      store.dispatch(toggleFontOptions());
    }
  }

  return (
    <div className="font-options-container">
      <button
        className={`${isOpen ? 'isOpen ' : ''}font-options-toggle`}
        onClick={onFontOptionsToggle}
        aria-label={FONT_OPTIONS_TOGGLE_LABEL}
        onKeyDown={onEscapeKey}
      >
        <i className="fa-solid fa-font" />
      </button>
      {isOpen && (
        <form id={`${namespace}form`} className="font-options">
          <fieldset>
            <legend>{FONT_OPTIONS_TITLE}</legend>

            <div className="font-options__row">
              <label htmlFor="font-options__font-size">{FONT_SIZE_LABEL}</label>
              <span className="font-options__font-size-value">{fontSize}x</span>
              <br/>
              <input
                type="range"
                id="font-options__font-size"
                name="font-options__font-size"
                aria-label={FONT_OPTIONS_SIZE_INPUT_LABEL}
                min="0.5"
                max="5"
                step={0.1}
                defaultValue={fontSize}
                onChange={(e) => debounce(onFontSizeChange(e, fontSize), 250)}
                onKeyDown={onEscapeKey}
              />
            </div>
          
            <div className="font-options__row">
              <label htmlFor="font-options__font-family">{FONT_OPTIONS_FAMILY_LABEL}</label>
              <select
                id="font-options__font-family"
                name="font-options__font-family"
                aria-label={FONT_FAMILY_SELECT_LABEL}
                defaultValue={fontFamily}
                onChange={onFontFamilyChange}
                onKeyDown={onEscapeKey}
              >
                <option value={SANS_SERIF}>{SANS_SERIF_DISPLAY}</option>
                <option value={SERIF}>{SERIF_DISPLAY}</option>
                <option value={MONOSPACE}>{MONOSPACE_DISPLAY}</option>
              </select>
            </div>

            {/* <div className="font-options__row">
              <label htmlFor="font-options__font-weight">Font Color</label>
              <input type="color" id="font-options__font-weight" name="font-options__font-weight" />
            </div>
            <div className="font-options__row">
              <label htmlFor="font-options__line-height">Line Height</label>
              <input type="range" id="font-options__line-height" name="font-options__line-height" min="0.5" max="5" step={0.1} />
            </div>
            <div className="font-options__row">
              <label htmlFor="font-options__letter-spacing">Letter Spacing</label>
              <input type="range" id="font-options__letter-spacing" name="font-options__letter-spacing" min="0.5" max="5" step={0.1} />
            </div>
            <div className="font-options__row">
              <label htmlFor="font-options__bionic">Bionic</label>
              <input type="checkbox" id="font-options__bionic" name="font-options__bionic" />
            </div> */}
          </fieldset>
        </form>
      )}
    </div>
  );
}

export default FontOptions;
