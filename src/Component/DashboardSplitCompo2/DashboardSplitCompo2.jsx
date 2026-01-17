import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../Context/Context';
import { buyCourseByName } from '../../Services/getCourses';
import { Link, useNavigate } from 'react-router-dom';
import DashboardBttn from '../DashboardBttn/DashboardBttn';
import { Empty } from 'antd';
import VerificationAlert from '../VerificationAlert/VerificationAlert';
import DashboardSplitCompo from '../DashboardSplitCompo/DashboardSplitCompo';

function DashboardSplitCompo2() {
    const { userId, userToken, buyAllCourse, verified } = useGlobalState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [buyCourseData, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await buyCourseByName(buyAllCourse, userToken);
                if (response.data.status === 200) {
                    setError(false);
                    setData(response.data.data);
                }
            } catch (err) {
                setError(true);
                console.log("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        if (userId && userToken) {
            fetchData();
        }
    }, [userId, buyAllCourse, userToken, verified]);

    const handleCourseClick = (id) => navigate(`/showcourse/${id}`);
    if (loading) {
        return (
            <DashboardSplitCompo/>
        );
    }
    return (
        <div className="container-fluid">
            <h5 className="mt-3">
                This course duration is six months. After six months, the course will expire.
            </h5>
            <DashboardBttn />
            <VerificationAlert />
            <div className="row">
                {buyCourseData.length ? (
                    buyCourseData.map((data, index) => {
                        const descriptionSnippet = data.coursedescription.title
                            .split(' ')
                            .slice(0, 8)
                            .join(' ') + (data.coursedescription.title.split(' ').length > 10 ? '...' : '');

                        return (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCourseClick(data._id)}
                            >
                                <div className="card">
                                    <img src={data.Courseimage} className="card-img-top" alt="Course" />
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">{data.coursename}</h5>
                                        <p className="card-text">{descriptionSnippet}</p>
                                        <Link className="text-success fw-semibold" style={{ color: "#36b913" }}>
                                            View courses
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : error ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <Empty />
                    </div>
                ) : (
                    <div>No courses available</div>
                )}
            </div>
        </div>
    )
}

export default DashboardSplitCompo2