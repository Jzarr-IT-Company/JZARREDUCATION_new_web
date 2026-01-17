import React, { useState } from 'react'
import axios from 'axios';
import { Spin } from 'antd';
import Swal from 'sweetalert2';
import { useGlobalState } from '../../Context/Context'

function QualificationInformationUpdateBttn() {
    const { userId, qualifications, specialization, currentStatus, futurePlan, hasComputer, } = useGlobalState()
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {
        setLoading(true)
        const data = {
            graduation: qualifications,
            specialization: specialization,
            currentStatus: currentStatus,
            futurePlan: futurePlan,
            IsComputer: hasComputer,
        };
        if (qualifications || specialization || currentStatus || futurePlan || hasComputer) {
            try {
                axios.post(`https://main-server-zeta.vercel.app/update`, { id: userId, data: data })
                    .then(response => {
                        setLoading(false)
                        if (response.status === 200) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Qualification Information update!",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(error => {
                        setLoading(false)
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "some thing went wrong",
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            } catch (error) {
                setLoading(false)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "some thing went wrong",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else {
            setLoading(false)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Empty Field!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    return (
        < >
            <div className="pb-5">
                <button className='btn btn-success' onClick={handleSubmit} > {loading ? <Spin /> : "Submit"}</button>
            </div>
        </ >
    )
}

export default QualificationInformationUpdateBttn