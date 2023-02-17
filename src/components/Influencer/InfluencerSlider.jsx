import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import ImageThree from '../../assets/unknown.png'

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
          } else {
            setBreakpoint({
              slidesPerView: 4,
              spaceBetween: 50,
            });
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      const sliderData = 
      [
        {
          id:1,
          image:ImageThree,
          name:"John Doe"
        },
        {
          id:2,
          image:ImageThree,
          name:"Jason Momo"
        },
        {
          id:3,
          image:ImageThree,
          name:"Ariana Anderson"
        },
        {
          id:4,
          image:ImageThree,
          name:"Ariana Anderson"
        },
        {
          id:5,
          image:ImageThree,
          name:"Ariana Anderson"
        },
        {
          id:6,
          image:ImageThree,
          name:"Ariana Anderson"
        },
      ]
      const swipeSlide = sliderData.map(slide => (
        <SwiperSlide key={slide.id}>
        <div className="swiper-content">
            <div>
                <img src={slide.image} loading="lazy" alt="" />
            </div>
            <div>
                <p>{slide.name}</p>
            </div>
        </div>
      </SwiperSlide>
      ))
  return (
    <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-navigation-size': '20px',
    }}
    modules={[Navigation, A11y]}
    spaceBetween={breakpoint.spaceBetween}
      slidesPerView={breakpoint.slidesPerView}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
  {swipeSlide}
    </Swiper>
  );
};