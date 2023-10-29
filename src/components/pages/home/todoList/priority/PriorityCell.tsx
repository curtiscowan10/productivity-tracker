import React from 'react';
import LowPriorityIcon from "@mui/icons-material/KeyboardArrowUp";
import MediumPriorityIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import HighPriorityIcon from "@mui/icons-material/PriorityHigh";
import Priorities from '../../../../../constants/Priorities';

function PriorityCell({value}: {value: string}) {
  switch (value) {
    case Priorities.High:
      return <HighPriorityIcon fontSize='medium'/>;  
    case Priorities.Medium:
      return <MediumPriorityIcon />;
    default: 
      return <LowPriorityIcon />;
  }
}

export default PriorityCell;