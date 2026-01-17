import React from 'react'
import Banner from '../Component/Banner/Banner'

function TermsConditions() {
    return (
        <>
        <Banner name={"Terms and Conditions"} />
            <div className="container my-5">
                <div className="row" style={{ gap: "10px 0px" }}>
                    <div className="col-12 d-flex justify-content-center flex-column">
                        <h3 className="text-center">Introduction</h3>
                        <p style={{ fontSize: 15 }} className="text-center mb-5">
                            Welcome to JZARR Education. By accessing or using our website and IT
                            courses, you agree to comply with and be bound by the following terms
                            and conditions. Please read them carefully before using our services.
                        </p>
                    </div>
                    <div className="col-12" style={{ gap: "8px 0px" }}>
                        <h4 className="fw-bold">Use of the Website and Services</h4>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Course Access:</span>By using our website,
                            you affirm that you are at least 18 years old or have obtained parental
                            or guardian consent to use our services.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Account Registration: </span>To access
                            certain features of our website, such as enrolling in IT courses, you
                            may be required to create an account. You agree to provide accurate and
                            complete information during the registration process and to keep your
                            account details up to date.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">User Responsibilities:</span> You are
                            responsible for maintaining the confidentiality of your account and
                            password and for all activities that occur under your account. You agree
                            to notify us immediately of any unauthorized use of your account.
                        </p>
                    </div>
                    <div className="col-12" style={{ gap: "8px 0px" }}>
                        <h4 className="fw-bold">Intellectual Property</h4>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Content Ownership: </span>All content,
                            including text, graphics, logos, images, videos, and course materials,
                            available on the JZARR Education website is the property of JZARR
                            Education and is protected by copyright, trademark, and other
                            intellectual property laws.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">License to Use:</span> We grant you a
                            limited, non-exclusive, non-transferable license to access and use the
                            content and courses on our website for personal, non-commercial use
                            only. You may not reproduce, distribute, modify, or create derivative
                            works from any content on our site without our prior written consent.
                        </p>
                    </div>
                    <div className="col-12" style={{ gap: "8px 0px" }}>
                        <h4 className="fw-bold">4. Payment and Refunds</h4>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Payment:</span>
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">
                                By enrolling in a course, you agree to pay the applicable fees as
                                specified on our website. All payments must be made through our
                                designated payment gateway.
                            </span>
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Refunds:</span> We offer refunds for
                            courses only under specific circumstances, which are detailed in our
                            Refund Policy. Please review our Refund Policy before purchasing any
                            course.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4 className="fw-bold">Course Access and Completion</h4>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Access:</span> Upon successful payment,
                            you will receive access to the course materials for a specified period,
                            as indicated on the course page.
                        </p>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">Completion:</span> To receive a
                            certificate of completion (if applicable), you must complete all
                            required course activities and assessments within the allotted time.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4 className="fw-bold">Prohibited Activities</h4>
                        <p style={{ fontSize: 15 }}>
                            You agree not to engage in any of the following prohibited activities:{" "}
                            <br />
                            Using the website or services for any unlawful purpose. Attempting to
                            interfere with the proper functioning of the website or disrupt any
                            servers or networks connected to the website. Uploading or transmitting
                            any viruses, malware, or other harmful code. Engaging in any form of
                            data mining, scraping, or automated data collection.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4 className="fw-bold">Termination</h4>
                        <p style={{ fontSize: 15 }}>
                            <span className="fw-semibold">
                                We reserve the right to terminate or suspend your account and access
                                to our services at any time, without notice, if you violate these
                                Terms and Conditions or engage in any prohibited activities.
                            </span>
                        </p>
                    </div>
                    <div className="col-12">
                        <h4 className="fw-bold">Limitation of Liability</h4>
                        <p style={{ fontSize: 15 }}>
                            To the fullest extent permitted by law, JZARR Education shall not be
                            liable for any direct, indirect, incidental, special, or consequential
                            damages resulting from your use of our website or courses.
                        </p>
                    </div>
                    {/*  */}
                    <div className="col-12">
                        <h4 className="fw-bold">Governing Law</h4>
                        <p style={{ fontSize: 15 }}>
                            These Terms and Conditions are governed by and construed in accordance
                            with the laws of [Insert Jurisdiction], without regard to its conflict
                            of law principles.
                        </p>
                    </div>
                    <div className="col-12">
                        <h4 className="fw-bold">Changes to These Terms</h4>
                        <p style={{ fontSize: 15 }}>
                            We may update these Terms and Conditions from time to time. Any changes
                            will be posted on this page with an updated effective date. Your
                            continued use of the website after any changes constitutes your
                            acceptance of the new terms.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TermsConditions