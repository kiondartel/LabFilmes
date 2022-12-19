import { Outlet } from "react-router-dom";
import Home from "../components/Home";
import App from "../components/Home";
import NavBar from "../components/NavBar";
import * as Styled from "./styles";

function AppLab() {
  return (
    <Styled.Container>
      <NavBar />
      <Outlet />
    </Styled.Container>
  );
}

export default AppLab;
