import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const { getToken } = useAuth();
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
