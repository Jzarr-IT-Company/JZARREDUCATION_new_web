import React from 'react'
import logo from '../assets/logo.svg'

function Thankyou() {
  return (
    <div className="container my-5 py-5">
        <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
                <img src={logo} className='img-fuild mb-4' width={200} alt="" />
                <p className='fw-bold display-6 text-center'>Thanks for submitting! Our team will review and contact you soon. Excited to have you in the class!</p>
            </div>
        </div>
    </div>
  )
}

export default Thankyou