import React from 'react'

function MarqueeText() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style={{ backgroundColor: "black" }}>
                        <marquee behavior="left">
                            <p className="fw-semibold fs-5" style={{ color: "white" }}>
                                JZARR IT Company is offering free courses with a nominal enrollment and support fee of 12,000 PKR each course. The company team supports you until your first earning (You can contact our support team for any queries).
                            </p>
                            {/* <p className="fw-semibold fs-5" style={{ color: "white" }}>
                            Admissions are closed until 20th September 2024 due to a high number of enrollments.
                            </p> */}
                        </marquee>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MarqueeText