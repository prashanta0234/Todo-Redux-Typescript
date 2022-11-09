import { Button } from "@mui/material";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TodoInterface } from "../../interfaces/interface";

import "./Header.css";
import { useDispatch } from "react-redux";
import { newTodo } from "../../rtk/todo/todothunk";
import { AppDispatch } from "../../rtk/app/Store";

const Header: React.FC = () => {
	// const titleRef = React.createRef<HTMLInputElement>();
	// const bodyRef = React.createRef<HTMLInputElement>();
	const { register, handleSubmit } = useForm<TodoInterface>();

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	console.log(
	// 		titleRef.current!.childNodes[1].childNodes[0].value,
	// 		bodyRef.current!.value
	// 	);
	// };

	const dispatch = useDispatch<AppDispatch>();
	const onSubmit: SubmitHandler<TodoInterface> = data => {
		console.log(data);
		dispatch(newTodo(data));
	};
	return (
		<>
			<Box
				sx={{ maxHeight: "500px", width: "100%", backgroundColor: "#DEF5E5" }}
			>
				<Typography variant="h4" align="center" sx={{ p: 2 }}>
					TODO Redux Typescript
				</Typography>
				<Box
					component="form"
					justifyContent="center"
					alignItems="center"
					sx={{ display: "flex", py: "30px" }}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="input"
						{...register("title")}
						placeholder="Enter Todo Title"
					/>
					<input
						{...register("body")}
						className="input"
						placeholder="Enter Todo Body"
					/>

					<Button variant="outlined" type="submit">
						ADD &nbsp; <AddCircleOutlineIcon />
					</Button>
				</Box>
			</Box>
		</>
	);
};
export default Header;
