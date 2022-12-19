import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesCard from "../MoviesCard";
import * as Styled from "./styles";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q"); //Parametros que digitamos no input

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    getSearchMovies(searchQueryURL);
  }, [query]); //Renderização condicionada ao query

  return (
    <Styled.Container>
      <Styled.Title>
        Resultados para: <span>{query}</span>
      </Styled.Title>
      <Styled.MoviesContainer>
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
      </Styled.MoviesContainer>
    </Styled.Container>
  );
}

export default Search;
