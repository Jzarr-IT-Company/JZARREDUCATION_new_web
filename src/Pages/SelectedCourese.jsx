import React from 'react'
import SelectedCoursesSubmit from '../Component/SelectedCoursesSubmit/SelectedCoursesSubmit';
import SelectedCoursesCards from '../Component/SelectedCoursesCards/SelectedCoursesCards';

function SelectedCourese() {
    return (
        <>
            <div className="container py-5">
                <h4 className="mb-4">Select any Courses</h4>
                <div className="row" style={{ gap: "15px 0px" }}>
                    <SelectedCoursesCards name={"Digital Marketing With Ai"} />
                    <SelectedCoursesCards name={"Web Developer"} />
                    <SelectedCoursesCards name={"Shopify"} />
                    <SelectedCoursesCards name={"Facebook Marketing"} />
                    <SelectedCoursesCards name={"Google Ads"} />
                    <SelectedCoursesCards name={"YouTube Marketing"} />
                    <SelectedCoursesCards name={"SEO"} />
                    <SelectedCoursesCards name={"Frontend"} />
                    <SelectedCoursesCards name={"Tiktok shop complete course"} />
                    <SelectedCoursesCards name={"AI Chatbot"} />
                    <SelectedCoursesCards name={"Amazon Wholesale"} />
                    <SelectedCoursesCards name={"financial managment"} />
                    <SelectedCoursesCards name={"Mastering Prompt Engineering for AI Tools"} />
                    <SelectedCoursesCards name={"Video Editing"} />
                    <SelectedCoursesCards name={"Mass Media"} />
                    <SelectedCoursesCards name={"Thumbnail Desingning"} />
                    <SelectedCoursesCards name={"Fiverr Freelancing"} />
                    <SelectedCoursesCards name={"Graphic Designing"} />
                    <SelectedCoursesCards name={"Mastering Daraz by Jzarr"} />
                    <SelectedCoursesCards name={"Mastering eBay From Product Hunting to Sales Success"} />
                    <SelectedCoursesCards name={"Amazon Private Label"} />
                    <SelectedCoursesCards name={"Ms Office"} />
                </div>
                <SelectedCoursesSubmit />
            </div>
        </>
    )
}

export default SelectedCourese