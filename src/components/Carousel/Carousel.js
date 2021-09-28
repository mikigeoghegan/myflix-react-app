import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import './Carousel.scss'


function Carousel({movies, title}){
    const [scrollAmount, setScrollAmount] = useState(0)

    const moveLeft = (e) => {
        let carousel = e.target.parentNode.parentNode.childNodes[1]
        if (scrollAmount < 0){
            setScrollAmount(0)
        }
        setScrollAmount(scrollAmount - 400)
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behaviour: 'smooth'
        })
    }

    const moveRight = (e) => {
        let carousel = e.target.parentNode.parentNode.childNodes[1]
        if (scrollAmount > carousel.scrollWidth){
            setScrollAmount(carousel.scrollWidth)
        }
        setScrollAmount(scrollAmount + 400)
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behaviour: 'smooth'
        })
    }

    const baseLink = 'https://image.tmdb.org/t/p/original'
    return (
        <div>
            <h4 className = 'center'>{title}</h4>
            <div className = 'full-page'>

                <div className = 'arrow-container'>
                    <i className="fas fa-angle-left" onClick = {moveLeft}></i>
                </div>
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
                            <p>{singleMovie.title}</p>
                        </Link>     
                    </div>
                </div>
                );
            })}
            </div>
            <div className = 'arrow-container'>
            <i className="fas fa-angle-right" onClick = {moveRight}></i>
            </div>
        </div>
    </div>
    )
}

export default Carousel;