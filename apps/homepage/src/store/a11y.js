import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


// Initial State
export const a11yInitialState = {
  isOpen: false,
};

// Magical Strings!
export const a11ySliceName = 'a11y';
export const TOGGLE_A11Y_OPTIONS_ACTION = 'TOGGLE_A11Y_OPTIONS_ACTION';

// THE A11Y SLICE REDUCER
export const a11ySlice = createSlice({
  name: a11ySliceName,
  initialState: a11yInitialState,
  reducers: {
    [TOGGLE_A11Y_OPTIONS_ACTION]: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action Creators
export const toggleA11y = a11ySlice.actions[TOGGLE_A11Y_OPTIONS_ACTION];

// Hooks
export const useIsA11yOpen = () => {
  const slice = useSelector((state) => state[a11ySliceName]);
  return (slice && slice.isOpen) || false;
}
