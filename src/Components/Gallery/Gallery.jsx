import React, { useEffect, useState } from 'react';
import style from './Gallery.module.css';


// Imported Compoents from Material Ui
import { Grid } from '@material-ui/core';

export const Gallery = () => {

    const [images, setImages] = useState([]);

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

                {images.slice(0, 10).map((image, ind) => {
                    return (
                        <Grid  className={style.imageGrid} item xs={12} md={6} lg={4}>
                            <img key={ind} src={image.thumbnailUrl} alt={image} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}