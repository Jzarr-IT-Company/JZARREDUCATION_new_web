import React from 'react';
import BuyAllCoursesButton from '../BuyAllCoursesBttn/BuyAllCoursesBttn';

function HomeBanner9({dealRef}) {
    

    return (
        <div className="container-fluid py-5" ref={dealRef}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12 order-1 order-md-2">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <iframe
                            src="https://player.vimeo.com/video/1028913616?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder={0}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            title="Video+for+Website+main+seq"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-12 order-2 order-md-1">
                    <p className="display-5 fw-bold my-4">
                        Get access to all 23 courses for just 12,000 PKR! Enroll before the last date, 23 MAR 2026.
                    </p>
                    <BuyAllCoursesButton />
                </div>
            </div>
        </div>
    );
}

export default HomeBanner9;
