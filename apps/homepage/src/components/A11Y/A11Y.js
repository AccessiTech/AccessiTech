import React  from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrentLang, useLanguageKeys, setLang } from '@accessitech/i18n-redux-toolkit';
import { translationFlags, displayStrings } from '../../settings/translations';
import { EN } from '../../settings/strings';
import store from '../../store/store';
import './a11y.scss';

export const namespace = 'a11y/'

function A11Y() {
  let navigate = useNavigate();
  const languageKeys = useLanguageKeys();
  const { lang } = useParams();
  const currentLang = useCurrentLang() || lang;

  return (languageKeys && languageKeys.length) ? (
    <div
      className="a11y-container"
      aria-label="Accessibility Options"
    >
      <div className="selector-container">
        <span role="img" aria-hidden="true" className="language-flag">
          {translationFlags[lang || EN]}
        </span>
        <Form.Select
          aria-label="Lanage Selection"
          className="language-select"
          defaultValue={currentLang}
          onChange={(e) => {
            e.preventDefault();
            store.dispatch(setLang(e.target.value));
            navigate(`${e.target.value}`)
          }}
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
    </div>
  ) : null;
}

export default A11Y;
