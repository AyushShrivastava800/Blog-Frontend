import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
import { Formik } from "formik";
import InputField from "../../GenericComponents/InputFields";
import * as yup from "yup";

 const register = (values, resetForm) => {
   localStorage.setItem("loggedUser", JSON.stringify(values));
   console.log("Form data saved to localStorage:", values);
   resetForm();
 };

function Signup() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    Email: "",
    password: "",
  };

  const SignupValidation = yup.object({
    first_name: yup.string().required("Please Enter First Name"),
    last_name: yup.string().required("Please Enter Last Name"),
    Email: yup
      .string()
      .email("please enter a valid email")
      .required("please enter a valid email address !!"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*()_\-+=<>?]/,
        "Password must contain at least one special character"
      )
      .required("password is required"),
  });
  return (
    <>
      <Box className="signup-page">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="signupForm">
              <Box className="signupForm-content">
                <Box>
                  <Typography className="Hello">Please signup</Typography>
                </Box>
                <Formik
                  initialValues={initialvalues}
                  validationSchema={SignupValidation}
                  onSubmit={(values, { resetForm }) =>
                    register(values, resetForm)
                  }
                >
                  {({ values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Box className=" mb-18">
                        <Stack className="mt-18">
                          <InputField
                            label="First name"
                            name="first_name"
                            value={values.first_name}
                          ></InputField>
                        </Stack>
                        <Stack className="mt-18">
                          <InputField
                            label="Last name"
                            name="last_name"
                            value={values.last_name}
                          ></InputField>
                        </Stack>
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

                        <SubmitButton title={"signup"} />
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

export default Signup;
