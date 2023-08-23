import React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useAddUserMutation } from "../../../features/api/userApi";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
function SignupForm() {
  const [messge, setError] = useState("");
  const [successmessge, setSuccess] = useState("");
  
 
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const [adduser, { isSuccess }] = useAddUserMutation();

  const HandleSubmit = async (values, props) => {
    try {
      const result = await adduser(values);
    
      if (result.data) {
        setSuccess(result.data.message);

        props.resetForm();
      } else {
        setError("credentials are not valid.");
      }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (messge || successmessge) {
      const timeout = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [messge, successmessge]);
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
                          name="confirmPassword"
                          label="Confirm Password"
                          type="text"
                          fullWidth
                          margin="dense"
                          helperText={<ErrorMessage name="confirmPassword" />}
                          error={
                            props.errors.confirmPassword &&
                            props.touched.confirmPassword
                          }
                        />
                      </Box>

                      <Box>
                        {messge ? (
                          <Box className="mt-10 mb-10">
                            <Alert severity="error">
                              <AlertTitle>Error</AlertTitle>
                              {messge} — <strong>check it out!</strong>
                            </Alert>
                          </Box>
                        ) : successmessge ? (
                          <Box className="mt-10 mb-10">
                            <Alert severity="success">
                              <AlertTitle>Success</AlertTitle>
                              {successmessge} — <strong>check it out!</strong>
                            </Alert>
                          </Box>
                        ) : null}
                      </Box>
                      <Box>
                        <Button
                          fullWidth
                          variant="contained"
                          className="regbtn"
                          type="submit"
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
