import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LogInForm from "./LogInForm";
import React from "react";

function loginPage() {
  return (
    <>
      <Box className="HomePage">
        <Box>
          <Grid container>
            <Grid item sm={4} md={6} xs={false}></Grid>
            <Grid item sm={8} md={6} xs={12}>
              <Box>
                <LogInForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default loginPage;