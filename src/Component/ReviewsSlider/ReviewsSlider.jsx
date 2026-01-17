
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import userLogo from '../../assets/user.png'
import Rating from '../Rating/Rating';
import HalfRating from '../HalfRaating/Halfrating';
import WriteReviews from '../WriteReviews/WriteReviews';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewsSlider() {
const [reviewsData,setReviewsData]=useState([])
    useEffect(()=>{
        (async()=>{
            const response = await axios('https://main-server-zeta.vercel.app/getAllReviews');
            setReviewsData(response.data.data)
        })()
    },[])
    return (
        <>
            <div className="container py-5">
                <h3 className='py-4' style={{ textAlign: 'center' }}>Reviews From Our Satisfied Students</h3>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={2}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                            className='rounded-3'
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            This is the second program I have taken with
                                            Jzarr. I
                                            love how I can work at my own pace. The tutors are fantastic and so
                                            helpful.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Alisha Hussain</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Fantastic course. Easy to follow. Plenty of help
                                            if
                                            requested. Highly recommend to others.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Subhan Khan</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            In-depth course material and very organised
                                            Assessment
                                            instructions. Very quick results as well!
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Abdul Rehman</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            Very helpful course and nice tutors. I learned a
                                            lot
                                            throughout the course. It will definitely help when I start my new
                                            career.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Haider Ali</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            I have had the best online classes, this was the
                                            best
                                            decision I have ever made to join Jzarr Education.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Shehzad Durrani</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='abc'>
                                <div className="card  mx-2" style={{}}>
                                    <div className="card-body">
                                        <p className="card-text text-center">
                                            I really enjoyed this course! I learnt everything
                                            at my
                                            home and received wonderful feedback!
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={userLogo}
                                                alt=""
                                                className='border'
                                                style={{ height: 60, width: 60, borderRadius: "50%" }}
                                            />
                                            <div className="mt-3">
                                                <h6 style={{ marginBottom: 0 }} className="card-subtitle text-body-secondary">Sania Amin</h6>
                                                <div className="ms-2" style={{ marginTop: 0 }}>
                                                    <HalfRating />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-end">
                        <WriteReviews />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewsSlider