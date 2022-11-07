import { TodoInterface } from "../../interfaces/interface";
import { getTodo, updateTodo, delateTodo, addTodo } from "./todoApi";
// create asynk thunk

import { createAsyncThunk } from "@reduxjs/toolkit";
import { UpdateTodoInterface } from "../../interfaces/interface";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const todos = await getTodo();
  return todos;
});
export const editTodo = createAsyncThunk(
  "todo/editTodo",
  async (props: UpdateTodoInterface) => {
    const todo = await updateTodo(props.id, props.data);
    return todo;
  }
);
export const newTodo = createAsyncThunk(
  "todo/newTodo",
  async (data: TodoInterface) => {
    const todo = await addTodo(data);
    return todo;
  }
);
export const removeTodo = createAsyncThunk(
  "todo/removeTodo",
  async (id: string) => {
    const todo = await delateTodo(id);
    return todo;
  }
);
