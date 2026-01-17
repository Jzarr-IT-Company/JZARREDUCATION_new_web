import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';

function ShowCoursesSidebar({ data }) {
    const { setBuyCourseId, setBuyCourseTitle } = useGlobalState();
    const [coursesVideos, setBuyCourses] = useState([]);
    const [activeCourseId, setActiveCourseId] = useState(null);
    const [coursename, setCoursename] = useState('')

    useEffect(() => {
        if (data && data.length > 0) {
            data.map((items) => {
                setBuyCourses(items.coursevideos)
                setBuyCourseId(items.coursevideos[0].videos[0]._id)
                setBuyCourseTitle(items.coursevideos[0].videos[0].title)
                setActiveCourseId(items.coursevideos[0].videos[0]._id);
                setCoursename(items.coursename)
            })
        }
    }, []);

    const handle = (id, title) => {
        setBuyCourseId(id);
        setBuyCourseTitle(title);
        setActiveCourseId(id);
    };
    const goBack = () => {
        window.history.back()
    }
    return (
        <>
            <div className="px-3 py-2">
                <button className='btn btn-light w-100 text-start fw-semibold py-3' onClick={goBack}>Go To Back</button>
            </div>
            <div className="px-4 py-2 fs-5 fw-bold">
                <p>{coursename}</p>
            </div>
            {coursesVideos.map((data) => {
                return (

                    <>
                        <p className='py-1 px-4 fw-semibold text-capitalize' style={{ fontSize: "19px" }}>{data.title}</p>
                        <div className='py-1 px-3' key={data._id}>
                            {
                                data.videos.map((data, index) => (
                                    <>
                                        <div className="py-1 px-3" key={index}>
                                            <Link
                                                className={`fw-semibold btn btn-success text-white w-100 py-3 text-dark text-decoration-none text-start text-capitalize ${activeCourseId === data._id ? 'active' : ''}`}
                                                onClick={() => handle(data._id, data.title)}
                                            >
                                                {data.title}
                                            </Link>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </>
                )
            }
            )}
        </>
    );
}

export default ShowCoursesSidebar;
