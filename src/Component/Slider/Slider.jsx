import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider.css"
const Slider = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="rounded-3 border border-dark slider-size"
            >
              <SwiperSlide className="abc">
                <div className="slide-content">
                  <img rel="preload" src={'https://res.cloudinary.com/dfxqjsude/image/upload/v1732890035/size3_zbvgco.jpg'} className="img-fluid w-100 rounded-3 slider-img slider-size" alt="Slide 1" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="abc">
                <div className="slide-content">
                  <img rel="preload" src={'https://res.cloudinary.com/dfxqjsude/image/upload/v1732890035/size2_xqze95.jpg'} className="img-fluid w-100 rounded-3 slider-img slider-size" alt="Slide 2" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="abc">
                <div className="slide-content">
                  <img rel="preload" src={'https://res.cloudinary.com/dfxqjsude/image/upload/v1732890223/size1_o8khsx.jpg'} className="img-fluid w-100 rounded-3 slider-img slider-size" alt="Slide 3" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
