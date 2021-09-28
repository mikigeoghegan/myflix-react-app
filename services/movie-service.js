import axios from 'axios';

const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

async function getTopRated() {
  const response = await movieService.get(`/movie/top_rated?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1`)
  
    return response
}

function getByGenre() {
  return movieService.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}

async function getUpcoming() {
  const response = await movieService.get(`/movie/upcoming?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1`)
  
    return response
}

async function getPopular() {
  const response = movieService.get(`/movie/popular?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US&page=1 `)
  return response
}

async function singleMovie(movieId){
  console.log(movieId)
  const url = "/movie/" + movieId + "?api_key=885ac395bf7a9b3e4962aa8a1044131c&language=en-US"
  const response = await movieService.get(url)
  return response
}

/* function addFavourite(movie){

  const response = movieService.post("/account/favourite?api_key=885ac395bf7a9b3e4962aa8a1044131c", {media_type, media_id, favorite: true})
  return response
} */


/*     const handleFavourite = (movieId) => {
        axios.post("https://api.themoviedb.org/3/account/favourite?api_key=885ac395bf7a9b3e4962aa8a1044131c", {media_type: 'movie', media_id: movieId, favorite: true})
          .then(res => {
              setFavourites(res)
          })
          .catch(err => console.log(err))
          


        addFavourite(movieId)
        console.log('this is the id', movieId)
    } */


export { movieService, getTopRated, getByGenre, getUpcoming, singleMovie, getPopular/* , addFavourite */};