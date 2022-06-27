import React  from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentLang, getLanguageKeys, setLang } from '../../i18n';
import { ROOT } from '../../settings/strings';
import store from '../../store/store';
import './a11y.scss';

const namespace = 'a11y/'

function A11Y() {
  let navigate = useNavigate();
  const languageKeys = getLanguageKeys();
  const { lang } = useParams();
  const currentLang = getCurrentLang() || lang;

  return (languageKeys && languageKeys.length) ? (
    <div className="a11y-container">
      <Form.Select
        className="language-select"
        defaultValue={currentLang}
        onChange={(e) => {
          e.preventDefault();
          store.dispatch(setLang(e.target.value));
          navigate(`${ROOT}/${e.target.value}`)
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
