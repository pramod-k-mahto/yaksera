import { apiClient } from "./client";

// CREATE
export const submitContact = async (data) => {
  return apiClient("/api/contact", {
    method: "POST",
    body: data,
  });
};

// READ (LIST) — accepts an optional query string, e.g. "?page=1&status=new"
export const getContacts = async (query = "") => {
  return apiClient(`/api/contact${query}`);
};
export const getContactsAll = async () => {
  return apiClient(`/api/contact`);
};

// DELETE
export const deleteContact = async (id) => {
  return apiClient(`/api/contact/${id}`, {
    method: "DELETE",
  });
};

// UPDATE STATUS
export const updateContactStatus = async (id, status) => {
  return apiClient(`/api/contact/${id}/status`, {
    method: "PATCH",
    body: { status },
  });
};