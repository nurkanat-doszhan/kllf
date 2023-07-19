import './Gallery.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";

const Gallery = () => {
  return (
    <div className="section">
      <div className="inner">
        <div className="wrap">
          <h2>Галерея</h2>
          <div className="gallery">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="swiperGallery"
            >
              <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery