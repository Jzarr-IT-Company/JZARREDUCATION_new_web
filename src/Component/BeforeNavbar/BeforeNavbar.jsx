import React from 'react'
import { Link } from 'react-router-dom'

function BeforeNavbar() {
    return (
        <>
            <div className="container-fluid sticky-top bg-light py-2 d-none d-lg-block d-md-none abc">
                <div className="row">
                    <div className="col-12 d-flex">
                        <ul className="nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold active"
                                    aria-current="page"
                                    to={'/'}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold active"
                                    to={'/courses'}
                                >
                                    All Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold active"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold active"
                                >
                                    FAQ
                                </Link>

                            </li>
                            
                        </ul>
                        <div
                            className="d-flex align-items-center"
                            style={{ fontSize: 14, gap: 10 }}
                        >
                            <button
                                className="px-3 py-1 fw-semibold rounded-3 text-white border-none; text-decoration-none"
                                style={{ fontSize: 14, border: "none", backgroundColor: "#299d09" }}
                                id="joinClass"
                            >
                                <span>
                                    <i className="fa-solid fa-circle-dot me-2" /> Join Live Class
                                </span>
                            </button>
                            <button
                                className="px-3 py-1 fw-semibold rounded-3 text-white border-none; text-decoration-none"
                                style={{ fontSize: 14, border: "none", backgroundColor: "#023901" }}
                                id="physicalclasses"
                            >
                                <span>
                                    <i className="fa-solid fa-computer me-2" />
                                </span>{" "}
                                Physical Class
                            </button>
                                <Link
                                    className="px-3 text-decoration-none text-dark border-none" to={'/login'}
                                >
                                    Login
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BeforeNavbar