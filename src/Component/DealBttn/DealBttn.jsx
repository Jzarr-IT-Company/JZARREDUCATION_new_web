import React from 'react'
import BuyAllCoursesBttn from '../BuyAllCoursesBttn/BuyAllCoursesBttn'

function DealBttn() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center  align-items-center">
        <h3 className="fw-bold my-4 text-center">
          Get access to all 23 courses for just 12,000 PKR!  Enroll before <br />the last date, 25 Feb 2025.
        </h3>
        <div className="mb-4">
          <BuyAllCoursesBttn />
        </div>
      </div>
    </>
  )
}

export default DealBttn