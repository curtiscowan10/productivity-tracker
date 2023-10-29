import React from 'react';
import { TaskCategoriesIcons } from '../../../../../constants/Categories';

function CategoryCell({value}: {value: string}) {
  return TaskCategoriesIcons[value];
}

export default CategoryCell;