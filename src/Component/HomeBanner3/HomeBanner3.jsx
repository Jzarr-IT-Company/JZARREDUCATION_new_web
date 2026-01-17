import React from 'react'
function HomeBanner3() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <h3 className=' text-center mb-5'>How to login or signup from mobile / Laptop</h3>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className='fs-5 fw-semibold my-3'>Login/Signup (Desktop version)</p>
                        <iframe
                            className="w-100"
                            src={`https://player.vimeo.com/video/1051563929?title=0&byline=0&portrait=0&badge=0&autopause=0&share=0&autoplay=0`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            style={{ height: "400px" }}
                            title={'Login/Signup (Mobile version)'}
                        ></iframe>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <p className='fs-5 fw-semibold my-3'>Login/Signup (Mobile version)</p>
                        <iframe
                            className="w-100"
                            src={`https://player.vimeo.com/video/1051563424?title=0&byline=0&portrait=0&badge=0&autopause=0&share=0&autoplay=0`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            style={{ height: "400px" }}
                            title={'Login/Signup (Mobile version)'}
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner3