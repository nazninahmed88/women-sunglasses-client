import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { name, description, img, _id, price } = props.product;
    const { handleDelete } = props;
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
                        price:${price}
                    </h5>
                    <Link>
                        <button onClick={() => handleDelete(_id)} className="button btn btn-danger">Delete</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;