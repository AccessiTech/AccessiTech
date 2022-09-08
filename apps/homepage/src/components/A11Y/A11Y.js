import React  from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrentLang, useLanguageKeys, setLang } from '@accessitech/i18n-redux-toolkit';
import I18nSelect from '@accessitech/i18n-react-select';
import { displayStrings } from '../../settings/translations';
import store from '../../store/store';
import './a11y.scss';
import FontOptions from '../FontOptions/FontOptions';

export const namespace = 'a11y/'

function A11Y() {
  let navigate = useNavigate();
  const languageKeys = useLanguageKeys();
  const { lang } = useParams();
  const currentLang = useCurrentLang() || lang;

  const i18nSelectOnChange = (e) => {
    e.preventDefault();
    store.dispatch(setLang(e.target.value));
    navigate(`${e.target.value}`)
  }

  const i18nSelectProps = {
    lang,
    languageKeys,
    displayStrings,
    // translationFlags,
    currentLang,
    onChange: i18nSelectOnChange,
  };

  return (languageKeys && languageKeys.length) ? (
    <div
      className="a11y-container"
      aria-label="Accessibility Options"
    >
      <div className="a11y__settings-container">
        <button className="a11y__settings-toggle">
          <i className="fa-solid fa-cog" />
        </button>
        <menu className="a11y__settings">
          <li><FontOptions /></li>
        </menu>
      </div>
      <I18nSelect
        { ...i18nSelectProps }
      />
    </div>
  ) : null;
}

export default A11Y;
