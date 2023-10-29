import { Checkbox } from '@mui/material';
import React from 'react';

type CompletedCheckboxProps = { 
  value: boolean,
  onClick: () => void
}

function CompletedCheckbox({value, onClick}: CompletedCheckboxProps) {
  return (
    <Checkbox onClick={onClick} checked={value} />
  );
}

export default CompletedCheckbox;