import { useState } from "react";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://yaksera.onrender.com";

export const apiClient = async (
  endpoint,
  { method = "GET", body, headers = {} } = {}
) => {

  try {
    const isFormData = body instanceof FormData;
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
          credentials: "include",

      body: isFormData ? body : body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

  // return await apiClient(`/api/v1/blogs/${id}`);
