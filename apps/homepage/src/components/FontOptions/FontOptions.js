import React  from 'react';
import {
  debounce,
  getFontSizeClass,
  setFontSize,
  toggleFontOptions,
  useFontSize,
  useIsOpen,
} from './reducer';
import store from '../../store/store';

export const namespace = 'fontOptions/';

export const onFontOptionsToggle = (e) => {
  e.preventDefault();
  console.log(typeof toggleFontOptions)
  store.dispatch(toggleFontOptions());
}

export const onFontSizeChange = (e, fontSize) => {
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

function FontOptions() {
  const isOpen = useIsOpen();
  const fontSize = Number(useFontSize() || 1).toFixed(1);

  return (
    <div className="font-options-container">
      <button onClick={onFontOptionsToggle}>
        <i className="fa-solid fa-font" />
      </button>
      {isOpen && (
        <form id={`${namespace}form`} className="font-options">
          <fieldset>
            <legend>Font Options</legend>

            <div className="font-options__row">
              <label htmlFor="font-options__font-size">Font Size:</label>
              <span className="font-options__font-size-value">{fontSize}x</span>
              <br/>
              <input
                type="range"
                id="font-options__font-size"
                name="font-options__font-size"
                min="0.5"
                max="5"
                step={0.1}
                defaultValue={fontSize}
                onChange={(e) => debounce(onFontSizeChange(e, fontSize), 250)}
              />
            </div>
          
            {/* <div className="font-options__row">
              <label htmlFor="font-options__font-family">Font Family</label>
              <select id="font-options__font-family" name="font-options__font-family">
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </div>
            <div className="font-options__row">
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
              <label htmlFor="font-options__font-weight">Font Weight</label>
              <input type="range" id="font-options__font-weight" name="font-options__font-weight" min="0" max="900" step={100} />
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
