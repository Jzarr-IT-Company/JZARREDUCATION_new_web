import React from 'react'
import './BlogsPage2Banner1.css'

function BlogsPage2Banner1() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card position-relative">
                            <img
                                src="https://recordedcoursesvideos.s3.ap-south-1.amazonaws.com/web-development-composition_1284-4532.webp"
                                className="card-img"
                                style={{ height: '350px', objectFit: 'cover' }}
                                alt="Blog Banner"
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
                                <h1 className="display-5 fw-bold ">Web Development & Web Design: Essential Tips for Building Your Beginner Portfolio
                                </h1>
                                <h3 className="mt-3 fw-bold">Blogs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsPage2Banner1