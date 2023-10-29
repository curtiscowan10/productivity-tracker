import * as yup from "yup";
import { TaskCategories } from "../../../constants/Categories";
import Priorities from "../../../constants/Priorities";

export const taskValidationSchema = yup.object().shape({
  description: yup.string().required().min(1).max(80),
  category: yup.string().oneOf(Object.values(TaskCategories)),
  priority: yup.string().oneOf(Object.values(Priorities)),
});
