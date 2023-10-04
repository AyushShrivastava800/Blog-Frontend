import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  id,
  name,
  label,
  value,
  type = "text",
  rows,
  disabled = false,
}) => {
  const { handleChange, handleBlur, touched, errors } =
    useFormikContext();

  return (
    <>
      <FormControl fullWidth error={touched[name] && !!errors[name]}>
        <TextField
          fullWidth
          id={id}
          name={name}
          label={label}
          type={type}
          multiline
          rows={rows}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched[name] && !!errors[name]}
          inputMode={name === "otp_code" ? "numeric" : type}
          // InputProps={{readOnly: readOnly, }}
          disabled={disabled}
        />
        {touched[name] && errors[name] && (
          <FormHelperText>{errors[name]}</FormHelperText>
        )}
     
      </FormControl>
    </>
  );
};
InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
