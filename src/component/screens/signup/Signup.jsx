import { Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
import { Formik } from "formik";
import InputField from "../../GenericComponents/InputFields";
import * as yup from "yup";
import {
  useLazyGetAllUsersQuery,
  useAddUserMutation,
} from "../../features/api/api";
import { useEffect } from "react";
import PasswordField from "../../GenericComponents/passwoedField";

function Signup() {
  const [getUsers] = useLazyGetAllUsersQuery();
  const [adduser] = useAddUserMutation();

  const register = (values, resetForm) => {
    adduser(values);
    resetForm();
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
                      <Box className="">
                        <Stack className="mt-10">
                          <InputField
                            label="First name"
                            name="first_name"
                            value={values.first_name}
                          ></InputField>
                        </Stack>
                        <Stack className="mt-10">
                          <InputField
                            label="Last name"
                            name="last_name"
                            value={values.last_name}
                          ></InputField>
                        </Stack>
                        <Stack className="mt-10">
                          <InputField
                            label="Email"
                            name="Email"
                            value={values.Email}
                          ></InputField>
                        </Stack>
                        <Stack className="mt-10">
                          <PasswordField
                            label="Password"
                            name="password"
                            value={values.password}
                          ></PasswordField>
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
