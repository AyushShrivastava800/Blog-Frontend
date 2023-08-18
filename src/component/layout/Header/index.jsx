import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="Navbar">
      <AppBar position="static" className="appbar">
        <Container>
          <Toolbar className="toolbar">
            <Link to={{ pathname: `/signup` }} className="signupLink">
              <Button color="inherit" className="signupBtn">
                signUp
              </Button>
            </Link>
            <Link to={{ pathname: `/login` }} className="signupLink">
              <Button color="inherit" className="signupBtn">
                Login
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
