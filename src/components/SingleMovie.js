import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import * as movieService from '../../services/movie-service';


const startingState = {image_URL: null, title: null, overview: null, genres: [],  }

function SingleMovie(props){
    const {movieId} = props.match.params
    const [movieState, setMovieState]= useState(startingState)

    useEffect(()=>{
        movieService.getByGenre()
        .then(res =>{
            console.log(res)
            const movie = res.genres.name
            setMovieState(movie)
        })
    }, [movieId])

    return(
    <div>
        <Navbar />
        <img src={movieState.image_URL} alt="Movie Img" />
        <h4>{movieState.title}</h4>
        <p>{movieState.overview}</p>
        <p>{movieState.genres[0]}</p>
        <Link to={'/movies'}>Back to all Movies</Link>
    </div>
    )
}


export default SingleMovie;
