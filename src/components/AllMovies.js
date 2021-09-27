
import React, { useState, useEffect } from 'react';
import {getUpcoming, getPopular, getTopRated} from '../../services/movie-service';
import Carosel from './Carosel'
import './AllMovies.scss'

function getAllMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
      getTopRated()
      .then((response) => {
        setTopRatedMovies(response.data);
      })
      getUpcoming()
      .then((response) => {
        setUpcomingMovies(response.data)
      })
      getPopular()
      .then((response) => {
        setPopularMovies(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return ( 
    <div>
        
        {topRatedMovies.results?(<Carosel movies = {topRatedMovies.results} title = 'Top Rated' />): 'no movies exist'}
      
        {upcomingMovies.results?(<Carosel movies = {upcomingMovies.results} title = 'Upcoming' />): 'no movies exist'}
     
        {popularMovies.results?(<Carosel movies = {popularMovies.results} title = 'Popular' />): 'no movies exist'}
    </div>
  );
}

export default getAllMovies;
