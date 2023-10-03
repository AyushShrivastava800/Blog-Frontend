import { Grid, TextField, Typography } from "@mui/material";
import { Box,  Stack } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";

function Signup() {
  return (
    <>  
    
      <Box className="signup-page">
        <Grid container spacing={2}>
          
          <Grid item xs={12} >
            <Box className="signupForm">
              <Box className="signupForm-content">
                <Box>
                  <Typography className="Hello">hello welcome</Typography>
                </Box>
                <Box>
                  <Typography className="link-head">
                    Already registered with us?
                    <Box component={Link} to="/login">
                      Login
                    </Box>
                  </Typography>
                </Box>
              
                <Box className=" mb-18">
                  <Stack className="mt-18">
                    <TextField label="First name" name="first_name"></TextField>
                  </Stack>
                  <Stack className="mt-18">
                    <TextField label="Last name" name="last_name"></TextField>
                  </Stack>
                  <Stack className="mt-18">
                    <TextField label="Email" name="Email"></TextField>
                  </Stack>
                  <Stack className="mt-18">
                    <TextField label="Password" name="password"></TextField>
                  </Stack>
                  <Stack>
                    <SubmitButton title={"submit"} />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Signup;
