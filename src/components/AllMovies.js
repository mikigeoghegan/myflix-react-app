
import React, { useState, useEffect } from 'react';
import {getTopRated} from '../../services/movie-service';
import Carosel from './Carosel'

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      getTopRated()
      .then((response) => {
        setMovies(response.data);
        console.log(movies)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {movies.results?(<Carosel movies = {movies.results}/>): 'no movies exist'}
    </div>
  );
}

export default TopRated;
