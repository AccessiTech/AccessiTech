import React  from 'react';
import { toggleFontOptions, useIsOpen } from './reducer';
import store from '../../store/store';

export const namespace = 'fontOptions/';

export const onFontOptionsToggle = (e) => {
  e.preventDefault();
  console.log(typeof toggleFontOptions)
  store.dispatch(toggleFontOptions());
}

function FontOptions() {
  const isOpen = useIsOpen();

  return (
    <div className="font-options-container">
      <button onClick={onFontOptionsToggle}>Fonts</button>
      {isOpen && (
        <div className="font-options">
          <span>Font Options</span>
          <ul>
            <li>
              <span>Size</span>
            </li>
            <li>
              <span>Color</span>
            </li>
            <li>
              <span>Style</span>
            </li>
            <li>
              <span>Bionic</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FontOptions;
