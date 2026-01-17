import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import user from "../../assets/user.png";
import MainDashboardSideBar from '../MainDashboardSidebar/MainDashboardSidebar';
import { useGlobalState } from '../../Context/Context';

function DashboardNavbar() {
    const { stuName, stuEmail,userProfileImage } = useGlobalState();
    return (
        <>
            <nav className='d-flex align-items-center justify-content-between border px-3 py-2 bg-light'>
                <div className='d-flex align-items-center'>
                    <div className="d-lg-none d-xl-none d-xxl-none">
                        <MainDashboardSideBar />
                    </div>
                    <Link to="/">
                        <img src={ logo} className='img-fluid' alt="Company Logo" />
                    </Link>
                </div>
                <div className="d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex align-items-center" style={{ gap: "10px" }}>
                    <img src={userProfileImage ? userProfileImage:user} width={60} height={60} className='' style={{ borderRadius: "50%" }} alt="User Profile" />
                    <div className='mt-3'>
                        <p className="text-capitalize" style={{ color: "#818181", marginBottom: 0 }}>{stuName}</p>
                        <p style={{ color: "#818181", marginTop: 0 }} id="nemail">{stuEmail}</p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DashboardNavbar;
