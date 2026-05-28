import { apiClient } from "../api/client.js";
// http://localhost:9000/api/v1/job-vacancies
export const getJobVacancies = async () => {
  return await apiClient("/api/v1/job-vacancies");
};

export const createJobVacancies = async (payload) => {
  return await apiClient("/api/v1/job-vacancies/create", {
    method: "POST",
    body: payload,
  });
};
