import React from 'react'
import logo from "../../assets/logo.svg"
import comapnyLogo from '../../assets/JzarrLogo.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="row">
                    <div className="col-12 px-5 py-4">
                        <div className="p-4 border rounded-3 bg-white shadow-sm">
                            <h5 className="fw-bold mb-3">Disclaimer – JZARR IT Company</h5>
                            <p className="mb-2">
                                This group is managed exclusively by JZARR IT Company for the purpose of sharing official announcements, course updates, and educational information.
                            </p>
                            <p className="mb-2">
                                Personal promotions, unrelated content, external links, or spam are strictly prohibited.
                            </p>
                            <p className="mb-2">
                                JZARR IT Company is not liable for any private messages, personal agreements, or transactions conducted outside this group. Only information communicated by official group administrators should be regarded as accurate and authentic.
                            </p>
                            <p className="mb-2">Any violation of these guidelines may result in immediate removal from the group without prior notice.</p>
                            <p className="mb-0">We appreciate your cooperation.<br/>— JZARR IT Company</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid py-5 px-5"
                style={{ backgroundColor: "#f5f5f5" }}
            >
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 align-items-center justify-content-center mt-2">
                        <div className="d-flex justify-content-center">
                            <img
                                src={logo}
                                className="img-fluid"
                                height="330px"
                                width="160px"
                                alt=""
                            />
                        </div>
                        <div className="d-flex mt-4" style={{ gap: 10 }}>
                            <div
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{ borderRadius: "50%", width: 50, height: 50 }}
                            >
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/jzarriteducation/"
                                    className=" text-dark text-decoration-none fw-semibold"
                                >
                                    <i className="fs-5 fa-brands fa-facebook-f" />
                                </a>
                            </div>
                            <div
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{ borderRadius: "50%", width: 50, height: 50 }}
                            >
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/jzarri.teducation/?fbclid=IwZXh0bgNhZW0CMTEAAR3_OVsGWPIbZR3mcGXx6sIoBfb4hi1cqiq8maK4Cum3svMOkJ-mGaH1c3c_aem_5w6Ru_c-gbpXZ9N_rka6RQ"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    <i className="fs-5 fa-brands fa-instagram" />
                                </a>
                            </div>
                            <div
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{ borderRadius: "50%", width: 50, height: 50 }}
                            >
                                <a
                                    target="_blank"
                                    href="https://youtube.com/@waseemjakhrani1?si=ig6kFjKsu-QVYclq"
                                    className=" text-decoration-none fw-semibold text-dark"
                                >
                                    <i className="fs-5 fa-brands fa-youtube" />
                                </a>
                            </div>
                            <div
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{ borderRadius: "50%", width: 50, height: 50 }}
                            >
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/company/jzarritcompany/"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    <i className="fs-5 fa-brands fa-linkedin" />
                                </a>
                            </div>
                            <div
                                className="border border-dark d-flex justify-content-center align-items-center"
                                style={{ borderRadius: "50%", width: 50, height: 50 }}
                            >
                                <a
                                    target="_blank"
                                    href="https://x.com/JzarrC10174"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    <i className="fs-5 fa-brands fa-x-twitter" />
                                </a>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="d-flex align-items-center flex-wrap">
                                <img src={comapnyLogo} width={100} alt="" />
                                <div className="">
                                    <p className='mt-3 fw-bold ms-2' style={{ fontSize: "14px" }}>Sponsored by JZARR IT Company</p>
                                    <Link target='_blank' to={'https://jzarr.com'}>https://jzarr.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pt-4 mt-5 px-3">
                        <h4 className="fw-bold">Useful Links</h4>
                        <div className="">
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Home page
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    About us
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/courses'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    All Courses
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/faqs'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    FAQs
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/policy'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/refund'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Refund Policy
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/terms'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Terms and Conditions
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    className="text-dark text-decoration-none fw-semibold"
                                    to={'/blogs'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Blogs
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pt-4 mt-5 px-3">
                        <h4 className="fw-bold">Popular Courses</h4>
                        <div className="">
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    Digital Marketing With AI
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    Website Development
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    AI Advance Course
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    Amazon Complete Course
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    Shopify Course
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="#"
                                    style={{ cursor: "not-allowed" }}
                                    disabled="true"
                                    className="text-dark text-decoration-none fw-semibold"
                                >
                                    Prompt Engineering Course
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 pt-4 mt-5 px-3">
                        <h4 className="fw-bold">Contact us</h4>
                        <div className="">
                            <div className="fw-semibold">
                                <span>
                                    <i className="fs-5 fa-solid fa-location-dot fs-6 me-2" />
                                </span>
                                C-10, Block 10-A, Gulshan-e-Iqbal, Karachi
                            </div>
                            <div className="fw-semibold">
                                <span>
                                    <i className="fs-5 fa-solid fa-phone fs-6 me-2" />
                                </span>
                                021-34571822
                            </div>
                            <div className="fw-semibold">
                                <span>
                                    <i className="fs-5 fa-solid fa-envelope fs-6 me-2" />
                                </span>
                                contact@jzarr.com
                            </div>
                            <div className="fw-semibold">
                                <p>
                                    {" "}
                                    Operational Hours <br /> Monday to Saturday <br /> Timing: 11:00 AM to 8:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="row ">
                    <div className="col">
                        <p>@ 2024 JZARR EDUCATION | All rights reserved</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer