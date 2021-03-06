import React  from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentLang, getLanguageKeys, langKeyDisplayStrings, setLang } from '../../i18n';
import { translationFlags } from '../../i18n/translations';
import { EN } from '../../settings/strings';
import store from '../../store/store';
import './a11y.scss';

export const namespace = 'a11y/'

function A11Y() {
  let navigate = useNavigate();
  const languageKeys = getLanguageKeys();
  const { lang } = useParams();
  const currentLang = getCurrentLang() || lang;

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
              {langKeyDisplayStrings[lang]}
            </option>
          )}
        </Form.Select>
      </div>
    </div>
  ) : null;
}

export default A11Y;
