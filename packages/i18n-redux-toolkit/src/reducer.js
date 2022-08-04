import { createSlice } from '@reduxjs/toolkit';
import { parseTranslation } from './helpers';
import { i18nSliceName, INIT_TRANSLATIONS_ACTION, SET_LANG_ACTION } from './strings';

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
    [SET_LANG_ACTION]: {
      reducer: (state, action) => {
        state.lang = action.payload;
      },
    },

    [INIT_TRANSLATIONS_ACTION]: {
      prepare: (translationsLib) => {
        const langLib = translationsLib || {};
        const parsedLangLib = {};

        for (let langKey in langLib) {
          parsedLangLib[langKey] = {}

          for (let stringKey in langLib[langKey]) {
            const translation = langLib[langKey][stringKey];
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
