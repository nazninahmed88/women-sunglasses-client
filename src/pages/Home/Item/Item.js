import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { name, description, img, _id, price } = props.car;
    const { handleCart } = props;
    return (

        <Col className='colCart'>
            <Card className='card-cart mx-auto shadow p-3 mb-5 bg-body rounded'>
                <div className='mx-auto'>
                    <Card.Img className='image' variant="top" src={img} />
                </div>
                <Card.Body className='text-center text-black'>
                    <h3>{name}</h3>
                    <hr />
                    <small>{description}</small>
                    <h5>
                        price:{price}$
                    </h5>
                    <Link to='/purchase'>
                        <button onClick={() => handleCart(props.car)} className="button btn btn-warning">Order Now</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Item;