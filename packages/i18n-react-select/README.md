# `@accessitech/i18n-react-select`

> A react component for displaying and selecting the current language of your app.

This package includes a simple react-bootstrap `<Form.Select>` component to visually indicate which language is currently selected, and display all available languages. Passing your callback function via the `onChange` allows integration of your app state management.

## Usage

```bash
yarn add @accessitech/i18n-react-select
```

```JS
// MyComponent.js
import React from 'react';
import { I18nSelect } from '@accessitech/i18n-react-select';


const MyComponent = () => (
  <I18nSelect
    currentLang={'en'}
    languageKeys={['en','fr']}
    displayStrings={{
      'en': 'En',
      'fr': 'Fr',
    }}
    translationFlags={{
      'en': '🇺🇸',
      'fr': '🇫🇷',
    }}
    onChange={(e) => {
      // do something to update your state
    }}
  />
);
```

## API

This package doesn't include any helpers or other functionality, so the only interface is via the component props.

### Props

#### `currentLang`

`string` The id of the current language being used by the application.

#### `languageKeys`

`[string]` An array of all language ids available in the application.

#### `displayStrings`

`{'languageId':'displayString'}` An object of language display strings (what will actually be rendered by the component) paired with their language id keys.

#### `translationFlags` (optional)

`{'languageId': 'flagEmoji' }` An optional object of flag emojis paired with their language id keys. If present, the flags will render next to the selector based on the current language.

#### `onChange`

`function(e)` A callback function passing the onChange event as the only parameter.
