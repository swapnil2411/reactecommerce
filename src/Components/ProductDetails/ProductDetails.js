import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
    const location = useLocation();
    const { id } = location && location.state;
    console.log(id);
    
    const baseUrl = "https://fakestoreapi.com/products/";
    const url = baseUrl + id;

    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        axios.get(url).then((response) => {
            setProductDetail(response.data);
            console.log(response.data);
            console.log(productDetail);
        });

    },{})
  return (
    <section className='product_details container'>
        <div className='sec_header'>
            <h2>Product Details</h2>
        </div>
        <div className='row product_detail_flex' key={productDetail.id}>
            <div className='col-md-6 product_detail_img'>
                <img src={productDetail.image} className="img-fluid" />
            </div>
            <div className='col-md-6 product_detail_content'>
                <h2 className='product_name'>{productDetail.title}</h2>
                <p className='product_category'>
                    <span>Category: </span>
                    <span>{productDetail.category}</span>
                </p>
                <p className='product_rating'>
                    <span>Rating: </span>
                    <span>{productDetail.rating && productDetail.rating.rate}</span>
                    <span>({productDetail.rating && productDetail.rating.count})</span>
                </p>
                <p className='product_desc'>{productDetail.description}</p>
                <button className='add_cart'>ADD TO CART</button>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails