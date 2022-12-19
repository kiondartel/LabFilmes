import React from "react";
import * as Styled from "./styles";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const imageUrl = import.meta.env.VITE_IMG;

function MoviesCard({ movie, showLink = true }) {
  return (
    <Styled.Container>
      <Styled.Image src={imageUrl + movie.poster_path} alt={movie.title} />
      <Styled.Title>{movie.title}</Styled.Title>
      <Styled.Description>
        <FaStar /> {movie.vote_average}
      </Styled.Description>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </Styled.Container>
  );
}

export default MoviesCard;
