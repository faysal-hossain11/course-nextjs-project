"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Thumbs } from "swiper/modules";

import Thumb1 from "../../public/assets/img/all-img/shop/product-thum.png";
import Thumb2 from "../../public/assets/img/all-img/shop/product-thum-2.png";
import Thumb3 from "../../public/assets/img/all-img/shop/product-thum-3.png";
import Thumb4 from "../../public/assets/img/all-img/shop/product-thum-4.png";
import Product1 from "../../public/assets/img/all-img/shop/product-display-2.jpg";

const ProductDetailsSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide product-gallery"
    >
      <div className="carousel-indicators"></div>
      <div className="carousel-inner">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper productTopSwiper"
        >
          <SwiperSlide>
            <Image src={Thumb1} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Thumb2} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Thumb3} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Thumb4} alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2 newMySwiper2 "
        >
          <SwiperSlide>
            <Image src={Product1} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product1} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product1} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Product1} alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailsSlide;
