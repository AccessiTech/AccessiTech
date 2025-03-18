
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import { PersistConfig, Persistor } from "reduxjs-toolkit-persist/lib/types";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { fontOptionsSlice, fontOptionsSliceName } from "../components/FontOptions/reducer";
import { a11ySlice, a11ySliceName } from "./a11y";

export const persistConfig: PersistConfig<any> = {
  key: "@accessitech/homepage",
  storage,
};

export const rootReducer = combineReducers({
  [a11ySliceName]: a11ySlice.reducer,
  [fontOptionsSliceName]: fontOptionsSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor:Persistor = persistStore(store);

export default store;
