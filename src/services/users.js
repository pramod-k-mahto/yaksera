import { apiClient } from "../api/client.js";
// http://localhost:9000/api/v1/job-vacancies
export const getAllUsers = async () => {
  return await apiClient("/api/v1/users");
};
export const registerUser = async (formData) => {
  return await apiClient("/api/v1/users/register", {
    method: "POST",
    body: formData,
  });
};
export const login = async (user) => {
  return await apiClient("/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};
export const logout = async () => {
  return await apiClient("/api/v1/users/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const verifyEmail = async (token) => {
  return await apiClient(`/api/v1/users/verify-email/${token}`);
};
export const getMe = async () => {
  return await apiClient("/api/v1/users/me", {
    method: "GET",
    credentials: "include",
  });
};
