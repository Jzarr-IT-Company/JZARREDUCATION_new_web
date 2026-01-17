import React from 'react'
import { Link } from 'react-router-dom'

function ViewAllCOursesCompo() {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center mt-3">
                    <Link className='btn btn-success w-100 py-3 fw-semibold' to={'/courses'}>
                        View All Courses
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ViewAllCOursesCompo