import React from "react";
import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import Banner from "../../GenericComponents/Banner";
import Blogcards from "../../GenericComponents/blogcards";
import { AddBlog } from "../../GenericComponents/Buttons/buttons";
import {  category } from "../../constants/items";
import Image from "../../../assets/photo-1682686581220-689c34afb6ef.avif";
import { useSelector, useDispatch } from "react-redux";
import { Categoryfilter } from "../../features/slice/filterSlice";
function Home() {
  const { categoryBlog } = useSelector((store) => store.blogFilter);
  const dispatch = useDispatch();


  return (
    <>
      <AddBlog title={"Add Blog"} />

      <Box className="home">
        <Grid container>
          <Grid item xs={12}>
            <Banner
              title={"welcome to our blog"}
              content={"lorem jnnfj nfejnfjen fenjfnjenf nfjenfjen fnejnfejn"}
              Image={Image}
            />
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="mt-30 post-head">All posts</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack
                    className="categories-slector"
                    direction={"row"}
                    spacing={5}
                  >
                    {category.map((items, index) => (
                      <Typography
                        key={index}
                        onClick={() => {
                          dispatch(Categoryfilter(items.category));
                        }}
                        className="catopt"
                      >
                        {items.category}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                {categoryBlog.slice(0, 6).map((item, index) => (
                  <Grid item md={4} sm={6} xs={12} key={index}>
                    <Box className=" mb-18 center">
                      <Blogcards
                        id={item.id}
                        title={item.title}
                        body={item.description}
                        Image={item.image}
                        author={item.author}
                        date={item.date}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
