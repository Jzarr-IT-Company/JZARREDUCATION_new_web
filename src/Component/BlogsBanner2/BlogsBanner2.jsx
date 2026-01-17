// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function BlogsBanner2() {
//     const navigate = useNavigate();
//     const handle = (name) => {
//         navigate(`/${name}`)
//         window.scroll(0, 0)
//     }
//     return (
//         <div className="container py-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-4 col-sm-6">
//                     <div
//                         className="card shadow-lg border-0"
//                         style={{ cursor: "pointer", width: "100%", borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s" }}
//                         onClick={() => { handle("blogs1") }}
//                     >
//                         <img
//                             src="https://recordedcoursesvideos.s3.ap-south-1.amazonaws.com/digital_marketing.webp"
//                             className="card-img-top"
//                             alt="Digital Marketing Strategies 2024"
//                             style={{ height: "250px", objectFit: "cover" }}
//                         />
//                         <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
//                             <h5 className="card-title text-dark" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
//                                 Top 10 Digital Marketing Strategies for 2024: Elevate Your Business Success
//                             </h5>
//                             <p className="card-text text-muted" style={{ fontSize: "0.9rem", marginTop: "10px" }}>
//                                 Discover the latest strategies to boost your business in the digital world, from SEO to social media trends.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4 col-sm-6">
//                     <div
//                         className="card shadow-lg border-0"
//                         style={{ cursor: "pointer", width: "100%", borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s" }}
//                         onClick={() => { handle("blogs2") }}
//                     >
//                         <img
//                             src="https://res.cloudinary.com/ds819uy6o/image/upload/v1731672430/file_cia26q.webp"
//                             className="card-img-top"
//                             alt="Digital Marketing Strategies 2024"
//                             style={{ height: "250px", objectFit: "contain" }}
//                         />
//                         <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
//                             <h5 className="card-title text-dark" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
//                             Web Development & Web Design: Essential Tips for Building Your Beginner Portfolio
//                             </h5>
//                             <p className="card-text text-muted" style={{ fontSize: "0.9rem", marginTop: "10px" }}>
//                                 Discover the latest strategies to boost your business in the digital world, from SEO to social media trends.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4 col-sm-6">
//                     <div
//                         className="card shadow-lg border-0"
//                         style={{ cursor: "pointer", width: "100%", borderRadius: "15px", overflow: "hidden", transition: "transform 0.3s" }}
//                         onClick={() => { handle("blogs3") }}
//                     >
//                         <img
//                             src="https://res.cloudinary.com/ds819uy6o/image/upload/v1731676589/file_edl9ur.webp"
//                             className="card-img-top"
//                             alt="Digital Marketing Strategies 2024"
//                             style={{ height: "250px", objectFit: "contain" }}
//                         />
//                         <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
//                             <h5 className="card-title text-dark" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
//                             The Ultimate Guide to On-Page SEO" – Detailed steps to optimize website content for search engines
//                             </h5>
//                             <p className="card-text text-muted" style={{ fontSize: "0.9rem", marginTop: "10px" }}>
//                                 Discover the latest strategies to boost your business in the digital world, from SEO to social media trends.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BlogsBanner2;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function BlogsBanner2() {
    const navigate = useNavigate();

    const blogs = [
        {
            id: "blogs1",
            title: "Top 10 Digital Marketing Strategies for 2024: Elevate Your Business Success",
            content: "Discover the latest strategies to boost your business in the digital world, from SEO to social media trends.",
            imgSrc: "https://recordedcoursesvideos.s3.ap-south-1.amazonaws.com/digital_marketing.webp",
            altText: "Digital Marketing Strategies 2024"
        },
        {
            id: "blogs2",
            title: "Web Development & Web Design: Essential Tips for Building Your Beginner Portfolio",
            content: "Learn the essential tips and tricks to build a successful beginner portfolio in web development and design.",
            imgSrc: "https://res.cloudinary.com/ds819uy6o/image/upload/v1731672430/file_cia26q.webp",
            altText: "Web Development & Web Design"
        },
        {
            id: "blogs3",
            title: "The Ultimate Guide to On-Page SEO: Detailed Steps to Optimize Website Content for Search Engines",
            content: "Get to know the in-depth strategies to optimize your website's on-page SEO and enhance your search engine rankings.",
            imgSrc: "https://res.cloudinary.com/ds819uy6o/image/upload/v1731676589/file_edl9ur.webp",
            altText: "On-Page SEO Guide"
        }
    ];

    const handle = (name) => {
        navigate(`/${name}`);
        window.scroll(0, 0);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                {blogs.map((blog) => (
                    <div key={blog.id} className="col-md-4 col-sm-6">
                        <div
                            className="card shadow-lg border-0"
                            style={{
                                cursor: "pointer",
                                width: "100%",
                                borderRadius: "15px",
                                overflow: "hidden",
                                transition: "transform 0.3s",
                            }}
                            onClick={() => handle(blog.id)}
                        >
                            <img
                                src={blog.imgSrc}
                                className="card-img-top"
                                alt={blog.altText}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
                                <h5 className="card-title text-dark" style={{ fontWeight: "600", fontSize: "1.25rem" }}>
                                    {blog.title}
                                </h5>
                                <p className="card-text text-muted" style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                                    {blog.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogsBanner2;
