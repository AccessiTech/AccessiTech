import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface A11yState {
  isOpen: boolean;
  isSimplified: boolean;
}

// Initial State
export const a11yInitialState:A11yState = {
  isOpen: false,
  isSimplified: false,
};

// Magical Strings!
export const a11ySliceName = "a11y";
export const TOGGLE_A11Y_OPTIONS_ACTION = "TOGGLE_A11Y_OPTIONS_ACTION";
export const TOGGLE_A11Y_SIMPLIFIED_ACTION = "TOGGLE_A11Y_SIMPLIFIED_ACTION";

// THE A11Y SLICE REDUCER
export const a11ySlice = createSlice({
  name: a11ySliceName,
  initialState: a11yInitialState,
  reducers: {
    [TOGGLE_A11Y_OPTIONS_ACTION]: (state) => {
      state.isOpen = !state.isOpen;
    },
    [TOGGLE_A11Y_SIMPLIFIED_ACTION]: (state) => {
      state.isSimplified = !state.isSimplified;
    },
  },
});

// Action Creators
export const toggleA11y = a11ySlice.actions[TOGGLE_A11Y_OPTIONS_ACTION];
export const toggleSimplified =
  a11ySlice.actions[TOGGLE_A11Y_SIMPLIFIED_ACTION];

// Hooks
export const useIsA11yOpen = ():boolean => {
  const slice:A11yState = useSelector((state:any) => state[a11ySliceName]);
  return (slice && slice.isOpen) || false;
};

export const useIsSimplified = ():boolean => {
  const slice:A11yState = useSelector((state:any) => state[a11ySliceName]);
  return (slice && slice.isSimplified) || false;
};
