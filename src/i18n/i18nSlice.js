import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import en from './en.json';

export const i18nSliceName = 'i18n';

export const i18nSlice = createSlice({
  name: i18nSliceName,
  initialState: {
    lang: 'en',
    translations: {
      'en': en,
    },
  },
  reducers: {

  },
});

export default i18nSlice.reducer;

// Selectors

/**
 * Get Current Language
 * @returns (string|null) language key for current language
 */
export const getCurrentLang = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return slice && slice.lang || null;
}

/**
 * Get Translation
 * @param stringKey (string) unique identifier for selecting translated string
 * @param lang (optional string) lang code
 * @returns (string|null) translated string or null if lang
 */
export const getT = (stringKey, lang = 'en') => {
  const slice = useSelector((state) => state[i18nSliceName]);
  const displayStrings = slice.translations && slice.translations[lang];
  return displayStrings && displayStrings[stringKey] && displayStrings[stringKey].message || null;
};
