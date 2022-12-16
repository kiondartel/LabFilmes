import axios from "axios";
import React, { useEffect, useState } from "react";

import * as Styled from "./styles";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [bestMovies, setBestMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setBestMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div>{bestMovies && bestMovies.map((movie) => <p>oi{movie.title}</p>)}</div>
  );
}

export default App;
