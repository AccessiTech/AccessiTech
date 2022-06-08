import * as i18n from "./i18nSlice";

// Redux Slice
export const i18nSlice = i18n.default;

// Redux Selectors
export const getCurrentLang = i18n.getCurrentLang;
export const getT = i18n.getT;

// i18nSlice module
export default i18n;
