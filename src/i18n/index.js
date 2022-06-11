import * as i18n from "./i18nSlice";

// i18nSlice module
export default i18n;

// Redux Slice Reucer
export const i18nSliceReducer = i18n.default;

// Module Exports
export const {
  i18nSlice,
  i18nSliceName,
  fetchLangLib,
  FETCH_LANG_LIB,
  SET_LANG_ACTION
} = i18n;

// Redux Action Creators
export const setLang = i18nSlice.actions[SET_LANG_ACTION];
// export const fetchLangLib = i18nSlice.actions[FETCH_LANG_LIB];

// export const fetchLang = fetchLangLib;


// Redux Selectors
export const getCurrentLang = i18n.getCurrentLang;
export const getT = i18n.getT;
