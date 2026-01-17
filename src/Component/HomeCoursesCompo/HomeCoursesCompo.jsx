import React, { memo } from 'react'
import BuyCoursesLink from '../BuyCoursesLink/BuyCoursesLink';
import ViewDeatlsBttn from '../ViewDeatlsBttn/ViewDeatlsBttn';
import { useNavigate } from 'react-router-dom';

const CourseCard = memo(({ course, onClick,dealRef }) => {
    const descriptionSnippet = `${course.coursedescription.title.split(' ').slice(0, 8).join(' ')}${course.coursedescription.title.split(' ').length > 10 ? '...' : ''}`;
    const navigate = useNavigate();
    // Scroll to Deals Section
    const handleBtn = () => {
        if (dealRef.current) {
            dealRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="col-lg-4 col-md-6" >
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <img src={course.Courseimage} onClick={onClick} style={{ cursor: "pointer" }} className="card-img-top" alt={course.coursename} loading="lazy" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{course.coursename}</h5>
                    <p className="card-text text-muted">{descriptionSnippet}</p>
                    <p className="card-text fw-bold text-success mb-2">
                        🎓 Course Fee: <span className="fs-5">4500 PKR</span>
                    </p>
                    <div
                        className="p-2 rounded-3 fw-bold text-white text-center"
                        style={{
                            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                            boxShadow: "0px 4px 10px rgba(255, 75, 43, 0.4)",
                            cursor: "pointer"
                        }}  onClick={handleBtn} 
                    >
                        🔥 Limited-Time Offer For All Course Just: <span className="fs-5">12,000 PKR</span>
                    </div>
                    <div className="d-flex justify-content-between mt-auto">
                        <BuyCoursesLink id={course._id} />
                        <ViewDeatlsBttn id={course._id} />
                    </div>
                </div>
            </div>
        </div>

    );
});

export default CourseCard