import { configureStore } from '@reduxjs/toolkit';
import i18nSlice, { i18nSliceName } from '@accessitech/i18n-redux-toolkit';
import { a11ySlice, a11ySliceName } from './a11y';
import { fontOptionsSlice, fontOptionsSliceName } from '../components/FontOptions/reducer';

export default configureStore({
  reducer: {
    [i18nSliceName]: i18nSlice.reducer,
    [a11ySliceName]: a11ySlice.reducer,
    [fontOptionsSliceName]: fontOptionsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
