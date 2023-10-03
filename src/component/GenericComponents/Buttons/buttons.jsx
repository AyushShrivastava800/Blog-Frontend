import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
export const SubmitButton = ({ title }) => {
  return (
    <Button type="submit" className="submitButton mt-18" fullWidth>
      {title}
    </Button>
  );
};

export const AddBlog = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="submit"
      className="AddBlog mt-18"
      fullWidth
      onClick={() => navigate("/createblog")}
    >
      {title}
    </Button>
  );
};
export const UploadButton = ({ title }) => {
  return (
    <Button variant="contained" component="label" className="uploadbtn mt-18">
      Upload File
      <input type="file" hidden />
    </Button>
  );
};
