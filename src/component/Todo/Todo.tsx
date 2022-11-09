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
import { todointer } from "../../interfaces/interface";

import "../Header/Header.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../rtk/app/Store";
import { removeTodo } from "../../rtk/todo/todothunk";

type todoitem = {
	todo: todointer;
};

const Todo: React.FC<todoitem> = props => {
	const { todo } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const dispatch = useDispatch<AppDispatch>();
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		dispatch(removeTodo(todo.id));
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
									aria-controls={open ? "basic-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}
								>
									<DragIndicatorIcon />{" "}
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem onClick={handleClose} sx={{ color: "#616161" }}>
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
				</Container>
			</Box>
		</>
	);
};

export default Todo;
