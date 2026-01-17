import React from 'react'
import './BlogsPageBanner1.css'

function BlogsPageBanner1() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card position-relative">
                        <img
                            src="https://res.cloudinary.com/ds819uy6o/image/upload/v1731669286/file_k5vyuk.webp"
                            className="card-img"
                            style={{ height: '350px', objectFit: 'cover' }}
                            alt="Blog Banner"
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
                            <h1 className="display-5 fw-bold ">Top 10 Digital Marketing Strategies for 2024: Elevate Your Business Success</h1>
                            <h3 className="mt-3 fw-bold">Blogs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsPageBanner1