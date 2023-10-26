import {Grid, Paper} from "@mui/material";
import TitleBar from "../components/titleBar";
import MovieSearchBox from "../components/movieSearchBox";
import MovieMasonryGrid from "../components/movieList";
import React from "react";


export const Home = () => (
    <Grid container justifyContent="center" alignItems="center" style={{height: '100vh'}}>
        <Grid item xs={12}>
            <Paper>
                <TitleBar/>
                <MovieSearchBox/>
                <MovieMasonryGrid/>
            </Paper>
        </Grid>
    </Grid>
);

export default Home;