"use client";
import Header2 from "@/components/Header/Header2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import TitleIcon from "../../../public/assets/img/icon/top-title.svg";
import GlobalImg from "../../../public/assets/img/icon/global.svg";
import BannerIcon from "../../../public/assets/img/banner/banner-icon.svg";
import BannerImg from "../../../public/assets/img/banner/banner-1.png";
import BannerImg2 from "../../../public/assets/img/banner/banner-2.png";
import BannerImg3 from "../../../public/assets/img/banner/banner-3.png";
import BannerShape1 from "../../../public/assets/img/banner/shape-1.png";
import TopTitleImg from "../../../public/assets/img/icon/top-title.svg";
import CategoryIcon from "../../../public/assets/img/icon/catg-icon-6.svg";
import CategoryIcon4 from "../../../public/assets/img/icon/catg-icon-4.svg";
import CategoryIcon5 from "../../../public/assets/img/icon/catg-icon-5.svg";
import CategoryIcon2 from "../../../public/assets/img/icon/catg-icon-2.svg";
import WhiteLogo2 from "../../../public/assets/img/icon/long-arrow-2.svg";
import AboutImg from "../../../public/assets/img/all-img/about-image-2.jpg";
import AboutBgShape from "../../../public/assets/img/all-img/about-shape-bg.png";
import AboutShape from "../../../public/assets/img/all-img/about-shape.png";
import PopularSub1 from "../../../public/assets/img/icon/popular-subject-1.svg";
import PopularSub2 from "../../../public/assets/img/icon/popular-subject-2.svg";
import PopularSub3 from "../../../public/assets/img/icon/popular-subject-3.svg";
import PopularIcon from "../../../public/assets/img/icon/popular-icon-bg.svg";
// import Course8 from "../../../public/assets/img/all-img/course-8.jpg";
// import Course7 from "../../../public/assets/img/all-img/course-7.jpg";
// import Course6 from "../../../public/assets/img/all-img/course-6.jpg";
// import Course5 from "../../../public/assets/img/all-img/course-9.jpg";
// import Course4 from "../../../public/assets/img/all-img/course-10.jpg";
// import Course3 from "../../../public/assets/img/all-img/course-11.jpg";
import Testimonial1 from "../../../public/assets/img/all-img/single-testimonial-1.jpg";
import Testimonial2 from "../../../public/assets/img/all-img/single-testimonial-2.jpg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css/pagination";
import BrandSlide from "@/components/BrandSlide";
import CourseFiltersTwo from "@/components/CourseFiltersTwo";
import TimerCounter from "@/components/TimerCounter";
import Counter from "@/components/Counter";

