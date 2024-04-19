"use client";
import React, { createContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import PartnerLogo1 from "../../public/assets/img/partner/partner-logo-1.png";
import PartnerLogo2 from "../../public/assets/img/partner/partner-logo-2.png";
import PartnerLogo3 from "../../public/assets/img/partner/partner-logo-3.png";
import PartnerLogo4 from "../../public/assets/img/partner/partner-logo-4.png";
import PartnerLogo5 from "../../public/assets/img/partner/partner-logo-5.png";

const BrandSlide = () => {
  console.log(createContext);
  return (
    <div>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="partner-title text-center">
              <h4>Trusted by the worlds best</h4>
            </div>
            <div className="partner-slider text-center owl-carousel owl-nav">
              <Swiper
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  575: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo1} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo2} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo3} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo4} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo5} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo2} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo3} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo4} alt="partner-logo" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-partner-card">
                    <Image src={PartnerLogo5} alt="partner-logo" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
