import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BasicModal from "../../screens/signup/BasicModal";

export const RoundButton = ({ title, url }) => {
  return (
    <Box
      component={Link}
      to={url}
      className="btn rounded-btn hvr-bounce-to-right"
    >
      {title}
    </Box>
  );
};
export const LinkButton = ({ title, url }) => {
  return (
    <Box component={Link} to={url} className="LinkButton ">
      {title}
    </Box>
  );
};
export const SubmitButton = ({ title }) => {
  return (
    <Button type="submit" className="submitButton mt-18" fullWidth>
      {title}
    </Button>
  );
};

export const AddBlog = ({ title }) => {
 
  return (
    <Button
      type="submit"
      className="AddBlog mt-18"
      fullWidth    
    >
      {title}
    </Button>
  );
};





export const UploadButton = ({ title }) => {
  return (
    <Button variant="outlined" component="label" className="uploadbtn mt-18 ">
      Upload File
      <input name="file" type="file" hidden />
    </Button>
  );
};
