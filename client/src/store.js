// import { configureStore } from "@reduxjs/toolkit";
// import dashboardReducer from "./slices/dashboardSlice.js";
// import menuReducer from "./slices/menuSlice.js";
// import userReducer from "./slices/userSlice.js";

// export const store = configureStore({
//   reducer: {
//     dashboard: dashboardReducer,
//     menu: menuReducer,
//     user: userReducer,
//   },
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice.js";
import searchEntitiesReducer from "./slices/searchSlice.js";
import menuReducer from "./slices/menuSlice.js";
import userReducer from "./slices/userSlice.js";
//import searchEntitiesReducer from "./slices/searchSlice.js";
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
  searchEntities: searchEntitiesReducer,
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
