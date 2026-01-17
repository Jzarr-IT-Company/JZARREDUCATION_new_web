import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../Context/Context'
import PaynentForm from '../Component/PaynentForm/PaynentForm';
import BankDetails from '../Component/BankDetails/BankDetails';
function Payment() {
    const { buyCourseData, totallFee } = useGlobalState();
    const [totallAmount, setTotalAmount] = useState('')
    useEffect(() => {
        setTotalAmount(buyCourseData.amount)
    }, [])
    return (
        <>
            <div className="container py-5">
                <div className="row  d-flex  flex-column justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <h3>Billing Detail</h3>
                        <small style={{ fontSize: 13 }} className="text-danger fw-semibold">
                            Note: Get all 23 career-building courses with dedicated support until your first earning—all for just <strong>12,000 PKR</strong> , exclusively from JZARR IT Company! <span className='text-dark fw-bold'>If you want to buy one, the price of each course is 4500 PKR</span>
                        </small>
                        <hr />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h5 className='text-center'>Please select any one of the payment methods</h5>
                        <div className="d-flex justify-content-end mt-3">
                            <p>
                                Total support fee:
                                <span className="border border-dark px-2">{totallAmount ? totallAmount : totallFee}</span>
                            </p>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <h3 className=''>Bank Transfer</h3>
                        </div>
                        <div className="details me-2" id="bank-details">
                            <BankDetails />
                            <PaynentForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment