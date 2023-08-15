import axios from "axios";

export const http = axios.create({
  baseURL: "https://yewon1209.pythonanywhere.com",
});

http.defaults.withCredentials = true;

const token = localStorage.getItem("access_token") ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
