import { useSelector } from 'react-redux';
import { i18nSliceName } from './strings';

/**
 * Get Current Language
 * @returns {string|null} language key for current language
 */
export const useCurrentLang = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.lang) || null;
}

/**
 * Get Translation
 * @param {string} stringKey unique identifier for selecting translated string
 * @param {string} lang (optional) lang code
 * @returns {string|null} translated string or null if lang
 */
export const useT = (stringKey, lang) => {
  const slice = useSelector((state) => state[i18nSliceName]);
  const langKey = lang || slice.lang || 'en';
  const displayStrings = slice.translations && slice.translations[langKey];
  return (displayStrings && displayStrings[stringKey]) || ''
};

/**
 * Get Language Keys
 * @returns {string|null}
 */
export const useLanguageKeys = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.languageKeys) || null;
}

/**
 * Get Translations
 * @returns {object|null} 
 */
export const useTranslations = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.translations) || null;
}
