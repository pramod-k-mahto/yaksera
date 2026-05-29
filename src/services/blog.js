import { apiClient } from "../api/client.js";
// http://localhost:9000/api/v1/job-vacancies
export const getBlogsAll = async () => {
  return await apiClient("/api/v1/blogs");
};


// app.use("/api/v1/blogs", blogRouter);

export const getBlogById = async (id) => {
  return await apiClient(`/api/v1/blogs/${id}`);
};
export const createBlog = async (formData) => {
  return await apiClient(`/api/v1/blogs/create`, {
    method: "POST",
    body: formData,
  });
};
