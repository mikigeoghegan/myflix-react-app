import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie/* , addFavourite */ } from '../../services/movie-service';
import Favourites from './Favourites';
import './SingleMovie.scss'


const startingMovieState = {image_URL: null, title: null, overview: null, release_date: '', vote_average: 0, runtime: 0, id: 0 }


function SingleMovie(props){
    console.log('first props', props);
    
    const {movieId} = useParams('movieId')
    const [movieState, setMovieState]= useState(startingMovieState)
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

/*     function addFavourite(){

        const response = axios.post("https://api.themoviedb.org/3/account/favourite?api_key=885ac395bf7a9b3e4962aa8a1044131c", {media_type: "movie", media_id: 550, favorite: true})
        console.log(response.data)
        setFavourites(response.data)
      } 
 */


/*     addFavourite(props)
    .then(res => {
        console.log('this is the add fave response', res)
        setFavourites(res.data)
    }) */

    function addToFavourite(id) {
            console.log('movie id', id);
            console.log('props', props);
            console.log('id', props.match.params.movieId)
            
            props.setFavourites(props.favourites.concat(props.match.params.movieId));
    
            console.log('props after', props)
    }




   /*  .catch(err => console.log(err)) */

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
                        <button onClick={() => addToFavourite(movieState.id)}><i className="fas fa-heart"></i></button>
                    </div>
                </div>
                <div className ='additional-info'>
                    <p>Genre: {genre.name}</p>
                    <p>Runtime: {movieState.runtime} minutes</p>
                </div>
                <h2>Favourite Recipes</h2>
 {/*                 {favourites?(<Favourites favourites = {favourites} title = 'Favourites' />): 'Loading Favourite Movies'}  */}
            </div>)
            : null  
        }   
        
        </div>
    </div>
    )
}


export default SingleMovie;
