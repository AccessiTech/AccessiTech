import { useSelector } from 'react-redux';
import { EN, i18nSliceName } from './strings';

/**
 * Use Current Language
 * @returns {string|null} language key for current language
 */
export const useCurrentLang = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.lang) || null;
}

/**
 * Use Translation
 * @param {string} stringKey unique identifier for selecting translated string
 * @param {string} lang (optional) lang code
 * @returns {string|null} translated string or null if lang
 */
export const useT = (stringKey, lang) => {
  const slice = useSelector((state) => state[i18nSliceName]);
  const langKey = lang || slice.lang || EN;
  const displayStrings = slice.translations && slice.translations[langKey];
  return (displayStrings && displayStrings[stringKey]) || '';
};

/**
 * Use Language Keys
 * @returns {[string]|null} language keys of translated display string libs
 */
export const useLanguageKeys = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.languageKeys) || null;
}

/**
 * Use Translations
 * @returns {object|null} 
 */
export const useTranslations = () => {
  const slice = useSelector((state) => state[i18nSliceName]);
  return (slice && slice.translations) || null;
}
