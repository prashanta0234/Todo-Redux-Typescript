import { Button } from "@mui/material";

import { Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const Header: React.FC = () => {
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
        >
          <TextField
            id="outlined-basic"
            label="New TODO"
            variant="outlined"
            size="small"
          />
          <Button variant="outlined">
            ADD &nbsp; <AddCircleOutlineIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Header;
