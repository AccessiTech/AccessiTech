import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import en from './en.json';

export const i18nSliceName = 'i18n';

export const i18nSlice = createSlice({
  name: i18nSliceName,
  initialState: {
    lang: 'en',
    translations: {
      'en': en,
    },
  },
  reducers: {

  },
});

export default i18nSlice.reducer;

