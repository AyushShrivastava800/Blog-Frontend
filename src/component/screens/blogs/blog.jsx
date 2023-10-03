import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Banner from "../../GenericComponents/Banner";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";


function countWords(str) {
  const arr = str.split(" ");
  return arr.filter((word) => word !== "");
}

function Blog() { 
  const { blog } = useSelector((store) => store.blog);
  const { id } = useParams();
  const myblog = blog.find((blog) => blog.id == id);
  const strindata=countWords(myblog.description);


  return (
    <>
      <Box className="blog-page">
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Banner
                Image={myblog.image}
                height={"50vh"}
                title={`welcome ${myblog.author}`}
                content="here are re"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Box className="mt-18 mb-50   ">
                <Typography className="blog-head">{myblog.title}</Typography>
                <Typography className="mt-18 blog-body"></Typography>
              </Box>
            </Container>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Blog;
