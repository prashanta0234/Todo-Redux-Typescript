import {
	Typography,
	Button,
	MenuItem,
	Menu,
	Container,
	Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { todointer, TodoInterface } from "../../interfaces/interface";

import "../Header/Header.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../rtk/app/Store";
import { editTodo, removeTodo } from "../../rtk/todo/todothunk";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

type todoitem = {
	todo: todointer;
};
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Todo: React.FC<todoitem> = props => {
	const { todo } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const dispatch = useDispatch<AppDispatch>();

	const { register, handleSubmit, reset } = useForm<TodoInterface>();
	const [open, setOpen] = React.useState(false);
	const opens = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClickOpen = () => {
		setOpen(true);
		handleClose();
	};
	const handleCloseing = () => {
		setOpen(false);
		handleClose();
	};

	const handleDelete = () => {
		dispatch(removeTodo(todo.id));
		handleClose();
	};

	const onSubmit: SubmitHandler<TodoInterface> = data => {
		console.log(data);
		dispatch(editTodo({ id: todo.id, data: data }));
		handleCloseing();
	};

	return (
		<>
			<Box sx={{ mt: "50px" }}>
				<Container maxWidth="lg">
					<Box sx={{ width: "100%", height: "200px", bgcolor: "#EDEDED" }}>
						<Box sx={{ p: 2 }}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography variant="h4" sx={{ color: "#212121" }}>
									{todo.title}
								</Typography>
								<Button
									className="btn-option"
									aria-controls={opens ? "basic-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={opens ? "true" : undefined}
									onClick={handleClick}
								>
									<DragIndicatorIcon />{" "}
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={opens}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem onClick={handleClickOpen} sx={{ color: "#616161" }}>
										<EditIcon /> &nbsp; Update
									</MenuItem>
									<MenuItem onClick={handleDelete} sx={{ color: "#ff6e40" }}>
										<DeleteForeverIcon /> &nbsp; Delate
									</MenuItem>
								</Menu>
							</Box>
							<Divider />
							<Typography sx={{ color: "#616161" }}>{todo.body}</Typography>
						</Box>
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
									defaultValue={todo.title}
								/>
								<textarea
									{...register("body")}
									className="input"
									placeholder="Enter Todo Body"
									required
									defaultValue={todo.body}
								/>

								<Button variant="outlined" type="submit">
									<DownloadDoneIcon />
									&nbsp; ADD
								</Button>
							</Box>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleCloseing}>Cencel</Button>
						</DialogActions>
					</Dialog>
				</Container>
			</Box>
		</>
	);
};

export default Todo;
