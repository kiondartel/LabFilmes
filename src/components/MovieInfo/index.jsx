import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFileEarmarkTextFill,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import MoviesCard from "../MoviesCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovies] = useState(null);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data);
  };

  useEffect(() => {
    const movieURL = `${moviesUrl}${id}?${apiKey}&language=pt-BR`;
    getMovies(movieURL);
  }, []);

  return (
    <Styled.Container>
      {movie && (
        <>
          <MoviesCard movie={movie} showLink={false} />
          <Styled.Content>
            <Styled.InfoContainer>
              <Styled.Title>
                <BsWallet2 />
                Orçamento
              </Styled.Title>
              <Styled.Description>
                {formatCurrency(movie.budget)}
              </Styled.Description>
            </Styled.InfoContainer>
            <Styled.InfoContainer>
              <Styled.Title>
                <BsGraphUp />
                Faturamento
              </Styled.Title>
              <Styled.Description>
                {formatCurrency(movie.revenue)}
              </Styled.Description>
            </Styled.InfoContainer>
            <Styled.InfoContainer>
              <Styled.Title>
                <BsHourglassSplit />
                Duração
              </Styled.Title>
              <Styled.Description>{movie.runtime} minutos</Styled.Description>
            </Styled.InfoContainer>
            <Styled.InfoContainer>
              <Styled.Title>
                <BsFileEarmarkTextFill />
                Descrição
              </Styled.Title>
              <Styled.Description>{movie.overview} minutos</Styled.Description>
            </Styled.InfoContainer>
          </Styled.Content>
        </>
      )}
    </Styled.Container>
  );
}

export default MovieInfo;
