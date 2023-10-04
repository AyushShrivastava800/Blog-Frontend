import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../../../assets/logo.png";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Divider } from "@mui/material";
export default function Header() {
  const [isScrolled, setIscrolled] = useState();
const navigate=useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;
      setIscrolled(scrollPosition > pageHeight /7);
    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };
  }, []);
  const user = localStorage.getItem("loggedInUser");
  
  const Logout=()=>{
        localStorage.removeItem("loggedInUser");
        navigate("/", { replace: true });
  }
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={classNames("Header", { scrolled: isScrolled })}
    >
      <AppBar position="static">
        <Toolbar>
          <Box component="img" src={logo} className="logo"></Box>
          <Box sx={{ flexGrow: 1 }}></Box>

          {user ? (
            <Button color="inherit" className="loginBtn" onClick={Logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" className="loginBtn">
              Login
            </Button>
          )}
        </Toolbar>
        <Divider color={"white"} variant="middle" />
      </AppBar>
    </Box>
  );
}
