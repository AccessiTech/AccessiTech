import * as i18n from "./i18nSlice";

// i18nSlice module
export default i18n;

// Redux Slice Reucer
export const i18nSliceReducer = i18n.default;

// Module Exports
export const {
  i18nSlice,
  i18nSliceName,
  getBrowserLanguage,
  FETCH_LANG_LIB,
  languageKeys,
  SET_LANG_ACTION,
  INIT_TRANSLATIONS_ACTION,
} = i18n;

// Redux Action Creators
export const initTranslations = i18nSlice.actions[INIT_TRANSLATIONS_ACTION];
export const setLang = i18nSlice.actions[SET_LANG_ACTION];

// Redux Selectors
export const getCurrentLang = i18n.getCurrentLang;
export const getT = i18n.getT;
export const getLanguageKeys = i18n.getLanguageKeys;