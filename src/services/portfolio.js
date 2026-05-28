import { apiClient } from "../api/client.js";

export const getPortfolios = async () => {
  return await apiClient("/api/v1/portfolios");
};

export const createPortfolio = async (formData) => {
  // formData is a FormData instance — apiClient detects this and
  // skips Content-Type so the browser sets the multipart boundary
  return await apiClient("/api/v1/portfolios/create", {
    method: "POST",
    body: formData,
  });
};