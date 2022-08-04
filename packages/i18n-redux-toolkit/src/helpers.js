import { EN } from "./strings";

/**
 * Parse Translation
 * @param {*} translation Translation object following Chrome i18n formatting
 * @returns {string} Translated string formatted with placeholders
 */
export const parseTranslation = (translation) => {
  const { placeholders, message } = translation;
  let parsedTranslation = message;

  // if the translation has placeholders
  if (placeholders && Object.keys(placeholders).length) {

    // loop through translated string replacing placeholders with non-translatable text
    for (let key in placeholders) {
      const content = placeholders[key].content;
      parsedTranslation = parsedTranslation.replace(`$${key}$`, content);
    }
  }

  return parsedTranslation;
}

/**
 * Get Browser Language
 * @param {*} translations Library of Translations objects 
 * @returns {string} key of preferred language as per window.navigator
 */
export const getBrowserLanguage = (translations) => {
  const { language, languages, userLanguage } = window.navigator;

  // if userLanguage is loaded then use it
  if (userLanguage && translations[userLanguage]) {
    return userLanguage;
  }

  // if language is loaded then use it
  if (language && translations[language]) {
    return language;
  }

  // check languages for loaded languages
  if (Array.isArray(languages)) {
    for (let l = 0; l < languages.length; l += 1) {
      if (translations[languages[l]]) {
        return languages[l];
      }
    }
  }

  // default to English
  return EN;
}

