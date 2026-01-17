import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';

function BuyCoursesLink({id}) {
    const { setCourseId } = useGlobalState();
    const navigate = useNavigate()
    const nextBtn = async () => {
        setCourseId(id)
        navigate('/detail')
    }
    return (
        <>
            <Link className="text-success fw-semibold" style={{ cursor: "pointer" }} onClick={nextBtn}>Buy Now</Link>
        </>
    )
}

export default BuyCoursesLink