const Home2 = () => {
  return (
    <>
      {/* start the header component two */}
      <Header2 />
      {/* end the header component two */}

      {/* start the banner section */}
      <div className="banner-area index-two-banner position-relative z-1">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner-content position-relative">
                  <div className="title">
                    <span className="d-inline-block top-title">
                      <Image src={TitleIcon} alt="icon" />
                      The Leader in online learning
                    </span>
                    <h1>A Better Learning Journey Future Starts Here.</h1>
                    <p>
                      In the dynamic landscape of todays professional world, the
                      key to success lies in continuous learning and skill
                      development. As industries evolve and technology.
                    </p>
                  </div>
                  <div className="banner-btn d-flex align-items-center">
                    <Link
                      href="/course-details"
                      className="btn style-one style-2"
                    >
                      Explore Courses
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                    <div className="contact d-flex align-items-center">
                      <div className="icon d-block">
                        <i className="ri-phone-fill"></i>
                      </div>
                      <div className="text">
                        <span>Need Help</span>
                        <Link className="d-block" href="tel:239555-0108">
                          (239) 555-0108
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="global-icon">
                    <Image className="rotate" src={GlobalImg} alt="image" />
                  </div>
                  <div className="shape-icon">
                    <Image src={BannerIcon} alt="icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-image position-relative z-1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image">
                        <Image src={BannerImg} alt="banner-image" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <Image src={BannerImg2} alt="banner-image" />
                      </div>
                    </div>
                  </div>
                  <div className="image-3 text-center position-relative z-1">
                    <Image src={BannerImg3} alt="banner-image" />
                    <Link
                      href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
                      className="paly popup-youtube"
                      target="_blank"
                    >
                      <i className="ri-play-fill"></i>
                    </Link>
                  </div>
                  {/* <div className="banner-complete d-flex align-items-center">
                    <div className="icon">
                      <Image src={BannerComplete} alt="icon" />
                    </div>
                    <div className="content">
                      <span className="d-block">Complete Graduation</span>
                      <div className="d-flex align-items-center">
                        <h5 className="count">35K</h5>
                      </div>
                    </div>
                  </div> */}
                  <Counter />
                  <div className="banner-shape">
                    <Image src={BannerShape1} alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the banner section */}

      {/* start the partner section */}
      <BrandSlide />
      {/* end the partner section */}

      {/* start the category section */}
      <div className="category-section pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title text-center mb-50">
              <div className="content">
                <span className="d-inline-block top-title">
                  <Image src={TopTitleImg} alt="icon" />
                  Browse categories
                </span>
                <h2 className="mb-0 fs-35">Explore Our Categories</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-category-card position-relative">
                  <div className="icon">
                    <Image src={CategoryIcon} alt="icon" />
                  </div>
                  <h3>Graphic Design</h3>
                  <Link href="/course-details">
                    500+ Courses
                    <Image src={WhiteLogo2} alt="icon" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-category-card position-relative">
                  <div className="icon">
                    <Image src={CategoryIcon2} alt="icon" />
                  </div>
                  <h3>Management</h3>
                  <Link href="/course-details">
                    100+ Courses
                    <Image src={WhiteLogo2} alt="icon" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-category-card position-relative">
                  <div className="icon">
                    <Image src={CategoryIcon5} alt="icon" />
                  </div>
                  <h3>Marketing & sales</h3>
                  <Link href="/course-details">
                    300+ Courses
                    <Image src={WhiteLogo2} alt="icon" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-category-card position-relative">
                  <div className="icon">
                    <Image src={CategoryIcon4} alt="icon" />
                  </div>
                  <h3>Art & Design</h3>
                  <Link href="//course-details">
                    450+ Courses
                    <Image src={WhiteLogo2} alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the category section */}

      {/* start the home two about section */}
      <div className="about-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="title">
                    <span className="d-block top-title">
                      <Image src={TitleIcon} alt="icon" />
                      About Us
                    </span>
                    <h1>Word Best Creative Online Course.</h1>
                    <p>
                      Delve into Insecure guided by industry experts and
                      seasoned professionals. Our carefully curated curriculum
                      is designed to impart not just theoretical knowledge but
                      practical insights gained from real-world experience.
                    </p>
                    <p>
                      Learn by doing. Our course emphasizes hands-on projects,
                      case studies, and interactive sessions to ensure you can
                      apply your newfound knowledge directly to real-world
                      scenarios.
                    </p>
                  </div>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2"
                  >
                    Explore Courses
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image position-relative z-1">
                  <Image src={AboutImg} alt="about-image" />
                  <div className="about-shape position-absolute">
                    <Image src={AboutShape} alt="shape" />
                  </div>
                  <div className="about-experiences-info z-1">
                    <h3>
                      16+ Years <span>Of</span> Experiences
                    </h3>
                    <div className="bg-shape">
                      <Image src={AboutBgShape} alt="shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the home two about section */}

      {/* start the popular section */}
      <div className="popular-subject-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4">
                <div className="popular-subject-content">
                  <span className="d-block top-title">
                    Popular Subject
                    <Image src={TitleIcon} alt="icon" />
                  </span>
                  <h2>Provide it & techno Subject For you</h2>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor"
                    className="btn style-one style-2"
                  >
                    Explore More
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-popular-card">
                  <div className="icon position-relative z-1">
                    <Image src={PopularSub1} alt="icon" />
                    <div className="icon-bg">
                      <Image src={PopularIcon} alt="icon" />
                    </div>
                  </div>
                  <h3>Business Studies</h3>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor-sidebar"
                    className="btn style-one"
                  >
                    View Subject
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-popular-card">
                  <div className="icon position-relative z-1">
                    <Image src={PopularSub2} alt="icon" />
                    <div className="icon-bg">
                      <Image src={PopularIcon} alt="icon" />
                    </div>
                  </div>
                  <h3>Artist & Design</h3>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor-sidebar"
                    className="btn style-one"
                  >
                    View Subject
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-popular-card">
                  <div className="icon position-relative z-1">
                    <Image src={PopularSub3} alt="icon" />
                    <div className="icon-bg">
                      <Image src={PopularIcon} alt="icon" />
                    </div>
                  </div>
                  <h3>Machine Learning</h3>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor-sidebar"
                    className="btn style-one"
                  >
                    View Subject
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-popular-card">
                  <div className="icon position-relative z-1">
                    <Image src={PopularSub1} alt="icon" />
                    <div className="icon-bg">
                      <Image src={PopularIcon} alt="icon" />
                    </div>
                  </div>
                  <h3>Business Studies</h3>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor-sidebar"
                    className="btn style-one"
                  >
                    View Subject
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-popular-card">
                  <div className="icon position-relative z-1">
                    <Image src={PopularSub2} alt="icon" />
                    <div className="icon-bg">
                      <Image src={PopularIcon} alt="icon" />
                    </div>
                  </div>
                  <h3>Artist & Design</h3>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link
                    href="/instructor-sidebar"
                    className="btn style-one"
                  >
                    View Subject
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the popular section */}

      {/* start the course section */}
      
      <CourseFiltersTwo />
      {/* end the course section */}

      {/* start the our testimonial section */}

      <div className="testimonial-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-testimonial-content">
                  <span className="d-block top-title">
                    <Image src={TopTitleImg} alt="icon" />
                    Latest Testimonial
                  </span>
                  <h2>Lets what our student Says.</h2>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link href="/blog-list" className="btn style-one style-2">
                    See All
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="testimonial-slider-2 owl-carousel owl-theme">
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                      // el: '.swiper-pagination',
                      // type: 'bullets',
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    // navigation={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="single-testimonial-card">
                        <div className="user d-flex align-items-center">
                          <div className="image">
                            <Image src={Testimonial1} alt="testimonial-image" />
                          </div>
                          <div className="content">
                            <h3>Esther Howard</h3>
                            <span>Ui Designer</span>
                          </div>
                        </div>
                        <p>
                          Delve into Insecure guided by industry experts and
                          seasoned professionals. Our carefully curated
                          curriculum is designed.
                        </p>
                        <ul className="review list-unstyle ps-0 mb-0">
                          <li className="d-inline-block">
                            <i className="ri-star-fill"></i>
                          </li>
                          <li className="d-inline-block">
                            <span>(4.5Reveiw)</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="single-testimonial-card">
                        <div className="user d-flex align-items-center">
                          <div className="image">
                            <Image src={Testimonial2} alt="testimonial-image" />
                          </div>
                          <div className="content">
                            <h3>Jenny Wilson</h3>
                            <span>Ui Designer</span>
                          </div>
                        </div>
                        <p>
                          Delve into Insecure guided by industry experts and
                          seasoned professionals. Our carefully curated
                          curriculum is designed.
                        </p>
                        <ul className="review list-unstyle ps-0 mb-0">
                          <li className="d-inline-block">
                            <i className="ri-star-fill"></i>
                          </li>
                          <li className="d-inline-block">
                            <span>(4.5Reveiw)</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="single-testimonial-card">
                        <div className="user d-flex align-items-center">
                          <div className="image">
                            <Image src={Testimonial1} alt="testimonial-image" />
                          </div>
                          <div className="content">
                            <h3>Esther Howard</h3>
                            <span>Ui Designer</span>
                          </div>
                        </div>
                        <p>
                          Delve into Insecure guided by industry experts and
                          seasoned professionals. Our carefully curated
                          curriculum is designed.
                        </p>
                        <ul className="review list-unstyle ps-0 mb-0">
                          <li className="d-inline-block">
                            <i className="ri-star-fill"></i>
                          </li>
                          <li className="d-inline-block">
                            <span>(4.5Reveiw)</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="single-testimonial-card">
                        <div className="user d-flex align-items-center">
                          <div className="image">
                            <Image src={Testimonial1} alt="testimonial-image" />
                          </div>
                          <div className="content">
                            <h3>Esther Howard</h3>
                            <span>Ui Designer</span>
                          </div>
                        </div>
                        <p>
                          Delve into Insecure guided by industry experts and
                          seasoned professionals. Our carefully curated
                          curriculum is designed.
                        </p>
                        <ul className="review list-unstyle ps-0 mb-0">
                          <li className="d-inline-block">
                            <i className="ri-star-fill"></i>
                          </li>
                          <li className="d-inline-block">
                            <span>(4.5Reveiw)</span>
                          </li>
                        </ul>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  {/* <div className="button-atrrangment">
                    <div className="button-swiper button-swiper2">
                      <div className="swiper-pagination">
                        <GoDotFill className="bullets-icon"/>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the our testimonial section */}

      {/* start the register section */}
      <div className="register-area pt-100 position-relative z-1">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="register-content">
                  <div className="title">
                    <span className="d-block top-title">
                      <Image src={TopTitleImg} alt="icon" />
                      Register Now
                    </span>
                    <h2>
                      Register Your Account Get Free Access To 5000 Online
                      Course.
                    </h2>
                    <p>
                      Delve into Insecure guided by industry experts and
                      seasoned professionals. Our carefully curated curriculum
                      is designed to impart not just theoretical knowledge but
                      practical insights gained from real-world experience.
                    </p>
                  </div>
                  {/* <div className="upcoming-timer">
                    <div className="coundown-container d-flex align-items-center">
                      <div className="countdown-el days-container">
                        <h6 className="big-text" id="days">
                          0
                        </h6>
                        <span>Days</span>
                      </div>

                      <div className="countdown-el hours-container">
                        <h6 className="big-text" id="hours">
                          0
                        </h6>
                        <span>Hours</span>
                      </div>

                      <div className="countdown-el minutes-container">
                        <h6 className="big-text" id="minutes">
                          0
                        </h6>
                        <span>Minutes</span>
                      </div>

                      <div className="countdown-el seconds-container">
                        <h6 className="big-text" id="seconds">
                          0
                        </h6>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div> */}
                  <TimerCounter />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="register-form">
                  <h3>Fill Your Registetion</h3>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="from-control"
                            placeholder="Fast Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="from-control"
                            placeholder="Fast Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="from-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="from-control"
                        placeholder="Phone No"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Address</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="from-control textarea"
                        cols="30"
                        rows="5"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn style-one style-2">
                      Sign Up
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the register section */}

      {/* start the blog section */}
      <div class="blog-area ptb-100">
        <div class="container">
          <div class="main-max-width">
            <div class="row">
              <div class="col-lg-4">
                <div class="single-blog-content">
                  <span class="d-block top-title">
                    <Image src={TopTitleImg} alt="icon" />
                    Latest Blog
                  </span>
                  <h2>Latest News & Articles.</h2>
                  <p>
                    Delve into Insecure guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is designed.
                  </p>
                  <Link href="/blog" class="btn style-one style-2">
                    See All
                    <i class="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-blog-card position-relative z-1">
                  <div class="date">
                    <span>05 Feb</span>
                  </div>
                  <h3>
                    <Link href="/blog-details">
                      Full web Designing Course with 42 web Template.
                    </Link>
                  </h3>
                  <p>
                    The community created within the program is supportive and
                    collaborative.
                  </p>
                  <ul class="cr-items list-unstyle ps-0 mb-0">
                    <li class="d-inline-block">
                      <Link href="/blog-details" class="btn style-one">
                        Know Details
                        <i class="ri-arrow-right-line"></i>
                      </Link>
                    </li>
                    <li class="d-inline-block">
                      <span>By. Wade Warren</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="single-blog-card position-relative z-1">
                  <div class="date">
                    <span>05 Feb</span>
                  </div>
                  <h3>
                    <Link href="/blog-details">
                      Full web Designing Course with 42 web Template.
                    </Link>
                  </h3>
                  <p>
                    The community created within the program is supportive and
                    collaborative.
                  </p>
                  <ul class="cr-items list-unstyle ps-0 mb-0">
                    <li class="d-inline-block">
                      <Link href="/blog-details" class="btn style-one">
                        Know Details
                        <i class="ri-arrow-right-line"></i>
                      </Link>
                    </li>
                    <li class="d-inline-block">
                      <span>By. Wade Warren</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the blog section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}

      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
};

export default Home2;
