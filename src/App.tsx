import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Header from "./component/Header/Header";
import Todo from "./component/Todo/Todo";
import store from "./rtk/app/Store";

function App() {
	return (
		<>
			<Provider store={store}>
				<Header />
				<Todo />
			</Provider>
		</>
	);
}

export default App;
