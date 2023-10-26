import React from 'react';
import {useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import {Masonry} from '@mui/lab';
import {Movie} from "../model/movie";
import {useSelector} from "react-redux";
import MoviePoster from './moviePoster';


const MovieMasonryGrid = () => {
    const searchTerm = useSelector((state: any) => state.searchString).searchString;
    const movies = useRef([] as Movie[]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/movies/search?query=${searchTerm}`);
                if (response.ok) {
                    movies.current = await response.json() as Movie[];

                }
            } catch (error) {
            }
        };
        if (searchTerm !== '') {
            fetchData();
        } else {
            movies.current = [];
        }
    }, [searchTerm]);


    return (
        <Box sx={{width: '100vw', marginTop: '50px'}}>
            <Masonry columns={{xs: 1, sm: 2, lg: 3, xl: 4}} spacing={2}>
                {movies.current.map((movie, index) => (
                    <div key={index}>
                        <MoviePoster {...movie}/>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
};
export default MovieMasonryGrid

