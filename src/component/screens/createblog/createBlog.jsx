import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Stack,
} from "@mui/material"; 
import { TextareaAutosize } from "@mui/material";
import { SubmitButton, UploadButton } from "../../GenericComponents/Buttons/buttons";
import Banner from  "../../GenericComponents/Banner";
import Image from "../../../assets/photo-1682686581220-689c34afb6ef.avif";
function CreateBlog() {

  return (
    <>
      <Box className="Add-blog-page">
        <Grid conatiner>
          <Grid item xs={12}>
            <Banner
              title={"welcome to our blog"}
              content={"lorem jnnfj nfejnfjen fenjfnjenf nfjenfjen fnejnfejn"}
              Image={Image}
            />
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="blogHead">Blog post</Typography>
                  <Box>
                    <Box className="input-fields">
                      <Stack className="mt-18">
                        <TextField label="Title" name="title"></TextField>
                      </Stack>
                    </Box>
                    <Stack className="mt-18">
                      <Typography>Please write your Post</Typography>
                      <TextareaAutosize
                        minRows={8}
                        placeholder="please write your blog here"
                        name="title"
                      ></TextareaAutosize>
                    </Stack>
                    <Typography className="mt-18">
                      please upload a picture
                    </Typography>
                    <Box className="buttons-box">
                      <UploadButton />
                      <Box component="img" ></Box>
                    </Box>
                    <Box className="buttons-box">
                      <SubmitButton title={"Post"} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreateBlog;
