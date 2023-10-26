import React from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{height: '100vh'}}>
            <Grid item xs={12}>
                <Paper style={{backgroundColor: '#000'}}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h2">Page Not Found</Typography>
                            <div className={'center-container'}>
                                <Link to={'/'}><Button variant={'contained'}>Homepage</Button></Link>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default NotFound;
