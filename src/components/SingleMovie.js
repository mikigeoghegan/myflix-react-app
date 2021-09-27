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

    useEffect(()=>{
        singleMovie(movieId)
        .then(res =>{
            console.log(res)
            setMovieState(res.data)
            setImgURL('https://image.tmdb.org/t/p/original' + res.data.backdrop_path)
            setGenre(res.data.genres[0])

        })
    }, [])

    return(
    <div>
        {movieState? 
         (<div><img src={imgURL} className = 'main-img' alt="Movie Img" />
         <h4>{movieState.title}</h4>
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
