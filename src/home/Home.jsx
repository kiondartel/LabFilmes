import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import * as Styled from "./styles";

function Home() {
  return (
    <Styled.Container>
      <NavBar />
      <Styled.SubTitle>MoviesLib</Styled.SubTitle>
      <Outlet />
    </Styled.Container>
  );
}

export default Home;
