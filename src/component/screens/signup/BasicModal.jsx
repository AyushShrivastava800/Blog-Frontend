import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { useNavigate } from "react-router-dom";
import SignupTabs from "./signup_tabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "100%",
  height: "35rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 600px)": {
    maxWidth: 300,
  },
};

export default function BasicModal({ title ,className}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    const user = localStorage.getItem("loggedIn");
    if (!user) {
      setOpen(true);
    } else {
      navigate("/createblog", { replace: true });
    }
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={handleOpen} className={className}>
        {title}
      </Button>

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
    </div>
  );
}
