import { api } from "../utils/apiClient.js";

export const productService = {
   getProducts: () => api.get("/products"),
   createProduct: (data) => api.post("/products", data),
};
