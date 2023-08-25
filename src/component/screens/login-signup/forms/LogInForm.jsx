import React from "react";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import Cookies from 'js-cookie';
import { Container } from "@mui/system";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useLoginMutation } from "../../../features/api/userApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
function LogInForm() {
  const navigate=useNavigate();
  const [messge, setError] = useState("");
  const [successmessge, setSuccess] = useState("");
  const [Loginusers, { isSuccess }] = useLoginMutation();

  const HandleSubmit = async (values, props) => {
    try {
      const result = await Loginusers(values);
    
      if (result.data) {     
        setSuccess(result.data.message);
        localStorage.setItem("loggedinUser", JSON.stringify(result.data));
        Cookies.set('jwt', JSON.stringify(result.data.authToken) , { expires:0.5 });
        props.resetForm();
      } else {
        setError(result.error.data.message);
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
        navigate('/blog'); 
      }, 2000);

      return () => clearTimeout(timeout);
    }
    console.log("object") 
  }, [messge, successmessge]);

  return (
    <>
      <Box className="signUpForm">
        <Container>
          <Box className="mt-18">
            <Box>
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
                          error={
                            props.errors.password && props.touched.password
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
                          Login
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

export default LogInForm;
