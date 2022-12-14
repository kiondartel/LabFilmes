import * as Styled from "./styles";
import { Link } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

function NavBar() {
  return (
    <Styled.Nav>
      <Styled.SubTitle>
        <Link to="/">
          <BiCameraMovie />
          MoviesLab
        </Link>
      </Styled.SubTitle>
      <Styled.DivContainer>
        <Styled.Input type="text" placeholder="Busque um filme" />
        <Styled.Btn type="submit">
          <BiSearchAlt2 />
        </Styled.Btn>
      </Styled.DivContainer>
    </Styled.Nav>
  );
}

export default NavBar;
