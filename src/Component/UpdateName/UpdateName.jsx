import React, { useState } from 'react'
import axios from 'axios';
import { Spin } from 'antd';
import Swal from 'sweetalert2';
import { useGlobalState } from '../../Context/Context'
function UpdateName() {
    const { stuName, userId, setUpdateState, stuEmail, stuPhone } = useGlobalState();
    const [loader, setLoader] = useState(false)
    const [name, setName] = useState('')
    const handle = async () => {
        if (name) {
            try {
                setLoader(true)
                axios.post('https://main-server-zeta.vercel.app/updateName', { id: userId, name: name })
                    .then((response) => {
                        if (response.status === 200) {
                            setLoader(false)
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Update Your Profile Name Successfully!",
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
            setName("")
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
                    <p className=' my-3 fw-semibold'>Update Name</p>
                    <p>{stuName}</p>
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between" style={{ gap: "0px 20px" }}>
                        <input type="text" className='form-control' placeholder={stuName} value={name} onChange={(e) => { setName(e.target.value) }} />
                        <button className='btn btn-success w-50' onClick={handle}> {loader ? <Spin /> : "Update Name"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateName