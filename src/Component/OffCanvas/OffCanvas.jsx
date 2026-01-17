import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PhysicalClass from '../PhysicalClass/PhysicalClass';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';
import LiveClasses from '../LiveClasses/LiveClasses';
import logo from '../../assets/logo.svg'

function OffCanvasBtn() {
    const { userToken } = useGlobalState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Function to handle click on links to close the Offcanvas
    const handleLinkClick = () => {
        handleClose();
    };

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <i className="fa-solid fa-bars-staggered fs-5"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <div className="">
                            <LiveClasses />
                            <PhysicalClass />
                        </div>
                        <div className="py-3 px-2 bg_color">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={'/'}
                                onClick={handleLinkClick}
                            >
                                Home
                            </Link>
                        </div>
                        <div className=" py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={'/courses'}
                                onClick={handleLinkClick}
                            >
                                All Courses
                            </Link>
                        </div>
                        <div className=" py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={'/about'}
                                onClick={handleLinkClick}
                            >
                                About
                            </Link>
                        </div>
                        <div className=" py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={'/faqs'}
                                onClick={handleLinkClick}
                            >
                                FAQ's
                            </Link>
                        </div>
                        <div className="py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none "
                                to={"/jobform"}
                                onClick={handleLinkClick}
                            >
                                Apply For Jobs
                            </Link>

                        </div>
                        <div className="py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={"/testform"}
                                onClick={handleLinkClick}
                            >
                                Apply For Test
                            </Link>

                        </div>
                        <div className="py-3 px-2">
                            <Link
                                className="link fw-semibold text-dark fs-5 text-decoration-none"
                                to={"/testform"}
                                onClick={handleLinkClick}
                            >
                                Students Community
                            </Link>

                        </div>
                        <div className=" py-3 px-2">
                            {
                                userToken ? (
                                    <>
                                        <Link className="link fw-semibold text-dark fs-5 text-decoration-none"
                                            to={'/dashboard'}
                                            onClick={handleLinkClick}
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link className="link fw-semibold text-dark fs-5 text-decoration-none"
                                            to={'/login'}
                                            onClick={handleLinkClick}
                                        >
                                            Login
                                        </Link>
                                    </>
                                )
                            }

                        </div>
                    </>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasBtn;