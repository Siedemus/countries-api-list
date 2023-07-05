import { Header } from "../../Common/Header/styled";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Nav } from "./styled";

export const Navigation = () => (
  <Nav>
    <Header>Where in the world?</Header>
    <DarkModeSwitch />
  </Nav>
);
