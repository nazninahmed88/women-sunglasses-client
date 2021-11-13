import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Purchase from '../Purchase/Purchase';

const Purchases = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/cart'
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [])
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/cart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully deleted');
                    const remaining = purchases.filter(service => service._id !== id);
                    setPurchases(remaining);
                }

            })
    }
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-1 g-4">
                {
                    purchases.map(purchase => <Purchase key={purchase.id} purchase={purchase} handleDelete={handleDelete}></Purchase>)
                }
            </div>
        </div>
    );
};

export default Purchases;