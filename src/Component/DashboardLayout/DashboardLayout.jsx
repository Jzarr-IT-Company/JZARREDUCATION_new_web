import React from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import "./dashboardLayout.css"

function DashboardLayout() {
    return (
        <>
            <div>
                <div className="sticky-top">
                    <DashboardNavbar />
                </div>
                <div className="container-fluid">
                    <div className="row" style={{ }}>  
                        <div className="col-lg-3 col-md-3 p-0 side-bar">
                            <DashboardSidebar />
                        </div>
                        <main className="col-lg-9 border overflow-auto main-content" style={{ height: '100%' }}>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;

