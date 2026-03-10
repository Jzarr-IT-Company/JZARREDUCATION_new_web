import React from 'react'
import BuyAllCoursesBttn from '../BuyAllCoursesBttn/BuyAllCoursesBttn'
import { visibleBundleCourseCount } from '../../Services/courseCatalog';

function DealBttn() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center  align-items-center">
        <h3 className="fw-bold my-4 text-center">
          Get access to all {visibleBundleCourseCount} courses for just 12,000 PKR.
        </h3>
        <div className="mb-4">
          <BuyAllCoursesBttn />
        </div>
      </div>
    </>
  )
}

export default DealBttn
