import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>
);
