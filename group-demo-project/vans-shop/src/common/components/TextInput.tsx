import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import theme from "../theme";

const useStyles = createUseStyles({
  root: {
    "&$focused $notchedOutline": {
      borderColor: theme.colors.darkGray
    }
  },
  errorText: {
    marginLeft: 0
  },
  label: {
    color: [theme.colors.darkGray, "!important"]
  },
  focused: {},
  notchedOutline: {}
});

interface ITextInputProps {
  name: string;
  label: string | null;
  control: Control<FieldValues>;
  type: string;
  multiline?: boolean;
  rows?: number;
  errors?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
}

const TextInput: React.FC<ITextInputProps> = ({
  name,
  label,
  control,
  type,
  errors,
  multiline = false,
  rows = 0
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl sx={{ width: "100%", mb: theme.spacing.xs }}>
          <TextField
            type={type}
            label={label}
            defaultValue={value}
            onChange={onChange}
            autoComplete="off"
            variant="outlined"
            multiline={multiline}
            rows={rows}
            InputLabelProps={{ className: classes.label }}
            error={errors && !!errors[name]}
            helperText={errors?.[name] ? errors?.[name].message : ""}
            InputProps={{
              classes: {
                root: classes.root,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline
              }
            }}
            FormHelperTextProps={{ classes: { root: classes.errorText } }}
          />
        </FormControl>
      )}
    />
  );
};

export default TextInput;
