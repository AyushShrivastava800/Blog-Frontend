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
  Container
} from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confPassword: Yup.string().required("Required"),
});
const HandleSubmit = (values, props) => {};
function SignupForm() {
  return (
    <>
      <Box className="signUpForm">
        <Container>
          <Box className="mt-18">
            <Box>
              <Typography className="hellohead">
                Hello 👋, Welcome!
                <Typography className="helloSubHead">Sign up</Typography>
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
                          name="name"
                          label="name"
                          type="text"
                          fullWidth
                          margin="dense"
                          helperText={<ErrorMessage name="name" />}
                          error={props.errors.name && props.touched.name}
                        />
                      </Box>
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
                          error={
                            props.errors.password && props.touched.password
                          }
                        />
                      </Box>
                      <Box align="center">
                        <Field
                          as={TextField}
                          name="confPassword"
                          label="Confirm Password"
                          type="text"
                          fullWidth
                          margin="dense"
                          helperText={<ErrorMessage name="confPassword" />}
                          error={
                            props.errors.confPassword &&
                            props.touched.confPassword
                          }
                        />
                      </Box>
                      <Box>
                        <Button
                          fullWidth
                          variant="contained"
                          className="regbtn"
                        >
                          Register
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
  );
}

export default SignupForm;
