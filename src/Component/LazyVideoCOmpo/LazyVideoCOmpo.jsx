import React, { useEffect, useRef, useState } from 'react'


function LazyVideo({ videoLink, index }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="col-md-4 col-sm-6">
            <div
                ref={videoRef}
                className="position-relative shadow rounded-3"
                style={{ paddingBottom: "56.25%", height: "500px" }}
            >
                {isLoaded ? (
                    <iframe
                        src={`${videoLink}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        title={`review-${index + 1}`}
                    />
                ) : (
                    <div
                        className="skeleton"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "8px",
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default LazyVideo