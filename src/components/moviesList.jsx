import React from 'react';
import { Link } from 'react-router-dom';

function MoviesList({ movies }) {
    console.log(movies)

    return (
        <div className="movieList"> {movies.map(movie =>
            (<Link to={'/movie/' + movie.id}>
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>
                    </div>
            </Link>)
        )}</div>
    )
}

export default MoviesList;