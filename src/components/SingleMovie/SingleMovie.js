import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie } from '../../../services/movie-service';
import Favourites from '../Favourites/Favourites';
import './SingleMovie.scss'


const startingMovieState = {image_URL: null, title: null, overview: null, release_date: '', vote_average: 0, runtime: 0, id: 0 }


function SingleMovie(props){
    
    const {movieId} = useParams('movieId')
    const [movieState, setMovieState]= useState(startingMovieState)
    const [imgURL, setImgURL] = useState('')
    const [genre, setGenre] = useState([])
    const [popularity, setPopularity] = useState(0)
  

    useEffect(()=>{
        singleMovie(movieId)
        .then(res =>{
            setMovieState(res.data)
            setImgURL('https://image.tmdb.org/t/p/original' + res.data.backdrop_path)
            setGenre(res.data.genres[0])
            setPopularity(res.data.popularity)
        })
        .catch(err => console.log(err))
    }, [])


    function addToFavourite(title) {
        if (!props.favourites.includes(title)) props.setFavourites(props.favourites.concat(title));
    }



    return(
    <div className = 'single-movie-all'>
        <div className={popularity >1400? 'popular': movieState.release_date >'2021-06-11'? 'upcoming' : movieState.vote_average >= 8.5? 'top-rated': null}>
            <Link to = '/' className ='title'><h1>MYFLIX</h1> </Link>
            {movieState? 
            (<div >
                <h4 className ='single-title'>{movieState.title}</h4>
                <div className ='movie-details'> 
                    <img src={imgURL} className = 'main-img' alt="Movie Img" />
                    <div className = 'movie-info'>
                        <p className = 'movie-overview'>{movieState.overview}</p>
                        <button onClick={() => addToFavourite(movieState.title)}><i className="far fa-heart"></i></button>
                    </div>
                </div>
                <div className ='additional-info'>
                    <p>Genre: {genre.name}</p>
                    <p>Runtime: {movieState.runtime} minutes</p>
                </div>

                {props.favourites>=[0]?(<hr/>): null}
                {props.favourites>=[0]?(<Favourites {...props} movieState = {movieState} favourites = {props.favourites}/>): null}
            </div>)
            : null  
        }   
        </div>
    </div>
    )
}


export default SingleMovie;
