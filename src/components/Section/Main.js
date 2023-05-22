import './Main.scss'
import SuperLeague from "../SuperLeague/SuperLeague"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"

const Main = () => {

  return (
    <div className="section">
      <div className="inner">
        <div className="wrap">
          <h1>Первенство казахстана по футзалу</h1>
          <div className="flex">
            <SuperLeague />
            <Swiper
              className="swiper"
              modules={[Pagination]}
              spaceBetween={25}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <span className="text">Зима-2022</span>
                <img src="image_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <span className="text">Зима-2022</span>
                <img src="image_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <span className="text">Зима-2022</span>
                <img src="image_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <span className="text">Зима-2022</span>
                <img src="image_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <span className="text">Зима-2022</span>
                <img src="image_1.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main