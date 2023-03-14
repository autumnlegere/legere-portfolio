import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    red: {
      main: '#6e160c'
    },
    tan: {
      main: '#e0b27a'
    },
    ivory: {
      main: '#e9e0d3'
    }
  }
})

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Autumn Legere
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#fff" }}
              varient="outlined"
              href="#about"
              onClick={() => handlePageChange("AboutMe")}
            >
              About
            </Button>
            <Button
              sx={{ color: "#fff" }}
              varient="outlined"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
            >
              Portfolio
            </Button>
            <Button
              sx={{ color: "#fff" }}
              varient="outlined"
              href="#contact/resume"
              onClick={() => handlePageChange("ContactResume")}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
