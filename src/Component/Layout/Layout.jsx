import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
        <Header />
        <Navbar />
        {/* <BeforeNavbar/> */}
        <Outlet />
        <Footer />
      </>
    );
  };

export default Layout