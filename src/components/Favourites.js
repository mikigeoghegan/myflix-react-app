import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { singleMovie/* , addFavourite */ } from '../../services/movie-service';
import './SingleMovie.scss'



function Favourites(props){
    const favourites = props.favourites;
    
    


/*     const addToFavourite = id => {
        if (!favourites.includes(id)) setFavourites(favourites.concat(id))
        console.log(id)
    }

    const removeFavourite = id => {
        let index = favourites.indexOf(id)
        console.log(index)
        let temp = [...favourites.slice(0, index),
        ...favourites.slice(index + 1)]
        setFavourites(temp)
    } */

    /* let findFavourites = favourites.filter(fav => favourites.includes(fav.id)) */

    return(
    <div className = 'fav-movie-all'>
        <div>
            {/* <button onClick={() => removeFavourite(movie.id)}><i className="fas fa-heart"></i></button> */}
            <h2>Favourite Movies</h2>
            {favourites.map(movie => {
            return (
            <div key={movie.id}>
                <h2 className="movie__card__title">{movie.title}</h2>
            </div>
            )})}
        
        </div>
    </div>
    )
}


export default Favourites;