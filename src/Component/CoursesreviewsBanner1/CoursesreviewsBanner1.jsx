import React, { useEffect, useState } from 'react'
import CoursesreviewsCompo from '../CoursesreviewsCompo/CoursesreviewsCompo'
import axios from 'axios'
import bydefault from '../../assets/user2.png'
import ReviewsRatingCompo from '../ReviewsRatingCompo/ReviewsRatingCompo';
function CoursesreviewsBanner1({ courseId }) {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://main-server-zeta.vercel.app/getAllData');
                const filteredCourses = response.data.data.filter((data) => data.courses === courseId);
                setFilteredData(filteredCourses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [courseId]);
    return (
        <>
            <div className="container py-4">
                <div className="d-flex justify-content-between">
                    <h2>Successfull story</h2>
                    <CoursesreviewsCompo courseId={courseId} />
                </div>
                <div className="row">
                    {
                        filteredData ? (
                            <div className="col-12">
                                <div className="py-5">
                                    {
                                        filteredData?.map((data) => {
                                            return <div className="">
                                                <div className="border-bottom pt-5 pb-3">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center ">
                                                            <img src={bydefault} className='img-fluid' style={{ width: '50px', height: "50px" }} alt="" />
                                                            <div className="ms-2 mt-2">
                                                                <p style={{ fontSize: "14px" }} className='fw-semibold mb-0'>{data.name}</p>
                                                                <p style={{ fontSize: "14px" }} className='fw-semibold mt-0'>{data.email}</p>
                                                            </div>
                                                        </div>
                                                            <div className="d-flex">
                                                                <ReviewsRatingCompo rating={data.rating}/>
                                                            </div>
                                                    </div>
                                                    {
                                                        data?.reviewtitle ?
                                                            <p className='mb-0 fw-semibold'>{data.reviewtitle}</p> : ""
                                                    }
                                                    <p className=''>{data.reviews}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        ) : ""
                    }
                </div>
            </div>
        </>
    )
}

export default CoursesreviewsBanner1