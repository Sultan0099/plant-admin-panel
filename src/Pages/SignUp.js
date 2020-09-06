import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from "../redux/actions/auth";

import MyLink from '../Components/MyLink';

export default function SuginUp() {
    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
    const history = useHistory();

    const emailValidator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;



    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(register(userData));
        console.log(res)
        if (res.err) {
            setErrors({ err: res.msg })
        } else {
            history.push("/")
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value.toLowerCase()
        })
    }
    return (
        <>
            <h1 className="font-weight-bolder">SignUp page</h1>

            <form>
                <div className="form-row ">
                    <div className="form-group col-md-6 ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6 ">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            name="password"
                            onChange={handleChange} />
                    </div>
                </div>
                {
                    Object.keys(errors).length > 0 && (
                        Object.keys(errors).map((d, i) => (
                            <p key={i} style={{ color: "red" }}>{errors[d]}</p>
                        ))
                    )
                }
                <button type="button" className="btn btn-primary" style={{ margin: '5px' }}
                    onClick={handleSubmit}
                >Sign Up</button>
                <MyLink to="/login">
                    <button type="button" className="btn btn-primary">
                        Login In
                    </button>
                </MyLink>

            </form>
        </>
    );
}