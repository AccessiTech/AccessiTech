import React, { useRef }  from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCurrentLang, useLanguageKeys, setLang } from '@accessitech/i18n-redux-toolkit';
import I18nSelect from '@accessitech/i18n-react-select';
import { displayStrings } from '../../settings/translations';
import store from '../../store/store';
import './a11y.scss';
import FontOptions from '../FontOptions/FontOptions';
import { toggleA11y, useIsA11yOpen } from '../../store/a11y';
import { useOutsideClick } from '../../settings/utils';


export const namespace = 'a11y/'

function A11Y() {
  const i18nSelectRef = useRef(null);
  let navigate = useNavigate();
  const languageKeys = useLanguageKeys();
  const { lang } = useParams();
  const currentLang = useCurrentLang() || lang;
  const isA11yOpen = useIsA11yOpen();

  const removeEventListener = useOutsideClick(i18nSelectRef, () => {
    if (isA11yOpen) {
      store.dispatch(toggleA11y());
    }
  });

  const i18nSelectOnChange = (e) => {
    e.preventDefault();
    store.dispatch(setLang(e.target.value));
    navigate(`${e.target.value}`)
  }

  const onA11yToggle = (e) => {
    e.preventDefault();
    if (isA11yOpen) {
      removeEventListener();
    }
    store.dispatch(toggleA11y());
  };

  const onEscapeKey = (e) => {
    if (e.key === 'Escape' && isA11yOpen) {
      removeEventListener();
      store.dispatch(toggleA11y());
    }
  };

  const i18nSelectProps = {
    lang,
    languageKeys,
    displayStrings,
    // translationFlags,
    currentLang,
    onChange: i18nSelectOnChange,
    onClose: onEscapeKey,
  };

  return (languageKeys && languageKeys.length) ? (
    <div
      className="a11y-container"
      aria-label="Accessibility Options"
      ref={i18nSelectRef}
    >
      <div className={`${isA11yOpen ? 'isOpen ' : ''}a11y__settings-container`}>
        <button
          className="a11y__settings-toggle"
          onClick={onA11yToggle}
          aria-label="Toggle Accessibility Options"
          // aria-roledescription='button'
          onKeyDown={onEscapeKey}
        >
          <i className="fa fa-cog" />
        </button>
        {isA11yOpen && (
          <menu className="a11y__settings">
            <li><FontOptions onClose={onEscapeKey} /></li>
            <li><I18nSelect { ...i18nSelectProps } /></li>
          </menu>
        )}
        {isA11yOpen && (
          <button
            className="a11y__settings-close"
            onClick={onA11yToggle}
            onKeyDown={onEscapeKey}
            aria-label="Close Accessibility Options"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        )}

      </div>
    </div>
  ) : null;
}

export default A11Y;
