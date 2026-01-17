import React from 'react'
import { Link } from 'react-router-dom'
import "./form.css"
import { useGlobalState } from '../Context/Context'
import LoginButton from '../Component/LoginButton/LoginButton'
function Login() {
    const { loginEmail, setLoginEmail, loginPass, setLoginPass, lloading } = useGlobalState()
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="form-container">
                    <h5 className="mb-4 text-center">Login</h5>
                    <div className="row mb-3">
                        <div className="col-12">
                            <p className="fw-semibold">Email Address</p>
                            <input
                                type="email"
                                className="form-control p-3 fw-semibold"
                                placeholder="Please Enter Your Valid Email"
                                id="email"
                                value={loginEmail}
                                onChange={(e) => { setLoginEmail(e.target.value) }}
                            />
                            <p className="text-danger" id="emailError" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <p className="fw-semibold">Password</p>
                            <input
                                type="password"
                                className="form-control p-3 fw-semibold"
                                placeholder="Please Enter Your Valid Password"
                                id="password"
                                value={loginPass}
                                onChange={(e) => { setLoginPass(e.target.value) }}
                            />
                            <p className="text-danger" id="passError" />
                        </div>
                    </div>
                    <div className="row">
                        <LoginButton />
                    </div>
                    <div className="row my-3 text-center">
                        <p className="fw-semibold">
                            Don't have any account?<Link to={'/signup'} className="fw-semibold"> Create Account </Link>
                        </p>
                    </div>
                </div>
                {/* <LoginButton/> */}

            </div>
        </>
    )
}

export default Login