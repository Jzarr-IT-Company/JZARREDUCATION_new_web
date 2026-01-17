import { Suspense, lazy, useEffect, useRef } from 'react';
import { Spin } from 'antd';
import Slider from '../Component/Slider/Slider';
import ReviewsSlider from '../Component/ReviewsSlider/ReviewsSlider';
import AboutUsOfCEO from '../Component/AboutUsOfCEO/AboutUsOfCEO';
import ExpertsFromJZARR from '../Component/ExpertsFromJZARR/ExpertsFromJZARR';
import TotalEnrolled from '../Component/TotallEntrolled/TotallEntrolled';
import ScrollToTop from '../Component/ScrollTop/ScrollTop';
import MarqueeText from '../Component/MarqueeText/MarqueeText';
import HomeBanner3 from '../Component/HomeBanner3/HomeBanner3';
import HomeBanner5 from '../Component/HomeBanner5/HomeBanner5';
import HomeBanner7 from '../Component/HomeBanner7/HomeBanner7';
import HomeBanner8 from '../Component/HomeBanner8/HomeBanner8';
import HomeBanner9 from '../Component/HomeBanner9/HomeBanner9';

const Courses = lazy(() => import('../Component/Courses/Courses'));
const HomeBanner4 = lazy(() => import('../Component/HomeBanner4/HomeBanner4'));

function Home() {
  const dealRef = useRef(null);
  return (
    <>
      <ScrollToTop />
      <Slider />
      <MarqueeText />
      <HomeBanner9 dealRef={dealRef}/>
      <Suspense fallback={<div className='d-flex justify-content-center align-items-center' style={{ height: "60vh" }}><Spin /></div>}>
        <Courses dealRef={dealRef}/>
      </Suspense>
      <HomeBanner5 />
      <HomeBanner3 />
      <Suspense fallback={<div className='d-flex justify-content-center align-items-center' style={{ height: "60vh" }}><Spin /></div>}>
        <HomeBanner4 />
      </Suspense>
      <ReviewsSlider />
      <HomeBanner7 />
      <HomeBanner8 />
      <AboutUsOfCEO />
      <ExpertsFromJZARR />
      <TotalEnrolled />
    </>
  );
}

export default Home;
