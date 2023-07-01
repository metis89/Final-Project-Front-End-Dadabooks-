import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./components/app/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App></App>
      </Provider>
    </Router>
  </React.StrictMode>
);
