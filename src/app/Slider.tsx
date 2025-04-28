import img1 from '../assets/slider/image_1.jpg';
import img2 from '../assets/slider/image_2.jpg';
import img3 from '../assets/slider/image_3.jpg';
import img4 from '../assets/slider/image_4.jpg';
import img5 from '../assets/slider/image_5.jpg';
import img6 from '../assets/slider/image_6.jpg';
import img7 from '../assets/slider/image_7.jpg';
import img8 from '../assets/slider/image_8.jpg';
import img9 from '../assets/slider/image_9.jpg';
import img10 from '../assets/slider/image_10.jpg';

import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import LazyImage from '../components/LazyImage';

const Slider = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=" select-none  puff-in-center relative min-w-[1098px] min-h-[686px] for-max max-w-[1099px]max-h-[686px] w-full h-full ">
      <Swiper
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className=" select-nonefor-max max-w-[1920px]max-h-[1080px] w-full h-full"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel={{ invert: false }}
        keyboard={{ enabled: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <LazyImage
              image={image}
              className={`${
                index == currentSlide ? 'kenburns-top' : ''
              } w-full h-full min-h-[1080px] min-w-[1820px] object-cover  `}
            />
            {/* <img src={image} alt="" loading="lazy" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
