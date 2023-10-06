import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormikContext } from "formik";
export default function InputSelect({ label, name, value }) {
  const { handleChange, handleBlur } = useFormikContext();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <MenuItem value={"cat1"}>cat1</MenuItem>
          <MenuItem value={"cat2"}>cat2</MenuItem>
          <MenuItem value={"cat3"}>cat3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
