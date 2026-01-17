import React from 'react';
import './BlogsBanner1.css'
function BlogsBanner1() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card position-relative">
            <img
              src="https://recordedcoursesvideos.s3.ap-south-1.amazonaws.com/blogs_banner_img.webp"
              className="card-img"
              style={{ height: '350px', objectFit: 'cover' }}
              alt="Blog Banner"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
              <h1 className="display-4 fw-bold ">Welcome to JZARR EDUCATION</h1>
              <p className="lead fw-semibold">Discover informative blogs, tips, and updates from JZARR Education.</p>
              <h3 className="mt-3 fw-bold">Our Blogs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner1;
