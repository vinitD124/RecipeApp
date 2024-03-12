import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { AppContextProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <Provider store={store}>
        <App />
        <Toaster
  containerStyle={{
    top: 120,
    
  }}
/>
      </Provider>
    </AppContextProvider>
  </BrowserRouter>
);
