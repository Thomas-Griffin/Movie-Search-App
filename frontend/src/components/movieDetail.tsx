import React from "react";
import {Button, Card, Grid, Paper} from "@mui/material";
import TitleBar from "./titleBar";
import {Link} from "react-router-dom";

let movieDetails: any;
const MovieDetail = () => {
    let movie = {id: ''}
    const urlParams = new URLSearchParams(window.location.search);
    movie.id = urlParams.get('id') ?? '';
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/movies/${movie.id}`);
            if (response.ok) {
                movieDetails = await response.json();
            }
        } catch (error) {
            console.log(error);
        }
    };
    if (movie.id !== '') {
        fetchData().catch((error) => console.log(error));
    }

    console.log(movie.id)
    console.log(movieDetails)

    if (movieDetails !== undefined) {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{height: '100vh'}}>
                <Grid item xs={12}>
                    <Paper>
                        <TitleBar/>
                        <div className={'center-container'} style={{
                            width: '100vw',
                            height: '100vh',
                            maxHeight: '100%',
                            minWidth: '100%',
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <Card style={{
                                background: 'rgba(0, 0, 0, 0.5)',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}>
                                <h2>{movieDetails?.title}</h2>
                                <p>{movieDetails?.tagline}</p>
                                <p>{movieDetails?.overview}</p>
                                <p>Runtime: {movieDetails?.runtime} minutes</p>
                                <p>Revenue: ${movieDetails?.revenue}</p>
                                <p>Release Date: {new Date(movieDetails?.release_date).toDateString()}</p>
                                <p>Genres: {movieDetails?.genres.map((genre: any) => genre.name).join(', ')}</p>
                                <p>Rating: {movieDetails?.vote_average} ({movieDetails?.vote_count} votes)</p>
                                <p>Adult: {movieDetails?.adult ? 'Yes' : 'No'}</p>
                                <p>Popularity Score: {movieDetails?.popularity}</p>
                                <Link to={'/'}>
                                    <Button>Back</Button>
                                </Link>
                            </Card>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{height: '100vh'}}>
                <Grid item xs={12}>
                    <Paper>
                        <TitleBar/>
                        <div className={'center-container'}>
                            <Link to={'/'}>
                                <Button>Back</Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default MovieDetail;