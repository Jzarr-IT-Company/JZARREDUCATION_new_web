import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useGlobalState } from '../Context/Context';
import GetTransactionReciptImages from '../Component/GetTransactionReciptImage/GetTransactionReciptImage';
import TestBanner1 from '../Component/TestBanner1/TestBanner1';

function Test() {
    const { userId, transactionImageURL } = useGlobalState()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        courseName: '',
        qualification: '',
        city: ''
    });
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = () => {

        if (!formData.fullName) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your full name.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!formData.courseName) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter the course name you enrolled in.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!formData.phone) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your phone number.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!formData.qualification) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your last qualification.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!formData.city) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your City.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!formData.email) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "8Please enter your email.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        console.log('Form Data:', formData);
        axios.post('https://main-server-zeta.vercel.app/testForm', { transactionImageURL, formData, userId })
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SUCCESS",
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch((error) => {
                console.log(error)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            courseName: '',
            qualification: '',
            city: ''
        });
    };

    return (
        <>
            <TestBanner1 />
            <div className="container my-5 d-flex justify-content-center">
                <div className="w-100">
                    <h3 className='text-center mb-5'>Apply For Test</h3>
                    <p className='text-center'>Note:Only those candidates who are enrolled in our skilled course will be allowed to take the test</p>
                    <div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">Full Name</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fullName">Name</label>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">Email</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">Phone</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="phone">Phone</label>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">Course name who enrolled</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="courseName"
                                        placeholder="Course name"
                                        value={formData.courseName}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="courseName">Course name</label>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">Last qualification</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qualification"
                                        placeholder="Last qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="qualification">Last qualification</label>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <p className="fw-semibold">City</p>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        placeholder="Enter City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="city">Enter City</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <p className="fw-semibold text-capitalize">Please Share Course payment receipt:</p>
                            <GetTransactionReciptImages />
                        </div>
                    </div>
                    <div className="row my-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <button className='btn btn-success py-3 fw-semibold w-100' onClick={handleSubmit}>Apply For Test</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;
