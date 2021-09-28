import axios from 'axios';


const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const apiKey = '885ac395bf7a9b3e4962aa8a1044131c'

async function getTopRated() {
  const response = await movieService.get(`/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
  
    return response
}

async function getUpcoming() {
  const response = await movieService.get(`/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
  
    return response
}

async function getPopular() {
  const response = movieService.get(`/movie/popular?api_key=${apiKey}&language=en-US&page=1 `)
  return response
}

async function singleMovie(movieId){
  const url =  `/movie/` + movieId + `?api_key=${apiKey}&language=en-US`
  const response = await movieService.get(url)
  return response
}


export { movieService, getTopRated, getUpcoming, singleMovie, getPopular};