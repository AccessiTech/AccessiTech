import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import {
  EN,
  FR,
  translations,
  translatedMessages,
  MESSAGE_1,
} from './messages';

import i18nSlice, {
  i18nSliceName,
  initTranslations,
  setLang,
  useCurrentLang,
  useLanguageKeys,
  useTranslations,
  useT,
} from './..';

const App = (props) => {
  const { hook, value } = props || {};
  if (hook) {
    const result = value ? hook(value) : props.hook();
    return (
      <div data-testid="test">{
        typeof result === 'string' ? result : JSON.stringify(result)
      }</div>
    );
  }
  return <div/>
}

describe('@accessitech/i18n-redux-toolkit/hooks', () => {
  const store = configureStore({
    reducer: {
      [i18nSliceName]: i18nSlice.reducer
    }
  });

  it('Mounts and updates without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    store.dispatch(initTranslations(translations));
    store.dispatch(setLang(EN));

    const currentState = (store.getState())[i18nSliceName];
    const nextState = {
      lang: EN,
      languageKeys: [EN, FR],
      translations: translatedMessages,
    }
    expect(currentState).toStrictEqual(nextState);
  });

  it('Gets the current language from the store', () => {
    render(
      <Provider store={store}>
        <App hook={useCurrentLang} />
      </Provider>  
    );
    const testEl = screen.getByTestId('test');
    expect(testEl.innerHTML).toBe(EN);
  });

  it('Gets the language keys from the store', () => {
    render(
      <Provider store={store}>
        <App hook={useLanguageKeys} />
      </Provider>
    );
    const testEl = screen.getByTestId('test');
    const stringified = JSON.stringify([EN, FR]);
    expect(testEl.innerHTML).toBe(stringified);
  });

  it('Gets translations library from the store', () => {
    render(
      <Provider store={store}>
        <App hook={useTranslations} />
      </Provider>
    );
    const testEl = screen.getByTestId('test');
    const stringified = JSON.stringify(translatedMessages);
    expect(testEl.innerHTML).toBe(stringified);
  });

  it('Gets translated messages from the store', () => {
    render(
      <Provider store={store}>
        <App hook={useT} value={MESSAGE_1} />
      </Provider>
    );
    const testEl = screen.getByTestId('test');
    expect(testEl.innerHTML).toBe(translatedMessages[EN][MESSAGE_1]);
  });
});
