import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"   
    : import.meta.env.VITE_API_BASE; 

console.log("[api baseURL]", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export default api;