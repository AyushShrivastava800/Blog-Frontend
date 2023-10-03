import React from "react";
import { Box, Typography } from "@mui/material";


const Banner = ({ title, content, Image, height }) => {
  return (
    <>
      <Box
        className="parallax-container"
        sx={{ backgroundImage: `url(${Image})`, height: { height } }}
      >
        <Box className="parallax-content">
          <Box className="textcontainer">
            <Typography className="head">{title}</Typography>
            <Typography className="subhead">{content}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
