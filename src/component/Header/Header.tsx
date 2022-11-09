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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Header: React.FC = () => {
	const { register, handleSubmit, reset } = useForm<TodoInterface>();
	const [open, setOpen] = React.useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const onSubmit: SubmitHandler<TodoInterface> = data => {
		console.log(data);
		dispatch(newTodo(data));
		reset();
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Box
				sx={{ maxHeight: "500px", width: "100%", backgroundColor: "#DEF5E5" }}
			>
				<Typography variant="h4" align="center" sx={{ p: 2 }}>
					TODO Redux Typescript
				</Typography>

				<Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
					<Button variant="outlined" onClick={handleClickOpen}>
						ADDTODO &nbsp; <AddCircleOutlineIcon />
					</Button>
				</Box>
				<Dialog
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle>{"Add your todo!"}</DialogTitle>
					<DialogContent>
						<Box
							component="form"
							justifyContent="center"
							alignItems="center"
							sx={{ display: "flex", py: "4px", flexDirection: "column" }}
							onSubmit={handleSubmit(onSubmit)}
						>
							<input
								className="input"
								{...register("title")}
								placeholder="Enter Todo Title"
								required
							/>
							<textarea
								{...register("body")}
								className="input"
								placeholder="Enter Todo Body"
								required
							/>

							<Button variant="outlined" type="submit">
								<DownloadDoneIcon />
								&nbsp; ADD
							</Button>
						</Box>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cencel</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</>
	);
};
export default Header;
