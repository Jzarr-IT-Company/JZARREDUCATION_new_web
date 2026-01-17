import React from 'react'

function VideoIframe({src}) {
    return (
        <div style={{ padding: "177.78% 0 0 0", position: "relative",height:"500px" }}>
            <iframe
                src={src}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "500px" 
                }}
                title="video review"
            ></iframe>
        </div>
    );
}

export default VideoIframe