import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard.js";
import searchEntitiesReducer from "./slices/search.js";
import queryFiltersReducer from "./slices/queryFilters.js";
import menuReducer from "./slices/menu.js";
import userReducer from "./slices/user.js";
import resultReducer from "./slices/result.js";
import detailReducer from "./slices/detail.js";
import sessionStorage from "redux-persist/es/storage/session.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  menu: menuReducer,
  user: userReducer,
  result: resultReducer,
  searchEntities: searchEntitiesReducer,
  queryFilters: queryFiltersReducer,
  detail: detailReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
