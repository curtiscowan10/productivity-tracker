import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import ProgressItem from "./progressItem.tsx/ProgressItemContainer";
import Box from "@mui/material/Box";
import { TaskCategories } from "../../../../constants/Categories";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ProgressTracker({overallProgress}: {overallProgress: number}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper elevation={isMobile ? 0 : 3} style={{ paddingRight: '2rem', paddingLeft: '2rem', paddingTop: '2rem', paddingBottom: '2rem', marginBottom: '3rem' }}>
        <Typography variant="h5" sx={{marginBottom: 2, display: {xs: 'none', sm: 'flex'}}}>
          Daily Progress
        </Typography>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}} justifyContent="space-between" marginBottom='3rem'>
          {Object.values(TaskCategories).map(categoryKey => {
            const category = categoryKey as keyof typeof TaskCategories;
            return <ProgressItem name={category} key={category} />;
          })}
        </Box>
        <LinearProgress variant="determinate" value={overallProgress} />
    </Paper>
  );
}

export default ProgressTracker;