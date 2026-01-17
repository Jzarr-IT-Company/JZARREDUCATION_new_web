import React from 'react'
import imgs from '../../assets/check-mark.png'

function ExpertsFromJZARR() {
    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="row d-flex">
                    <h2 className="text-center">
                        What To Expect From A{" "}
                        <span className="text-success">JZARR Education Course?</span>
                    </h2>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img
                         rel="preload"
                            src={imgs}
                            className="img-fluid"
                            width="80px"
                            alt=""
                        />
                        <h3>Expert Faculties</h3>
                        <p>
                            our expert faculty blends extensive industry experience with advanced
                            knowledge to provide practical, hands-on IT training. We equip students
                            with the essential skills to excel in the ever-evolving tech landscape.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img
                         rel="preload"
                            src={imgs}
                            className="img-fluid "
                            width="80px"
                            alt=""
                        />
                        <h3>Career Support</h3>
                        <p>
                            At Jzarr Institute, our strong industry connections provide students
                            with job placement assistance and valuable referrals from top companies,
                            facilitating a seamless transition into the tech workforce.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img
                         rel="preload"
                            src={imgs}
                            className="img-fluid "
                            width="80px"
                            alt=""
                        />
                        <h3>Student Focus</h3>
                        <p>
                            we prioritize individual student success by ensuring hands-on training
                            and personalized support. We offer one-on-one assistance to address any
                            challenges, making sure every student receives the attention needed to
                            master their skills effectively.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <img
                         rel="preload"
                            src={imgs}
                            className="img-fluid "
                            width="80px"
                            alt=""
                        />
                        <h3>Real-World Experience</h3>
                        <p>
                            {" "}
                            we provide real-world experience by involving students in our live,
                            ongoing projects and campaigns. This hands-on approach ensures that
                            every student gains practical, hassle-free learning and insights
                            directly from active industry work.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ExpertsFromJZARR