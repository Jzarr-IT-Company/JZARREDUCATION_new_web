import React, { useEffect, useState } from 'react'
import ShowCoursesSidebar from '../Component/ShowCoursesSidebar/ShowCoursesSidebar'
import { useParams } from 'react-router-dom'
import { getBuyCoursesById } from '../Services/getCourses';
import { useGlobalState } from '../Context/Context';
import ShowCourseVideos from '../Component/ShowCourseVideos/ShowCourseVideos';
import ShowCoursesNavbar from '../Component/ShowCoursesNavbar/ShowCoursesNavbar';
import { Spin } from 'antd';
function ShowCOurses() {
  const { id } = useParams();
  const { courseData, setCourseData } = useGlobalState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      try {
        const response = await getBuyCoursesById(id);
        setCourseData(response.data.data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id])
  return (
    <>
      <div className="sticky-top">
        <ShowCoursesNavbar />
      </div>
      <div className="container-fluid">
        <div className="row" style={{ height: 'calc(100vh - 56px)' }}>
          {
            loading ? (
              <>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                  <Spin size='large' />
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-3 col-md-3 p-0 d-none d-lg-block side-bar">
                  <ShowCoursesSidebar data={courseData} />
                </div>
                <main className="col-lg-9 border overflow-auto main-content" style={{ height: '100%' }}>
                  <ShowCourseVideos data={courseData} />
                </main>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ShowCOurses