import { apiClient } from "../api/client.js";
// http://localhost:9000/api/v1/job-vacancies
export const getPortfolios = async () => {
  return await apiClient("/api/v1/portfolios");
};
