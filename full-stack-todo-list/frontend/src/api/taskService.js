import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
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