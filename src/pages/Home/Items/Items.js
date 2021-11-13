import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/cars';
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    const handleCart = cart => {
        axios.post('http://localhost:5000/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }
    return (
        <div>
            <h1 className='text-center'>Products</h1>
            <hr />
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map(car => <Item key={car.id} car={car} handleCart={handleCart}></Item>)
                }
            </Row>
        </div>
    );
};

export default Items;