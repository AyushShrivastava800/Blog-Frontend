import React from "react";
import { Box, Grid, Container, Typography, Stack } from "@mui/material";
import Banner from "../../GenericComponents/Banner";
import Blogcards from "../../GenericComponents/blogcards";
import { category } from "../../constants/items";
import Image from "../../../assets/photo-1682686581220-689c34afb6ef.avif";
import BasicModal from "../signup/BasicModal";
import { useEffect, useState } from "react";
import { useLazyGetallpostsQuery } from "../../features/api/api";
function Home() {
  const [getAllposts, { data }] = useLazyGetallpostsQuery();
  const [categoryfilter, setCategoryFilter] = useState();
  useEffect(() => {
    if (data) {
      const mapReverse1 = data.slice(0).reverse();
      setCategoryFilter(mapReverse1);
    }
  }, [data]);
  const handleFilter = (category) => {
    if (category == "All Posts") {
      setCategoryFilter(data);
    } else {
      const categoryData = data?.filter((e) => e.category === category);
      setCategoryFilter(categoryData);
    }
  };
  useEffect(() => {
    getAllposts();
  }, [getAllposts, categoryfilter]);

  return (
    <>
      <BasicModal title={"Add blog"} className="AddBlog mt-18" />
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
                  >
                    {category.map((items, index) => (
                      <Typography
                        key={index}
                        onClick={(e) => handleFilter(items.category)}
                        className="catopt"
                      >
                        {items.category}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                {categoryfilter?.map((item, index) => (
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
