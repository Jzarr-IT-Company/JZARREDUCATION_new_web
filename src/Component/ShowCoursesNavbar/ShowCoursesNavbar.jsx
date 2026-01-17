import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import user from "../../assets/user.png";
import ShowCoursesNavbarSidebar from '../ShowCoursesNavbarSidebar/ShowCoursesNavbarSidebar';
import { useGlobalState } from '../../Context/Context';


function ShowCoursesNavbar() {
    const { courseData,stuName, stuEmail } = useGlobalState();
    const [coursesData, setCoursesdata] = useState();
    useEffect(() => {
        const fetchData = () => {
            courseData.map((data) => {
                setCoursesdata(data)
            })
        }
        fetchData()
    }, [courseData])
    return (
        <nav className='d-flex align-items-center justify-content-between border px-3 py-2 bg-light'>
            <div className='d-flex align-items-center'>
                <div className="d-lg-none d-xl-none d-xxl-none">
                    <ShowCoursesNavbarSidebar data={coursesData} />
                </div>
                <Link to="/">
                    <img src={logo} className='img-fluid' alt="Company Logo" />
                </Link>
            </div>
            <div className="d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex align-items-center" style={{ gap: "10px" }}>
                <img src={user} width={60} className='border' style={{ borderRadius: "50%" }} alt="User Profile" />
                <div className='mt-3'>
                    <p className="text-capitalize" style={{ color: "#818181", marginBottom: 0 }}>{stuName}</p>
                    <p style={{ color: "#818181", marginTop: 0 }} id="nemail">{stuEmail}</p>
                </div>
            </div>
        </nav>
    );
}

export default ShowCoursesNavbar