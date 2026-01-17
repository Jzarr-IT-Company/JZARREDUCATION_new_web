import React, { useState } from 'react';
import GetTransactionReciptImages from '../GetTransactionReciptImage/GetTransactionReciptImage';
import { useGlobalState } from '../../Context/Context';

function JobsFormCom() {
    const { fullName, setFullName,
        email, setEmail,
        phone, setPhone,
        courseName, setCourseName,
        position, setPosition,
        newQualification, setNewQualification,
        cnic, setCnic, city, setCity } = useGlobalState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            fullName,
            email,
            phone,
            courseName,
            position,
            newQualification,
            cnic
        };
        console.log('Form Data:', formData);
    };

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">Full Name</p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput1"
                            placeholder="Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="floatingInput1">Name</label>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">Email</p>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput2"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput2">Email</label>
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
                            id="floatingInput3"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="floatingInput3">Phone</label>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">Course name who enrolled</p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput4"
                            placeholder="Course name"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                        <label htmlFor="floatingInput4">Course name</label>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">Position For Apply</p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput5"
                            placeholder="Position For Apply"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                        <label htmlFor="floatingInput5">Position For Apply</label>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">Last qualification</p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput6"
                            placeholder="Last qualification"
                            value={newQualification}
                            onChange={(e) => setNewQualification(e.target.value)}
                        />
                        <label htmlFor="floatingInput6">Last qualification</label>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">CNIC</p>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="floatingInput7"
                            placeholder="Enter CNIC Number"
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
                        />
                        <label htmlFor="floatingInput7">Enter CNIC Number</label>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold">City</p>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput7"
                            placeholder="Enter City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label htmlFor="floatingInput7">Enter City</label>
                    </div>
                </div>
                {/* <div className="col-lg-5 col-md-6 col-sm-12">
                    <p className="fw-semibold text-capitalize">Please Share Course payment receipt:</p>
                    <GetTransactionReciptImages />
                </div> */}
            </div>
            <div className="row">
            </div>
        </div>
    );
}

export default JobsFormCom;
