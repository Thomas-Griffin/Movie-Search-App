import React, {ChangeEvent, useEffect, useState} from 'react';
import {Grid, TextField} from '@mui/material';
import {useDispatch} from "react-redux";
import {setSearchString} from "../appState";


const MovieSearchBox: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const dispatch = useDispatch();

    const handleInputChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(changeEvent.target.value);
    };

    useEffect(() => {
        dispatch(setSearchString(searchTerm));
    }, [searchTerm, dispatch]);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} className={'center-container'} >
                <TextField
                    style={{margin: '50px', width: '50%', maxWidth: '600px', minWidth: '300px', }}
                    variant={"filled"}
                    label="Search movies..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </Grid>
        </Grid>
    );
};

export default MovieSearchBox;
