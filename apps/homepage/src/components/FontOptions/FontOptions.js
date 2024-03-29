import React from "react";
import {
  debounce,
  toggleFontOptions,
  useFontFamily,
  useFontSize,
  useIsOpen,
} from "./reducer";
import store from "../../store/store";
import {
  onFontFamilyChange,
  onFontOptionsToggle,
  onFontSizeChange,
} from "./helpers";
import { useT } from "@accessitech/i18n-redux-toolkit";

export const namespace = "fontOptions/";

// Display Strings!
export const FONT_OPTIONS_TOGGLE_LABEL = "FONT_OPTIONS_TOGGLE_LABEL";
export const FONT_OPTIONS_TITLE = "FONT_OPTIONS_TITLE";
export const FONT_OPTIONS_DESCRIPTION = "FONT_OPTIONS_DESCRIPTION";
export const FONT_SIZE_LABEL = "FONT_SIZE_LABEL";
export const FONT_OPTIONS_FAMILY_LABEL = "FONT_OPTIONS_FAMILY_LABEL";
export const FONT_OPTIONS_SIZE_INPUT_LABEL = "FONT_OPTIONS_SIZE_INPUT_LABEL";
export const FONT_FAMILY_SELECT_LABEL = "FONT_FAMILY_SELECT_LABEL";
export const SERIF_DISPLAY = "SERIF_DISPLAY";
export const SANS_SERIF_DISPLAY = "SANS_SERIF_DISPLAY";
export const MONOSPACE_DISPLAY = "MONOSPACE_DISPLAY";

// Magic Strings!!
export const SERIF = "serif";
export const SANS_SERIF = "sans-serif";
export const MONOSPACE = "monospace";
export const ESCAPE = "Escape";

/** Font Options
 * @returns {object} font options component
 **/
export const FontOptions = (props) => {
  const isOpen = useIsOpen();
  const fontSize = Number(useFontSize() || 1).toFixed(1);
  const fontFamily = useFontFamily();
  const { onClose } = props || {};

  const onEscapeKey = (e) => {
    if (e.key === ESCAPE) {
      if (isOpen) {
        store.dispatch(toggleFontOptions());
      } else if (onClose) {
        onClose(e);
      }
    }
  };

  const formElement = (
    <form id={`${namespace}form`} className="font-options">
      <fieldset>
        <legend>{useT(FONT_OPTIONS_TITLE)}</legend>

        <div className="font-options__row">
          <div className="flex-row flex-space-between">
            <label htmlFor="font-options__font-size">
              {useT(FONT_SIZE_LABEL)}:
            </label>
            <span className="font-options__font-size-value">{fontSize}x</span>
          </div>

          <input
            type="range"
            id="font-options__font-size"
            name="font-options__font-size"
            aria-label={useT(FONT_OPTIONS_SIZE_INPUT_LABEL)}
            min="0.5"
            max="5"
            step={0.1}
            defaultValue={fontSize}
            onChange={(e) => debounce(onFontSizeChange(e, fontSize), 250)}
            onKeyDown={onEscapeKey}
          />
        </div>

        <div className="font-options__row">
          <div className="flex-row flex-space-between">
            <label htmlFor="font-options__font-family">
              {useT(FONT_OPTIONS_FAMILY_LABEL)}:
            </label>

            <select
              id="font-options__font-family"
              name="font-options__font-family"
              aria-label={useT(FONT_FAMILY_SELECT_LABEL)}
              defaultValue={fontFamily}
              onChange={onFontFamilyChange}
              onKeyDown={onEscapeKey}
            >
              <option value={SANS_SERIF}>{useT(SANS_SERIF_DISPLAY)}</option>
              <option value={SERIF}>{useT(SERIF_DISPLAY)}</option>
              <option value={MONOSPACE}>{useT(MONOSPACE_DISPLAY)}</option>
            </select>
          </div>
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
  );

  return (
    <div className="font-options-container">
      <button
        className={`${isOpen ? "isOpen " : ""}font-options-toggle`}
        onClick={onFontOptionsToggle}
        aria-label={useT(FONT_OPTIONS_TOGGLE_LABEL)}
        onKeyDown={onEscapeKey}
      >
        <i className="fa-solid fa-font" />
      </button>
      {isOpen && formElement}
    </div>
  );
}

export default FontOptions;
