import axios from "axios";
import { BASE_URL } from "../constants/constants";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers["auth"] = token;
  }

  return req;
});

export default instance;