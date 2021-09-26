import axios from 'axios';


const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

async function getTopRated() {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1`)
  
  //const url = `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  //console.log(url)
/*     const response = axios.get({
      baseURL: 'https://api.themoviedb.org/3',
      url: '/movie/top_rated',
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US',
        page: 1
      },
      paramsSerializer: function (params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      }
    
    })*/
    return response
}

function getByGenre() {
  return movieService.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}

//19404

async function singleMovie(movieId){
  console.log(movieId)
  const url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US"
  const response = await axios.get(url)
  return response
}

export { movieService, getTopRated, getByGenre, singleMovie };