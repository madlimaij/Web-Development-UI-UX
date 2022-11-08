import { FormControl } from "@mui/material";
import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import theme from "../theme";

interface IFileUploadInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FileUploadInput: React.FC<IFileUploadInputProps> = ({ register, name }) => {
  return (
    <FormControl sx={{ width: "100%", mb: theme.spacing.xs }}>
      <input type="file" accept="image/*" {...register(name)} />
    </FormControl>
  );
};

export default FileUploadInput;
