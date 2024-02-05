
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectsSlider = () => {
  return (
    <>
     <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-red-400 h-24'>Slide 1</SwiperSlide>
        <SwiperSlide className='bg-red-400 h-24'>Slide 1</SwiperSlide>
      </Swiper> 
    </>
  );
};

export default ProjectsSlider;