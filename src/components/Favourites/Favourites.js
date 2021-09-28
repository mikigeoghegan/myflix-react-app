import React from 'react';
import './Favourites.scss'



function Favourites(props){

    return(
        <div className = 'favourite-movies'>
            <h2>Favourite Movies:</h2>
            {props.favourites.map(movie => {
            return (
            <div key={movie}>
                <div className="movie-title">
                    <i className="far fa-heart"></i>
                    {movie}<i className="far fa-heart">
                    </i>
                </div>
            </div>
            )})}
        
        </div>
    )
}


export default Favourites;