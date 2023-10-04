import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import {  useNavigate } from "react-router-dom";
import SignupTabs from "./signup_tabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({title}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("loggedInUser");

  return (
    <div>
      <Button onClick={handleOpen} className="AddBlog mt-18">
        {title}
      </Button>
      {!user ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SignupTabs />
          </Box>
        </Modal>
      ) : (
        navigate("/createblog", { replace: true })
      )}
    </div>
  );
}
