import React from 'react'
import { useGlobalState } from '../../Context/Context'

function QualificationInformation() {
    const { qualification } = useGlobalState()
    const courses = qualification?.courses ?? null; 
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Highest Qualification</p><p>
                            {qualification && qualification.graduation ? qualification.graduation : "Null"}
                        </p>
                    </div>
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Specialization</p>
                        {qualification && qualification.specialization ? qualification.specialization : "Null"}

                    </div>
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Current Status </p>
                        {qualification && qualification.currentStatus ? qualification.currentStatus : "Null"}
                    </div>
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Future Plan</p>
                        {qualification && qualification.futurePlan ? qualification.futurePlan : "Null"}
                    </div>
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Courses Status</p>
                        <p>
                            {courses !== null ? (
                                <p>Entrolled</p>
                            ) : (
                                <p>Not Entrolled</p>
                            )}
                        </p>
                    </div>
                    <div className="col-6 py-3">
                        <p className='fw-semibold'>Personal Computer/Laptop at Home</p>
                        <p>
                            {qualification && qualification.IsComputer ? qualification.IsComputer : "Null"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QualificationInformation