import { api } from "../utils/apiClient.js";

export const documentService = {
   createDocument: (data) => api.post("/documents", data),
   validateDocument: (id) => api.put(`/documents/${id}/validate`, {}),
   getDocuments: () => api.get("/documents"),
};
