import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import {useNavigate } from "react-router-dom";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
import { Formik } from "formik";
import InputField from "../../GenericComponents/InputFields";
import * as yup from "yup";

function Login() {
  const navigate=useNavigate();
  const validationLogin = yup.object({
    Email: yup
      .string()
      .email("Please provide a valid email.")
      .required("Email is required"),
    password: yup.string().required("please enter your password"),
  });

  const handlelogin = (values, resetForm) => {
    const dataUser = localStorage.getItem("loggedUser");
    const loggedUser = JSON.parse(dataUser);
    if (
      loggedUser.Email === values.Email &&
      loggedUser.password === values.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(values));
      navigate("/createblog");
      resetForm();
    }
  };

  const initialvalues = {
    Email: "",
    password: "",
  };
  return (
    <>
      <Box className="signup-page">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="signupForm">
              <Box className="signupForm-content">
                <Box>
                  <Typography className="Hello">
                    Login to your Account
                  </Typography>
                </Box>

                <Formik
                  initialValues={initialvalues}
                  validationSchema={validationLogin}
                  onSubmit={(values, { resetForm }) =>
                    handlelogin(values, resetForm)
                  }
                >
                  {({ values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Box className=" mb-18">
                        <Stack className="mt-18">
                          <InputField
                            label="Email"
                            name="Email"
                            value={values.Email}
                          ></InputField>
                        </Stack>
                        <Stack className="mt-18">
                          <InputField
                            label="Password"
                            name="password"
                            value={values.password}
                          ></InputField>
                        </Stack>

                        <SubmitButton title={"login"} />
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
