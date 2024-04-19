"use client";
import { Swiper, SwiperSlide,  } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import BookIcon from "../../public/assets/img/icon/book.svg";
import IdeaIcon from "../../public/assets/img/icon/idea.svg";
import GlobalIcon from "../../public/assets/img/icon/global.svg";
import ShapeIcon from "../../public/assets/img/icon/shape.svg";
import Shape2Icon from "../../public/assets/img/icon/shape-2.svg";
import BannerImg from "../../public/assets/img/all-img/hero-img.png";
import LongArrow from '../../public/assets/img/icon/long-arrow.svg';
import Image from "next/image";
import Link from "next/link";
import 'swiper/css/pagination';
const HeroSlide = () => {
  return (
    <div className="home-one-hero">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="silde-item">
            <div className="row align-items-center">
              <div className="col-lg-7 l-5">
                <div className="content">
                  <h4 className="sub-title mb-25">
                    The Leader In Online Learning
                  </h4>
                  <h1 className="fs-50 mb-25">
                    Grow Your <span className="gradient-style">Skills</span>{" "}
                    Advance Your Career Path.
                  </h1>
                  <p>
                    In the dynamic landscape of todays professional world, the
                    key to success lies in continuous learning and skill
                    Development. As industries evolve and technology advances,
                  </p>

                  <div className="her-btns mt-40">
                    <Link
                      href="/course-details"
                      className="btn style-one mr-20"
                    >
                      Browser Course <Image src={LongArrow} alt="Image" />
                    </Link>
                    <Link href="/about" className="btn style-two">
                      Explore More
                      <Image src={LongArrow} alt="Image" />
                    </Link>
                  </div>

                  <div className="book-icon bounce">
                    <Image src={BookIcon} alt="image" />
                  </div>
                  <div className="idea-icon">
                    <Image src={IdeaIcon} alt="image" />
                  </div>
                  <div className="global-icon rotate">
                    <Image src={GlobalIcon} alt="image" />
                  </div>
                  <div className="shape1 rotate">
                    <Image src={ShapeIcon} alt="image" />
                  </div>
                  <div className="shape2 moveHorizontal">
                    <Image src={Shape2Icon} alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-image position-relative">
                  <Image
                    className="position-relative index-2"
                    src={BannerImg}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="silde-item">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="content">
                  <h4 className="sub-title mb-25">
                    The Leader In Online Learning
                  </h4>
                  <h1 className="fs-50 mb-25">
                    Grow Your <span className="gradient-style">Skills</span>{" "}
                    Advance Your Career Path.
                  </h1>
                  <p>
                    In the dynamic landscape of todays professional world, the
                    key to success lies in continuous learning and skill
                    Development. As industries evolve and technology advances,
                  </p>

                  <div className="her-btns mt-40">
                    <Link
                      href="/course-details"
                      className="btn style-one mr-20"
                    >
                      Browser Course <Image src={LongArrow} alt="Image" />
                    </Link>
                    <Link href="/about" className="btn style-two">
                      Explore More
                      <Image src={LongArrow} alt="Image" />
                    </Link>
                  </div>

                  <div className="book-icon bounce">
                    <Image src={BookIcon} alt="image" />
                  </div>
                  <div className="idea-icon">
                    <Image src={IdeaIcon} alt="image" />
                  </div>
                  <div className="global-icon rotate">
                    <Image src={GlobalIcon} alt="image" />
                  </div>
                  <div className="shape1 rotate">
                    <Image src={ShapeIcon} alt="image" />
                  </div>
                  <div className="shape2 moveHorizontal">
                    <Image src={Shape2Icon} alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-image position-relative">
                  <Image
                    className="position-relative index-2"
                    src={BannerImg}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="silde-item">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="content">
                  <h4 className="sub-title mb-25">
                    The Leader In Online Learning
                  </h4>
                  <h1 className="fs-50 mb-25">
                    Grow Your <span className="gradient-style">Skills</span>{" "}
                    Advance Your Career Path.
                  </h1>
                  <p>
                    In the dynamic landscape of todays professional world, the
                    key to success lies in continuous learning and skill
                    Development. As industries evolve and technology advances,
                  </p>

                  <div className="her-btns mt-40">
                    <Link
                      href="/course-details"
                      className="btn style-one mr-20"
                    >
                      Browser Course <Image src={LongArrow} alt="Image" />
                    </Link>
                    <Link href="/about" className="btn style-two">
                      Explore More
                      <Image src={LongArrow} alt="Image" />
                    </Link>
                  </div>

                  <div className="book-icon bounce">
                    <Image src={BookIcon} alt="image" />
                  </div>
                  <div className="idea-icon">
                    <Image src={IdeaIcon} alt="image" />
                  </div>
                  <div className="global-icon rotate">
                    <Image src={GlobalIcon} alt="image" />
                  </div>
                  <div className="shape1 rotate">
                    <Image src={ShapeIcon} alt="image" />
                  </div>
                  <div className="shape2 moveHorizontal">
                    <Image src={Shape2Icon} alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="hero-image position-relative">
                  <Image
                    className="position-relative index-2"
                    src={BannerImg}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlide;
