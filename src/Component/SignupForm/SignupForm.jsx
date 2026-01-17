import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';
import SignupBtn from '../SignupBtn/SignupBtn';

function SignupForm() {
    const { formData, setFormData,errors, setErrors } = useGlobalState();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

        setErrors({
            ...errors,
            [id]: ''
        });
    };
    return (
        <>
            <form>
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="fw-semibold">First Name</p>
                        <input
                            type="text"
                            style={{ fontSize: 14 }}
                            className="form-control p-3 fw-semibold"
                            placeholder="Please Enter Your First Name"
                            id="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {errors.fname && <p className="text-danger" id="fnameError">{errors.fname}</p>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="fw-semibold">Last Name</p>
                        <input
                            type="text"
                            style={{ fontSize: 14 }}
                            className="form-control p-3 fw-semibold"
                            placeholder="Please Enter Your Last Name"
                            id="lname"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {errors.lname && <p className="text-danger" id="lnameError">{errors.lname}</p>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="fw-semibold">Email Address</p>
                        <input
                            type="email"
                            style={{ fontSize: 14 }}
                            className="form-control p-3 fw-semibold"
                            placeholder="Please Enter Your Valid Email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-danger" id="emailError">{errors.email}</p>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="fw-semibold">Create Password</p>
                        <input
                            type="password"
                            style={{ fontSize: 14 }}
                            className="form-control p-3 fw-semibold"
                            placeholder="Please Enter strong Password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-danger" id="passError">{errors.password}</p>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <p className="fw-semibold">Phone No</p>
                        <input
                            type="number"
                            style={{ fontSize: 14 }}
                            className="form-control p-3 fw-semibold"
                            placeholder="Please Enter Your Valid Phone number"
                            id="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                        />
                        {errors.phoneNo && <p className="text-danger" id="phoneError">{errors.phoneNo}</p>}
                    </div>
                </div>
                <SignupBtn />
                <div className="row text-center my-3">
                    <p className="fw-semibold">
                        I have already an account! <Link className="fw-semibold" to={'/login'}>LOGIN</Link>
                    </p>
                </div>
            </form>
        </>
    );
}

export default SignupForm;
