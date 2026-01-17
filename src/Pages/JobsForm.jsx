import React, { useState } from 'react';
import { useGlobalState } from '../Context/Context';
import JobsFormCom from '../Component/JobsFormCom/JobsFormCom';
import axios from 'axios';
import GetTransactionReciptImages from '../Component/GetTransactionReciptImage/GetTransactionReciptImage';
import Swal from 'sweetalert2';
import { Spin } from 'antd';
import GetTestReport from '../Component/GetTestReport/GetTestReport';
import JobsBanner1 from '../Component/JobsBanner1/JobsBanner1'

function JobsForm() {
    const { userId, testReportImage, transactionImageURL, fullName, email, phone, courseName, position, newQualification, cnic, setFullName, setEmail, setPhone, setCourseName, setPosition, setNewQualification, setCnic, city, setCity } = useGlobalState()
    const [loading, setLoading] = useState(false);
    console.log("testReportImage", testReportImage)
    const handle = () => {
        // Check if any field is empty
        setLoading(true)
        if (!fullName) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your full name.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!email) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your email.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!phone) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your phone number.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!courseName) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter the course name you enrolled in.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!position) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter the position you are applying for.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!newQualification) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your last qualification.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!cnic) {
            setLoading(false)


            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your CNIC number.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!city) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please enter your City.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if (!transactionImageURL) {
            setLoading(false)
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please upload the transaction receipt.",
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }

        const obj = { testReportImage, transactionImageURL, fullName, email, phone, courseName, position, newQualification, cnic, userID: userId, city };
        try {
            axios.post('https://main-server-zeta.vercel.app/addJobsApplications', obj)
                .then((res) => {
                    setLoading(false)
                    if (res.data.status === 200) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "FORM SUBMIT SUCCESS",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch((error) => {
                    setLoading(false)
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: error.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            setLoading(false)
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            })
        } finally {
            setLoading(false)
        }

        setFullName('');
        setEmail('');
        setPhone('');
        setCourseName('');
        setPosition('');
        setNewQualification('');
        setCnic('');
        setCity('');
    };

    return (
        <>
            <div className="container my-5 d-flex justify-content-center">
                <div className="w-100">
                    <h3 className='text-center mb-5'>Apply For Job</h3>
                    <p className='text-center'>Note: Those candidates who enrolled in our skilled course are eligible to apply for jobs.</p>
                    <JobsBanner1 />
                    <p className='text-center fw-semibold fs-2 mt-4'>Job Form</p>
                    <JobsFormCom />
                    <div className="row my-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <p className="fw-semibold text-capitalize">Please Share Course payment receipt:</p>
                            <GetTransactionReciptImages />
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <p className="fw-semibold text-capitalize">Please Share Test Report:</p>
                            <GetTestReport />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-md-6 col-sm-12">
                            <button className='btn btn-success py-3 fw-semibold w-100' onClick={handle}> {loading ? <Spin /> : "Apply For Job"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobsForm;
