import { api } from "../utils/apiClient.js";

export const authService = {
   login: (credentials) => api.post("/auth/login", credentials)
};
