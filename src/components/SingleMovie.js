import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie/* , addFavourite */ } from '../../services/movie-service';
import './SingleMovie.scss'


const startingState = {image_URL: null, title: null, overview: null, genres: [],  }


function SingleMovie(){
    const {movieId} = useParams('movieId')
    const [movieState, setMovieState]= useState(startingState)
    const [imgURL, setImgURL] = useState('')
    const [genre, setGenre] = useState([])
    const [popularity, setPopularity] = useState(0)
    const [favourites, setFavourites] = useState([])

    useEffect(()=>{
        singleMovie(movieId)
        .then(res =>{
            console.log(res)
            setMovieState(res.data)
            setImgURL('https://image.tmdb.org/t/p/original' + res.data.backdrop_path)
            setGenre(res.data.genres[0])
            setPopularity(res.data.popularity)

        })
    }, [])

/*     const handleFavourite = (movieId) => {
        axios.post("https://api.themoviedb.org/3/account/favourite?api_key=885ac395bf7a9b3e4962aa8a1044131c", {media_type: 'movie', media_id: movieId, favorite: true})
          .then(res => {
              setFavourites(res)
          })
          .catch(err => console.log(err))
          


        addFavourite(movieId)
        console.log('this is the id', movieId)
    } */

    return(
    <div className={popularity >1900? 'popular': movieState.release_date >'2021-06-11'? 'upcoming' : movieState.vote_average >8.5? 'top-rated': null}>
        {movieState? 
         (<div><img src={imgURL} className = 'main-img' alt="Movie Img" />
         <h4>{movieState.title}</h4>
         <p>{popularity}</p>
         <p>{movieState.release_date}</p>
         <p>{movieState.vote_average}</p>
         <p>{movieState.overview}</p>
         <p>{genre.name}</p>
         </div>)
        : null  
    }
        <button /* onClick={handleFavourite()} */>
            <i className="far fa-heart"></i>
        </button>    
        
        <Link to={'/'}>Back to all Movies</Link>
    </div>
    )
}


export default SingleMovie;
