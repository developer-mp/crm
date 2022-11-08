import React from "react";
import { store, persistor } from "./store.js";
import { PersistGate } from "redux-persist/es/integration/react.js";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// -----------------------------------------------------

// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import timeoutMiddleware from "./middleware/timeoutMiddleware.js";
// import { render } from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { FeatureToggleProvider } from "react-feature-toggles";
// import "./index.css";
// import AppContainer from "./app/AppContainer";
// import rootReducer from "./reducers";
// import StoreService from "./services/appService/storeService";
// import config from "./config";

// const middleware = [thunkMiddleware, timeoutMiddleware];
// if (config.environment === "DEV") {
//   middleware.push(createLogger());
// }
// const store = createStore(rootReducer, applyMiddleware(...middleware));

// StoreService.initializeLogin(store);
// StoreService.registerBrowserResize(store);

// const { featureToggles } = config;

// render(
//   <Provider store={store}>
//     <FeatureToggleProvider featureToggleList={featureToggles}>
//       <AppContainer />
//     </FeatureToggleProvider>
//   </Provider>,
//   document.getElementById("root")
// );

// ServiceWorker.unregister();
