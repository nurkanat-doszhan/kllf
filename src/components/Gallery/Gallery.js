import './Gallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination"
import { Pagination } from "swiper"

const Gallery = () => {
  return (
    <div className="section">
      <div className="inner">
        <div className="wrap">
          <h2>Галерея</h2>
          <div className="gallery">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
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