import { TodoInterface } from "../../interfaces/interface";
import axios from "../../utils/axios/Axios";

export const getTodo = async () => {
  const response = await axios.get("/todo");
  return response.data;
};

export const updateTodo = async (id: number, data: TodoInterface) => {
  const response = await axios.put(`/todo/${id}`, data);
  return response.data;
};

export const addTodo = async (data: TodoInterface) => {
  const response = await axios.post("/todo", data);
  return response.data;
};
export const delateTodo = async (id: number) => {
  const response = await axios.delete(`/todo/${id}`);
  return response.data;
};
