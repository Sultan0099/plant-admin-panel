import axios from "axios";
import { SET_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT } from "../_actionsTypes";


export const getUserProducts = () => async dispatch => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:2019/products/me", {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({ type: SET_PRODUCTS, payload: res.data.products });

        return res.data.products;

    } catch (err) {
        console.log(err);
    }

}

export const uploadPics = async (imagesData) => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.post('http://localhost:2019/products/upload-img', imagesData, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        return { err: false, res };
    } catch (err) {
        console.log({ err })
        return { err: true, error: err };
    }
};

export const createProducts = (productsData) => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.post('http://localhost:2019/products/create', productsData, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        console.log(res);
        await dispatch({ type: CREATE_PRODUCT, payload: res.data.product })
    } catch (err) {
        console.log(err)
    }
}

export const singleProduct = async (productId) => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:2019/products/single-product/${productId}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        return { err: false, res }


    } catch (error) {
        console.log(error)
        return { err: true, error }
    }
}


export const editProduct = (productId, productData) => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.patch(`http://localhost:2019/products/edit`, { productId, product: productData }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        console.log(res);
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct = (productId) => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.delete(`http://localhost:2019/products/remove/${productId}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        console.log(res);
        dispatch({ type: DELETE_PRODUCT, payload: res.data.productId })
    } catch (error) {
        console.log(error)
    }
}