import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container,Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import classNames from "classnames";
import Cookies from 'js-cookie';




export default function LogAppBar() {


  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("loggedinUser")
    Cookies.remove("jwt");
    navigate("/");
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;

      setIsScrolled(scrollPosition > pageHeight / 9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <Box sx={{ flexGrow: 1 }} className="Navbar">
    
      <AppBar position="static" className={classNames("appbar", { scrolled: isScrolled })}>
        <Container>
          <Toolbar className="toolbar"      >
            <Button
       
              color="inherit"
              className="logOutBtn"
              onClick={HandleLogout}
         
            >
              Logout
            </Button>
          </Toolbar>
          {!isScrolled && <Divider className="divider" />}
        </Container>
      </AppBar>



    </Box>
  );
}
