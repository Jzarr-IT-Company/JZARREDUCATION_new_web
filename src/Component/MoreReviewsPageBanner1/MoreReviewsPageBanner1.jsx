import React, { Suspense } from 'react';

const VideoIframe = React.lazy(() => import('../VideoIframe/VideoIframe'));

const videoData = [
    "https://player.vimeo.com/video/1026094597?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094418?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094732?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094503?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094443?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094570?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094687?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094656?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094623?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026094532?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026113212?badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026115288?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
    "https://player.vimeo.com/video/1026115264?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    "https://player.vimeo.com/video/1026115194?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    "https://player.vimeo.com/video/1026115244?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    "https://player.vimeo.com/video/1026115120?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    "https://player.vimeo.com/video/1026115168?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",


];

function MoreReviewsPageBanner1() {
    return (
        <div className="container py-5">
            <h3 className='text-center mb-4 fs-2 fw-bold text-capitalize'>Real Success Stories</h3>
            <div className="row" style={{ gap: "10px 0px" }}>
                {videoData.map((src, index) => (
                    <div className="col-md-4 col-sm-6" key={index} style={{ height: "500px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                        <Suspense fallback={<div>Loading video...</div>}>
                            <VideoIframe src={src} />
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoreReviewsPageBanner1;
