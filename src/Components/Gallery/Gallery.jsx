import React, { useEffect, useState } from 'react';
import style from './Gallery.module.css';


// Imported Compoents from Material Ui
import { Grid, Button } from '@material-ui/core';

export const Gallery = () => {

    const [images, setImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState(10); // For Load more button

    // Load more button function
    const showMoreImages = () => {
        setVisibleImages(prevValue => prevValue + 10);
    }

    // geting data from API
    useEffect(() => {
        const ImageGallery = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();

            setImages(data);
        }
        ImageGallery();
    }, []);

    if (!images) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <Grid container>

                {images.slice(0, visibleImages).map((image, ind) => {
                    return (
                        <Grid key={ind} className={style.imageGrid} item xs={12} md={6} lg={4}>
                            <img src={image.thumbnailUrl} alt={image} />
                        </Grid>
                    )
                })}
            </Grid>
            <div className={style.container}>
                <Button className={style.button} variant="contained" color="primary" onClick={showMoreImages}>Load More</Button>
            </div>
        </div>
    )
}