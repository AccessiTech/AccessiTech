// i18n Redux Slice
import { i18nSlice } from './src/reducer';
export default i18nSlice;
export { i18nSliceInitialState } from './src/reducer';

// Action Creators
export {
  initTranslations,
  setLang,
} from './src/reducer';

// Slice Helpers
export {
  parseTranslation,
  getBrowserLanguage,
} from './src/helpers';

// Slice Hooks
export {
  useCurrentLang,
  useLanguageKeys,
  useT,
  useTranslations,
} from './src/hooks';


// Magical Strings
export {
  EN,
  i18nSliceName,
  INIT_TRANSLATIONS_ACTION,
  SET_LANG_ACTION,
} from './src/strings';
