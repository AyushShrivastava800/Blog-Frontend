import React from "react";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import BlogCards from "../../generic-component/BlogCards";
import SearchAppBar from "../../generic-component/SearchAppBar";
import HorizontalCards from "../../generic-component/horizontal-cards";
  
const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 6 },
  { id: 7 },
];
function Blog() {
  return (
    <>
      <Box className="blogPage">
        <Box className="bannerContainer">
          <Box className="banner">
            <Box className="bannerImg">
              <Box className="BannerTextbox">
                <Container>
                  <Typography className="BannerText">
                    welcome to the Blog page
                  </Typography>
                  <Typography className="BannerSubText">
                    Latest updates and Hand-picked resources
                  </Typography>
                </Container>
              </Box>
            </Box>
          </Box>

          <Box className=" SearchAppBar">
            <Container>
              <SearchAppBar />
            </Container>
          </Box>
        </Box>

        {/* banner ends */}

        {/* horizonatl cards  */}
        <Box className="mt-50 mb-50">  
          <Grid container>
            <Grid item xs={false}></Grid>
            <Grid item xs={12}>
              <Container>
                <Grid container>
                  {cards.slice(0, 1).map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <HorizontalCards />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
            <Grid item xs={false}></Grid>
          </Grid>
        </Box>
 {/* blog cards  */}
        <Box className="mt-50">
          <Grid container>
          
            <Grid item sm={12}>
              <Container>
                <Box className="mb-18">
                  <Typography variant="h5">Popular articles</Typography>
                  <Typography variant="body1">
                    Here’s what we’ve been up to recently.
                  </Typography>
                </Box>
                <Grid container spacing={4}>
                  {cards.slice(0, 3).map((item, index) => (
                    <Grid item  sm={6} md={4} xs={12} key={index}>
                      <BlogCards />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
        
          </Grid>
        </Box>
                  {/* Big Blog cards  */}   
        <Box className="mt-50 mb-50">
          <Grid container>
            <Grid item sm={false}></Grid>
            <Grid item sm={12}>
              <Container>
                <Box className="mb-18">
                  <Typography variant="h5">Popular articles</Typography>
                  <Typography variant="body1">
                    Here’s what we’ve been up to recently.
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  {cards.slice(0, 2).map((item, index) => (
                    <Grid item md={6} sm={6} xs={12} key={index}>
                      <BlogCards />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
            <Grid item sm={false}></Grid>
          </Grid>
        </Box>




      </Box>
    </>
  );
}

export default Blog;
