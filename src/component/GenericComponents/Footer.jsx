import React from "react";
import { Box, Typography, Grid, Container, Divider, Stack, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer-container mt-18">
      <footer className="footer">
        <Box className="waves">
          <Box className="wave" id="wave1"></Box>
          <Box className="wave" id="wave2"></Box>
          <Box className="wave" id="wave3"></Box>
          <Box className="wave" id="wave4"></Box>
        </Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <Box className="col">
                <Typography className="col-Head mb-12">
                  SUBSCRIBE VIA EMAIL
                </Typography>
                <Divider
                  sx={{
                    width: "10%",
                    borderWidth: "2px",
                    borderColor: "black",
                  }}
                ></Divider>
                <Stack direction={"row"} spacing={4} className="mt-30">
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </Stack>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box className="col">
                <Typography className="col-Head">
                  Enter your email here
                </Typography>
                <Stack>
                  <TextField sx={{ background: "white" }} />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                className="mt-30 mb-30 textAligncenter"
              >
                © 2035 by Salt & Pepper. Powered and secured by Wix
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </Box>
  );
}

export default Footer;
