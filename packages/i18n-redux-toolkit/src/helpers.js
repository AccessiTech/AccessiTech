import { EN } from "./strings";
import { useTranslations } from "./hooks";

/**
 * Parse Translation
 * @param {*} translation Translation object following Chrome i18n formatting
 * @returns {string} Translated string formatted with placeholders
 */
export const parseTranslation = (translation) => {
  const { placeholders, message } = translation;

  if (!placeholders) {
    return message;
  }

  let parsedTranslation = message;

  for (let key in placeholders) {
    const content = placeholders[key].content;
    parsedTranslation = parsedTranslation.replace(`$${key}$`, content);
  }

  return parsedTranslation;
}

/**
 * Get Browser Language
 * @returns {string} key of preferred language as per window.navigator
 */
export const getBrowserLanguage = (translations) => {
  const { language, languages, userLanguage } = window.navigator;

  if (userLanguage && translations[userLanguage]) {
    return userLanguage;
  }

  if (language && translations[language]) {
    return language;
  }

  if (!Array.isArray(languages)) {
    return EN;
  }

  for (let l = 0; l < languages.length; l += 1) {
    if (translations[languages[l]]) {
      return languages[l];
    }
  }
  return EN;
}

