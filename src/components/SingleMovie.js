import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie } from '../../services/movie-service';
import './SingleMovie.scss'


const startingState = {image_URL: null, title: null, overview: null, genres: [],  }

function SingleMovie(props){
    const {movieId} = useParams('movieId')
    const [movieState, setMovieState]= useState(startingState)
    const [imgURL, setImgURL] = useState('')
    const [genre, setGenre] = useState([])
    const [popularity, setPopularity] = useState(0)

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
        
        <Link to={'/'}>Back to all Movies</Link>
    </div>
    )
}


export default SingleMovie;
