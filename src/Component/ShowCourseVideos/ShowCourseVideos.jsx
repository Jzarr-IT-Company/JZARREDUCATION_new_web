import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../Context/Context';
import VideoPlayer from '../VideoysPlaying/VideosPlaying';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ShowCourseVideos({ data }) {
    const { buyCBuyourseId } = useGlobalState();
    const [videos, setVideos] = useState('');
    const [videosDes, setVideosDes] = useState('');
    const [videosTit, setVideosTit] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        getVideos();
    }, [data, buyCBuyourseId]);

    function getVideos() {
        setLoading(true);  
        setTimeout(() => {  
            data.forEach(course => {
                course.coursevideos.forEach(videoObj => {
                    videoObj.videos.forEach(video => {
                        if (video._id === buyCBuyourseId) {
                            setTitle(video.title);
                            setVideos(video.url);
                            setVideosTit(course.coursetitle);
                            setVideosDes(course.coursedescription);
                            setLoading(false); 
                        }
                    });
                });
            });
        }, 1000);  
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 mb-3">
                    {loading ? <Skeleton height={300} /> : <VideoPlayer url={videos} title={title}/>}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <h3 className='mb-3'>{loading ? <Skeleton width={200} /> : title}</h3>
                    <h3>{loading ? <Skeleton width={150} /> : videosTit}</h3>
                    <p>{loading ? <Skeleton count={3} /> : videosDes.title}</p>
                    <ul>
                        {loading ? (
                            <Skeleton count={3} />
                        ) : (
                            videosDes.bullets &&
                            videosDes.bullets.map((data, index) => {
                                if (!data) return null;
                                return (
                                    <li key={index}>
                                        <span className="fw-semibold">{data.title}</span> {data.description}
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShowCourseVideos;
