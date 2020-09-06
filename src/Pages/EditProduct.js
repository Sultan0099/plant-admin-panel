import React, { useState, useCallback, useEffect } from 'react';

import { uploadPics, editProduct, singleProduct } from "../redux/actions/products";
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';


function EditProducts() {

    const dispatch = useDispatch();
    const { productId } = useParams();

    const [errors, setErrors] = useState([]);
    const [images, setImages] = useState([]);
    const [imgLoading, setImgLoading] = useState(false);
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        stock: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [msg, showMsg] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async () => {
        try {
            const data = await singleProduct(productId);

            if (data.err) {
                setLoading(false)
            } else {
                const { name, description, stock, price, productPic } = data.res.data.product;

                setValues({
                    ...values,
                    name, description, stock, price
                })
                setImages(productPic)
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])


    const fileUpLoadHandler = useCallback(async (e) => {
        try {
            e.stopPropagation();
            e.preventDefault();
            if (
                e.currentTarget &&
                e.currentTarget.files &&
                e.currentTarget.files.length > 0
            ) {
                setImgLoading(true);
                const files = e.currentTarget.files;
                let formData = new FormData();
                for (let file of files) {
                    formData.append("product-img", file);
                }
                const data = await uploadPics(formData);

                if (data.err) {
                    setErrors([...errors, data.error]);
                    setImgLoading(false)
                    return
                } else {
                    setImages(data.res.data.images);
                    setImgLoading(false);

                }
            }
        } catch (error) {
            console.log(error)
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        showMsg(false);
        setValues({
            ...values,
            [name]: value.toLowerCase()
        })
    }

    const handleSubmit = async () => {
        setSubmitting(true);
        setErrors([]);
        const imagesIds = images.map(image => image._id);

        if (imagesIds.length === 0) {
            setErrors([
                ...errors,
                "please select product pics"
            ])
            setSubmitting(false);

            return
        }

        if (values.name == "" || values.description == "", values.stock == "", values.price == "") {
            setErrors([
                ...errors,
                "please fill all fields"
            ])
            setSubmitting(false);

            return
        }

        await dispatch(editProduct(productId, { ...values, productPic: imagesIds }));
        setSubmitting(false);
        showMsg(true);
    }

    if (loading) return <p>we are fetching your product please wait....</p>

    return (
        <div className='uploads'>

            <h1 className="font-weight-bolder">Edit Product</h1>
            <br /><br />
            <input type="file" className="" multiple accept="image/*" onChange={fileUpLoadHandler} />
            {imgLoading && <p> images are uploading please wait ... </p>}

            <div className="mt-2">
                {images.map(img => (
                    <div style={{ width: 400 }} className="d-inline ml-1" key={img._id}>
                        <img src={img.path} alt={img.originalName} />
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
            <div className="form-group col-md-6">
                <label htmlFor="productName" className="font-weight-bold">Product Name</label>
                <input type="text" className="form-control" id="productName" value={values.name} name="name" onChange={handleChange} />
            </div>
            <br />
            <div className="form-group col-md-6">
                <label htmlFor="description" className="font-weight-bold">Description</label>
                <textarea className="form-control" name="description" id="description" rows="3" value={values.description} onChange={handleChange}></textarea>
            </div>
            <br />
            <div className="form-group col-md-6">
                <label htmlFor="price" className="font-weight-bold">Price</label>
                <input type="number" className="form-control " id="price" name="price" value={values.price} onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="stock" className="font-weight-bold">Stock</label>
                <input type="number" name="stock" className="form-control " id="stock" name="stock" value={values.stock} onChange={handleChange} />
            </div>
            <br /><br />
            <button onClick={handleSubmit} disabled={submitting} type="button" className="btn btn-success">
                Update Product
            </button>
            <hr className="" />
            {errors.length > 0 && errors.map(err => (
                <div className="alert alert-danger" role="alert">
                    {err}
                </div>
            ))
            }
            {msg && <div className="alert alert-success" role="alert">
                product updated successfully
            </div>}
        </div>
    );
}

export default EditProducts;