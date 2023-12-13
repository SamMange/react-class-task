import React, { useContext } from 'react';
import { DataContext } from './product';
import StandardImageList from './thumbnail'
const ProductDetails = () => {
  const productsIdData = useContext(DataContext);
  return (
    <div style={{alignContent : 'center', color: 'white'}}>
        <StandardImageList />
        <h3>Selected product Category is : {productsIdData.category}</h3>
        <h3>Selected Brand Name is : {productsIdData.brand}</h3>
        <h3>Selected Product Stock available is : {productsIdData.stock}</h3>
        <h3>Selected Product Description is : {productsIdData.description}</h3>
    </div>
  )
}

export default ProductDetails;