import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import {Masonry} from '@mui/lab';
import {Movie} from "../model/movie";
import {useSelector} from "react-redux";
import MoviePoster from './moviePoster';
import _ from 'lodash';


const MovieMasonryGrid = () => {
        const searchTerm = useSelector((state: any) => state.searchString).searchString;
        const movies = useRef([] as Movie[]);
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/movies/search?query=${searchTerm}`);
                if (response.ok) {
                    movies.current = await response.json() as Movie[];

                }
            } catch (error) {
            }
        };

        if (searchTerm === '') {
            movies.current = [];
        } else {
            _.debounce(fetchData, 1000)();
        }
        if (movies.current.length !== 0) {
            return (
                <Box sx={{width: '100vw'}}>
                    <Masonry columns={{xs: 1, sm: 2, lg: 3, xl: 4}} spacing={2}>
                        {movies.current.map((movie, index) => (
                            <div key={index}>
                                <MoviePoster {...movie}/>
                            </div>
                        ))}
                    </Masonry>
                </Box>
            );
        } else {
            return (<div></div>)
        }
    }
;
export default MovieMasonryGrid

