import axios from "axios";
import { logger } from "../utils/logger";

const api = axios.create();

api.interceptors.request.use((config) => {

  logger(
    "frontend",
    "info",
    "api",
    `Request sent to ${config.url}`
  );

  return config;
});

export default api;