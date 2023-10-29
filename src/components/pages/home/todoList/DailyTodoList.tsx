import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, useMediaQuery, useTheme } from "@mui/material";
import {TableHeaders, TableHeaderType} from "../../../../constants/TableHeaders";
import CompletedCheckbox from "./completedCheckbox/CompletedCheckboxContainer";
import CategoryCell from "./category/CategoryCell";
import PriorityCell from "./priority/PriorityCell";
import ActionsCell from "./actionsCell/ActionsCellContainer";
import AddTask from "./add/AddTaskContainer";
import { SortDirection } from "./DailyTodoListContainer";
import "./DailyTodoList.scss";

type Task = {
  description: string,
  priority: string,
  category: string,
  isCompleted: boolean
}

type DailyTodoListProps = {
  tasks: Array<Task>,
  handleSort: (sortBy: string, sortDirection: SortDirection) => void,
  sortBy: string,
  sortDirection: 'asc' | 'desc',
}

function DailyTodoList({tasks, handleSort, sortBy, sortDirection}: DailyTodoListProps) {
  const renderTableHeaderCell = ({value, label, excludeSort, align}: any) => (
    <TableCell key={label} align={align} sx={{paddingLeft: 0.5, paddingRight: 0.5}}>
      {excludeSort ? label : (
        <TableSortLabel
          hideSortIcon={true}
          active={sortBy === value}
          direction={sortDirection}
          onClick={() => handleSort(value, sortDirection)}
        >
          {label}
        </TableSortLabel>
      )}
    </TableCell>
  );
  
  return (
    <TableContainer component={Paper} elevation={3} sx={{ padding: {xs: 0, sm: 2}, marginTop: {xs: 0, sm: 2}, maxHeight: {xs: '788px', sm: '600px'}}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant="h5" gutterBottom display={{xs: 'none', sm: 'flex'}}>
          Daily Tasks
        </Typography>
        <AddTask />
      </div>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {TableHeaders.map((header) => renderTableHeaderCell(header))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell sx={{paddingLeft: 0.5, paddingRight: 0.5}}><CompletedCheckbox id={index} value={task.isCompleted} /></TableCell>
              <TableCell sx={{paddingLeft: 0.5, paddingRight: 0.5, whiteSpace: 'pre-line', overflow: 'hidden', maxWidth: '40px'}}>{task.description}</TableCell>
              <TableCell sx={{paddingLeft: 0.5, paddingRight: 0.5}} align="center"><CategoryCell value={task.category}/></TableCell>
              <TableCell sx={{paddingLeft: 0.5, paddingRight: 0.5}} align="center"><PriorityCell value={task.priority} /></TableCell>
              <TableCell sx={{paddingLeft: 0.5, paddingRight: 0.5}} align="right"><ActionsCell id={index}/></TableCell>
            </TableRow>
          ))}
        </TableBody>      
      </Table>
    </TableContainer>
  );
}

export default DailyTodoList;