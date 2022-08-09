import { configureStore } from '@reduxjs/toolkit';

import i18nSlice, {
    initTranslations,
    i18nSliceInitialState,
    i18nSliceName,
    setLang,
} from '..';

import {
    EN,
    translations,
    translatedMessages,
    FR,
} from './messages';

describe('@accessitech/i18n-redux-toolkit/reducer', () => {
    let store;

    it('Initializes the reducer in the store', () => {
        store = configureStore({
            reducer: {
                [i18nSliceName]: i18nSlice.reducer
            }
        });
        const initialSliceState = store.getState();
        expect(initialSliceState[i18nSliceName]).toBe(i18nSliceInitialState);
    });

    it('Adds translated messages to the store', () => {
        store.dispatch(initTranslations(translations));
        const currentState = store.getState();
        const nextState = {
            ...i18nSliceInitialState,
            languageKeys: [EN, FR],
            translations: translatedMessages,
        };
        expect(currentState[i18nSliceName]).toStrictEqual(nextState);
    });

    it('Sets the current language in the store', () => {
        store.dispatch(setLang(EN));
        const { lang:lang1 } = (store.getState())[i18nSliceName];
        expect(lang1).toBe(EN);
        
        store.dispatch(setLang(FR));
        const { lang:lang2 } = (store.getState())[i18nSliceName];
        expect(lang2).toBe(FR);
    });
});
