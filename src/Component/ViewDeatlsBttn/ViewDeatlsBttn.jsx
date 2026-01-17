import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../Context/Context';

function ViewDeatlsBttn({ id }) {
    const { setCourseId } = useGlobalState();
    const navigate = useNavigate()
    const nextBtn = async () => {
        setCourseId(id)
        navigate('/detail')
    }
    return (
        <>
            <Link style={{ cursor: "pointer" }} className="text-success fw-semibold"onClick={nextBtn} >View Detail</Link>
        </>
    )
}

export default ViewDeatlsBttn