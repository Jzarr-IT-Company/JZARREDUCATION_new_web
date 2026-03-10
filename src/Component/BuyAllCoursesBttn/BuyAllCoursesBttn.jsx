import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';
import { visibleBundleCourseNames } from '../../Services/courseCatalog';
import './BuyAllCOursesBttn.css'
function BuyAllCoursesBttn() {
    const { stuName, stuEmail, stuPhone, setBuyCourseData, userId, userToken, setAbc } = useGlobalState();
    const navigate = useNavigate();
    const handle = async () => {
        const obj = {
            stuName, stuEmail, stuPhone, coursename: [...visibleBundleCourseNames], amount: 12000
        }
        if (!userId && !userToken) {
            setBuyCourseData(obj)
            setAbc(obj.coursename)
            localStorage.setItem("buyCourse", true)
            navigate('/signup')
        } else {

            setBuyCourseData(obj)
            navigate('/payment')
        }
    }
    return (
        <>
             <div className="offer-container">
            <div className="col-md-4 col-12 w-100">
                <button className="btn btn-success py-3 text-center fw-semibold w-100 animated-button" onClick={handle}>
                    <span className="animated-text">Unlock All Courses</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default BuyAllCoursesBttn
