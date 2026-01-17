import React from 'react'
import Rating from '../Rating/Rating'

function AboutUsOfCEO() {
    return (
        <>
            <div className="container-fluid mb-5 mt-2 py-4" style={{ backgroundColor: "#00631a" }}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <img  rel="preload" src={'https://res.cloudinary.com/dfxqjsude/image/upload/v1737822593/4144421-removebg-preview_na3pul.png'} className="img-fluid" width="400px" height={'400px'} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3 className="text-white fw-bold">
                            Quality IT Education From Qualify Instructors
                        </h3>
                        <p className="text-white">
                            Transform your IT skills with JZARR Education advanced 2024 course
                            across Pakistan. Get certified with onsite or online training and unlock
                            new opportunities for a Rewarding Career, Business Growth, and Increased
                            Revenue. Join us now and see the results.
                        </p>
                        <div className="">
                            <h3 className='fw-bold text-white' style={{marginBottom:0}}>4.9+<span>(700+rating)</span></h3>
                            <Rating />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUsOfCEO