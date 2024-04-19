"use client";
import Image from "next/image";
import Link from "next/link";
import LongArrowIcon from "../../../public/assets/img/icon/long-arrow.svg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const PopularCourseThreeSlide = ({ cardImg1, cardImg2, cardImg3 }) => {
  return (
    <div className="course-slider owl-carousel owl-theme">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="single-courses-box popularcourseslide style-2 style-3 mb-25 position-relative">
            <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <ul className="d-flex list-unstyle p-0">
                  <li>
                    <i className="ri-star-fill"></i>
                  </li>
                  <li>
                    <span>(4.5Reveiw)</span>
                  </li>
                </ul>
              </div>
              <div className="cr-price">
                <h5 className="fs-16 mb-0">
                  <span className="price">$100/</span>{" "}
                  <span className="old-price">$400</span>
                </h5>
              </div>
            </div>
            <div className="image mb-20 position-relative">
              <Link href="/course-details" className="d-block">
                <Image src={cardImg1} alt="image" />
              </Link>
              <div className="cr-tag">
                <Link href="/course-details">Engineering</Link>
              </div>
            </div>
            <div className="content">
              <h3 className="mb-15 fs-20">
                <Link href="/course-details">
                  Full web Designing Course with 42 web Template.
                </Link>
              </h3>
              <p>
                The community created within the program is supportive and
                collaborative.
              </p>
            </div>
            <ul className="cr-items d-flex list-unstyle align-items-center">
              <li>
                <Link href="/course-details" className="btn style-one">
                  Know Details
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </li>
              <li>
                <span>By. Wade Warren</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-courses-box style-2 style-3 mb-25 position-relative">
            <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <ul className="d-flex list-unstyle p-0">
                  <li>
                    <i className="ri-star-fill"></i>
                  </li>
                  <li>
                    <span>(4.5Reveiw)</span>
                  </li>
                </ul>
              </div>
              <div className="cr-price">
                <h5 className="fs-16 mb-0">
                  <span className="price">$100/</span>{" "}
                  <span className="old-price">$400</span>
                </h5>
              </div>
            </div>
            <div className="image mb-20 position-relative">
              <Link href="/course-details" className="d-block">
                <Image src={cardImg2} alt="image" />
              </Link>
              <div className="cr-tag">
                <Link href="/course-details">Engineering</Link>
              </div>
            </div>
            <div className="content">
              <h3 className="mb-15 fs-20">
                <Link href="/course-details">
                  Full web Designing Course with 42 web Template.
                </Link>
              </h3>
              <p>
                The community created within the program is supportive and
                collaborative.
              </p>
            </div>
            <ul className="cr-items d-flex list-unstyle align-items-center">
              <li>
                <Link href="/course-details" className="btn style-one">
                  Know Details
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </li>
              <li>
                <span>By. Wade Warren</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-courses-box style-2 style-3 mb-25 position-relative">
            <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <ul className="d-flex list-unstyle p-0">
                  <li>
                    <i className="ri-star-fill"></i>
                  </li>
                  <li>
                    <span>(4.5Reveiw)</span>
                  </li>
                </ul>
              </div>
              <div className="cr-price">
                <h5 className="fs-16 mb-0">
                  <span className="price">$100/</span>{" "}
                  <span className="old-price">$400</span>
                </h5>
              </div>
            </div>
            <div className="image mb-20 position-relative">
              <Link href="/course-details" className="d-block">
                <Image src={cardImg3} alt="image" />
              </Link>
              <div className="cr-tag">
                <Link href="/course-details">Engineering</Link>
              </div>
            </div>
            <div className="content">
              <h3 className="mb-15 fs-20">
                <Link href="/course-details">
                  Full web Designing Course with 42 web Template.
                </Link>
              </h3>
              <p>
                The community created within the program is supportive and
                collaborative.
              </p>
            </div>
            <ul className="cr-items d-flex list-unstyle align-items-center">
              <li>
                <Link href="/course-details" className="btn style-one">
                  Know Details
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </li>
              <li>
                <span>By. Wade Warren</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-courses-box style-2 style-3 mb-25 position-relative">
            <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
              <div className="ratings">
                <ul className="d-flex list-unstyle p-0">
                  <li>
                    <i className="ri-star-fill"></i>
                  </li>
                  <li>
                    <span>(4.5Reveiw)</span>
                  </li>
                </ul>
              </div>
              <div className="cr-price">
                <h5 className="fs-16 mb-0">
                  <span className="price">$100/</span>{" "}
                  <span className="old-price">$400</span>
                </h5>
              </div>
            </div>
            <div className="image mb-20 position-relative">
              <Link href="/course-details" className="d-block">
                <Image src={cardImg3} alt="image" />
              </Link>
              <div className="cr-tag">
                <Link href="/course-details">Engineering</Link>
              </div>
            </div>
            <div className="content">
              <h3 className="mb-15 fs-20">
                <Link href="/course-details">
                  Full web Designing Course with 42 web Template.
                </Link>
              </h3>
              <p>
                The community created within the program is supportive and
                collaborative.
              </p>
            </div>
            <ul className="cr-items d-flex list-unstyle align-items-center">
              <li>
                <Link href="/course-details" className="btn style-one">
                  Know Details
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </li>
              <li>
                <span>By. Wade Warren</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="button-atrrangment">
        <div className="button-swiper">
          <div className="swiper-button-prev">
            <FaArrowLeftLong  className="slide-arrow-left"/>
          </div>
          <div className="swiper-button-next">
            <FaArrowRightLong  className="slide-arrow-right"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseThreeSlide;
