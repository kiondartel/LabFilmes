import * as Styled from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Styled.Nav>
      <Styled.SubTitle>
        <Link to="/">
          <BiCameraMovie />
          LabFilmes
        </Link>
      </Styled.SubTitle>
      <Styled.DivContainer onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} //ao digitar no input mudamos o estado
          value={search}
        />
        <Styled.Btn type="submit">
          <BiSearchAlt2 />
        </Styled.Btn>
      </Styled.DivContainer>
    </Styled.Nav>
  );
}

export default NavBar;
