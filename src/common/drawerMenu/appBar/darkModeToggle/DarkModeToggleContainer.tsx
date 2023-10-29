import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "./DarkModeToggle";
import { toggleDarkMode } from "../../../../store/ui/uiActions";
import { isDarkMode } from "../../../../store/ui/uiSelectors";

function DarkModeToggleContainer() {
  const dispatch = useDispatch();
  const isDark = useSelector(isDarkMode);

  const onChange = () => {
    dispatch(toggleDarkMode())
  };

  return <DarkModeToggle isDark={isDark} onChange={onChange} />
}

export default DarkModeToggleContainer;