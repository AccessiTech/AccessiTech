import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const SANS_SERIF = 'sans-serif';
export const SERIF = 'serif';
export const MONOSPACE = 'monospace';

export type FontFamily = typeof SANS_SERIF | typeof SERIF | typeof MONOSPACE;
export interface FontOptionsState {
  isOpen: boolean;
  fontSize: number;
  fontFamily: FontFamily;
}

// Initial State
export const fontOptionsInitialState = {
  isOpen: false,
  fontSize: 1,
  fontFamily: SANS_SERIF,
};

// Magical Strings!
export const fontOptionsSliceName = 'fontOptions';
export const TOGGLE_FONT_OPTIONS_ACTION = 'TOGGLE_FONT_OPTIONS_ACTION';
export const SET_FONT_SIZE_ACTION = 'SET_FONT_SIZE_ACTION';
export const SET_FONT_FAMILY_ACTION = 'SET_FONT_FAMILY_ACTION';

// THE FONT OPTIONS SLICE REDUCER
export const fontOptionsSlice = createSlice({
  name: fontOptionsSliceName,
  initialState: fontOptionsInitialState,
  reducers: {
    [TOGGLE_FONT_OPTIONS_ACTION]: state => {
      state.isOpen = !state.isOpen;
    },
    [SET_FONT_SIZE_ACTION]: (state, action) => {
      state.fontSize = action.payload;
    },
    [SET_FONT_FAMILY_ACTION]: (state, action) => {
      state.fontFamily = action.payload;
    },
  },
});

// Action Creators
export const toggleFontOptions = fontOptionsSlice.actions[TOGGLE_FONT_OPTIONS_ACTION];
export const setFontSize = fontOptionsSlice.actions[SET_FONT_SIZE_ACTION];
export const setFontFamily = fontOptionsSlice.actions[SET_FONT_FAMILY_ACTION];

// Hooks

/** Use Is Open
 * @returns {boolean} true if font options are open
 * @example const isOpen = useIsOpen();
 */
export const useIsOpen = (): boolean => {
  const slice = useSelector((state: any) => state[fontOptionsSliceName]);
  return (slice && slice.isOpen) || false;
};

/** Use Font Size
 * @returns {number} font size in rem
 * @example const fontSize = useFontSize();
 */
export const useFontSize = (): number => {
  const slice = useSelector((state: any) => state[fontOptionsSliceName]);
  return (slice && slice.fontSize) || 1;
};

/** Use Font Family
 * @returns {FontFamily} font family
 * @example const fontFamily = useFontFamily();
 */
export const useFontFamily = (): FontFamily => {
  const slice = useSelector((state: any) => state[fontOptionsSliceName]);
  return (slice && slice.fontFamily) || SANS_SERIF;
};
