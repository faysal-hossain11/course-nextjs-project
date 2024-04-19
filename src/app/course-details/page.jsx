import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import React from "react";

import CourseDetailsImg from "../../../public/assets/img/all-img/course-details.png";
import CourseUser1 from "../../../public/assets/img/all-img/user-3.png";
import CourseUser2 from "../../../public/assets/img/all-img/user-4.png";
import CourseUser3 from "../../../public/assets/img/all-img/user-5.png";
import CourseUser4 from "../../../public/assets/img/all-img/user-6.png";
import CourseUser5 from "../../../public/assets/img/all-img/user-1.png";
import OverView1 from "../../../public/assets/img/icon/over-view-icon.svg";
import OverView2 from "../../../public/assets/img/icon/book-icon.svg";
import OverView3 from "../../../public/assets/img/icon/star-icon.svg";
import OverView4 from "../../../public/assets/img/icon/user-icon.svg";
import OverView5 from "../../../public/assets/img/icon/lock-icon.svg";
import OverView6 from "../../../public/assets/img/icon/check-icon-cr.svg";
import OverView7 from "../../../public/assets/img/all-img/user-cmt.png";
import Instractor1 from "../../../public/assets/img/all-img/instractor.png";
import IconImg1 from "../../../public/assets/img/icon/play-icon.svg";
import IconImg2 from "../../../public/assets/img/icon/read-icon.svg";
import IconImg3 from "../../../public/assets/img/icon/text-icon.svg";
import ShareIcon from "../../../public/assets/img/icon/share-icon.svg";
import TimeIcon from "../../../public/assets/img/icon/time-icon.svg";
import MenuIcon from "../../../public/assets/img/icon/menu-icon.svg";
import LavelIcon from "../../../public/assets/img/icon/lavel-icon.svg";
import HeatIcon from "../../../public/assets/img/icon/heat-icon.svg";
import UpdateIcon from "../../../public/assets/img/icon/update-icon.svg";
import SkillIcon from "../../../public/assets/img/icon/skill-icon.svg";
import GlobalIcon from "../../../public/assets/img/icon/global-icon-sm.svg";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import CourseImg1 from "../../../public/assets/img/all-img/course-1.png";
import CourseImg2 from "../../../public/assets/img/all-img/course-3.png";
import CourseImg3 from "../../../public/assets/img/all-img/course-4.png";
import CourseImg4 from "../../../public/assets/img/all-img/course-5.png";
import Image from "next/image";
import Link from "next/link";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import CourseCard from "@/components/card/CourseCard";

const CourseDetails = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Course-Details" />
      {/* end the breadcurmb component */}

      {/* start the course details section  */}
      <div className="courses-details-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-course-desc">
                  <div className="single-course-image position-relative">
                    <Image src={CourseDetailsImg} alt="image" />
                    <Link className="course-catgy" href="#">
                      Engineering
                    </Link>
                  </div>
                  <div className="single-course-content">
                    <div className="user-details d-flex align-items-center">
                      <div className="info-item d-flex align-items-center">
                        <Image src={CourseUser1} alt="image" />
                        <p className="mb-0">
                          <Link href="/author">Leslie Alexander</Link>
                        </p>
                      </div>
                      <div className="info-item d-flex align-items-center">
                        <p className="mb-0">
                          <span>
                            <i className="ri-vidicon-fill"></i>
                          </span>{" "}
                          (45) lesson
                        </p>
                      </div>
                      <div className="info-item d-flex align-items-center">
                        <p className="mb-0">
                          <span>
                            <i className="ri-time-line"></i>
                          </span>{" "}
                          10 Week
                        </p>
                      </div>
                      <div className="info-item d-flex align-items-center">
                        <ul className="list-unstyle d-flex">
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
                            <i className="ri-star-half-line"></i>
                          </li>
                          <li>
                            <span>(4.9)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="fs-20 mb-20">
                      Elevate your skills in 2024 with our Web Design and
                      Graphic Learning Bootcamp where creativity meets
                      cutting-edge technology.
                    </h2>
                  </div>

                  <div className="course-details-wapper ">
                    <ul className="nav course-tab mb-30 " role="tablist">
                      <li className="nav-item pl-30" role="presentation">
                        <button
                          className="nav-link active"
                          data-bs-toggle="pill"
                          data-bs-target="#course-overview"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          <Image src={OverView1} alt="icon" /> Overview
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#course-carri"
                          type="button"
                          role="tab"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          <Image src={OverView2} alt="icon" /> Carriculum
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#course-inst"
                          type="button"
                          role="tab"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          <Image src={OverView3} alt="icon" /> Reviews
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="pill"
                          data-bs-target="#course-reviews"
                          type="button"
                          role="tab"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          <Image src={OverView4} alt="icon" /> Instructor
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="course-tabContent">
                      {/* <!-- overview Tab --> */}
                      <div
                        className="tab-pane fade show active"
                        id="course-overview"
                        role="tabpanel"
                      >
                        <div className="overview-content mb-30">
                          <h3 className="fs-20 fs-medium mb-40 mt-4">
                            Description
                          </h3>
                          <p className="mb-30">
                            Embark on a transformative learning experience with
                            our comprehensive course designed to empower you
                            with in-depth knowledge and practical skills. Our
                            course goes beyond traditional learning, offering a
                            dynamic blend of theoretical insights and hands-on
                            applications. Dive into engaging lectures,
                            interactive exercises, and real-world case studies
                            that bridge the gap between theory and practice.
                          </p>
                          <p className="mb-30">
                            Designed for learners of all levels, this course
                            provides a structured and accessible approach to
                            mastering Whether you are a novice looking to build
                            a solid foundation or a seasoned professional
                            seeking to enhance your expertise, our course adapts
                            to your unique learning needs
                          </p>
                        </div>
                        <div className="overview-otp mb-30">
                          <h3 className="fs-20 fs-medium mb-40">
                            What You will Learn?
                          </h3>
                          <p className="mb-30">
                            Embark on a transformative learning journey and gain
                            a wealth of knowledge and skills that will empower
                            you both personally and professionally.
                          </p>
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Master Key Concepts</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center ">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Practical Application</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Critical Thinking and Problem-Solving</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Industry-Relevant Insights</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Collaboration and Teamwork</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                              <div className="course-single-otp d-flex align-items-center">
                                <div className="icon">
                                  <i className="ri-check-line"></i>
                                </div>
                                <p>Continuous Learning Strategies</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overview-otp">
                          <h3 className="fs-20 fs-medium mb-40">
                            Certification
                          </h3>
                          <p>
                            Each certification is equipped with a unique
                            verification code, allowing employers or interested
                            parties to authenticate your achievement through our
                            platform.
                          </p>
                        </div>
                      </div>
                      {/* <!-- Carriculum Tab --> */}
                      <div
                        className="tab-pane fade"
                        id="course-carri"
                        role="tabpanel"
                      >
                        <div className="carriculum" id="carriculumExample">
                          <div className="carriculum-content">
                            <div className="carriculum-box">
                              <div className="accordion" id="carriculumExp">
                                <div className="carriculum-item">
                                  <div className="accordion-header">
                                    <button
                                      className="accordion-button carriculum-btn"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                    >
                                      What is Search Engine Optimization (SEQ)
                                    </button>
                                    <p className="mb-0">(03 Lectures)</p>
                                  </div>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#carriculumExp"
                                  >
                                    <div className="accordion-body">
                                      <div className="meta-progress">
                                        <div className="p-header d-flex justify-content-between">
                                          <p>1/3 Completed</p>
                                          <p>65%</p>
                                        </div>
                                        <div className="progress-section">
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              aria-valuenow="67"
                                              aria-valuemin="0"
                                              aria-valuemax="67"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Introduction</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Type of Digital Marketing</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>
                                            Its Not an income Problem. its a
                                            Thinking Problem
                                          </span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>Preview</span>
                                          <div className="icon">
                                            <Image src={OverView6} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="carriculum-item">
                                  <div className="accordion-header">
                                    <button
                                      className="accordion-button carriculum-btn"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                    >
                                      Introduction of Digital Marketing
                                    </button>
                                    <p className="mb-0">(03 Lectures)</p>
                                  </div>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#carriculumExp"
                                  >
                                    <div className="accordion-body">
                                      <div className="meta-progress">
                                        <div className="p-header d-flex justify-content-between">
                                          <p>1/3 Completed</p>
                                          <p>65%</p>
                                        </div>
                                        <div className="progress-section">
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              aria-valuenow="67"
                                              aria-valuemin="0"
                                              aria-valuemax="67"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Introduction</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Type of Digital Marketing</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>
                                            Its Not an income Problem. its a
                                            Thinking Problem
                                          </span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>Preview</span>
                                          <div className="icon">
                                            <Image src={OverView6} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="carriculum-item">
                                  <div className="accordion-header">
                                    <button
                                      className="accordion-button carriculum-btn"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree"
                                    >
                                      What is Search Engine Optimization (SEQ)
                                    </button>
                                    <p className="mb-0">(03 Lectures)</p>
                                  </div>
                                  <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#carriculumExp"
                                  >
                                    <div className="accordion-body">
                                      <div className="meta-progress">
                                        <div className="p-header d-flex justify-content-between">
                                          <p>1/3 Completed</p>
                                          <p>65%</p>
                                        </div>
                                        <div className="progress-section">
                                          <div className="progress">
                                            <div
                                              className="progress-bar"
                                              role="progressbar"
                                              aria-valuenow="67"
                                              aria-valuemin="0"
                                              aria-valuemax="67"
                                            ></div>
                                          </div>
                                        </div>
                                      </div>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Introduction</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>Type of Digital Marketing</span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>3m 25s</span>
                                          <div className="icon">
                                            <Image src={OverView5} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>

                                      <Link
                                        className="course-set d-flex justify-content-between"
                                        href="#"
                                      >
                                        <div className="course-into d-flex align-items-center">
                                          <div className="icon">
                                            <i className="ri-play-fill cr-video-btn"></i>
                                          </div>
                                          <span>
                                            Its Not an income Problem. its a
                                            Thinking Problem
                                          </span>
                                        </div>
                                        <div className="course-time d-flex align-items-center">
                                          <span>Preview</span>
                                          <div className="icon">
                                            <Image src={OverView6} alt="icon" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Instructor Tab --> */}
                      <div
                        className="tab-pane fade"
                        id="course-inst"
                        role="tabpanel"
                      >
                        <div className="lesseon-review-section">
                          <div className="student-reating mb-30">
                            <div className="row align-items-center">
                              <div className="col-lg-4 col-md-6">
                                <div className="lession-total-review">
                                  <h3>5.0</h3>
                                  <ul className="rating-stars list-unstyle">
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
                                      <i className="ri-star-fill disstar"></i>
                                    </li>
                                    <li>
                                      <i className="ri-star-fill disstar"></i>
                                    </li>
                                  </ul>
                                  <p className="mb-0">(2 Rating)</p>
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-6">
                                <div className="lession-review-items mb-10 d-flex align-items-center">
                                  <div className="ratings-text">
                                    <span>5.0</span>
                                  </div>
                                  <div className="progress-section">
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="100"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="progress-title">
                                    <ul className="rating-stars list-unstyle">
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
                                <div className="lession-review-items mb-10 d-flex align-items-center">
                                  <div className="ratings-text">
                                    <span>0.4</span>
                                  </div>
                                  <div className="progress-section">
                                    <div className="progress">
                                      <div
                                        className="progress-bar psc02"
                                        role="progressbar"
                                        aria-valuenow="95"
                                        aria-valuemin="0"
                                        aria-valuemax="95"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="progress-title">
                                    <ul className="rating-stars list-unstyle">
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
                                        <i className="ri-star-line"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lession-review-items mb-10 d-flex align-items-center">
                                  <div className="ratings-text">
                                    <span>0.3</span>
                                  </div>
                                  <div className="progress-section">
                                    <div className="progress">
                                      <div
                                        className="progress-bar psc02"
                                        role="progressbar"
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="30"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="progress-title">
                                    <ul className="rating-stars list-unstyle">
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
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lession-review-items mb-10 d-flex align-items-center">
                                  <div className="ratings-text">
                                    <span>0.2</span>
                                  </div>
                                  <div className="progress-section">
                                    <div className="progress">
                                      <div
                                        className="progress-bar psc02"
                                        role="progressbar"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="10"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="progress-title">
                                    <ul className="rating-stars list-unstyle">
                                      <li>
                                        <i className="ri-star-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-fill"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="lession-review-items d-flex align-items-center">
                                  <div className="ratings-text">
                                    <span>0.1</span>
                                  </div>
                                  <div className="progress-section">
                                    <div className="progress">
                                      <div
                                        className="progress-bar psc02"
                                        role="progressbar"
                                        aria-valuenow="0"
                                        aria-valuemin="0"
                                        aria-valuemax="0"
                                      ></div>
                                    </div>
                                  </div>
                                  <div className="progress-title">
                                    <ul className="rating-stars list-unstyle">
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                      <li>
                                        <i className="ri-star-line"></i>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="student-review-section">
                            <div className="comments-area">
                              <h3 className="comments-title">Recent Review</h3>

                              <ol className="comment-list">
                                <li className="comment">
                                  <div className="comment-slide">
                                    <article className="comment-body">
                                      <footer className="comment-meta">
                                        <div className="comment-author vcard">
                                          <Image
                                            src={OverView7}
                                            className="avatar"
                                            alt="image"
                                          />
                                          <h4 className="fn">Esther Howard</h4>

                                          <div className="reply">
                                            <ul className="rating-stars list-unstyle">
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
                                                <i className="ri-star-fill disstar"></i>
                                              </li>
                                              <li>
                                                <i className="ri-star-fill disstar"></i>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="comment-metadata">
                                          <span>December 25.2023</span>
                                        </div>
                                      </footer>
                                      <div className="comment-content">
                                        <p>
                                          In the consultancy landscape, every
                                          minute invested in refining our
                                          expertise, understanding client needs,
                                          and innovating solutions contributes.
                                        </p>
                                        <div className="reply">
                                          <ul className="rating-stars list-unstyle">
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
                                              <i className="ri-star-fill disstar"></i>
                                            </li>
                                            <li>
                                              <i className="ri-star-fill disstar"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </article>
                                  </div>

                                  <ol className="children">
                                    <li className="comment">
                                      <div className="comment-slide">
                                        <article className="comment-body">
                                          <footer className="comment-meta">
                                            <div className="comment-author vcard">
                                              <Image
                                                src={OverView7}
                                                className="avatar"
                                                alt="image"
                                              />
                                              <h4 className="fn">
                                                Jenny Wilson
                                              </h4>
                                              <div className="reply">
                                                <ul className="rating-stars list-unstyle">
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
                                                    <i className="ri-star-fill disstar"></i>
                                                  </li>
                                                  <li>
                                                    <i className="ri-star-fill disstar"></i>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>

                                            <div className="comment-metadata">
                                              <span>December 25.2023</span>
                                            </div>
                                          </footer>
                                          <div className="comment-content">
                                            <p>
                                              There are many variations of
                                              passages of Lorem Ipsum available,
                                              but the majority have suffered
                                              alteration in some form
                                            </p>
                                            <div className="reply">
                                              <ul className="rating-stars list-unstyle">
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
                                                  <i className="ri-star-fill disstar"></i>
                                                </li>
                                                <li>
                                                  <i className="ri-star-fill disstar"></i>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </article>
                                      </div>
                                    </li>
                                  </ol>
                                </li>

                                <li className="comment">
                                  <div className="comment-slide">
                                    <article className="comment-body">
                                      <footer className="comment-meta">
                                        <div className="comment-author vcard">
                                          <Image
                                            src={OverView7}
                                            className="avatar"
                                            alt="image"
                                          />
                                          <h4 className="fn">Esther Howard</h4>

                                          <div className="reply">
                                            <ul className="rating-stars list-unstyle">
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
                                                <i className="ri-star-fill disstar"></i>
                                              </li>
                                              <li>
                                                <i className="ri-star-fill disstar"></i>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="comment-metadata">
                                          <span>December 25.2023</span>
                                        </div>
                                      </footer>
                                      <div className="comment-content">
                                        <p>
                                          In the consultancy landscape, every
                                          minute invested in refining our
                                          expertise, understanding client needs,
                                          and innovating solutions contributes.
                                        </p>
                                        <div className="reply">
                                          <ul className="rating-stars list-unstyle">
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
                                              <i className="ri-star-fill disstar"></i>
                                            </li>
                                            <li>
                                              <i className="ri-star-fill disstar"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </article>
                                  </div>
                                </li>
                              </ol>

                              <div className="comment-respond">
                                <h3 className="comment-reply-title">
                                  Leave a Reply
                                </h3>

                                <ul className="list-unstyle ps-0 mb-0 icon">
                                  <li className="d-inline-block">
                                    <i className="ri-star-fill"></i>
                                  </li>
                                  <li className="d-inline-block">
                                    <i className="ri-star-fill"></i>
                                  </li>
                                  <li className="d-inline-block">
                                    <i className="ri-star-fill"></i>
                                  </li>
                                  <li className="d-inline-block">
                                    <i className="ri-star-fill"></i>
                                  </li>
                                  <li className="d-inline-block">
                                    <i className="ri-star-fill"></i>
                                  </li>
                                </ul>

                                <form className="comment-form">
                                  <p className="comment-form-title">
                                    <input
                                      type="text"
                                      id="title"
                                      placeholder="Review tittle"
                                      name="title"
                                    />
                                  </p>

                                  <p className="comment-form-comment mb-30">
                                    <textarea
                                      name="comment"
                                      id="comment"
                                      cols="45"
                                      placeholder="Review content"
                                      rows="5"
                                      maxlength="65525"
                                      required="required"
                                    ></textarea>
                                  </p>

                                  <p className="form-submit">
                                    <input
                                      type="submit"
                                      className="submit btn style-one"
                                      value="Submit Review"
                                    />
                                  </p>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Reviews Tab --> */}
                      <div
                        className="tab-pane fade"
                        id="course-reviews"
                        role="tabpanel"
                      >
                        <div className="instructor-sidebar">
                          <div className="row g-0">
                            <div className="col-lg-4 col-md-4">
                              <div className="image">
                                <Image src={Instractor1} alt="image" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                              <div className="content">
                                <div className="instructor-content mb-15">
                                  <h3 className="fs-16">Leslie Alexander</h3>
                                  <div className="meta-info d-flex justify-content-between align-items-center">
                                    <p className="mb-0 fs-15">
                                      President of Sales
                                    </p>
                                    <ul className="list-unstyle d-flex">
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
                                        <i className="ri-star-half-line"></i>
                                      </li>
                                      <li>
                                        <span>(4.9)</span>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="instructor-info">
                                    <ul className="list-unstyle d-flex">
                                      <li>
                                        <span>
                                          <Image src={IconImg1} alt="icon" />
                                        </span>{" "}
                                        (20) Course
                                      </li>
                                      <li>
                                        <span>
                                          <Image src={IconImg2} alt="icon" />
                                        </span>{" "}
                                        Category
                                      </li>
                                      <li>
                                        <span>
                                          <Image src={IconImg3} alt="icon" />
                                        </span>{" "}
                                        23,987 Reviews
                                      </li>
                                    </ul>
                                    <p>
                                      Sirs wealth of experience serves as a
                                      guiding light, illuminating the path for
                                      countless individuals His seasoned
                                      expertise not only imparts knowledge but
                                      fosters a nurturing environment where
                                    </p>
                                    <p>
                                      wisdom meets encouragement, creating an
                                      invaluable learning journey for all
                                      fortunate enough to be under his
                                      mentorship.
                                    </p>
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
              </div>
              <div className="col-lg-4">
                <div className="single-course-sidebar">
                  <div className="course-widget">
                    <div className="course-video">
                      <Link
                        href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
                        target="_blank"
                        className="popup-youtube play-now "
                      >
                        <i className="ri-play-fill cr-video-btn"></i>
                        <span className="ripple"></span>
                      </Link>
                    </div>
                    <div className="sidebar-content">
                      <div className="meta-info d-flex align-items-center justify-content-between mb-20">
                        <h3>$400</h3>
                        <div className="share">
                          <Image src={ShareIcon} alt="icon" />
                        </div>
                      </div>
                      <h4 className="fs-20 mb-20">This Course Includes:</h4>
                      <ul className="courses-details">
                        <li>
                          <div className="icon">
                            <Image src={TimeIcon} alt="icon" /> Course Duration
                          </div>{" "}
                          <p>2 Hour 10 Min</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={MenuIcon} alt="icon" /> Category
                          </div>{" "}
                          <p>Graphics Designer</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={LavelIcon} alt="icon" /> Course Level
                          </div>{" "}
                          <p>Higher</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={HeatIcon} alt="icon" /> Student Enrolled
                          </div>{" "}
                          <p>50</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={UpdateIcon} alt="icon" /> Last Update
                          </div>{" "}
                          <p>Dec 12-20-2023</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={SkillIcon} alt="icon" /> Skill Level
                          </div>{" "}
                          <p>Beginner</p>
                        </li>
                        <li>
                          <div className="icon">
                            <Image src={GlobalIcon} alt="icon" /> Language
                          </div>{" "}
                          <p>English</p>
                        </li>
                      </ul>
                      <Link
                        href="/contact"
                        className="btn style-one box-shadow-1 mb-20"
                      >
                        Buy This Course <Image src={LongArrow} alt="icon" />
                      </Link>
                      <Link href="#" className="btn style-one dec-clor">
                        Add to Wishlist
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="related-course pt-70">
              <div className="course-section-title mb-30 text-center">
                <h3 className="fs-20 mb-20">Related Course</h3>
                <p className="fs-15">
                  Discover Your Perfect Program In Our Courses
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <CourseCard cardImg={CourseImg1} authorImg={CourseUser1} />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <CourseCard cardImg={CourseImg2} authorImg={CourseUser2} />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <CourseCard cardImg={CourseImg3} authorImg={CourseUser3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the course details section  */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}

      {/* start the fooeter component */}
      <Footer1 />
      {/* end the fooeter component */}

    </>
  );
};

export default CourseDetails;
