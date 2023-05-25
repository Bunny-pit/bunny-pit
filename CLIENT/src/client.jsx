import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import App from "./layouts/App";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === "http://localhost:4000";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app"),
);
