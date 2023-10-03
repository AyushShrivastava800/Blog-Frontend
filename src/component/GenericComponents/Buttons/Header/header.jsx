import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../../../assets/logo.png";
import { useState,useEffect } from "react";
import classNames from "classnames";
export default function Header() {
  const [isScrolled, setIscrolled] = useState();

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
  return (
    <Box sx={{ flexGrow: 1 }} className={classNames("Header",{scrolled:isScrolled})}>
      <AppBar position="static">
        <Toolbar>
          <Box component="img" src={logo} className="logo"></Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
