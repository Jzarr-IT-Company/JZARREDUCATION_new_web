import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function PhysicalClass() {
    
    const navigate= useNavigate()
    const PhysicalClass = async () => {
        navigate('/physical')
    }
    return (
        <>
            <button
                className="px-3 py-2 mt-2 w-100 border fw-semibold rounded-3 text-white border-none; text-decoration-none"
                style={{ fontSize: 14, border: "none", backgroundColor: "#023901" }}
                id="physicalclasses"
                onClick={PhysicalClass}
            >
                <span>
                    <i className="fa-solid fa-computer me-2" />
                </span>
                Physical Class
            </button>
        </>
    )
}

export default PhysicalClass