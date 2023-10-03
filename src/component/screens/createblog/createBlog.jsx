import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  TextField,
  Stack,
  Button
} from "@mui/material"; 
import { TextareaAutosize } from "@mui/material";
import { SubmitButton, UploadButton } from "../../GenericComponents/Buttons/buttons";
function CreateBlog() {
  return (
    <>
      <Box className="Add-blog-page">
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
                <UploadButton />
                <SubmitButton title={"Post"} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default CreateBlog;
