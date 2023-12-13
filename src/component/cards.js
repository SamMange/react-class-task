import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const YourComponent = () => {

    const [resData, setResData] = useState([])

    const getProductList = () => {
        fetch(`https://dummyjson.com/products`, {
            method: "get",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setResData(data.products);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getProductList();
    }, []);



  return (
    <Grid container spacing={1.5} sx={{padding: '15px' }}>
      {resData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345, border: '2px solid #333' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.thumbnail}
                alt={card.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {`(${card.brand})  ${card.title}`}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                {`Price : ${card.price}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default YourComponent;
