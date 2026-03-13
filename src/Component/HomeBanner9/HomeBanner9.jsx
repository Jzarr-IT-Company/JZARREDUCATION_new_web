import React from 'react';
import BuyAllCoursesButton from '../BuyAllCoursesBttn/BuyAllCoursesBttn';

function HomeBanner9({ dealRef }) {
    return (
        <div className="container-fluid py-5" ref={dealRef}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12 order-1 order-md-2">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/xEEn4O-p8OY?si=Dgc-CTo8II-oLULt"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        />
                        <a
                            href="https://www.youtube.com/watch?v=xEEn4O-p8OY"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                zIndex: 3,
                                background: '#fff',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                color: '#c4302b',
                                fontWeight: 'bold',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                        >
                            Watch on YouTube
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-12 order-2 order-md-1 d-flex align-items-center justify-content-center">
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '16px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                            padding: '2.5rem 2rem',
                            width: '100%',
                            maxWidth: '720px',
                            minHeight: '315px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <p className="display-5 fw-bold my-5" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            E-commerce with AI.
                            <br />
                            Enroll before <span style={{ color: '#1976d2' }}>1st April 2026</span> - <span style={{ color: '#d32f2f' }}>Limited Seats</span>
                        </p>
                        <div style={{ width: '100%' }}>
                            <BuyAllCoursesButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner9;
