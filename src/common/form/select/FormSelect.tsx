import { FormControl, InputLabel, Select } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, FieldError } from "react-hook-form";

type FormSelectProps = {
  control?: Control<FieldValues>;
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  error?: FieldError;
};

const FormSelect = ({
  control,
  name,
  label,
  required = false,
  className,
  error,
}: FormSelectProps) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
          {...field}
            label={label}
            variant="outlined"
            required={required}
            className={className}
            error={Boolean(error)}
          />
        )}
      />
    </FormControl>
  );
};

export default FormSelect;
