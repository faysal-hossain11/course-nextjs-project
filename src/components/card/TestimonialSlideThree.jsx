

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Pagination, Navigation } from 'swiper/modules';

const TestimonialSlideThree = ({ testimonialImg, quoteImg }) => {
  return (
    <div className="testimonial-area newTestimonialSlide custom-nav pb-100">
      <div className="container">
        <div className="main-max-width">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="section-title mb-50 position-relative">
                <span className="d-block top-title style-3">Testimonial</span>
                <h2 className="fs-35">Education Is The Foundation.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="text-end">
                <Link
                  href="/instructor-sidebar"
                  className="btn style-one style-2 style-3"
                >
                  See All
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-3 owl-carousel owl-theme">
            <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
            >
              <SwiperSlide>
                <div className="single-testimonial-info">
                  <div className="image">
                    <Image src={testimonialImg} alt="image" />
                  </div>
                  <p>
                    Education empowers individuals by equipping them with
                    knowledge, skills, and critical thinking abilities.
                  </p>
                  <h3>Brooklyn Simmons</h3>
                  <span>UI/UX Designer</span>
                  <div className="cap-icon">
                    <Image src={quoteImg} alt="icon" />
                  </div>
                  <div className="quote-icon">
                    <i className="ri-double-quotes-l"></i>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-testimonial-info">
                  <div className="image">
                    <Image src={testimonialImg} alt="image" />
                  </div>
                  <p>
                    Education empowers individuals by equipping them with
                    knowledge, skills, and critical thinking abilities.
                  </p>
                  <h3>Brooklyn Simmons</h3>
                  <span>UI/UX Designer</span>
                  <div className="cap-icon">
                    <Image src={quoteImg} alt="image" />
                  </div>
                  <div className="quote-icon">
                    <i className="ri-double-quotes-l"></i>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-testimonial-info">
                  <div className="image">
                    <Image src={testimonialImg} alt="image" />
                  </div>
                  <p>
                    Education empowers individuals by equipping them with
                    knowledge, skills, and critical thinking abilities.
                  </p>
                  <h3>Brooklyn Simmons</h3>
                  <span>UI/UX Designer</span>
                  <div className="cap-icon">
                    <Image src={quoteImg} alt="image" />
                  </div>
                  <div className="quote-icon">
                    <i className="ri-double-quotes-l"></i>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-testimonial-info">
                  <div className="image">
                    <Image src={testimonialImg} alt="image" />
                  </div>
                  <p>
                    Education empowers individuals by equipping them with
                    knowledge, skills, and critical thinking abilities.
                  </p>
                  <h3>Brooklyn Simmons</h3>
                  <span>UI/UX Designer</span>
                  <div className="cap-icon">
                    <Image src={quoteImg} alt="image" />
                  </div>
                  <div className="quote-icon">
                    <i className="ri-double-quotes-l"></i>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlideThree;


