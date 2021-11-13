import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                    window.location.reload(true);
                }

            })
    }
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => <ManageProduct handleDelete={handleDelete} key={product.id} product={product}></ManageProduct>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;