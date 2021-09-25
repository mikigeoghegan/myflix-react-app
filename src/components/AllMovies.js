
import React, { useState, useEffect } from 'react';
import * as movieService from '../../services/movie-service';
import NavBar from './NavBar';
import Carosel from './Carosel'

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getTopRated()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <Carosel movies = {movies}/>
    </div>
  );
}

export default TopRated;
