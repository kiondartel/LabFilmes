import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard";

import * as Styled from "./styles";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [bestMovies, setBestMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setBestMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Styled.Container>
      <Styled.Description>
        Descubra nossa busca pelas informações dos filmes, as notícias e
        matérias especiais de cinema, os últimos trailers e mais...
      </Styled.Description>
      <Styled.Title>Melhores Filmes:</Styled.Title>
      <Styled.MoviesContainer>
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 &&
          bestMovies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
      </Styled.MoviesContainer>
    </Styled.Container>
  );
}

export default Home;
