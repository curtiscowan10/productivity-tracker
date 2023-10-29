import React, { useEffect, useState } from 'react';
import DailyTodoList from './DailyTodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../../../store/tasks/taskSelectors';
import { sortTasks } from '../../../../store/tasks/taskActions';

export type SortDirection = 'asc' | 'desc';

function DailyTodoListContainer() {
  const dispatch = useDispatch();
  const [sortBy, updateSortBy] = useState('name');
  const [sortDirection, updateSortDirection] = useState<SortDirection>('asc');
  const tasks = useSelector(getAllTasks);

  const handleSort = (sortBy: string, sortDirection: SortDirection) => {
    updateSortBy(sortBy);
    updateSortDirection(sortDirection === 'asc'  ? 'desc' : 'asc');
  }

  useEffect(() => {
    dispatch(sortTasks(sortBy, sortDirection));
  }, [sortBy, sortDirection]);

  return (
    <DailyTodoList 
      tasks={tasks}
      sortBy={sortBy}
      sortDirection={sortDirection}
      handleSort={handleSort}
    />
  );
};

export default DailyTodoListContainer;