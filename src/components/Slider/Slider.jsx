import './Slider.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation} from 'swiper/modules';

import { useEffect, useState } from 'react';

function Slider() {
    
    const [slideNumber, setSliderNumber] = useState(3)

    function sizeOfThings(){
        if(screen.width > 768){
            setSliderNumber(3)
            return
        } else if(screen.width > 512){
            setSliderNumber(2)
            return
        }  else if(screen.width <= 512){
            setSliderNumber(1)
            return
        }
      };
      
      window.addEventListener('resize', function(){
        sizeOfThings();
      });

       useEffect(() => {
        sizeOfThings()
       },[])



  return (
    <div className='Slider'>
        <Swiper
        spaceBetween={20}
        slidesPerView={slideNumber}
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
                <img src="projectsImg/project01.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project02.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project03.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project04.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project05.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project06.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project07.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="projectsImg/project08.jpg" alt="trabalho recente" className='slideImg' data-swiper-autoplay="2000"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider