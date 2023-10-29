import Typography from "@mui/material/Typography";
import React from "react";
import CircularProgressWithLabel from "../../../../../common/progress/CircularLabelledProgress";
import Box from "@mui/material/Box";
import { TaskCategoriesIcons, TaskCategoryColours } from "../../../../../constants/Categories";
import { Paper, useMediaQuery, useTheme } from "@mui/material";

type ProgressItemProps = {
  name: string,
  label: string,
  progressValue: number
}

function ProgressItem({name, label, progressValue}: ProgressItemProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
     <Box component={isMobile ? Paper : undefined} key={name} sx={{padding: {xs: 3, sm: 0}, marginRight: {xs: 0, sm: 2}, marginBottom: {xs: 2, sm: 0}}} display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" flexDirection={'row'} marginBottom={1}>
        {TaskCategoriesIcons[name]}
        <Typography variant="subtitle1" gutterBottom style={{marginLeft: '4px'}}>{label}</Typography>
      </Box>
      <CircularProgressWithLabel value={progressValue} color={TaskCategoryColours[name]}/>
    </Box>
  );
}

export default ProgressItem;