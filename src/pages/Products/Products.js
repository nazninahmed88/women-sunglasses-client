import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = cart => {
        axios.post('http://localhost:5000/cart', cart)
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