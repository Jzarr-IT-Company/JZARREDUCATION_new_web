import React from 'react';
import { useGlobalState } from '../Context/Context';
import QualificationInformationUpdateBttn from '../Component/QualificationInformationUpdateBttn/QualificationInformationUpdateBttn';

function QualificationUpdates() {
    const { qualifications, setQualifications,
        specialization, setSpecialization,
        currentStatus, setCurrentStatus,
        futurePlan, setFuturePlan,
        hasComputer, setHasComputer}=useGlobalState()
    const handleGoBack = () => {
        window.history.back()
    };
    return (
        <>
            <div className="mt-3 px-2">
                <button className='btn btn-light' onClick={handleGoBack}>Go to Back</button>
            </div>
            <div className="container pb-5 pt-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <p className="fw-bold text-secondary fs-6">Highest Qualification</p>
                        <select
                            className="form-select py-3"
                            id="qualificationSelect"
                            aria-label="Default select example"
                            value={qualifications}
                            onChange={(e) => setQualifications(e.target.value)}
                        >
                            <option value="">Select Qualification</option>
                            <option value="Middle">Middle</option>
                            <option value="Matric/O-level">Matric/O-level</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Graduation">Graduation</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p className="fw-bold text-secondary fs-6">Specialization</p>
                        <select
                            className="form-select py-3"
                            aria-label="Default select example"
                            id="specialization"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                        >
                            <option value="">Select Specialization</option>
                            <option value="Business">Business</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Social Science">Social Science</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Media & Art">Media & Art</option>
                            <option value="Huminities">Huminities</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p className="fw-bold text-secondary fs-6">Current Status</p>
                        <select
                            className="form-select py-3"
                            aria-label="Default select example"
                            id="currentStatus"
                            value={currentStatus}
                            onChange={(e) => setCurrentStatus(e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="Student">Student</option>
                            <option value="House Wife">House Wife</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Employed">Employed</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p className="fw-bold text-secondary fs-6">Future Plan</p>
                        <select
                            className="form-select py-3"
                            aria-label="Default select example"
                            id="futurePlans"
                            value={futurePlan}
                            onChange={(e) => setFuturePlan(e.target.value)}
                        >
                            <option value="">Select Future Plan</option>
                            <option value="Job">Job</option>
                            <option value="Own Business">Own Business</option>
                            <option value="Freelancing">Freelancing</option>
                        </select>
                    </div>
                    <p className="fw-bold text-secondary fs-6">
                        Personal Computer/Laptop at Home
                    </p>
                    <div className="col-12">
                        <div className="d-flex align-items-center" style={{ gap: '0px 20px' }}>
                            <div className="d-flex align-items-center" style={{ gap: 7 }}>
                                <input
                                    type="radio"
                                    name="computer"
                                    id="computerYes"
                                    value="yes"
                                    checked={hasComputer === 'yes'}
                                    onChange={(e) => setHasComputer(e.target.value)}
                                />
                                <label htmlFor="computerYes" className="text-capitalize">
                                    Yes
                                </label>
                            </div>
                            <div className="d-flex align-items-center" style={{ gap: 7 }}>
                                <input
                                    type="radio"
                                    name="computer"
                                    id="computerNo"
                                    value="no"
                                    checked={hasComputer === 'no'}
                                    onChange={(e) => setHasComputer(e.target.value)}
                                />
                                <label htmlFor="computerNo" className="text-capitalize">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QualificationInformationUpdateBttn/>
        </>
    );
}

export default QualificationUpdates;
