import { Grid, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
function Login() {
  return (
    <Box className="signup-page">
      <Grid container spacing={2}>
        <Grid item md={6} sx={{ display: { md: "block", xs: "none" } }}>
          <Box className="singup-pageImage"></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="signupForm">
            <Box className="signupForm-content">
              <Box>
                <Typography className="Hello">hello welcome</Typography>
              </Box>
              <Box className="mt-12">
                <Typography className="link-head">
                  Not registered yet with us?
                  <Box component={Link} to="/signup">
                    signup
                  </Box>
                </Typography>
              </Box>
              <Box className="mt-12">
                <Typography className="link-head-two">
                  Stay connected with us by logging in using your credentials.
                </Typography>
              </Box>
              <Box className=" mb-18">
                <Stack className="mt-18">
                  <TextField label="Email" name="Email"></TextField>
                </Stack>
                <Stack className="mt-18">
                  <TextField label="Password" name="password"></TextField>
                </Stack>
                <Stack>
                  <SubmitButton title={"login"} />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
