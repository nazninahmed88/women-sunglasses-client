import React from 'react';
import { Link } from 'react-router-dom';

const Purchase = (props) => {
    const { name, description, img, _id, price } = props.purchase;
    const { handleDelete } = props;
    return (
        <div className="col shadow p-3 mb-5 bg-body rounded">
            <div className="row">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p className="card-text">{description}</p>
                        <h3>
                            price:${price}

                        </h3>

                        <Link to='/orders'>
                            <button className="button btn btn-warning mt-3">Place Order</button>
                        </Link>
                        <br />
                        <button onClick={() => handleDelete(_id)} className='button btn btn-danger mt-3'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;