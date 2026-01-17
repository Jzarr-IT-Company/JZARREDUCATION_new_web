import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

function DashboardSidebar() {
    const location = useLocation();
    const getLinkClass = (path) => {
        return location.pathname === path ? 'btn btn-success py-3 w-100 text-start' : 'btn btn-light py-3 w-100 text-start';
    };

    return (
        <div className=" border px-3 py-2">
            <div className="py-2">
                <Link className={getLinkClass('/home')} to={"/"}>Home</Link>
            </div>
            <div className="py-2">
                <Link className={getLinkClass('/dashboard')} to={"/dashboard"}>Dashboard</Link>
            </div>
            <div className="py-2">
                <Link className={getLinkClass('/dashboard/profile')}to={'/dashboard/profile'}>Profile</Link>
            </div>
            <div className="py-2">
                <Link className={getLinkClass('/dashboard/test')}to={'/dashboard/test'}>Apply for Test</Link>
            </div>
            <div className="py-2">
                <Link className={getLinkClass('/dashboard/job')}to={'/dashboard/job'}>Apply for Job</Link>
            </div>
            <div className="py-2">
                <Link className={getLinkClass('/dashboard/faqs')}to={'/dashboard/faqs'}>Support</Link>
            </div>
            <div className="py-2">
                <LogoutBtn/>
            </div>
        </div>
    );
}

export default DashboardSidebar;
