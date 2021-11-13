import React from 'react';

const Manage = (props) => {
    const { createdAt, _id, name, email, address, phone, key,info } = props.order;
    const { handleDelete } = props;
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{createdAt}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{info}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <button><i className="fas fa-edit"></i></button>
            <button onClick={() => handleDelete(_id)} className='ms-3'><i className="fas fa-trash-alt"></i></button>
        </tr>
    );
};

export default Manage;