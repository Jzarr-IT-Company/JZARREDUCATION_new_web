import React from 'react'

function BlogsPage3Banner1() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card position-relative">
                            <img
                                src="https://res.cloudinary.com/ds819uy6o/image/upload/v1731676589/file_edl9ur.webp"
                                className="card-img"
                                style={{ height: '350px', objectFit: 'cover' }}
                                alt="Blog Banner"
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
                                <h1 className="display-5 fw-bold ">The Ultimate Guide to On-Page SEO" – Detailed steps to optimize website content for search engines
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

export default BlogsPage3Banner1