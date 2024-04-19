import Header3 from "@/components/Header/Header3";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BannerWrapSvg from "../../../public/assets/img/icon/banner-warp.svg";
import Graph1 from "../../../public/assets/img/all-img/graph.png";
import Graph2 from "../../../public/assets/img/all-img/graph-2.png";
import BannerWrap from "../../../public/assets/img/all-img/single-banner-warp.jpg";
import CourseIcon3 from "../../../public/assets/img/icon/courses-3.svg";
import CourseIcon2 from "../../../public/assets/img/icon/courses-2.svg";
import CourseIcon1 from "../../../public/assets/img/icon/courses-1.svg";
import CourseCard1 from "../../../public/assets/img/all-img/courses-13.jpg";
import CourseCard2 from "../../../public/assets/img/all-img/courses-14.jpg";
import CourseCard3 from "../../../public/assets/img/all-img/courses-12.jpg";
import AboutIcon1 from "../../../public/assets/img/icon/resource-info-1.svg";
import AboutIcon2 from "../../../public/assets/img/icon/resource-info-2.svg";
import AboutImg from "../../../public/assets/img/all-img/about-3.png";
import LongArrowIcon from "../../../public/assets/img/icon/long-arrow.svg";
import Meeting1 from "../../../public/assets/img/all-img/meet-1.png";
import Meeting2 from "../../../public/assets/img/all-img/meet-2.png";
import Meeting3 from "../../../public/assets/img/all-img/meet-3.png";
import Events1 from "../../../public/assets/img/all-img/events-1.jpg";
import Events2 from "../../../public/assets/img/all-img/events-2.jpg";
import Events3 from "../../../public/assets/img/all-img/events-3.jpg";
import TestimonialImg from "../../../public/assets/img/all-img/testimonial-image.jpg";
import TestimonialQuote from "../../../public/assets/img/icon/testimonial-cap.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import PopularCourseThreeSlide from "@/components/card/PopularCourseThreeSlide";
import TestimonialSlideThree from "@/components/card/TestimonialSlideThree";

const Home3 = () => {
  return (
    <>
      {/* start the header3 component */}
      <Header3 />
      {/* end the header3 component */}

      {/* start the home-3 banner section */}
      <div className="banner-warp-area position-relative z-1">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="banner-content position-relative">
                  <div className="title">
                    <span className="d-inline-block top-title style-3">
                      The Leader in online learning
                    </span>
                    <h1>A Better Learning Journey Future Starts Here.</h1>
                    <p>
                      In the dynamic landscape of todays professional world,
                      the key to success lies in continuous learning and skill
                      development. As industries evolve and technology.
                    </p>
                  </div>
                  <div className="banner-btn d-flex align-items-center">
                    <Link
                      href="/course-details"
                      className="btn style-one style-2 style-3"
                    >
                      <Image
                        className="top-0 ms-0"
                        src={BannerWrapSvg}
                        alt=""
                      />
                    </Link>
                    <div className="contact d-flex align-items-center">
                      <Link
                        href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
                        className="play-icon popup-youtube"
                      >
                        <i className="ri-play-fill"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="graph-shape">
                    <Image src={Graph1} alt="shape" />
                  </div>
                  <div className="graph-shape-2">
                    <Image src={Graph2} alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="single-banner-warp-card">
                  <div className="image">
                    <Image src={BannerWrap} alt="banner-image" />
                  </div>
                  <ul className="list-unstyle ps-0">
                    <li className="d-inline-block">
                      <i className="ri-star-fill"></i>
                    </li>
                    <li className="d-inline-block">
                      <span>( 4.5Reveiw )</span>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/course-details">
                      Consider offering online courses or tutorials on your
                      website.
                    </Link>
                  </h3>
                  <span>
                    By. <strong>Wade Warren</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the home-3 banner section */}

      {/* start the services card section */}
      <div className="courses-area-3 position-relative">
        <div className="container">
          <div className="main-max-width">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-courses-info text-center position-relative">
                  <div className="icon">
                    <Image src={CourseIcon3} alt="icon" />
                  </div>
                  <h3>
                    <Link href="/course-details">
                      Over 25+ Million Students
                    </Link>
                  </h3>
                  <p>
                    Are you looking for information about a specific educational
                    institution or system with such a large student population,
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-courses-info text-center position-relative">
                  <div className="icon">
                    <Image src={CourseIcon2} alt="icon" />
                  </div>
                  <h3>
                    <Link href="/course-details">
                      5.354+ Online Courses
                    </Link>
                  </h3>
                  <p>
                    Are you looking for information about a specific educational
                    institution or system with such a large student population,
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-courses-info text-center position-relative">
                  <div className="icon">
                    <Image src={CourseIcon1} alt="icon" />
                  </div>
                  <h3>
                    <Link href="/course-details">Live Time Access</Link>
                  </h3>
                  <p>
                    Are you looking for information about a specific educational
                    institution or system with such a large student population,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the services card section */}

      {/* start the course section */}
      <div className="course-section style-3 custom-nav pt-100 pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50 position-relative">
              <h4 className="d-inline-block top-title style-3">
                Top Popular Course
              </h4>
              <h2 className="fs-35">Broad Selection Of Course</h2>
            </div>
            <PopularCourseThreeSlide cardImg1={CourseCard1} cardImg2={CourseCard2} cardImg3={CourseCard3} />
          </div>
        </div>
      </div>
      {/* end the course section */}

      {/* start the about section */}
      <div className="about-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="title">
                    <span className="d-block top-title style-3">About Us</span>
                    <h1>Word Best Creative Online Course.</h1>
                    <p>
                      Online Course : Consider offering online courses or
                      tutorials on your website. You could create video lessons,
                      downloadable materials, and quizzes to make the learning
                      experience interactive. This can be a great way to engage
                      your audience and provide valuable knowledge.
                    </p>

                    <div className="resource-info">
                      <div className="row">
                        <div className="col-lg-6 col-sm-6">
                          <div className="info-item d-flex align-items-center">
                            <div className="icon">
                              <Image src={AboutIcon1} alt="icon" />
                            </div>
                            <h3>Resource Library</h3>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                          <div className="info-item d-flex align-items-center">
                            <div className="icon">
                              <Image src={AboutIcon2} alt="icon" />
                            </div>
                            <h3>Career Guidance</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-meta d-flex align-items-center">
                    <div className="about-btn mr-20">
                      <Link
                        href="/course-details"
                        className="btn style-one style-2 style-3"
                      >
                        Explore Courses
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                    <div className="info">
                      <div className="d-flex align-items-center">
                        <h5 className="count">16</h5>
                        <h5>+</h5>
                      </div>
                      <h5>Years Of Experiences</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image style-3">
                  <Image src={AboutImg} alt="about-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the about section */}

      {/* start the meet our expert section */}
      <div className="meet-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-title mb-50 position-relative">
                  <span className="d-block top-title style-3">
                    Meet Our Expert
                  </span>
                  <h2 className="fs-35">Your Partner In Digital Success</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="text-end">
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    Explore More
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-meet-card position-relative">
                  <div className="image">
                    <Image src={Meeting1} alt="image" />
                  </div>
                  <div className="content d-flex align-items-center justify-content-between">
                    <div className="text">
                      <h3>Jenny Wilson</h3>
                      <span>UI/UX Designer</span>
                    </div>
                    <div className="icon">
                      <div className="btn style-one style-2 style-3">
                        <i className="ri-share-fill"></i>
                      </div>
                      <div className="social-icon">
                        <ul className="list-unstyle ps-0 mb-0">
                          <li>
                            <Link
                              href="https://bd.linkedin.com/"
                              target="_blank"
                            >
                              <i className="ri-linkedin-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="ri-instagram-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/" target="_blank">
                              <i className="ri-twitter-x-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-meet-card position-relative">
                  <div className="image">
                    <Image src={Meeting2} alt="image" />
                  </div>
                  <div className="content d-flex align-items-center justify-content-between">
                    <div className="text">
                      <h3>Esther Howard</h3>
                      <span>UI/UX Designer</span>
                    </div>
                    <div className="icon">
                      <div className="btn style-one style-2 style-3">
                        <i className="ri-share-fill"></i>
                      </div>
                      <div className="social-icon">
                        <ul className="list-unstyle ps-0 mb-0">
                          <li>
                            <Link
                              href="https://bd.linkedin.com/"
                              target="_blank"
                            >
                              <i className="ri-linkedin-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="ri-instagram-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/" target="_blank">
                              <i className="ri-twitter-x-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-meet-card position-relative">
                  <div className="image">
                    <Image src={Meeting3} alt="image" />
                  </div>
                  <div className="content d-flex align-items-center justify-content-between">
                    <div className="text">
                      <h3>Brooklyn Simmons</h3>
                      <span>UI/UX Designer</span>
                    </div>
                    <div className="icon">
                      <div className="btn style-one style-2 style-3">
                        <i className="ri-share-fill"></i>
                      </div>
                      <div className="social-icon">
                        <ul className="list-unstyle ps-0 mb-0">
                          <li>
                            <Link
                              href="https://bd.linkedin.com/"
                              target="_blank"
                            >
                              <i className="ri-linkedin-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="ri-instagram-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/" target="_blank">
                              <i className="ri-twitter-x-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the meet our expert section */}

      {/* start the provides area section */}
      <div className="provides-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-provides-info position-relative z-1">
                  <span>Free</span>
                  <h3>Free Online Courses From School To Education</h3>
                  <p>
                    Free online courses have significantly transformed the
                    landscape of education,
                  </p>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    View Course
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-provides-info position-relative z-1">
                  <span>New</span>
                  <h3>
                    Coursera provides access to courses from universities and
                    colleges around.
                  </h3>
                  <p>
                    Free online courses have significantly transformed the
                    landscape of education,
                  </p>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    View Course
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the provides area section */}

      {/* start the upcomming section */}
      <div className="events-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <div className="section-title mb-50 position-relative">
                  <span className="d-block top-title style-3">Events</span>
                  <h2 className="fs-35">Upcoming Events</h2>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="text-end">
                  <Link
                    href="/blog-list"
                    className="btn style-one style-2 style-3"
                  >
                    See All
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-events-card position-relative">
                  <div className="image">
                    <Image src={Events1} alt="events-image" />
                  </div>
                  <h3>Summer School 2024</h3>
                  <ul className="list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      15 Feb 2024
                      <i className="ri-time-line"></i>
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-map-pin-line"></i>
                      6391 Elgin St. Celina,
                    </li>
                  </ul>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    Buy Now
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-events-card position-relative">
                  <div className="image">
                    <Image src={Events2} alt="events-image" />
                  </div>
                  <h3>Summer School 2024</h3>
                  <ul className="list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      15 Feb 2024
                      <i className="ri-time-line"></i>
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-map-pin-line"></i>
                      6391 Elgin St. Celina,
                    </li>
                  </ul>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    Buy Now
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-events-card position-relative">
                  <div className="image">
                    <Image src={Events3} alt="events-image" />
                  </div>
                  <h3>Summer School 2024</h3>
                  <ul className="list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      15 Feb 2024
                      <i className="ri-time-line"></i>
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-map-pin-line"></i>
                      6391 Elgin St. Celina,
                    </li>
                  </ul>
                  <Link
                    href="/course-details"
                    className="btn style-one style-2 style-3"
                  >
                    Buy Now
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the upcomming section */}

      {/* start the testimonial section */}
      <TestimonialSlideThree testimonialImg={TestimonialImg} quoteImg={TestimonialQuote}/>
      {/* end the testimonial section */}

      {/* start the our blog section */}
      <div className="blog-area pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="section-title mb-50 position-relative">
                  <span className="d-block top-title style-3">Our Blog</span>
                  <h2 className="fs-35">Education Is The Foundation.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="text-end">
                  <Link
                    href="/blog-details"
                    className="btn style-one style-2 style-3"
                  >
                    See All
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card style-3 position-relative">
                  <div className="date">
                    <span>05 Feb</span>
                  </div>
                  <ul className="list-unstyle ps-0 user-list">
                    <li className="d-inline-block">
                      <i className="ri-map-pin-user-line"></i>
                      Wade Warren
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-chat-voice-line"></i>
                      05 Message
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      Education is often linked to economic prosperity..
                    </Link>
                  </h3>
                  <p>
                    Education is a powerful tool for promoting social equality.
                    It provides individuals from diverse backgrounds
                  </p>
                  <p>
                    with equal opportunities to acquire knowledge and skills,
                    breaking down barriers.
                  </p>
                  <ul className="cr-items list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      <Link href="/blog-details" className="btn style-one">
                        Know Details
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card style-3 position-relative">
                  <div className="date">
                    <span>05 Feb</span>
                  </div>
                  <ul className="list-unstyle ps-0 user-list">
                    <li className="d-inline-block">
                      <i className="ri-map-pin-user-line"></i>
                      Wade Warren
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-chat-voice-line"></i>
                      05 Message
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      Similar to Coursera, edX offers online courses.
                    </Link>
                  </h3>
                  <p>
                    Education is a powerful tool for promoting social equality.
                    It provides individuals from diverse backgrounds
                  </p>
                  <p>
                    with equal opportunities to acquire knowledge and skills,
                    breaking down barriers.
                  </p>
                  <ul className="cr-items list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      <Link href="/blog-details" className="btn style-one">
                        Know Details
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-card style-3 position-relative">
                  <div className="date">
                    <span>05 Feb</span>
                  </div>
                  <ul className="list-unstyle ps-0 user-list">
                    <li className="d-inline-block">
                      <i className="ri-map-pin-user-line"></i>
                      Wade Warren
                    </li>
                    <li className="d-inline-block">
                      <i className="ri-chat-voice-line"></i>
                      05 Message
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      Create a community or discussion forum where educators,
                    </Link>
                  </h3>
                  <p>
                    Education is a powerful tool for promoting social equality.
                    It provides individuals from diverse backgrounds
                  </p>
                  <p>
                    with equal opportunities to acquire knowledge and skills,
                    breaking down barriers.
                  </p>
                  <ul className="cr-items list-unstyle ps-0 mb-0">
                    <li className="d-inline-block">
                      <Link href="/blog-details" className="btn style-one">
                        Know Details
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the our blog section */}


      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}


      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
};

export default Home3;
