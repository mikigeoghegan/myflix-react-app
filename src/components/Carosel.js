import { Link } from 'react-router-dom';

function Carosel({movies}){
    const baseLink = 'https://image.tmdb.org/t/p/original'
    return (
        <div className = 'carosel-container'>
            {movies.results.map((singleMovie) => {
                const img_URL = baseLink + singleMovie.backdrop_path
                return (
                <div key={singleMovie.id} className="single-movie">
                    <Link to={`/${singleMovie.id}`}>
                        <div className="movie-img-wrapper">
                            <img src={img_URL} alt="Movie-img" />
                        </div>
                    </Link>
                    <div className="movie-text">
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