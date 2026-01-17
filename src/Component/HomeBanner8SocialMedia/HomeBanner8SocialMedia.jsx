import React, { useMemo } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './HomeBanner8SocialMedia.css';

const HomeBanner8SocialMedia = React.memo(() => {
    // Memoize the Swiper slides
    const socialMediaSlides = useMemo(() => [
        {
            href: "https://www.facebook.com/jzarriteducation/",
            icon: faFacebookF,
            color: "#1877F2"
        },
        {
            href: "https://www.instagram.com/jzarri.teducation/?fbclid=IwZXh0bgNhZW0CMTEAAR3_OVsGWPIbZR3mcGXx6sIoBfb4hi1cqiq8maK4Cum3svMOkJ-mGaH1c3c_aem_5w6Ru_c-gbpXZ9N_rka6RQ",
            icon: faInstagram,
            customClass: "instagram-gradient"
        },
        {
            href: "https://youtube.com/@waseemjakhrani1?si=ig6kFjKsu-QVYclq",
            icon: faYoutube,
            customClass: "youtube-color"
        },
        {
            href: "https://www.linkedin.com/company/jzarritcompany/",
            icon: faLinkedin,
            color: "#0077B5"
        },
        {
            href: "#",
            icon: faTiktok
        }
    ], []);

    return (
        <div className="container-fluid py-5 d-md-none">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={2}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {socialMediaSlides.map((slide, index) => (
                            <SwiperSlide key={index} className="abc d-flex justify-content-center">
                                <a href={slide.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    {slide.customClass ? (
                                        <div className={slide.customClass}>
                                            <FontAwesomeIcon icon={slide.icon} />
                                        </div>
                                    ) : (
                                        <FontAwesomeIcon icon={slide.icon} style={{ color: slide.color }} />
                                    )}
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
});

export default HomeBanner8SocialMedia;
