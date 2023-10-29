import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export type FormRadioGroupOption = {
  value: string | number;
  label: string;
}

type FormRadioGroupProps = {
  formLabel: string;
  formName: string;
  formOptions: FormRadioGroupOption[];
  control: any;
};  

function FormRadioGroup({formLabel, formName, control, formOptions}: FormRadioGroupProps) {
  return (
    <FormControl>
      <FormLabel id='radio-group'>{formLabel}</FormLabel>
       <Controller
          control={control}
          name={formName}
          render={({ field }) => (
            <RadioGroup
              {...field}
              row
              aria-labelledby="radio-group"
            >
              {formOptions.map((option) => (
                <FormControlLabel key={option.label} value={option.value} control={<Radio />} label={option.label} />
              ))}
            </RadioGroup>
          )}
        />
    </FormControl>
  );
}

export default FormRadioGroup;