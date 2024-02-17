import './Slider.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation} from 'swiper/modules';

function Slider() {


  return (
    <div className='Slider'>
        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}    
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide>
                <img src="projectsImg/project01.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project02.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project01.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project02.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project01.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project02.jpg" alt="" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider