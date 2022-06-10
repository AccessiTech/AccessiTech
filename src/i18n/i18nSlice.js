import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import en from './en.json';

// Slice Magical Strings
export const i18nSliceName = 'i18n';
export const SET_LANG_ACTION = `SET_LANG_ACTION`;

// THE I18N SLICE REDUCER
export const i18nSlice = createSlice({
  name: i18nSliceName,
  initialState: {
    lang: '',
    translations: {
      'en': en,
    },
  },
  reducers: {
    [SET_LANG_ACTION]: {
      reducer: (state, payload) => {
        state.lang = payload.lang;
      },
      prepare: (lang) => {
        return { payload: lang };
      }
    } ,
  },
});

export default i18nSlice.reducer;

// Selectors

/**
 * Get Current Language
 * @returns {string|null} language key for current language
 */
export const getCurrentLang = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return slice && slice.lang || null;
}

/**
 * Get Translation
 * @param {string} stringKey unique identifier for selecting translated string
 * @param {string} lang (optional) lang code
 * @returns {string|null} translated string or null if lang
 */
export const getT = (stringKey, lang) => {
  const slice = useSelector((state) => state[i18nSliceName]);
  const langKey = lang || slice.lang || 'en';
  const displayStrings = slice.translations && slice.translations[langKey];
  if (!displayStrings || !displayStrings[stringKey]) {
    return null
  }

  return parseTranslation(displayStrings[stringKey]) || null;
};

/**
 * Parse Translation
 * @param {*} translation Translation object followin Chrome i18n formatting
 * @returns {string} Translated string formatted with placeholders
 */
const parseTranslation = (translation) => {
  const { placeholders, message } = translation;

  if (!placeholders) {
    return message;
  }

  let parsedTranslation = message;

  for (let key in placeholders) {
    const content = placeholders[key].content;
    parsedTranslation = parsedTranslation.replace(`$${key}$`, content);
  }

  return parsedTranslation;
}