import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { SearchProvider } from "./Contexts/SearchContext.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { AuthProvider } from "./Contexts/Auth.jsx";
import { RoleProvider } from "./Contexts/RoleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <RoleProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </RoleProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
);
