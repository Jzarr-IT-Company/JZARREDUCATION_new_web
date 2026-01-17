import React from 'react'
import { useGlobalState } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

function BuyMoreCoursesBttn() {
    const { userToken } = useGlobalState()
    const navigate = useNavigate()
    const handle = async () => {
        if (!userToken) {
            navigate('/signup')
            localStorage.setItem("moreCourses",true)
        } else {
            navigate('/buymorecourses')
        }
    }
    return (
        <>
            <button
                className="btn btn-success py-3 text-center fw-semibold w-100"
                id="buyMoreClass"
                onClick={handle}
            >
                Buy More courses
            </button>
        </>
    )
}

export default BuyMoreCoursesBttn