import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MyLink from "../Components/MyLink";
import { login } from "../redux/actions/auth";

export default function Login() {

    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
    const history = useHistory();


    const emailValidator = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;



    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(login(userData));
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
            <h1 className="font-weight-bolder">Login Page</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"
                            name="email"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"
                            type="password"
                            name="password"
                            onChange={handleChange}

                        />
                    </div>
                </div>


                {
                    Object.keys(errors).length > 0 && (
                        Object.keys(errors).map((d, i) => (
                            <p key={i} style={{ color: "red" }}>{errors[d]}</p>
                        ))
                    )
                }

                <button type="button" onClick={handleSubmit} className="btn btn-primary mr-5">Sign In</button>
                <MyLink to="/signup">
                    <button className="btn btn-primary">
                        Create Account
                    </button>
                </MyLink>
            </form>
        </>
    );
}
