import React, { useState } from 'react'
import axios from 'axios';
import { Spin } from 'antd';
import Swal from 'sweetalert2';
import { useGlobalState } from '../../Context/Context'

function ChangePassword() {
    const { userId, setUpdateState } = useGlobalState();
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState('')
    const handle = async () => {
        if (name) {
            try {
                setLoader(true)
                axios.post(`https://main-server-zeta.vercel.app/changePassword`, { id: userId, password: name })
                    .then((response) => {
                        if (response.status === 200) {
                            setLoader(false)
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Update Your Phone Number",
                                showConfirmButton: false,
                                timer: 1500
                            }).then((result) => {
                                if (result) {
                                    setUpdateState(true)
                                }
                            })
                        }
                    })
            } catch (error) {
                setLoader(false)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } else {
            setLoader(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Empty Field!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <p className=' my-3 fw-semibold text-capitalize'>Change Password</p>
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between" style={{ gap: "0px 20px" }}>
                        <input type="password" className='form-control' placeholder="***********" onChange={(e) => { setName(e.target.value) }} />
                        <button className='btn btn-success w-50 text-capitalize' onClick={handle}> {loader ? <Spin /> : "Change Password"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword