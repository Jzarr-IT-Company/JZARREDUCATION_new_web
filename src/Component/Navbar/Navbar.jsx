import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../../Context/Context'
import PhysicalClass from '../PhysicalClass/PhysicalClass'
import LiveClasses from '../LiveClasses/LiveClasses'
import cookies from 'js-cookie'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
function Navbar() {
    const { isuser, userToken } = useGlobalState()
    const navigate = useNavigate();
    const onlineclasses = async () => {
        // toast.success("We’re almost there! 🔥 Our live class feature is under development and will be launching very soon. Get ready for real-time learning like never before!", {
        //     position: "top-right",
        //     autoClose: 3000,
        //   });
        Swal.fire({
            title: "🚀 Work in Progress!",
            text: "We’re almost there! 🔥 Our live class feature is under development and will be launching very soon. Get ready for real-time learning like never before!",
            icon: "info",
            confirmButtonText: "OK",
          });
        
    }
    const isPhysical = cookies.get("physicalclass");

    const PhysicalClasses = () => {
        if (isPhysical) {
            navigate('/t');  
        } else {
            navigate('/physical'); 
        }
    };

    const handleDahsboard = () => {
        navigate('/dashboard')
    }
    return (
        <>
        <ToastContainer/>
            <div className="container-fluid sticky-top bg-light py-2 d-none d-lg-block d-md-none abc">
                <div className="row">
                    <div className="col-12 d-flex">
                        <ul className="nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold active"
                                    aria-current="page"
                                    to={'/'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={'/about'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold"
                                    to={'/courses'}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    All Courses
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                >
                                    Students Support
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={"/testform"}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Apply For Test
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={"/jobform"}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Apply For Jobs
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={"/student community"}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Students Community
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={"/more reviews"}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Reviews
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary fw-semibold "
                                    to={"/blogs"}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                        <div
                            className="d-flex align-items-center"
                            style={{ gap: 4 }}
                        >
                            {
                                isuser ? (
                                    <>
                                        <button
                                            className="px-5 py-3 fw-semibold rounded-3 text-white border-none; text-decoration-none"
                                            style={{ fontSize: 14, border: "none", backgroundColor: "#299d09" }}
                                            id="joinClass"
                                            onClick={handleDahsboard}
                                        >
                                            <span>
                                                Dashboard
                                            </span>
                                        </button>
                                    </>
                                ) :
                                    (
                                        ""
                                    )
                            }
                            <button
                                className="px-3 py-3 fw-semibold rounded-3 text-white border-none; text-decoration-none"
                                style={{ fontSize: 14, border: "none", backgroundColor: "#299d09" }}
                                id="joinClass"
                                onClick={onlineclasses}
                            >
                                <span>
                                    <i className="fa-solid fa-circle-dot me-2" /> Join Live Class
                                </span>
                            </button>
                            <button
                                className="px-3 py-3 fw-semibold rounded-3 text-white border-none; text-decoration-none"
                                style={{ fontSize: 14, border: "none", backgroundColor: "#023901" }}
                                id="physicalclasses"
                                onClick={PhysicalClasses}
                            >
                                <span>
                                    <i className="fa-solid fa-computer me-2" />
                                </span>{" "}
                                Physical Class
                            </button>
                            {
                                isuser ? (
                                    <>
                                    </>
                                ) :
                                    (
                                        <>
                                            <Link
                                                className="px-3 text-decoration-none text-dark border-none" to={'/login'}
                                            >
                                                Login
                                            </Link>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar