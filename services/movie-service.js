import axios from 'axios';



const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

async function getTopRated() {
  const response = await movieService.get(`/movie/top_rated?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1`)
  
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

async function getLatest() {
  const response = await movieService.get(`/movie/latest?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US`)
  
    return response
}

async function getPopular() {
  return movieService.get(`/movie/popular?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1 `)
}


//19404

async function singleMovie(movieId){
  console.log(movieId)
  const url = "/movie/" + movieId + "?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US"
  const response = await movieService.get(url)
  return response
}

export { movieService, getTopRated, getByGenre, getLatest, singleMovie, getPopular };