import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

function NotFound() {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{height: '100vh'}}>
            <Grid item xs={12}>
                <Paper style={{backgroundColor: '#000'}}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h2">Page Not Found</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default NotFound;
