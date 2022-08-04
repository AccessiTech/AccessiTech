import { createSlice } from '@reduxjs/toolkit';
import { parseTranslation } from './helpers';
import { i18nSliceName, INIT_TRANSLATIONS_ACTION, SET_LANG_ACTION } from './strings';

// Initial State of the reducer
export const i18nSliceInitialState = {
  lang: '',
  languageKeys: [],
  translations: {},
};

// THE I18N SLICE REDUCER
export const i18nSlice = createSlice({
  name: i18nSliceName,
  initialState: i18nSliceInitialState,
  reducers: {

    // Sets the current language
    [SET_LANG_ACTION]: {
      reducer: (state, action) => {
        state.lang = action.payload;
      },
    },

    // Loads and parses translated display strings
    [INIT_TRANSLATIONS_ACTION]: {
      prepare: (translationsLib) => {
        const langLib = translationsLib || {};
        const parsedLangLib = {};

        // Loop through all i18n translation resources
        for (let langKey in langLib) {
          parsedLangLib[langKey] = {}

          // Loop through all translated display strings
          for (let stringKey in langLib[langKey]) {
            const translation = langLib[langKey][stringKey];

            // Parse the i18n formatted entry to a translated display string
            parsedLangLib[langKey][stringKey] = parseTranslation(translation);
          }
        }

        return {
          payload: {
            languageKeys: Object.keys(translationsLib),
            translations: parsedLangLib,
          }
        }
      },

      // todo - loop through action translations to add and update w/o deleting state translations
      reducer: (state, action) => {
        state.languageKeys = action.payload.languageKeys;
        state.translations = action.payload.translations;
      }
    }
  },
});

// Action Creators
export const initTranslations = i18nSlice.actions[INIT_TRANSLATIONS_ACTION];
export const setLang = i18nSlice.actions[SET_LANG_ACTION];
