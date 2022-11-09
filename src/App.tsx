import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./App.css";
import Header from "./component/Header/Header";
import Todo from "./component/Todo/Todo";
import { AppDispatch, RootState } from "./rtk/app/Store";
import { fetchTodo } from "./rtk/todo/todothunk";

function App() {
	const states = useSelector((state: RootState) => state.todos);
	const { todo } = states;
	const dispatch = useDispatch<AppDispatch>();
	console.log(states);
	React.useEffect(() => {
		dispatch(fetchTodo());
	}, [dispatch]);

	return (
		<>
			<Header />
			{todo?.map(item => (
				<Todo key={item.id} todo={item} />
			))}
		</>
	);
}

export default App;
