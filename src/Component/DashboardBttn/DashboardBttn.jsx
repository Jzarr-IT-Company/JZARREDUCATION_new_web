import React from 'react'
import { useNavigate } from 'react-router-dom'

function DashboardBttn() {
    const navigate = useNavigate()
    const handle = async () => {
        navigate('/buymorecourses')
    }
    const refreshBtn=()=>{
        window.location.reload()
    }
    return (
        <>
            <div className="d-flex justify-content-end py-2" style={{gap:"0px 20px"}}>
                <button className='btn btn-success' onClick={handle}> <span><i className="fa-solid fa-plus me-2"></i></span> Buy more courses</button>
                <button className='btn btn-light' onClick={refreshBtn}>Refresh</button>
            </div>
        </>
    )
}

export default DashboardBttn