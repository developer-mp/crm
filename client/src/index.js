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
