import React from 'react'
import { useGlobalState } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

function SelectedCoursesSubmit() {
    const { selectedCourses,stuName, stuEmail, stuPhone,setBuyCourseData, setTotallFee, setSelectedMoreCourses } = useGlobalState();
    const navigate = useNavigate();
    const courseFee = 3500;
    const totalFee = selectedCourses.length * courseFee; // Total fee based on number of selected courses
    let obj ={
        stuName, stuEmail, stuPhone, coursename:selectedCourses, amount: totalFee
    }
    const handle = async () => {
        setBuyCourseData(obj)
        navigate('/payment')

    }
    return (
        <div className="mt-4 d-flex">
            <button className="bttn fw-semibold" onClick={handle}>
                Next
            </button>
        </div>
    )
}

export default SelectedCoursesSubmit