import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import story1 from '../../../assets/slider-1.png'
import story2 from '../../../assets/slider-2.png'
import story3 from '../../../assets/slider-3.png'
import story4 from '../../../assets/slider-4.png'
import story5 from '../../../assets/slider-5.png'
import story6 from '../../../assets/slider-6.png'

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Banner.scss";
const Banner = () => {
    return (
        <div className="stories">
            <div className="container">
                <div className="stories-content">
                <Swiper
                         modules={[Navigation, Pagination]} 
                        spaceBetween={20}
                        slidesPerView={6}
                        navigation={true}
                        className="swiper"
                            >
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story4} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story5} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story6} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story6} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story6} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="stories-item">
                                <img src={story6} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;
