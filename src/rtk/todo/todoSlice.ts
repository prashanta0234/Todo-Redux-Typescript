import { initialState } from "./initialStates";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchTodo, newTodo, removeTodo, editTodo } from "./todothunk";
import { todointer } from "../../interfaces/interface";

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// fetch todo
			.addCase(fetchTodo.pending, state => {
				state.error = "";
				state.isError = false;
				state.isLoding = true;
			})
			.addCase(fetchTodo.fulfilled, (state, action) => {
				state.error = "";
				state.isError = false;
				state.isLoding = false;
				state.todo = action.payload;
			})
			.addCase(fetchTodo.rejected, (state, action) => {
				state.isError = true;
				state.isLoding = false;
				state.todo = [];
			})
			// add new todo
			.addCase(newTodo.pending, state => {
				state.error = "";
				state.isError = false;
				state.isLoding = true;
			})
			.addCase(newTodo.fulfilled, (state, action: PayloadAction<todointer>) => {
				state.error = "";
				state.isError = false;
				state.isLoding = false;
				state.todo.push(action.payload);
			})
			.addCase(newTodo.rejected, (state, action) => {
				state.isError = true;
				state.isLoding = false;
				state.todo = [];
			})

			// delete TOdo
			.addCase(removeTodo.pending, state => {
				state.error = "";
				state.isError = false;
				state.isLoding = true;
			})
			.addCase(removeTodo.fulfilled, (state, action) => {
				state.error = "";
				state.isError = false;
				state.isLoding = false;
				state.todo = state.todo.filter(t => t.id !== action.meta.arg);
			})
			.addCase(removeTodo.rejected, (state, action) => {
				state.isError = true;
				state.isLoding = false;
			})
			// Update TOdo
			.addCase(editTodo.pending, state => {
				state.error = "";
				state.isError = false;
				state.isLoding = true;
			})
			.addCase(editTodo.fulfilled, (state, action) => {
				state.error = "";
				state.isError = false;
				state.isLoding = false;
				let updatedIndex = state.todo.findIndex(
					t => t.id === action.payload.id
				);
				state.todo[updatedIndex] = action.payload;
			})
			.addCase(editTodo.rejected, (state, action) => {
				state.isError = true;
				state.isLoding = false;
			});
	},
});

export default todoSlice.reducer;
