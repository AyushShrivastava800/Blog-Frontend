import React from "react";
import { Box, Typography, Grid, Container, Stack, Avatar } from "@mui/material";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
import Banner from "../../GenericComponents/Banner";
import Image from "../../../assets/photo-1682686581220-689c34afb6ef.avif";
import { Formik } from "formik";
import InputField from "../../GenericComponents/InputFields";
import * as yup from "yup";
import InputFileUpload from "../../GenericComponents/ImageUpload";
import { useState, useEffect } from "react";
import { useAddpostsMutation } from "../../features/api/api";
import InputSelect from "../../GenericComponents/InputSelect";

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function CreateBlog() {
  const [fileupload, setFileupload] = useState("");
  console.log(fileupload);
  const [addpost] = useAddpostsMutation();
  const author = JSON.parse(localStorage.getItem("loggedIn"));
 
  const [initialvalues, setInitialValues] = useState({
    title: "",
    description: "",
    image: fileupload,
    category: "",
    author: `${author.first_name} ${author.last_name}`,
    date: formatDate(new Date()),
  });
  const validatepost = yup.object({
    title: yup.string().required("Cannot Post without title"),
    description: yup.string().required("Cannot Post emty post"),
  });
  const handlePost = (values, resetForm) => {
    console.log(values, "values");
    addpost(values);

    setInitialValues((prevValues) => ({
      ...prevValues,
      date: formatDate(new Date()),
    }));
  };
  useEffect(() => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      date: formatDate(new Date()),
    }));
  }, []);
  return (
    <>
      <Box className="Add-blog-page">
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
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="head mt-30 mb-30">
                    Write Your Post
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box className="Avatar-container">
                    <Avatar src={fileupload} className="avatar" />
                  </Box>
                </Grid>

                <Grid item sm={8} xs={12}>
                  <Box className="form-container mb-30">
                    <Box className="formBox">
                      <Formik
                        initialValues={initialvalues}
                        validationSchema={validatepost}
                        onSubmit={(values, { resetForm }) => {
                          handlePost(values, resetForm);
                        }}
                      >
                        {({ values, handleSubmit, setFieldValue }) => (
                          <form onSubmit={handleSubmit}>
                            <Box>
                              <Stack className="mt-18">
                                <InputField
                                  label="Title"
                                  name="title"
                                  value={values.title}
                                ></InputField>
                              </Stack>
                              <Stack className="mt-18">
                                <InputField
                                  label="Message"
                                  name="description"
                                  rows={5}
                                  value={values.description}
                                ></InputField>
                              </Stack>
                              <Stack className="mt-18">
                                <InputSelect
                                  label="category"
                                  name="category"
                                  value={values.category}
                                />
                              </Stack>
                              <Stack className="mt-18">
                                <InputFileUpload
                                  label="Upload file"
                                  name="image"
                                  value={values.image}
                                  setFileupload={setFileupload}
                                />
                              </Stack>
                              <SubmitButton title={"Post"} />
                            </Box>
                          </form>
                        )}
                      </Formik>
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
