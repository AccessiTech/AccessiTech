import { configureStore } from '@reduxjs/toolkit';
import i18nSlice, { i18nSliceName } from '@accessitech/i18n-redux-toolkit';
import { fontOptionsSlice, fontOptionsSliceName } from '../components/FontOptions/reducer';

export default configureStore({
  reducer: {
    [i18nSliceName]: i18nSlice.reducer,
    [fontOptionsSliceName]: fontOptionsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
