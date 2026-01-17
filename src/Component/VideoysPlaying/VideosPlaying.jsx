import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./videoplayings.css";

function VideoPlayer({ url, title }) {
    return (
        <>
            {url ? (
                <iframe
                    className="w-100"
                    src={`https://player.vimeo.com/video/${url}?title=0&byline=0&portrait=0&badge=0&autopause=0&share=0&autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ height: "400px" }}
                    title={title}
                ></iframe>
            ) : (
                // Skeleton loader for the video player
                <Skeleton
                    className="w-100"
                    height={400}
                    style={{ borderRadius: "8px" }}
                />
            )}
        </>
    );
}

export default VideoPlayer;
