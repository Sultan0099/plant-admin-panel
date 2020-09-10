import React, { useState, useCallback } from 'react';

import { uploadPics, createProducts } from "../redux/actions/products";
import { useDispatch } from 'react-redux';

function Uploads() {

  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [images, setImages] = useState([]);
  const [imgLoading, setImgLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [msg, showMsg] = useState(false);



  const fileUpLoadHandler = async (e) => {
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
  }

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

    if (values.name === "" || values.description === "" || values.stock === "" || values.price === "") {
      setErrors([
        ...errors,
        "please fill all fields"
      ])
      setSubmitting(false);

      return
    }

    await dispatch(createProducts({ ...values, productPic: imagesIds, keyword: values.name }));
    setSubmitting(false);
    showMsg(true);
    setValues({
      name: '',
      description: '',
      price: '',
      stock: ''
    })
  }

  return (
    <div className='uploads'>

      <h1 className="font-weight-bolder">Upload Products</h1>
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
      <div className="form-group col-md-6">
        <label htmlFor="category" className="font-weight-bold">Category</label>
        <select className="form-control" id="category" name="category" onChange={handleChange} value={values.category}>
          <option value="seeds">seeds</option>
          <option value="sprayers">sprayers</option>
          <option value="fertilizers">fertilizers</option>
          <option value="plants">plants</option>
          <option value="pots">pots</option>
          <option value="flowers">flowers</option>
        </select>
      </div>
      <br /><br />
      <button onClick={handleSubmit} disabled={submitting} type="button" className="btn btn-success">Create Product</button>
      <hr className="" />
      {errors.length > 0 && errors.map(err => (
        <div key={err} className="alert alert-danger" role="alert">
          {err}
        </div>
      ))
      }
      {msg && <div className="alert alert-success" role="alert">
        product uploaded successfully
      </div>}
    </div>
  );
}

export default Uploads;