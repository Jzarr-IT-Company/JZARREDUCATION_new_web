import React from 'react'
import UpdateImage from '../Component/UpdateImage/UpdateImage'
import UpdateName from '../Component/UpdateName/UpdateName'
import UpdateEmail from '../Component/UpdateEmail/UpdateEmail'
import UpdatePhoneNumber from '../Component/UpdatePhoneNumber/UpdatePhoneNumber'
import ChangePassword from '../Component/ChangePassword/ChangePassword'
import QualificationInformation from '../Component/QualificationInformation/QualificationInformation'
// import QalificationInformationUpdate from '../Component/QalificationInformationUpdate/QalificationInformationUpdate'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className='my-3'>Manage Profile</h3>
            <h5 className='fw-semibold mb-3'>Personal Information</h5>
          </div>
        </div>
      </div>
      <UpdateImage />
      <UpdateName />
      <UpdateEmail />
      <UpdatePhoneNumber />
      <ChangePassword />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center pe-5">
            <h5 className='fw-semibold mb-3'>Qualification Information</h5>
            <Link className='btn btn-success' to={'/dashboard/editqualification'}>
            <span><i class="fa-regular fa-pen-to-square"></i></span>  Edit
            </Link>
          </div>
        </div>
      </div>
      <QualificationInformation />
    </>
  )
}

export default Profile