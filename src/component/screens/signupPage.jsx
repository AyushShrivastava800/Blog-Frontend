import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SignupForm from "./SignupForm";
import LogInForm from "./LogInForm";
import React from "react";

function signupPage() {
  return (
    <>
      <Box className="HomePage">
        <Box>
          <Grid container>
            <Grid item sm={4} md={6} xs={false}></Grid>
            <Grid item sm={8} md={6} xs={12}>
              <Box>
                <SignupForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default signupPage;
