import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getAllTasks = () => {
  return API.get("/tasks");
};

export const createTask = (task) => {
  return API.post("/tasks", task);
};

export const updateTask = (id, task) => {
  return API.put(`/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return API.delete(`/tasks/${id}`);
};