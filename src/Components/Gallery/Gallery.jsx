import React, { useEffect, useState } from 'react';
import style from './Gallery.module.css';


// Imported Compoents from Material Ui
import { Grid, Button } from '@material-ui/core';

export const Gallery = () => {

    const [images, setImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState(10);

    const showMoreImages = () => {
        setVisibleImages(prevValue => prevValue + 10);
    }

    useEffect(() => {
        const ImageGallery = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();

            console.log("Data =>", data);
            setImages(data);
        }
        ImageGallery();
    }, []);

    return (
        <div>
            <Grid container>

                {images.slice(0, visibleImages).map((image, ind) => {
                    return (
                        <Grid  className={style.imageGrid} item xs={12} md={6} lg={4}>
                            <img key={ind} src={image.thumbnailUrl} alt={image} />
                        </Grid>
                    )
                })}
            </Grid>
            <Button variant="contained" color="primary" onClick={showMoreImages}>Load More</Button>
        </div>
    )
}