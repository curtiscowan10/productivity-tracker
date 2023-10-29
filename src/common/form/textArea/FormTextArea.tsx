import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues } from "react-hook-form";

type FormTextAreaProps = {
  control?: Control<FieldValues>;
  name: string;
  label: string;
  helperText: string;
  required: boolean;
};

const FormTextArea = ({
  control,
  name,
  label,
  helperText,
  required,
}: FormTextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          margin="normal"
          multiline
          minRows={5}
          helperText={helperText}
          required={required}
          inputProps={{
            maxLength: 600,
          }}
        />
      )}
    />
  );
};

export default FormTextArea;
