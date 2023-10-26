import React from 'react';
import {Movie} from "../model/movie";
import '../App.css';
import {Button, LinearProgress} from "@mui/material";
import {Link} from "react-router-dom";

const MoviePoster = (movie: Movie) => {

    return (
        <div className={`movie`}>
            <div className={`hover-text`}>
                <h2>{movie.title}</h2>
                <p>{movie.synopsis}</p>
                <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
                <p>Genres: {movie.genres.join(', ')}</p>
                <p>Rating: {movie.rating} ({movie.ratingCount} votes) <LinearProgress variant="determinate"
                                                                                      value={movie.rating * 10}/></p>
                <p>Adult: {movie.isAdultRated ? 'Yes' : 'No'}</p>
                <Link to={`movie?id=${movie.id}`}><Button>View More</Button></Link>
            </div>
            <img
                src={`${movie.posterURL}`}
                alt={movie.title}
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%',
                    height: '300px',
                    maxHeight: '300px',
                    minWidth: '100%',
                }}
                onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500x500?text=No+Poster+Available'
                }}
            />
        </div>
    );
}

export default MoviePoster;