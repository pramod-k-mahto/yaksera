import { apiClient } from "../api/client.js";
// http://localhost:9000/api/v1/job-vacancies
export const getAllUsers = async () => {
  return await apiClient("/api/v1/users");
};
export const login = async (user) => {
  return await apiClient("/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: user,
    credentials: "include",
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
