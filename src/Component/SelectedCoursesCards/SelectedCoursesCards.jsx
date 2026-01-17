import React from 'react';
import { useGlobalState } from '../../Context/Context';

function SelectedCoursesCards({ name }) {
    const { selectedCourses, setSelectedCourses } = useGlobalState();

    const handleCourseSelection = (courseName) => {
        setSelectedCourses((prevSelectedCourses) => {
            if (prevSelectedCourses.includes(courseName)) {
                // Course ko unselect karne ke liye list se hataana
                return prevSelectedCourses.filter((course) => course !== courseName);
            } else {
                // Course ko select karne ke liye list mein add karna
                return [...prevSelectedCourses, courseName];
            }
        });
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div
                className="border py-4 rounded-4 px-4"
                style={{
                    height: 180,
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}
                data-course={name}
                onClick={() => handleCourseSelection(name)}  
            >
                <input
                    type="checkbox"
                    checked={selectedCourses.includes(name)} 
                    readOnly
                    className="course-checkbox"
                    style={{ marginRight: 10 }}
                />
                <h3 className="text-capitalize">{name}</h3>
            </div>
        </div>
    );
}

export default SelectedCoursesCards;
