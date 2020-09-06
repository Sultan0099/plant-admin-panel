import axios from 'axios';

import { SET_USER } from "../_actionsTypes";

export const register = (userData) => async dispatch => {
  try {
    const res = await axios.post(`http://localhost:2019/user/signup`, { ...userData });


    localStorage.setItem("token", res.data.token)

    await dispatch({ type: SET_USER, payload: { user: res.data.user, token: res.data.token } })

    return { err: false }


  } catch (err) {
    console.log({ err });
    if (err) {
      console.log(err.response.data.message);

      return { err: true, msg: err.response.data.message };
    }

  }
}

export const login = (userData) => async dispatch => {
  try {
    const res = await axios.post(`http://localhost:2019/user/login`, { ...userData });


    localStorage.setItem("token", res.data.token)

    await dispatch({ type: SET_USER, payload: { user: res.data.user, token: res.data.token } })

    return { err: false }


  } catch (err) {
    console.log({ err });
    if (err) {
      console.log(err.response.data.message);

      return { err: true, msg: err.response.data.message };
    }

  }
}

export const getUserWithToken = () => async dispatch => {
  try {
    const token = localStorage.getItem("token")
    const res = await axios.get(`http://localhost:2019/user/get`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });


    localStorage.setItem("token", res.data.token)

    await dispatch({ type: SET_USER, payload: { user: res.data.user, token: res.data.token } })

    return { err: false }


  } catch (err) {
    console.log({ err });
    if (err) {
      console.log(err.response.data.message);

      return { err: true, msg: err.response.data.message };
    }

  }
}