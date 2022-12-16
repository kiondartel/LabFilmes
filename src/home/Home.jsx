import { Outlet } from "react-router-dom";
import App from "../components/AppContent";
import NavBar from "../components/NavBar";
import * as Styled from "./styles";

function Home() {
  return (
    <Styled.Container>
      <NavBar />
      <Styled.SubTitle>Lab Filmes</Styled.SubTitle>
      <App />
      <Outlet />
    </Styled.Container>
  );
}

export default Home;
