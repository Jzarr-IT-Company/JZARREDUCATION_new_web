import React from 'react'
import Header from '../Component/Header/Header'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import BlogsPageBanner1 from '../Component/BlogsPageBanner1/BlogsPageBanner1'
import BlogsPage1Banner2 from '../Component/BlogsPage1Banner2/BlogsPage1Banner2'

function BlogsPage1() {
    return (
        <>
            <Header />
            <Navbar />
            <BlogsPageBanner1 />
            <BlogsPage1Banner2/>
            <Footer />
        </>
    )
}

export default BlogsPage1