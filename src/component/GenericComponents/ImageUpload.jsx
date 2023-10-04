import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useField } from "formik"; // Changed to useField from useFormikContext
import { Box } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ setFileupload, name, label }) {
  const [selectedFile, setSelectedFile] = useState("");
  const [field] = useField(name);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setFileupload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Box>
        <Button
        className="upload-btn"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          {label}
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => {
              field.onChange(e);
              handleFileChange(e);
            }}
            onBlur={field.onBlur}
            name={field.name}
            value={field.value}
          />
        </Button>
      </Box>
   
    </>
  );
}
