import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ProductDetails from "./productDetails"

export const DataContext = React.createContext();

export const ProductList = () => {

    const [resData, setResData] = useState([])
    const [productsIdData, setProductsIdData] = useState([])

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

    const getProductById = (index) => {
        let url = `https://dummyjson.com/products/${index}`
        fetch(url, {
            method: "get",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProductsIdData(data);
            })
            .catch((error) => console.log(error));
    };

    const handleClick = (index) => {
        getProductById(index);
    }

    const handlePlaceOrder = () => {
        <Alert severity="success">{`${productsIdData.title} is confirmed`}</Alert>
    }

    useEffect(() => {
        getProductList();
    }, []);
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '100vh',
            }}>
                <TableContainer component={Paper} sx={{ width: '50%', maxHeight: '100%' }}>
                    <Table sx={{ minWidth: 100 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Sr. No.</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Description</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align='center'>
                                        <Button onClick={() => handleClick(index + 1)}>{index + 1}</Button>
                                    </TableCell>
                                    <TableCell align="center">{row.title}</TableCell>
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ background: "grey", width: '50%', height: '100%', alignItems: 'center' }}>
                    {productsIdData.id && <DataContext.Provider value={productsIdData}>
                        <ProductDetails value={productsIdData} />
                        <Button
                            variant="contained"
                            onClick={handlePlaceOrder}>
                            Place Order
                        </Button>
                    </DataContext.Provider>}
                </div>
            </div>
        </>
    )
}
