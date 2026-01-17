import React, { useEffect } from 'react';
import './TotalEntrolled.css'
import image1 from "../../assets/icon1.png"
import image2 from "../../assets/icon2.png"
import image3 from "../../assets/icon3.png"
function TotallEntrolled() {
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

    useEffect(() => {
        rollToNumber('signupCount', 3300, 3000);
        rollToNumber('enrollCount', 1500, 3000);
        rollToNumber('passCount', 1220, 3000);
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
                                rel="preload"
                                    src={image3}
                                    className="img-fluid"
                                    width="90px"
                                    alt=""
                                />
                                <p className="fs-5 fw-semibold">Total Signup Students</p>
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
                                rel="preload"
                                    src={image2}
                                    className="img-fluid"
                                    width="90px"
                                    alt=""
                                />
                                <p className="fs-5 fw-semibold">Total Enrolled Students</p>
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
                                rel="preload"
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

export default TotallEntrolled