import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../Context/Context'
import { getCoursesByCourseName } from '../Services/getCourses'
import BuyCourses from '../Component/BuyCourses/BuyCourses';
import BuyMoreCoursesBttn from '../Component/BuyMoreCoursesBttn/BuyMoreCoursesBttn';
import ScrollToTop from '../Component/ScrollTop/ScrollTop';
import { Spin } from 'antd';
import CoursesreviewsBanner1 from '../Component/CoursesreviewsBanner1/CoursesreviewsBanner1';
import Skeleton from 'react-loading-skeleton';
function ViewDetail() {
    const { courseId, viewdetail, setViewdetail } = useGlobalState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                setLoading(true)
                const response = await getCoursesByCourseName(courseId)
                if (response.data.status === 200) {
                    setLoading(false)
                    setViewdetail(response.data.data)
                }
            } catch (error) {
                setLoading(false)
                console.log("Data not found Please Try again")
            } finally {
                setLoading(false)
            }
        }
        getData()

    }, [])
    return (
        <>
            <ScrollToTop />
            {
                loading ? (
                    <>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                            <Spin />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="container py-5">
                            <div className="row" style={{ display: "flex", flexWrap: "wrap-reverse", gap: "20px 0px" }}>
                                <div className="col-lg-8 col-md-12 col-sm-12">
                                    {
                                        viewdetail?.map((data, index) => {
                                            return (
                                                <>
                                                    {
                                                        data.coursedemovideo ? (
                                                            <>
                                                                <p className='fs-5 fw-bold'>Demo Class {data.coursename}</p>
                                                                <iframe
                                                                    className='w-100'
                                                                    src={`https://player.vimeo.com/video/${data.coursedemovideo}?title=0&byline=0&portrait=0&badge=0&autopause=0&share=0&autoplay=1`}
                                                                    frameborder="0"
                                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                                   style={{height:"400px"}}
                                                                    title="Common Questions">
                                                                </iframe>
                                                            </>

                                                        ) : ""
                                                    }
                                                    <img src={data.Courseimage} className="img-fluid mt-3" alt="" />
                                                    <div className="mt-4" key={index}>
                                                        <h3>{data.coursename}</h3>
                                                        <p style={{ textAlign: "justify" }} > {data.coursedescription.title}</p>
                                                        <ul>
                                                            {
                                                                data.coursedescription.bullets.map((data) => {
                                                                    return (
                                                                        <>
                                                                            <li><span className='fw-semibold'>{data.title}</span> {data.description
                                                                            }</li>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className="mt-3">
                                                        <h3>{data.coursefeatures.heading}</h3>
                                                        <ul>
                                                            {
                                                                data.coursefeatures.bullets.map((data) => {
                                                                    return (
                                                                        <>
                                                                            <li><span className='fw-semibold'>{data.title}</span> {data.description
                                                                            }</li>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className="">
                                                        <h3>{data.whyShouldEnrolled.heading}</h3>
                                                        <ul>
                                                            {
                                                                data.whyShouldEnrolled.
                                                                    bullets.map((data) => {
                                                                        return (
                                                                            <>
                                                                                <li><span className='fw-semibold'>{data.title}</span> {data.description
                                                                                }</li>
                                                                            </>
                                                                        )
                                                                    })
                                                            }
                                                        </ul>
                                                        <p>{data.coursedescription.footertitle}</p>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="border py-4 px-3 rounded-3">
                                        <h3>About of this course</h3>
                                        <div className="">
                                            <h6>Fee:</h6>
                                            <p className="text-capitalize">4500</p>
                                        </div>
                                        <div className="">
                                            <h6>Who can Join:</h6>
                                            <p className="text-capitalize">Everyone</p>
                                        </div>
                                        <div className="">
                                            <h6>Video Medium: </h6>
                                            <p className="text-capitalize">Urdu &amp; English</p>
                                        </div>
                                        {
                                            viewdetail.map((data) => {
                                                return (
                                                    <>
                                                        <BuyCourses coursename={data.coursename} />
                                                    </>
                                                )
                                            })
                                        }

                                        <div className="w-100 mt-2">
                                            <BuyMoreCoursesBttn />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <CoursesreviewsBanner1 courseId={courseId} />
        </>
    )
}

export default ViewDetail