import { configureStore } from '@reduxjs/toolkit';
import { i18nSliceReducer, i18nSliceName } from '../i18n';

export default configureStore({
  reducer: {
    [i18nSliceName]: i18nSliceReducer,
  },
});
