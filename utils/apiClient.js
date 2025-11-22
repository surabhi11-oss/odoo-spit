const BASE_URL = "http://localhost:3000/api";

const getHeaders = () => {
   const token = localStorage.getItem("token");
   return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
   };
};

export const get = async (url) => {
   try {
      const response = await fetch(`${BASE_URL}${url}`, {
         method: "GET",
         headers: getHeaders(),
      });
      if (!response.ok) {
         console.error(`GET ${url} failed: ${response.statusText}`);
      }
      return await response.json();
   } catch (error) {
      console.error(`GET ${url} error:`, error);
   }
};

export const post = async (url, data) => {
   try {
      const response = await fetch(`${BASE_URL}${url}`, {
         method: "POST",
         headers: getHeaders(),
         body: JSON.stringify(data),
      });
      if (!response.ok) {
         console.error(`POST ${url} failed: ${response.statusText}`);
      }
      return await response.json();
   } catch (error) {
      console.error(`POST ${url} error:`, error);
   }
};

export const put = async (url, data) => {
   try {
      const response = await fetch(`${BASE_URL}${url}`, {
         method: "PUT",
         headers: getHeaders(),
         body: JSON.stringify(data),
      });
      if (!response.ok) {
         console.error(`PUT ${url} failed: ${response.statusText}`);
      }
      return await response.json();
   } catch (error) {
      console.error(`PUT ${url} error:`, error);
   }
};

export const del = async (url) => {
   try {
      const response = await fetch(`${BASE_URL}${url}`, {
         method: "DELETE",
         headers: getHeaders(),
      });
      if (!response.ok) {
         console.error(`DELETE ${url} failed: ${response.statusText}`);
      }
      return await response.json();
   } catch (error) {
      console.error(`DELETE ${url} error:`, error);
   }
};
