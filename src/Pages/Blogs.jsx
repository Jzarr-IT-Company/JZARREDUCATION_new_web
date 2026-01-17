import React from 'react'
import BlogsBanner1 from '../Component/BlogsBanner1/BlogsBanner1'
import Navbar from '../Component/Navbar/Navbar'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import BlogsBanner2 from '../Component/BlogsBanner2/BlogsBanner2'

function Blogs() {
    return (
        <>
            <Header />
            <Navbar />
            <BlogsBanner1 />
            <BlogsBanner2/>
            <Footer/>
        </>
    )
}

export default Blogs