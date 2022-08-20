import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { LoggingFormsContextProvider } from "./context/LoggingFormsContext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoggingFormsContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LoggingFormsContextProvider>
  </BrowserRouter>
);
