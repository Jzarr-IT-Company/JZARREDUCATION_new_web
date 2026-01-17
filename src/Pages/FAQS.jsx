import React from 'react'
import ScrollToTop from '../Component/ScrollTop/ScrollTop'

function FAQS() {
    return (
        <>
        <ScrollToTop/>
            <div className="container py-5">
                <h2 className="text-center mb-5">Frequently Asked Questions (FAQs)</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        1. What courses do you offer at the JZARR IT Institute?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>We offer a diverse range of courses including:</p>
                                        <ul style={{ listStyle: "none" }}>
                                            <li className="abc">Digital Marketing with Ai</li>
                                            <li className="abc">Complete Amazon</li>
                                            <li className="abc">Etsy Shop</li>
                                            <li className="abc">Walmart</li>
                                            <li className="abc">eBay</li>
                                            <li className="abc">Web Development</li>
                                            <li className="abc">Shopify Store Development</li>
                                            <li className="abc">Video Editing</li>
                                            <li className="abc">Drop shipping</li>
                                        </ul>
                                        <p />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        2. Are the courses available online or in person?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            We offer both online and in person classes to accommodate
                                            different learning preferences. Online courses can be accessed
                                            from anywhere, while in person classes are held at our
                                            institute's location.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        3. What are the requirements for enrolling in a course?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Most of our courses do not require specific requirements, though
                                            basic computer skills and familiarity with the internet are
                                            recommended. For advanced courses, some prior experience in the
                                            relevant field may be beneficial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#four"
                                        aria-expanded="true"
                                        aria-controls="four"
                                    >
                                        4. How can I enroll in a course?
                                    </button>
                                </h2>
                                <div
                                    id="four"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            You can enroll in a course through our website by filling out
                                            the registration form, or you can visit our institute in person.
                                            For assistance, you can also contact our admissions team via
                                            email or phone
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#five"
                                        aria-expanded="false"
                                        aria-controls="five"
                                    >
                                        5. Are there any discounts available?
                                    </button>
                                </h2>
                                <div
                                    id="five"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Yes, we offer occasional discounts. Please check our website or
                                            contact our admissions office for current promotions and
                                            scholarship opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#six"
                                        aria-expanded="false"
                                        aria-controls="six"
                                    >
                                        6. What is the cost of each course?
                                    </button>
                                </h2>
                                <div
                                    id="six"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Course fees vary depending on the subject and duration. For
                                            detailed pricing information, please visit the course
                                            description page on our website or contact our admissions team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#seven"
                                        aria-expanded="true"
                                        aria-controls="seven"
                                    >
                                        7. Is there any certification upon completion of a course?
                                    </button>
                                </h2>
                                <div
                                    id="seven"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Yes, upon successful completion of each Physical course, you
                                            will receive a certificate from our institute, which can enhance
                                            your resume and demonstrate your skills to potential employers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#eight"
                                        aria-expanded="false"
                                        aria-controls="eight"
                                    >
                                        8. What kind of support is available during and after the course?
                                    </button>
                                </h2>
                                <div
                                    id="eight"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            We offer both online and in person classes to accommodate
                                            different learning preferences. Online courses can be accessed
                                            from anywhere, while in person classes are held at our
                                            institute's location.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#nine"
                                        aria-expanded="false"
                                        aria-controls="nine"
                                    >
                                        9. What career opportunities can I explore after completing these
                                        courses?
                                    </button>
                                </h2>
                                <div
                                    id="nine"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Our courses are designed to equip you with skills for various
                                            career paths, including:
                                        </p>
                                        <ul style={{ listStyle: "none" }}>
                                            <li className="abc">Digital Marketing Specialist</li>
                                            <li className="abc">Amazon Seller or Marketplace Manager</li>
                                            <li className="abc">Etsy Shop Owner</li>
                                            <li className="abc">Walmart Marketplace Manager</li>
                                            <li className="abc">eBay Seller</li>
                                            <li className="abc">Web Development</li>
                                            <li className="abc">Shopify Store Owner/Manager</li>
                                            <li className="abc">Video Editing</li>
                                            <li className="abc">Dropshipping Entrepreneur</li>
                                        </ul>
                                        <p />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#ten"
                                        aria-expanded="false"
                                        aria-controls="ten"
                                    >
                                        10. How do I know if the course is right for me?
                                    </button>
                                </h2>
                                <div
                                    id="ten"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            We recommend reviewing the course descriptions and objectives
                                            carefully. If you have specific career goals or interests, you
                                            can contact our career advisors for personalized advice on which
                                            course would best suit your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#eleven"
                                        aria-expanded="true"
                                        aria-controls="eleven"
                                    >
                                        11. Why do you charge a registration fee for free courses?
                                    </button>
                                </h2>
                                <div
                                    id="eleven"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            {" "}
                                            We charge a refundable registration fee of 2000rs to ensure that
                                            students are committed to completing the course and passing the
                                            final test. This policy helps us maintain a high level of
                                            engagement and ensures that resources are allocated to students
                                            who are serious about their education. The fee is fully
                                            refundable upon successful completion of the course and passing
                                            the test
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#twelv"
                                        aria-expanded="false"
                                        aria-controls="twelv"
                                    >
                                        12. What happens if I don't pass the test?
                                    </button>
                                </h2>
                                <div
                                    id="twelv"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            {" "}
                                            If you don't pass the final test, the registration fee of 2000rs
                                            will not be refunded. However, we offer additional support and
                                            resources to help you improve and retake the test. Our goal is
                                            to ensure that every student has the opportunity to succeed and
                                            gain valuable knowledge from our courses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#thir"
                                        aria-expanded="false"
                                        aria-controls="thir"
                                    >
                                        13. Who can I contact for more information?
                                    </button>
                                </h2>
                                <div
                                    id="thir"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            {" "}
                                            For more information, you can contact our admissions team via:{" "}
                                            <br />
                                            <strong>Email:</strong> contact@jzarr.com <br />
                                            <strong>Phone:</strong> 0213 4595777 <br />
                                            <strong>Visit us at:</strong> Main Rashid Minhas Road,
                                            Gulshan-e-Jamal Karachi.
                                            <br />
                                            Or fill out the contact form on our website. Feel free to reach
                                            out if you have any more questions or need further assistance!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQS