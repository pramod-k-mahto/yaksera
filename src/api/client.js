const BASE_URL = import.meta.env.VITE_API_URL || "https://yaksera.onrender.com";


export const apiClient = async (endpoint,{ method = "GET", body, headers = {} } = {}) => {
  try {
    // const token = localStorage.getItem("token");
    console.log(`${BASE_URL}${endpoint}`)
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },

      body: body ? JSON.stringify(body) : undefined,
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