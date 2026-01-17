import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewsCompoSplit from '../ReviewsCompoSplit/ReviewsCompoSplit';

function HomeBanner4() {
    const navigate = useNavigate();

    const handle = () => {
        navigate('/more reviews');
        window.scroll(0, 0);
    };

    return (
        <div className="container my-5">
            <h3 className='text-center mb-4 fs-2 fw-bold text-capitalize'>Real Success Stories</h3>
            <div className="row gy-4">
                <ReviewsCompoSplit />
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className="col-md-3 col-12">
                    <button
                        className='btn btn-success w-100 py-3 fw-semibold fs-5'
                        onClick={handle}
                        aria-label="View more reviews"
                    >
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}


export default HomeBanner4;
