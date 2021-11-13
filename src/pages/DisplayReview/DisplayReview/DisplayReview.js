import { Rating } from '@mui/material';
import React from 'react';

const DisplayReview = (props) => {
    const { name, email, review,rate } = props.review;
    return (
        <div className="col-lg-4 col-12">
            <div className="p-3 border bg-light">
                <h2>{name}</h2>
                <hr />
                <p>Email:{email}</p>
                <p>{review}</p>
                <Rating name="read-only" value={rate} readOnly />
            </div>
        </div>
    );
};

export default DisplayReview;