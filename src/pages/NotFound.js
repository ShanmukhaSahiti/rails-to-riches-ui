import React from "react";
import { Box, Container } from "@mui/material";

function NotFound() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box
        sx={{
          bgcolor: "background.default",
          p: 2,
          borderRadius: 2,
          boxShadow: 0,
          textAlign: "center",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist. mine</p>
      </Box>
    </Container>
  );
}

export default NotFound;
