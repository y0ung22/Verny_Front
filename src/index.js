import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export const http = axios.create({
  baseURL: "https://yewon1209.pythonanywhere.com",
});

http.defaults.withCredentials = true;

const accessToken = JSON.parse(localStorage.getItem("access_token")) ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${accessToken}`
  : null;
