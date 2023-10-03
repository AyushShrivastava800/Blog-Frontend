import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RoundButton } from "../GenericComponents/Buttons/buttons";
function LandingPage() {
  return (
    <>
      <Box className="Landing-page">
        <Box className="Landing-content mb-50">
          <Box>
            <Typography className="landing-Head ">
              Add a dynamic and engaging visual experience to your website with
              this Slider Revolution template that features a moving background
              effect that transitions
            </Typography>
          </Box>
          <Box className="mt-18">
            <RoundButton title="Get Started" url={"/signup"}></RoundButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
