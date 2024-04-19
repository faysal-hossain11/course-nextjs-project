"use client";
import Image from "next/image";
import React from "react";
import LongArrow from "../../public/assets/img/icon/long-arrow.svg";
import StudentRev from "../../public/assets/img/all-img/student-rev.png";
import QuateIcon from "../../public/assets/img/icon/quate-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import QuoteImg from "../../public/assets/img/quoteimg.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import { FaQuoteLeft } from "react-icons/fa6";
// import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimonial = () => {
  return (
    <div className="testimonialSlide">
      <div className="testimonial-section custom-nav pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-5">
                <div className="content newTestimonialsWp">
                  <h4 className="sub-title mb-25"># Clients Testimonials</h4>
                  <h2 className="mb-30 fs-35">Lets what our student says</h2>
                  <p className="mb-50">
                    The community created within the program is supportive and
                    collaborative. Ive had the opportunity to connect with
                    fellow learners, share experiences, and even collaborate on
                    projects. It truly feels like a learning journey.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-cards owl-carousel owl-theme">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                      375: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                      },
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial-box">
                        <div className="info mb-25 d-flex align-items-center justify-content-between">
                          <div className="image d-flex align-items-center">
                            <Image src={StudentRev} alt="image" />
                            <div className="content">
                              <div>
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0 title">Customer</p>
                              </div>
                            </div>
                          </div>
                          <div className="icon">
                            <Image src={QuateIcon} alt="icon" />
                          </div>
                        </div>
                        <div className="box-content">
                          <p>
                            The impact of consulting services was evident in the
                            measurable results we achieved. Our organization is
                            now better positioned for success, and our team is
                            equipped with the knowledge and tools needed to
                            navigate future challenges.
                          </p>
                        </div>
                        <div className="ratings">
                          <ul className="d-flex list-unstyle p-0">
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-box">
                        <div className="info mb-25 d-flex align-items-center justify-content-between">
                          <div className="image d-flex align-items-center">
                            <Image src={StudentRev} alt="image" />
                            <div className="content">
                              <div>
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                              <div>
                                {/* <FaQuoteLeft className="quoteIcon" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="icon">
                            <Image src={QuateIcon} alt="icon" />
                          </div>
                        </div>
                        <div className="box-content">
                          <p>
                            The impact of consulting services was evident in the
                            measurable results we achieved. Our organization is
                            now better positioned for success, and our team is
                            equipped with the knowledge and tools needed to
                            navigate future challenges.
                          </p>
                        </div>
                        <div className="ratings">
                          <ul className="d-flex list-unstyle p-0">
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-box">
                        <div className="info mb-25 d-flex align-items-center justify-content-between">
                          <div className="image d-flex align-items-center">
                            <Image src={StudentRev} alt="image" />
                            <div className="content">
                              <div>
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                              <div>
                                {/* <FaQuoteLeft className="quoteIcon" /> */}
                              </div>
                            </div>
                          </div>
                          <div className="icon">
                            <Image src={QuateIcon} alt="icon" />
                          </div>
                        </div>
                        <div className="box-content">
                          <p>
                            The impact of consulting services was evident in the
                            measurable results we achieved. Our organization is
                            now better positioned for success, and our team is
                            equipped with the knowledge and tools needed to
                            navigate future challenges.
                          </p>
                        </div>
                        <div className="ratings">
                          <ul className="d-flex list-unstyle p-0">
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="button-atrrangment">
                    <div className="button-swiper button-swiper2">
                      <div className="swiper-button-prev">
                        <FaArrowLeftLong className="slide-arrow-left" />
                      </div>
                      <div className="swiper-button-next">
                        <FaArrowRightLong className="slide-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
