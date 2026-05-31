import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { SearchProvider } from "./Contexts/SearchContext.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { AuthProvider } from "./Contexts/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
