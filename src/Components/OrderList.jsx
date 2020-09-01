import React from 'react';
import LocationModel from './LocationModel';
import EditOrder from '../Components/EditOrder';
import CancelOrder from '../Components/CancelOrder';

export default (props) => {
    const { key, order_id, user_id, product_id, product_name, location} = props;


    return (
        <tr>
            <th scope="row">{key}</th>
            <td>{order_id}</td>
            <td>{user_id}</td>
            <td>{product_id}</td>
            <td>{product_name}</td>
            <td>
                <LocationModel location={location} />
            </td>
            <td><EditOrder /></td>
            <td> <CancelOrder /></td>
        </tr>
    );
}
