import React from "react";
import CompletedCheckbox from "./CompletedCheckbox";
import { toggleCompleteCheckbox } from "../../../../../store/tasks/taskActions";
import { useDispatch } from "react-redux";

type CompletedCheckboxContainerProps = {
  id: number,
  value: boolean
};

function CompletedCheckboxContainer({id, value}: CompletedCheckboxContainerProps) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleCompleteCheckbox(id));
  };
  return (
    <CompletedCheckbox onClick={onClick} value={value} />
  );
}

export default CompletedCheckboxContainer;