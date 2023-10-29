import React, { useState } from 'react';
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ProgressTracker from './progressTracker/ProgressTrackerContainer';
import DailyTodoList from './todoList/DailyTodoListContainer';

interface Task {
  id: number;
  text: string;
  priority: 'low' | 'medium' | 'high';
  category: 'work' | 'diy' | 'household' | 'side projects' | 'other';
  completed?: boolean;
}

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{padding: {xs: 0, sm: 2}}}>
      {!isMobile && (
        <Typography variant="h3" style={{marginTop: '1rem', marginBottom: '1rem'}}>
          Habit Tracker
        </Typography>
      )}
      {!isMobile && <ProgressTracker />}
      <DailyTodoList />
    </Container>
  );
};

export default Home;
