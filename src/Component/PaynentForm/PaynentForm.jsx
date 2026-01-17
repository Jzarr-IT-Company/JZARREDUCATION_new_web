import React, { useEffect, useState } from 'react'
import { message, Result } from 'antd';
import axios from 'axios';
import "./paymentForm.css"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import GetTransactionReciptImages from '../GetTransactionReciptImage/GetTransactionReciptImage'
import { useGlobalState } from '../../Context/Context'
function PaynentForm() {
    const { buyCourseData, transactionImageURL, userId } = useGlobalState();
    const [id, setID] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const id = Cookies.get("userId")
        setID(id)
    }, [id])
    const handle = async () => {
        try {
            if (transactionImageURL) {
                const response = await axios.post('https://main-server-zeta.vercel.app/addPaymentDetail', {
                    image: transactionImageURL,
                    email: buyCourseData.stuEmail,
                    phone: buyCourseData.stuPhone,
                    amount: buyCourseData.amount,
                    name: buyCourseData.stuName,
                    coursesname: buyCourseData.coursename,
                    id: userId ||buyCourseData.id||id,
                    paymenttype: "By Bank",
                });
                if (response.data.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Transaction SuccessFull",
                        showConfirmButton: false,
                        timer: 1700
                    }).then((Result) => {
                        if (Result) {
                            localStorage.removeItem('buyCourse')
                            localStorage.removeItem('moreCourses')
                            localStorage.setItem("bankingPayment", true)
                            navigate('/dashboard')
                        }
                    })
                }
            } else {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "No File Select!",
                    showConfirmButton: false,
                    timer: 1700
                })
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response);
                message.error(`Error: ${error.response.data.message || 'Failed to add payment details.'}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                message.error('No response from server. Please try again later.');
            } else {
                console.error('Error message:', error.message);
                message.error(`Error: ${error.message}`);
            }
        }
    };


    return (
        <>
            <div className="">
                <GetTransactionReciptImages />
                <div className="w-100">
                    <button className="btn py-3 btn-success mt-3 fw-semibold w-100" onClick={handle}>
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default PaynentForm