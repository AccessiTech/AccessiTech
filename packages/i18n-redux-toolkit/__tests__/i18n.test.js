import { configureStore } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

import i18nSlice, {
    initTranslations,
    parseTranslation,
    // getBrowserLanguage,
    i18nSliceInitialState,
    i18nSliceName,
} from '../.';

import {
    EN,
    messages,
    MESSAGE_1,
    MESSAGE_4,
    translations,
    translatedMessages,
    FR,
} from './messages';

describe('@accessitech/i18n-redux-toolkit', () => {

    it('Is defined', ()=> {
        expect(i18nSlice).not.toBe(undefined);
        expect(i18nSlice.reducer).not.toBe(undefined);
        expect(i18nSliceName).not.toBe(undefined);
    });

    const store = configureStore({
        reducer: {
            [i18nSliceName]: i18nSlice.reducer
        }
    });

    it('Initializes the reducer in the store', () => {
        const initialSliceState = store.getState();
        expect(initialSliceState[i18nSliceName]).toBe(i18nSliceInitialState);
    });

    it('Parses i18n formatted messages', () => {
        const messages = translations[EN];
        const m1 = parseTranslation(messages[MESSAGE_1]);
        expect(m1).toBe("Hello world!!");
        const m4 = parseTranslation(messages[MESSAGE_4])
        expect(m4).toBe("AccessiTech on LinkedIn");
        const m5 = parseTranslation("some random text");
        expect(m5).toBe(undefined);
    });

    it('Adds translated messages to the store', () => {

        store.dispatch(initTranslations(translations));
        const currentState = store.getState();
        const nextState = {
            ...i18nSliceInitialState,
            languageKeys: [EN, FR],
            translations: translatedMessages,
        }
        expect(currentState[i18nSliceName]).toStrictEqual(nextState);
    });

    // it('Sets the current language in the store', () => {
        
    // });
});
