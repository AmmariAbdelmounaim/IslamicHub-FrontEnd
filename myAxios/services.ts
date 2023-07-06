import axios from "axios";
import storageConfig from "../helpers/storage";
import { SIGN_IN_PATH, SIGN_OUT_PATH } from "./paths";

// export const baseURL = import.meta.env.BASE_URL || "http://localhost:3500/";

export const baseURL = "http://localhost:8085/";

const client = axios.create({
  baseURL,
  timeout: 180000, // Timeout 3 min
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const withoutBearer = [SIGN_IN_PATH, SIGN_OUT_PATH];

// Request interceptor
client.interceptors.request.use(
  (config) => {
    const token = storageConfig.getToken();

    // If token is present and the URL is not in the withoutBearer list, attach token to the header
    if (token && !withoutBearer.includes(config.url || "")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    // Do something with the successful response data
    return response;
  },
  (error) => {
    const { response } = error;

    if (response?.status === 401) {
      // Clear storage and logout user if token is expired or invalid
      storageConfig.clear();
    }

    return Promise.reject(error);
  }
);

export default client;
