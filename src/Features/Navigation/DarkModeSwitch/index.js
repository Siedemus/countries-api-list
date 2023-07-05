import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, switchDarkMode } from "./darkModeSlice";
import { Button } from "./styled";

export const DarkModeSwitch = () => {
  const darkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(switchDarkMode())}>
      <ion-icon name={darkMode ? "moon" : "moon-outline"}></ion-icon>
      Dark Mode
    </Button>
  );
};
