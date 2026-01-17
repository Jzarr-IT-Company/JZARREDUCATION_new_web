import React from 'react';
import './form.css';
import SignupForm from '../Component/SignupForm/SignupForm';

function Signup() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center border">
                <div className="form-container" >
                    <h5 className="mb-4 text-center">Create New Account</h5>
                    <SignupForm/>
                </div>
            </div>
        </>
    );
}

export default Signup;
