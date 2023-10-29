import React from "react";
import ProgressTracker from "./ProgressTracker";
import { get } from "http";
import { useSelector } from "react-redux";
import { getOverallProgressValue } from "../../../../store/tasks/taskSelectors";

function ProgressTrackerContainer() {
  const overallProgress = useSelector(getOverallProgressValue);
  return (
    <ProgressTracker overallProgress={overallProgress ?? 0} />
  );
}

export default ProgressTrackerContainer;