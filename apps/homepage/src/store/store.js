import { configureStore, combineReducers } from '@reduxjs/toolkit';
import i18nSlice, { i18nSliceName } from '@accessitech/i18n-redux-toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { a11ySlice, a11ySliceName } from './a11y';
import { fontOptionsSlice, fontOptionsSliceName } from '../components/FontOptions/reducer';

export const persistConfig = {
  key: '@accessitech/homepage',
  storage,
};

export const reducer = combineReducers({
  [i18nSliceName]: i18nSlice.reducer,
  [a11ySliceName]: a11ySlice.reducer,
  [fontOptionsSliceName]: fontOptionsSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }),
});

export const persistor = persistStore(store);

export default store;
