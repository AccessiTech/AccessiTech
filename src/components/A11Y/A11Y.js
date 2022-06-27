import React  from 'react';
import Form from 'react-bootstrap/Form';
import { getLanguageKeys } from '../../i18n';
import './a11y.scss';

const namespace = 'a11y/'


function A11Y() {
  const languageKeys = getLanguageKeys();
  return (languageKeys && languageKeys.length) ? (
    <div className="a11y-container">
      <Form.Select
        className="language-select"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        {languageKeys.map((lang, i) => 
          <option
            className="language-select-option"
            key={`${namespace}/${i}`}
            value={lang}
          >{lang}</option>
        )}
      </Form.Select>
    </div>
  ) : null;
}

export default A11Y;
