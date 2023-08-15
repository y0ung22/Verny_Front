import axios from "axios";

export const http = axios.create({
  baseURL: "https://yewon1209.pythonanywhere.com",
});

http.defaults.withCredentials = true;

const token = localStorage.getItem("access_token");

if (token) {
  try {
    const parsedToken = JSON.parse(token);
    http.defaults.headers.common["Authorization"] = `Bearer ${parsedToken}`;
  } catch (error) {
    console.error("Error parsing access_token:", error);
  }
}
