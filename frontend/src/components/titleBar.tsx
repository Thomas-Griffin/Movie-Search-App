import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Link} from "react-router-dom";

function TitleBar() {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <Link to="/" style={{color: '#FFF', textDecoration: 'none'}}>
                    <Typography variant="h2">Movie Search App</Typography>
                </Link>
            </Grid>
        </Grid>
    );
}

export default TitleBar;
