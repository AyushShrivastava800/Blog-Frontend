import React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc9966",
    },
  },
});

const initialValues = {
  name: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email:
    Yup.string()
    .required("Required"),
  password:
    Yup.string()
    .required("Required"),
  confPassword:
    Yup.string()
    .required("Required"),
});
const HandleSubmit = (values, props) => {};
function LogInForm() {
  return (
    <>
        <Box className="signUpForm" >
          <Container>
        <Box className="mt-18">
            <Box >
              <Typography className="hellohead">
                Hello 👋, Welcome Back!
                <Typography className="helloSubHead">
                Stay connected with us by logging in using your Credentials.
                </Typography>
              </Typography>
            </Box>
            <Box className="mt-18">
            <Formik
              initialValues={initialValues}
              onSubmit={HandleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => {
                console.log(props);
                return (
                  <Form>
               
                    <Box align="center">
                      <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        type="text"
                        fullWidth
                        margin="dense"
                        helperText={<ErrorMessage name="email" />}
                        error={props.errors.email && props.touched.email}
                      />
                    </Box>

                    <Box align="center">
                      <Field
                        as={TextField}
                        name="password"
                        label="password"
                        type="text"
                        fullWidth
                        margin="dense"
                        helperText={<ErrorMessage name="password" />}
                        error={props.errors.password && props.touched.password}
                      />
                    </Box>
                    
                    <Box>
                      <Button fullWidth variant="contained" className="regbtn">
                         login
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>

            </Box>
          </Box>
          </Container>
        </Box>
    </>
  )
}

export default LogInForm