import React from 'react';
import Form from 'react-bootstrap/Form';

export const EN = 'en';
export const namespace = '@accessitech/i18n-react-select/';

export const I18nSelect = (props) => {

  const { 
    languageKeys,
    displayStrings,
    translationFlags,
    currentLang,
    onChange,
  } = props || {};

  const hasFlags = typeof translationFlags !== 'undefined';

  return (
    <div className={`selector-container${ hasFlags ? ' hasFlags' : ''}`}>
      {(hasFlags ? 
        <span role="img" aria-hidden="true" className="language-flag">
          {translationFlags[currentLang || EN]}
        </span>
      :'')}
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

export default I18nSelect;
