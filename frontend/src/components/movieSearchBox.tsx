import React, {useState} from 'react';
import {Autocomplete, Grid, TextField} from '@mui/material';
import {useDispatch} from "react-redux";
import {setSearchString} from "../appState";
import {Movie} from "../model/movie";


const MovieSearchBox: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [movieTitles, setMovieTitles] = useState<string[]>([]);

    const dispatch = useDispatch();

    const handleInputChange =  (value: string) => {
        dispatch(setSearchString(value))
        setSearchTerm(value);
        fetchMovieTitles().catch((error) => console.log(error));
    };

    const fetchMovieTitles = async () => {
        if (searchTerm === '') {
            setMovieTitles([]);
            return;
        }
        const results = await fetch(`${process.env.REACT_APP_API_URL ?? 'http://localhost:8080'}/movies/search?query=${searchTerm}`)
        const resultsJson = await results.json();
        const movies = resultsJson.map((movie: Movie) => movie.title)
        const moviesSet: Set<string> = new Set(movies);
        setMovieTitles(Array.from(moviesSet));
    }


    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} className={'center-container'}>
                <Autocomplete freeSolo={true} renderInput={
                    (params) => <TextField
                        {...params}
                        style={{margin: '50px', width: '50%', maxWidth: '600px', minWidth: '300px',}}
                        variant={"filled"}
                        label="Search movies..."
                        value={searchTerm}
                    />} options={movieTitles}
                              onInputChange={(event, value) => handleInputChange(value)}
                />
            </Grid>
        </Grid>
    );
};

export default MovieSearchBox;
