import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import logo from '../../assets/logo.svg'

function MainDashboardSideBar() {
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        handleClose();
        return location.pathname === path ? 'btn btn-success py-3 w-100 text-start' : 'btn btn-light py-3 w-100 text-start';
    };

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <i className="fa-solid fa-bars-staggered fs-5"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} width={70} alt="" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={"/"}>Home</Link>
                        </div>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={`btn btn-success py-3 w-100 text-start`} to={"/dashboard"}>Dashboard</Link>
                        </div>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={`btn btn-success py-3 w-100 text-start`} to={'/dashboard/profile'}>Profile</Link>
                        </div>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={`btn btn-success py-3 w-100 text-start`} to={'/dashboard/test'}>Apply for Test</Link>
                        </div>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={`btn btn-success py-3 w-100 text-start`} to={'/dashboard/job'}>Apply for Job</Link>
                        </div>
                        <div className="py-2">
                            <Link onClick={() => { handleClose() }} className={`btn btn-success py-3 w-100 text-start`} to={'/dashboard/faqs'}>Support</Link>
                        </div>
                        <div className=" py-3 px-2">
                            <LogoutBtn />
                        </div>
                    </>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MainDashboardSideBar;