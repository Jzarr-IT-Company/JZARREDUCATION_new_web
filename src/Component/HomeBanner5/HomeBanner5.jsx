import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTiktok, faEthereum, faAmazon, faEtsy, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUserAlt,faCode, faFilm, faPaintBrush  } from '@fortawesome/free-solid-svg-icons';  // Corrected import for faUserAlt


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomeBanner5() {
    const imgStyle = {
        width: "50px", 
        height: "50px", 
        objectFit: "contain"
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={5}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                            },
                            481: {
                                slidesPerView: 3,
                            },
                            781: {
                                slidesPerView: 4,
                            },
                            1026: {
                                slidesPerView: 5,
                            },
                            1201: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        {/* Facebook */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faFacebookF} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Facebook</p>
                        </SwiperSlide>
                        
                        {/* YouTube */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faYoutube} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">YouTube</p>
                        </SwiperSlide>
                        
                        {/* TikTok */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faTiktok} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">TikTok</p>
                        </SwiperSlide>
                        
                        {/* Ethereum (for Cryptocurrency) */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faEthereum} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Cryptocurrency</p>
                        </SwiperSlide>
                        
                        {/* Amazon */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faAmazon} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Amazon</p>
                        </SwiperSlide>
                        
                        {/* Etsy */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faEtsy} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Etsy</p>
                        </SwiperSlide>
                        
                        {/* Google Ads */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faGoogle} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Google Ads</p>
                        </SwiperSlide>

                        {/* Walmart */}
                        {/* <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faWalmart} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Walmart</p>
                        </SwiperSlide> */}

                        {/* LinkedIn */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faLinkedin} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">LinkedIn</p>
                        </SwiperSlide>

                        {/* Web Development */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCode} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Web Development</p>
                        </SwiperSlide>

                        {/* Graphic Designer */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faPaintBrush} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Graphic Designer</p>
                        </SwiperSlide>

                        {/* Video Editing */}
                        <SwiperSlide className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faFilm} style={imgStyle} />
                            <p className="fs-5 fw-semibold mt-2">Video Editing</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner5;
