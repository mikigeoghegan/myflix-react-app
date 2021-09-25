import axios from 'axios';

const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

function getTopRated() {
    return movieService.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
}

function getByGenre() {
  return movieService.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

}

//19404

function singleMovie(props){
  return movieService.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}

export { movieService, getTopRated, getByGenre, singleMovie };