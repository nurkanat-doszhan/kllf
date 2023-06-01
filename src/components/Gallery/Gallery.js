import './Gallery.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
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
              navigation={true}
              modules={[Navigation]}
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
            {/*<Swiper
              className="swiperGallery"
              modules={[Pagination]}
              spaceBetween={25}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
            >
              {/* <SwiperSlide>
                <img src="gal_1.jpg" alt="" />
              </SwiperSlide> 
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery