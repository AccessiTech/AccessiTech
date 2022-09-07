import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Initial State
export const fontOptionsInitialState = {
  isOpen: false,
  fontSize: 1,
};

// Magical Strings!
export const fontOptionsSliceName = 'fontOptions';
export const TOGGLE_FONT_OPTIONS_ACTION = 'TOGGLE_FONT_OPTIONS_ACTION';
export const SET_FONT_SIZE_ACTION = 'SET_FONT_SIZE_ACTION';

// THE FONT OPTIONS SLICE REDUCER
export const fontOptionsSlice = createSlice({
  name: fontOptionsSliceName,
  initialState: fontOptionsInitialState,
  reducers: {
    [TOGGLE_FONT_OPTIONS_ACTION]: (state) => {
      state.isOpen = !state.isOpen;
    },
    [SET_FONT_SIZE_ACTION]: (state, action) => {
      state.fontSize = action.payload;
    }
  },
});

// Action Creators
export const toggleFontOptions = fontOptionsSlice.actions[TOGGLE_FONT_OPTIONS_ACTION];
export const setFontSize = fontOptionsSlice.actions[SET_FONT_SIZE_ACTION];

// Hooks

/** Use Is Open
 * @returns {boolean} true if font options are open
 * @example const isOpen = useIsOpen();
 */
export  const useIsOpen = () => {
  const slice = useSelector((state) => state[fontOptionsSliceName]);
  return (slice && slice.isOpen) || false;
};

/** Use Font Size
 * @returns {number} font size in rem
 * @example const fontSize = useFontSize();
*/
export const useFontSize = () => {
  const slice = useSelector((state) => state[fontOptionsSliceName]);
  return (slice && slice.fontSize) || 1;
};