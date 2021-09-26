
import React, { useState, useEffect } from 'react';
import {getLatest, getPopular, getTopRated} from '../../services/movie-service';
import Carosel from './Carosel'

/* function TopRated() {
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
} */

function getAllMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [lastestMovies, setLatestMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
      getTopRated()
      .then((response) => {
        setTopRatedMovies(response.data);
        console.log('these are the top rated', topRatedMovies)
      })
      getLatest()
      .then((response) => {
        setLatestMovies(response.data)
        console.log('this is the data for latest', lastestMovies)
      })
      getPopular()
      .then((response) => {
        setPopularMovies(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return ( 
    <div>
      {topRatedMovies.results?(<Carosel topMovies = {topRatedMovies.results} lastestMovies = {lastestMovies.results} popularMovies = {popularMovies.results} />): 'no movies exist'}
    </div>
  );
}

export default getAllMovies;
