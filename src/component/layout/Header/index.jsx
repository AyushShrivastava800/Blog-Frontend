import * as React from "react";
import { AppBar, Container, Box, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";





export default function ButtonAppBar(props) {


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
