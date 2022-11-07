import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Todo: React.FC = () => {
  return (
    <>
      <Box sx={{ mt: "50px" }}>
        <Container maxWidth="lg">
          <Typography>TOdo list</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Todo;
