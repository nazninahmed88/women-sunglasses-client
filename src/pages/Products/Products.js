import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://intense-plateau-07914.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = cart => {
        axios.post('https://intense-plateau-07914.herokuapp.com/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }
    return (
        <div>
            <Header></Header>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;