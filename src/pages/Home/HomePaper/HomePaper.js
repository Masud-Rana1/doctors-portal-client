import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Box, Typography } from "@mui/material";
const HomePaper = () => {
  return (
    <Container
      xs={12}
      md={4}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        marginTop: -8,
      }}
      
    >
      <Paper
        sx={{
          boxShadow: 0,
          bgcolor: "#5CE7ED",
          py: 1,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <AccessTimeIcon sx={{ fontSize: "60px", px: "18px" }} />
        <Box sx={{ textAlign: "left", marginTop: 5 }}>
          <Typography variant="h4">Opening Hours</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            ullam.
          </Typography>
        </Box>
      </Paper>
      <Paper
        sx={{
          boxShadow: 0,
          bgcolor: "rgba(45, 58, 74, 0.9)",
          py: 1,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <AddLocationAltIcon sx={{ fontSize: "60px", px: "18px" }} />
        <Box sx={{ textAlign: "left", marginTop: 5 }}>
          <Typography variant="h4">Visit Our Location</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            ullam.
          </Typography>
        </Box>
      </Paper>
      <Paper
        sx={{
          boxShadow: 0,
          bgcolor: "#5CE7ED",
          py: 1,
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <AccessTimeIcon sx={{ fontSize: "60px", px: "18px" }} />
        <Box sx={{ textAlign: "left", marginTop: 3 }}>
          <Typography variant="h4">Contact Us Now</Typography>
          <Typography variant="subtitle1">+883527983</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePaper;
