import React from 'react'
import { useGlobalState } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

function BuyCourses({ coursename }) {
    const { stuName, stuEmail, stuPhone, setBuyCourseData ,userId , userToken,setAbc} = useGlobalState()
    const navigate = useNavigate();
    const handle = async () => {
        const obj = {
            stuName, stuEmail, stuPhone, coursename, amount: 4500
        }
        if (!userId && !userToken) {
            setBuyCourseData(obj)
            setAbc(coursename)
            localStorage.setItem("buyCourse",true)
            navigate('/signup')
        } else {

            setBuyCourseData(obj)
            navigate('/payment')
        }
    }
    return (
        <>
            <div className="w-100">
                <button className="btn btn-success py-3 text-center fw-semibold w-100" onClick={handle}>
                    Buy Course
                </button>
            </div>
        </>
    )
}

export default BuyCourses