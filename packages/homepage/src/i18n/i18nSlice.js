/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { EN } from '../settings/strings';
import translations from './translations';

// Slice Magical Strings
export const i18nSliceName = 'i18n';
export const SET_LANG_ACTION = 'SET_LANG_ACTION';
export const FETCH_LANG_LIB = 'FETCH_LANG_LIB';

export const languageKeys = Object.keys(translations);

export const i18nSliceInitialState = {
  lang: '',
  languageKeys,
  translations: {},
};

// THE I18N SLICE REDUCER
export const i18nSlice = createSlice({
  name: i18nSliceName,
  initialState: i18nSliceInitialState,
  reducers: {
    [SET_LANG_ACTION]: {

      reducer: (state, action) => {
        const { payload } = action;
        state.lang = payload.lang;
        state.translations[payload.lang] = payload.langLib;
      },

      prepare: (lang) => {
        const langLib = translations[lang] || {};
        const parsedLangLib = {};

        for (let stringKey in langLib) {
          const translation = langLib[stringKey];
          parsedLangLib[stringKey] = parseTranslation(translation)
        }

        return {
          payload: {
            lang,
            langLib: parsedLangLib,
          }
        };
      }
    },
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
  return (slice && slice.lang) || null;
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
  return (displayStrings && displayStrings[stringKey]) || ''
};

/**
 * Get Language Keys
 * @returns {string|null}
 */
export const getLanguageKeys = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.languageKeys) || null;
}

// Slice Helpers

/**
 * Parse Translation
 * @param {*} translation Translation object followin Chrome i18n formatting
 * @returns {string} Translated string formatted with placeholders
 */
export const parseTranslation = (translation) => {
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

/**
 * Get Browser Language
 * @returns {string} key of preferred language as per window.navigator
 */
export const getBrowserLanguage = () => {
  const { language, languages, userLanguage } = window.navigator;

  if (userLanguage && translations[userLanguage]) {
    return userLanguage;
  }

  if (language && translations[language]) {
    return language;
  }

  if (!Array.isArray(languages)) {
    return EN;
  }

  for (let l = 0; l < languages.length; l += 1) {
    if (translations[languages[l]]) {
      return languages[l];
    }
  }
  return EN;
}
