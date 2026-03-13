import React from 'react'
import SelectedCoursesSubmit from '../Component/SelectedCoursesSubmit/SelectedCoursesSubmit';
import SelectedCoursesCards from '../Component/SelectedCoursesCards/SelectedCoursesCards';
import { filterVisibleCourses } from '../Services/courseCatalog';

const selectableCourses = [
    'Digital Marketing With Ai',
    'Shopify',
    'Facebook Marketing',
    'Google Ads',
    'YouTube Marketing',
    'SEO',
    'Tiktok shop complete course',
    'AI Chatbot',
    'Amazon Wholesale',
    'Mastering Prompt Engineering for AI Tools',
    'Mass Media',
    'Fiverr Freelancing',
    'Amazon Private Label'
];

function SelectedCourese() {
    return (
        <>
            <div className="container py-5">
                <h4 className="mb-4">Select any Courses</h4>
                <div className="row" style={{ gap: "15px 0px" }}>
                    {filterVisibleCourses(selectableCourses).map((courseName) => (
                        <SelectedCoursesCards key={courseName} name={courseName} />
                    ))}
                </div>
                <SelectedCoursesSubmit />
            </div>
        </>
    )
}

export default SelectedCourese
