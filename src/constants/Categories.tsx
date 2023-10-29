import { Code, GitHub, House, Weekend } from "@mui/icons-material";

const TaskCategories = {
  Work: 'work',
  PersonalProjects: 'projects',
  General: 'general',
  Housework: 'housework'
};

const TaskCategoryLabels = {
  [TaskCategories.Work]: 'Work',
  [TaskCategories.PersonalProjects]: 'Personal Projects',
  [TaskCategories.General]: 'General',
  [TaskCategories.Housework]: 'Housework'
}

const TaskCategoryColours = {
  [TaskCategories.Work]: ' #FF6F61',
  [TaskCategories.PersonalProjects]: '#93C7E0',
  [TaskCategories.General]: '#D8D8D8',
  [TaskCategories.Housework]: '#3E5B6D'
};

const TaskCategoriesIcons = {
  [TaskCategories.Work]: <Code htmlColor={TaskCategoryColours[TaskCategories.Work]} />,
  [TaskCategories.PersonalProjects]: <GitHub htmlColor={TaskCategoryColours[TaskCategories.PersonalProjects]} />,
  [TaskCategories.General]: <Weekend htmlColor={TaskCategoryColours[TaskCategories.General]} />,
  [TaskCategories.Housework]: <House htmlColor={TaskCategoryColours[TaskCategories.Housework]} />
};

export { TaskCategories, TaskCategoriesIcons, TaskCategoryColours, TaskCategoryLabels };