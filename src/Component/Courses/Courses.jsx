import React, { useEffect, useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCourse } from '../../Services/getCourses';
import { Skeleton } from 'antd';
import { useGlobalState } from '../../Context/Context';
import './Courses.css';
import CourseCard from '../HomeCoursesCompo/HomeCoursesCompo';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import ViewAllCOursesCompo from '../ViewAllCoursesCompo/ViewAllCOursesCompo';

function Courses({dealRef}) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setCourseId } = useGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAllCourse();
                setCourses(res.slice(0, 12));
            } catch (error) {
                setLoading(false);
                console.log("ERROR FROM COURSES", error.message)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCourseClick = (id) => {
        setCourseId(id);
        navigate('/detail');
    };

    return (
        <div className="container py-5">
            <div className="row py-3" style={{ gap: "20px 0px" }}>
                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    courses.map((course) => (
                        <CourseCard key={course._id} course={course} onClick={() => handleCourseClick(course._id)}dealRef={dealRef} />
                    ))
                )}
            </div>
            <ViewAllCOursesCompo />
        </div>
    );
}
export default Courses;
