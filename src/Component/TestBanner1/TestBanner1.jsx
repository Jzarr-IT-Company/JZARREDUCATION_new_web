import React, { useEffect } from 'react';
// import image from "../../assets/online-tutoring-image.png"
import './TestBanner1.css'
import image1 from "../../assets/icon1.png"
import image2 from "../../assets/icon2.png"
import image3 from "../../assets/icon3.png"
function TestBanner1() {
    // Function to simulate the rolling number effect
    function rollToNumber(elementId, finalNumber, duration) {
        const numberElement = document.getElementById(elementId);
        let currentNumber = 0;
        const startTime = new Date().getTime();

        function updateNumber() {
            const elapsedTime = new Date().getTime() - startTime;

            if (elapsedTime < duration) {
                currentNumber = Math.floor(Math.random() * finalNumber);
                numberElement.textContent = currentNumber + '+';
                requestAnimationFrame(updateNumber);
            } else {
                numberElement.textContent = finalNumber + '+';
            }
        }

        updateNumber();
    }

    // useEffect to run rollToNumber when the component is mounted
    useEffect(() => {
        rollToNumber('signupCount', 700, 3000);
        rollToNumber('enrollCount', 450, 3000);
        rollToNumber('passCount', 180, 3000);
    }, []);

    return (
        <>
            <div
                className="container-fluid py-5 overlay"
                id='bg_img'
            >
                <div className="row py-4 d-flex justify-content-center align-items-center text-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card bg-dark text-white overlay-card">
                            <div className="card-body">
                                <img
                                    src={image3}
                                    className="img-fluid"
                                    width="90px"
                                    alt=""
                                />
                                <p className="fs-5 fw-semibold">Total Enrolled Students</p>
                                <p className="text-center fw-bold fs-1" id="signupCount">
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card bg-dark text-white overlay-card">
                            <div className="card-body">
                                <img
                                    src={image2}
                                    className="img-fluid"
                                    width="90px"
                                    alt=""
                                />
                                <p className="fs-5 fw-semibold">Total Attemp Test Students</p>
                                <p className="text-center fw-bold fs-1" id="enrollCount">
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card bg-dark text-white overlay-card">
                            <div className="card-body">
                                <img
                                    src={image1}
                                    className="img-fluid"
                                    width="90px"
                                    alt=""
                                />
                                <p className="fs-5 fw-semibold">Total Pass out Students</p>
                                <p className="text-center fw-bold fs-1" id="passCount">
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestBanner1