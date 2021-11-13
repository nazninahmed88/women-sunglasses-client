import { Rating } from '@mui/material';
import React from 'react';

const Rate = (props) => {
    console.log(props.value);
    return (
        <div>
            <Rating name="read-only" value={props.value} readOnly />
        </div>
    );
};

export default Rate;