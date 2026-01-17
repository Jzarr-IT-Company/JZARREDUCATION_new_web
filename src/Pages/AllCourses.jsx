import React, { useEffect, useState, useCallback, useRef } from 'react';
import { getAllCourse } from '../Services/getCourses';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../Context/Context';
import ViewDeatlsBttn from '../Component/ViewDeatlsBttn/ViewDeatlsBttn';
import { Skeleton, Row, Col } from 'antd';
import BuyCoursesLink from '../Component/BuyCoursesLink/BuyCoursesLink';
import HomeBanner4 from '../Component/HomeBanner4/HomeBanner4';
import ReviewsSlider from '../Component/ReviewsSlider/ReviewsSlider';
import HomeBanner9 from '../Component/HomeBanner9/HomeBanner9';
import DealBttn from '../Component/DealBttn/DealBttn';

function AllCourses() {
    const { setCourseId } = useGlobalState();
    const [getCourses, setgetCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const dealRef = useRef(null);
    const navigate = useNavigate();
    const nextBtn = useCallback((id) => {
        setCourseId(id);
        navigate('/detail');
    }, [setCourseId, navigate]);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await getAllCourse();
                setgetCourses(res);
            } catch (error) {
                setLoading(false);
                setError("Data not found");
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    const handleBtn = () => {
        if (dealRef.current) {
            dealRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <>
            <HomeBanner9 dealRef={dealRef}/>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Row gutter={[16, 16]}>
                        {Array(4).fill().map((_, index) => (
                            <Col key={index} span={6}>
                                <Skeleton active loading={loading} avatar paragraph={{ rows: 3 }} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <div className="container my-5">
                    <div className="row" style={{ gap: "20px 0px" }}>
                        {getCourses.map((data, index) => {
                            const descriptionSnippet = data.coursedescription.title
                                .split(' ')
                                .slice(0, 10)
                                .join(' ') + (data.coursedescription.title.split(' ').length > 10 ? '...' : '');

                            return (
                                <div
                                    className="col-lg-4  col-md-6 col-sm-12"
                                    key={index}
                                >
                                    <div className="card shadow-lg " >
                                        <img
                                            src={data.Courseimage}
                                            className="card-img-top"
                                            alt={data.coursename}
                                            style={{ cursor: "pointer" }}
                                            loading="lazy" 
                                            onClick={() => nextBtn(data._id)}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold" style={{ cursor: "pointer" }}
                                                onClick={() => nextBtn(data._id)}>{data.coursename}</h5>
                                            <p className="card-text" style={{ cursor: "pointer" }}
                                                onClick={() => nextBtn(data._id)}>{descriptionSnippet}</p>
                                            <p className="card-text fw-bold text-success mb-2" style={{ cursor: "pointer" }}
                                                onClick={() => nextBtn(data._id)}>
                                                🎓 Course Fee: <span className="fs-5">4500 PKR</span>
                                            </p>
                                            <div
                                                className="p-2 rounded-3 fw-bold text-white text-center"
                                                style={{
                                                    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                                                    boxShadow: "0px 4px 10px rgba(255, 75, 43, 0.4)",
                                                    cursor: "pointer"
                                                }} onClick={() => handleBtn()}
                                            >
                                                🔥 Limited-Time Offer For All Courses Just:  <span className="fs-5">12,000 PKR</span>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4">
                                                <BuyCoursesLink id={data._id} />
                                                <ViewDeatlsBttn id={data._id} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <DealBttn />
            <HomeBanner4 />
            <ReviewsSlider />
        </>
    );
}

export default React.memo(AllCourses);
