import React from 'react';
import Form from 'react-bootstrap/Form';

export const EN = 'en';
export const namespace = '@accessitech/i18n-react-select/';

export const i18nSelect = (props) => {

  const { 
    lang,
    languageKeys,
    displayStrings,
    translationFlags,
    currentLang,
    onChange,
  } = props || {};

  return (
    <div className="selector-container">
      <span role="img" aria-hidden="true" className="language-flag">
        {translationFlags[lang || EN]}
      </span>
      <Form.Select
        aria-label="Language Selection"
        className="language-select"
        defaultValue={currentLang}
        onChange={onChange}
      >
        {languageKeys.map((lang, i) =>
          <option
            className="language-select-option"
            key={`${namespace}/${i}`}
            value={lang}
          >
            {displayStrings[lang]}
          </option>
        )}
      </Form.Select>
    </div>
  );
}

export default i18nSelect;
