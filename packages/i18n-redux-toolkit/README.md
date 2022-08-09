# `@accessitech/i18n-redux-toolkit`

> Internationalization for `@reduxjs/tookit` projects

This package manages internationalization (i18n) of display text in React apps using ReduxJs Toolkit, and consists of a Redux Toolkit slice, hooks, actions, and helpers.

## Usage

1. Add the redux slice to your store
2. initialize your translations
3. Get and Set the language of your App
4. Use Translations in your App

```JS
// store.js

import i18nSlice, { i18nSliceName } from '@accessitech/i18n-redux-toolkit';

export default configureStore({
  reducer: {
    [i18nSliceName]: i18nSlice.reducer,
  },
});
```

```JS
// App.js

import {
  initTranslations,
  getBrowserLanguage,
  setLang,
  useT,
} from '@accessitech/i18n-redux-toolkit';
import translations from './your/local/translations';

store.dispatch(initTranslations(translations));

const App = () => {

  useEffect(() => {
    const browserLang = getBrowserLanguage(translations);
    store.dispatch(setLang(browserLang));
  }, []);

  return <p>{useT('DISPLAY_STRING_KEY')}</p>;
}

export default App;
```

## Requirements

The Redux slice in this module is only compatible with `@reduxjs/toolkit`, not `react-redux`.

### Translations

This module does not contain any translations itself, and must be provided an object containing [Chrome i18n message](https://developer.chrome.com/docs/extensions/mv3/i18n-messages/) formatted translations paired with language id keys.

```JS
const translations = {
  'en': { ... },
  'es': { ... },
  'etc': { ... },
};
```

## API

### Action Creators

#### `initTranslations(translationsLib)`

Adds parsed translations library to the store.

```JS
/**
 * Initialize Translations
 * @param {object} translationsLib Chrome i18n formatted paired with language id key
 * @returns {object} payload object for the reducer
*/
```

#### `setLang(lang)`

Sets the language in the store.

```JS
/**
 * Set Language
 * @param {string} lang Language id key 
 */
```

### Hooks

#### `useCurrentLang()`

Get the id key of the current language.

```JS
/**
 * Use Current Language
 * @returns {string|null} language key for current language
 */
```

#### `useLanguageKeys()`

Get language keys for loaded translation languages.

```JS
/**
 * Use Language Keys
 * @returns {[string]|null} language keys of translated display string libs
 */
```

#### `useT(stringKey), useT(stringKey, lang)`

Translate display strings.

```JS
/**
 * Use Translation
 * @param {string} stringKey unique identifier for selecting translated string
 * @param {string} lang (optional) lang code
 * @returns {string|null} translated string or null if lang
 */
```

#### `useTranslations()`

Get translations library object from store.

```JS
/**
 * Use Translations
 * @returns {object|null} 
 */
```

### Helpers

#### `parseTranslation(translation)`

Get converted display string from i18n formatted objects.

```JS
/**
 * Parse Translation
 * @param {*} translation Translation object following Chrome i18n formatting
 * @returns {string} Translated string formatted with placeholders
 */
```

#### `getBrowserLanguage(translations)`

Get users' preferred language from the browser.

```JS
/**
 * Get Browser Language
 * @param {*} translations Library of Translations objects 
 * @returns {string} key of preferred language as per window.navigator
 */
```
