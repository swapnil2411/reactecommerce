import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import LinesEllipsis from 'react-lines-ellipsis'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const navigate = useNavigate();
    const baseUrl = "https://fakestoreapi.com";
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get(baseUrl + "/products").then((response) => {
            setProducts(response.data);
            console.log(products);
        });

    }, [])

    const showProductDetails = (id) => {
        console.log( id);
        const dataObject = {
            id : id && id,
        };

        navigate(`/ProductDetails/`+ id, {
            state: dataObject,
        })
    }
    

    return (
        <section className='product_section'>
           <div className='sec_header'>
                <h2>Product List</h2>
           </div>
            {/* navigate(`/${item['id']}` */}
            <div className='product_list'>
                <div className='row m-0'>
                    {
                        products.map((item) => {
                            return(
                                <div className='col-md-3' key={item['id']}>
                                    <div className='product_box'>
                                        <div className='product_img' onClick={() => showProductDetails(item.id)}>
                                            <img src={item["image"]} className='img-fluid' alt={item["title"]} />
                                        </div>
                                        <div className='product_content'>
                                            <LinesEllipsis
                                                text={item["title"]}
                                                className='prod_name'
                                                maxLine='2'
                                                ellipsis='...'
                                                trimRight
                                            />
                                            <LinesEllipsis
                                                text={item["description"]}
                                                className='prod_desc'
                                                maxLine='2'
                                                ellipsis='...'
                                                trimRight
                                            />
                                            {/* <p>{item["description"]}</p> */}
                                            <h2 className='prod_price'>${item["price"]}</h2>
                                            <button className='add_cart'>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
        
    )
}

export default Products