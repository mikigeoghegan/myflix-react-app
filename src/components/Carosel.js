import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import './Carosel.scss'

function Carosel({movies}){
    useEffect(() => {
        console.log(movies)
    }, [])
    const baseLink = 'https://image.tmdb.org/t/p/original'
    return (
        <div className = 'movie-container'>
             {movies.map((singleMovie) => {
                const img_URL = baseLink + singleMovie.backdrop_path
                return (
                <div key={singleMovie.id} className="movie-item">
                    <Link to={`/${singleMovie.id}`}>
                        <div className="movie-img">
                            <img src={img_URL} alt="Movie-img" className = 'movie-image' />
                        </div>
                    </Link>
                    <div className="movie-title">
                    <Link to={`/${singleMovie.id}`}>
                        <h2>{singleMovie.title}</h2>
                    </Link>     
                    </div>
                </div>
        );
      })}
        </div>
    )
}

export default Carosel;