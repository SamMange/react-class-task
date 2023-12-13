import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import CustomizedDialogs from './customDislogBox'

const ZoomableCardMedia = styled(CardMedia)(({ theme }) => ({
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
        transform: 'scale(0.9)',
    },
}));

const YourComponent = () => {

    const [resData, setResData] = useState([])
    const [isOrder, setIsOrder] = useState(false)
    const [popData, setPopData] = useState({})

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

    const handlePlaceOrder = (title) => {
        setPopData({
            despcription: (<Typography gutterBottom>
                Thanks for ordering the product <strong>{title}</strong>. Please visit again.
            </Typography>),
            title: (<strong style={{color:'#663300'}}>{title}</strong>),
            isOpen: true
        })
        setIsOrder(true)
    }

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <Grid container spacing={1.5} sx={{ padding: '15px' }}>
            {resData.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345, border: '2px solid #333' }}>
                        <CardActionArea>
                            <ZoomableCardMedia
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
                                <Button variant='contained' onClick={() => handlePlaceOrder(card.title)}>
                                    Place Order
                                </Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            {isOrder ? (<CustomizedDialogs props={popData} />) : ("")}
        </Grid>
    );
};

export default YourComponent;
