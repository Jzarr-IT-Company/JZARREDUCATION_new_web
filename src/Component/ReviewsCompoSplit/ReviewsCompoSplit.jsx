import React from 'react'
import LazyVideo from '../LazyVideoCOmpo/LazyVideoCOmpo';

function ReviewsCompoSplit() {
    const videoLinks = [
        "https://player.vimeo.com/video/1054523389",
        "https://player.vimeo.com/video/1054526599",
        "https://player.vimeo.com/video/1054526840",
        "https://player.vimeo.com/video/1026094597",
        "https://player.vimeo.com/video/1026094418",
        "https://player.vimeo.com/video/1026094732",
        "https://player.vimeo.com/video/1026094503",
        "https://player.vimeo.com/video/1026094443",
        "https://player.vimeo.com/video/1026094570",
        "https://player.vimeo.com/video/1026094687",
        "https://player.vimeo.com/video/1026094656",
        "https://player.vimeo.com/video/1026094623",
        "https://player.vimeo.com/video/1026094532",
        "https://player.vimeo.com/video/1026113212"
    ];

    return (
        <>
            {videoLinks.map((link, index) => (
                <LazyVideo key={index} videoLink={link} index={index} />
            ))}
        </>
    )
}

export default ReviewsCompoSplit