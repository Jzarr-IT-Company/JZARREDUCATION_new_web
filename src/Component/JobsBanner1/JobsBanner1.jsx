import React, { useEffect } from 'react';
import image1 from "../../assets/icon1.png";
import image2 from "../../assets/icon2.png";
import image3 from "../../assets/icon3.png";
import './JobsBanner1.css'
function JobsBanner1() {
    const rollToNumber = (elementId, finalNumber, duration) => {
        const numberElement = document.getElementById(elementId);
        if (!numberElement) return;

        let currentNumber = 0;
        const startTime = new Date().getTime();

        const updateNumber = () => {
            const elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime < duration) {
                currentNumber = Math.floor(Math.random() * finalNumber);
                numberElement.textContent = currentNumber + '+';
                requestAnimationFrame(updateNumber);
            } else {
                numberElement.textContent = finalNumber + '+';
            }
        };

        updateNumber();
    };
    useEffect(() => {
        rollToNumber('signupCount', 710, 3000);
        rollToNumber('enrollCount', 300, 3000);
        rollToNumber('passCount', 120, 3000);
    }, []);

    return (
        <div className="container py-3 overlay" id="bg_img">
            <div className="row py-4 d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white overlay-card">
                        <div className="card-body">
                            <img src={image3} className="img-fluid" width="90px" alt="Icon" />
                            <p className="fs-5 fw-semibold">Total Apply Employees For Job</p>
                            <p className="text-center fw-bold fs-1" id="signupCount">0</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white overlay-card">
                        <div className="card-body">
                            <img src={image2} className="img-fluid" width="90px" alt="Icon" />
                            <p className="fs-5 fw-semibold">Clear Employees</p>
                            <p className="text-center fw-bold fs-1" id="enrollCount">0</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card bg-dark text-white overlay-card">
                        <div className="card-body">
                            <img src={image1} className="img-fluid" width="90px" alt="Icon" />
                            <p className="fs-5 fw-semibold">Jobs Providing</p>
                            <p className="text-center fw-bold fs-1" id="passCount">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobsBanner1;
