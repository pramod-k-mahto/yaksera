import { getMe } from "../services/users";

const BASE_URL = import.meta.env.VITE_API_URL || "https://yaksera.onrender.com";

const creteToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/users/generateTokens`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    getMe();
    return data;
  } catch (error) {
    // console.error("API Error:", error.message);
  }
};

export const apiClient = async (
  endpoint,
  { method = "GET", body, headers = {} } = {},
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
    // console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  } catch (error) {
    // console.error("API Error:", error.message);
    // throw error;
    creteToken();
  }
};
