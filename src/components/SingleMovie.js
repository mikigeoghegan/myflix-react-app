import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie/* , addFavourite */ } from '../../services/movie-service';
import './SingleMovie.scss'


const startingState = {image_URL: null, title: null, overview: null, genres: [] }


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
    <div className = 'single-movie-all'>
        <div className={popularity >1400? 'popular': movieState.release_date >'2021-06-11'? 'upcoming' : movieState.vote_average >= 8.5? 'top-rated': null}>
            <Link to = '/' className ='title'><h1>MYFLIX</h1> </Link>
            {movieState? 
            (<div >
                <h4 className ='single-title'>{movieState.title}</h4>
                <div className ='movie-details'> 
                    <div>
                        <img src={imgURL} className = 'main-img' alt="Movie Img" />
                    </div>
                    <div className = 'movie-info'>
                        <p className = 'movie-overview'>{movieState.overview}</p>
                        <button /* onClick={handleFavourite()} */><i className="fas fa-heart"></i></button> 
                    </div>
                </div>
                <div className ='additional-info'>
                    <p>Genre: {genre.name}</p>
                    <p>Runtime: {movieState.runtime} minutes</p>
                </div>
            </div>)
            : null  
        }   
        
        </div>
    </div>
    )
}


export default SingleMovie;
