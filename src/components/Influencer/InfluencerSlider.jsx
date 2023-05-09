import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import InlfuencerData from './InlfuencerData';


export default () => {
    const [breakpoint, setBreakpoint] = useState({
        slidesPerView: 4,
        spaceBetween: 50,
      });

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 320) {
            setBreakpoint({
              slidesPerView: 1,
              spaceBetween: 10,
            });
          } else if (window.innerWidth < 480) {
            setBreakpoint({
              slidesPerView: 1,
              spaceBetween: 20,
            });
          } else if (window.innerWidth < 768) {
            setBreakpoint({
              slidesPerView: 2.1,
              spaceBetween: 20,
            });
          } else if (window.innerWidth < 1024) {
            setBreakpoint({
              slidesPerView: 3.2,
              spaceBetween: 20,
            });
          } else if (window.innerWidth < 1200) {
            setBreakpoint({
              slidesPerView: 3.8,
              spaceBetween: 20,
            });
          }
           else {
            setBreakpoint({
              slidesPerView: 3.5,
              spaceBetween: 10,
            });
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const sliderData = InlfuencerData;
      const swipeSlide = sliderData.map(slide => (
        <SwiperSlide key={slide.id}>
          <a href={slide.link} className="swiper-content">
            <img src={slide.image} alt="" />
          </a>
        </SwiperSlide>
      ));
  return (
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-navigation-size': '20px'
        }}
        autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              stopOnLast: true,
              reverse: true,
              }}
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={breakpoint.spaceBetween}
        slidesPerView={breakpoint.slidesPerView}
        navigation
    >
      {swipeSlide}
    </Swiper>
  );
};