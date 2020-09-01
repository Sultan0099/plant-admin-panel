import React from 'react'

export default function Login() {
    return (
        <>
            <h1 className= "font-weight-bolder">Login Page</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label For="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label For="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" For="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mr-5">Sign In</button>
                <button type="submit" className="btn btn-primary">Create Account</button>

            </form>
        </>
    );
}