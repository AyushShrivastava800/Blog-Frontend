import { Divider, Grid, Typography, Chip,Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import React from "react";
import { SubmitButton } from "../../GenericComponents/Buttons/buttons";
import { Formik } from "formik";
import InputField from "../../GenericComponents/InputFields";
import { useLazyGetAllUsersQuery } from "../../features/api/api";
import { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import * as yup from "yup";
import PasswordField from "../../GenericComponents/passwoedField";

function Login() {
  const [getUsers, { data }] = useLazyGetAllUsersQuery();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const navigate = useNavigate();
  const validationLogin = yup.object({
    Email: yup
      .string()
      .email("Please provide a valid email.")
      .required("Email is required"),
    password: yup.string().required("please enter your password"),
  });

  const handleLogin = async (values, resetForm) => {
    try {
      const users = data.find(
        (item) =>
          item.Email === values.Email && item.password === values.password
      );

      if (users) {
        resetForm();
         const { password, ...userWithoutPassword } = users;
        localStorage.setItem("loggedIn", JSON.stringify(userWithoutPassword));
        navigate("/createblog");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const initialvalues = {
    Email: "",
    password: "",
  };
  return (
    <>
      <Box className="login-page">
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
                    handleLogin(values, resetForm)
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
                          <PasswordField
                            label="Password"
                            name="password"
                            value={values.password}
                          ></PasswordField>
                        </Stack>

                        <SubmitButton title={"login"} />
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
              <Box>
                <Divider>
                  <Chip label="OR" />
                </Divider>
                <Box className="login-Icons">
                  <Button className="icon-box">
                    <FacebookIcon />
                  </Button>
                  <Button className="icon-box">
                    <GoogleIcon />
                  </Button>
                  <Button className="icon-box">
                    <TwitterIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
