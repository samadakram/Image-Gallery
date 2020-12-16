import React from 'react';


// Imported Compoents from Material Ui
import { Grid, Typography } from '@material-ui/core';

export const Gallery = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography>Image 1</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography>Image 2</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography>Image 3</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography>Image 4</Typography>
                </Grid>
            </Grid>
        </div>
    )
}