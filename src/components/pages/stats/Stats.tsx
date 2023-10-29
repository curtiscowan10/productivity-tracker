import React, { useState } from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import ProgressTracker from '../home/progressTracker/ProgressTrackerContainer';

const Stats: React.FC = () => {
  return (
    <Container sx={{marginTop: 2}}>
      <ProgressTracker />
    </Container>
  );
};

export default Stats;
