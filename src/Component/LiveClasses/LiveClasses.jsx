import React from 'react'
import { useGlobalState } from '../../Context/Context'
import { useNavigate } from 'react-router-dom';

function LiveClasses() {
    const { userToken } = useGlobalState();
    const navigate = useNavigate();
    const handleLinkClick = async () => {
        if (!userToken) {
            navigate('/signup')
        } else {
            navigate("/buymorecourses")
        }
    }
    return (
        <>
            <button
                className="px-3 py-2 w-100  fw-semibold rounded-3 text-white border-none; text-decoration-none"
                style={{ fontSize: 14, border: "none", backgroundColor: "#299d09" }}
                id="joinClass"
                onClick={handleLinkClick}
            >
                <span>
                    <i className="fa-solid fa-circle-dot me-2" /> Join Live Class
                </span>
            </button>
        </>
    )
}

export default LiveClasses