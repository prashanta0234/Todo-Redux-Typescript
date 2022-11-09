import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todo/todoSlice";
// ...
const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
