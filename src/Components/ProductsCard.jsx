import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { deleteProduct } from "../redux/actions/products"

import ProductCardCarousel from "./ProductCardCarousel"

export default (props) => {
    const { name, price, imgs, description, stock, productId } = props;
    const dispatch = useDispatch();

    const [deleting, setDeleting] = useState(false)

    const handleDelete = async () => {
        try {
            setDeleting(true);
            await dispatch(deleteProduct(productId));
            setDeleting(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="card mt-2">
            {/* <div className="card-img" style={{ height: '50%', overflowY: 'hidden' }}>
                <ProductCardCarousel images={imgs} />
            </div> */}
            <img src={imgs[0].path} alt={imgs[0].path} />
            <div className="card-body">
                <h4 className="card-title"> {name} </h4>
                <p className="card-text">
                    {description}
                </p>
                <p className="price text-success mt-1">
                    stock {stock}
                </p>
                <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success"><h5 className="mt-2">${price}</h5></div>
                    <Link to={`/edit-product/${productId}`} className="btn btn-success mt-2">
                        Edit
                    </Link>
                    <button type="button" disabled={deleting} onClick={handleDelete} className="btn btn-danger mt-2">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}