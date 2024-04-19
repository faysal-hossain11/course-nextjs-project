import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Instructor1 from "../../../public/assets/img/all-img/instructor-1.png";
import Instructor2 from "../../../public/assets/img/all-img/instructor-2.png";
import Instructor3 from "../../../public/assets/img/all-img/instructor-3.png";
import Instructor4 from "../../../public/assets/img/all-img/instructor-4.png";
import Instructor5 from "../../../public/assets/img/all-img/instructor-5.png";
import Instructor6 from "../../../public/assets/img/all-img/instructor-6.png";
import ShortUser from "../../../public/assets/img/icon/short-user.svg";
import ShortPlay from "../../../public/assets/img/icon/short-play.svg";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Course1 from "../../../public/assets/img/all-img/course-1.png";
import Course2 from "../../../public/assets/img/all-img/course-2.png";
import Course3 from "../../../public/assets/img/all-img/course-3.png";
import User1 from "../../../public/assets/img/all-img/user-1.png";
import CoundownItem from "@/components/CoundownItem";
import SkillsBar from "@/components/SkillsProgress";
import SkillsProgress from "@/components/SkillsProgress";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Instructor-details" />
      {/* end the  breadcurmb component*/}

      {/* start the instructor details section */}
      <div className="instructor-details ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-instructor-box mb-30">
                  <div className="image">
                    <Image src={Instructor1} alt="image" />
                  </div>
                  <div className="content">
                    <div className="details-info d-flex justify-content-between">
                      <div className="text">
                        <h3 className="fs-16 mb-20">Cameron Williamson</h3>
                        <p>Marketing & Sale</p>
                      </div>
                      <div className="reat">
                        <i className="ri-star-fill"></i> 4.5
                      </div>
                    </div>
                    <div className="meta-info mb-20 d-flex align-items-center">
                      <div className="item">
                        <Image src={ShortPlay} alt="image" /> (20) Course
                      </div>
                      <div className="item">
                        <Image src={ShortUser} alt="image" /> 588 Student
                      </div>
                    </div>

                    <div className="edu-skills">
                      <h4 className="fs-16">Experiences & Skills</h4>
                      <p>
                        We are best & modern creative online education services
                      </p>
                      <ul className="info list-unstyle p-0">
                        <li className="d-flex">
                          <span>Phone:</span> <Link href="#">+123 456 789</Link>
                        </li>
                        <li className="d-flex">
                          <span>Email:</span>{" "}
                          <Link href="#">insocour@gmail.com</Link>
                        </li>
                        <li className="d-flex">
                          <span>Experience:</span>{" "}
                          <Link href="#">insocour@gmail.com</Link>
                        </li>
                        <li className="d-flex">
                          <span>Location:</span>p1901 Thornridge Cir. Shiloh
                        </li>
                      </ul>

                      <div className="social-share">
                        <h4 className="fs-16 mb-20">Share This Course:</h4>
                        <ul className="social-profile list-unstyle">
                          <li>
                            <Link href="https://www.fb.com" target="_blank">
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.twitter.com"
                              target="_blank"
                            >
                              <i className="ri-twitter-x-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.instagram.com"
                              target="_blank"
                            >
                              <i className="ri-instagram-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.linkedin.com"
                              target="_blank"
                            >
                              <i className="ri-linkedin-fill"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="details-profile">
                  <div className="content">
                    <h3 className="title-text">Biography</h3>
                    <p className="mb-30">
                      This biography offers a glimpse into the teachers
                      educational philosophy, highlighting the values and
                      principles that drive their approach to teaching. From
                      innovative teaching methods to a dedication to continuous
                      professional development, our teachers biography is a
                      testament to a lifelong
                    </p>
                    <p className="mb-30">
                      commitment to the pursuit of knowledge and the empowerment
                      of future generations. Join us in exploring the inspiring
                      journey of an educator who goes beyond textbooks,
                      imparting not just lessons but a lasting impact on the
                      minds and hearts of those fortunate enough to be part of
                      their educational journey.
                    </p>
                    <p className="mb-30">
                      With a myriad of academic achievements and professional
                      milestones, our teacher brings a wealth of knowledge to
                      the classroom. Beyond the accolades, its the personal
                      touch and relatable anecdotes that make their teaching
                      style unique and engaging,
                    </p>
                  </div>
                  <div className="profile-scores mb-30">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="item-score">
                          <h2>
                            <span className="count">10</span> +
                          </h2>
                          <p>Total Course</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-score">
                          <h2>
                            <span className="count">155</span> +
                          </h2>
                          <p>Total Student</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-score">
                          <h2>
                            <span className="count">35</span> k+
                          </h2>
                          <p>Beautiful Review</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <CoundownItem /> */}
                  <SkillsProgress />
                </div>
              </div>
            </div>

            <div className="related-course pt-70">
              <div className="course-section-title mb-30 text-center">
                <h3 className="fs-20">More Courses by author</h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <Link href="/blog-details" className="d-block">
                        <Image src={Course1} alt="image" />
                      </Link>
                      <div className="cr-option">
                        <Link href="/author">
                          <i className="ri-heart-fill"></i>
                        </Link>
                        <Link href="/author">
                          <i className="ri-shopping-basket-fill"></i>
                        </Link>
                      </div>
                      <div className="cr-tag">
                        <Link href="/author">Engineering</Link>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <Image src={User1} alt="image" />
                          <span>Eleanor Pena</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <Link href="/blog-details">
                          Full web Designing Course with 42 web Template.
                        </Link>
                      </h3>
                      <div className="ratings mb-20">
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
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill"></i>{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line"></i> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <Link href="/blog-details" className="d-block">
                        <Image src={Course2} alt="image" />
                      </Link>
                      <div className="cr-option">
                        <Link href="/author">
                          <i className="ri-heart-fill"></i>
                        </Link>
                        <Link href="/author">
                          <i className="ri-shopping-basket-fill"></i>
                        </Link>
                      </div>
                      <div className="cr-tag">
                        <Link href="/author">Engineering</Link>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <Image src={User1} alt="image" />
                          <span>Eleanor Pena</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <Link href="/blog-details">
                          Full web Designing Course with 42 web Template.
                        </Link>
                      </h3>
                      <div className="ratings mb-20">
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
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill"></i>{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line"></i> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <Link href="/blog-details" className="d-block">
                        <Image src={Course3} alt="image" />
                      </Link>
                      <div className="cr-option">
                        <Link href="/author">
                          <i className="ri-heart-fill"></i>
                        </Link>
                        <Link href="/author">
                          <i className="ri-shopping-basket-fill"></i>
                        </Link>
                      </div>
                      <div className="cr-tag">
                        <Link href="/author">Engineering</Link>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <Image src={User1} alt="image" />
                          <span>Eleanor Pena</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <Link href="/blog-details">
                          Full web Designing Course with 42 web Template.
                        </Link>
                      </h3>
                      <div className="ratings mb-20">
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
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill"></i>{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line"></i> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the instructor details section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe componet */}

      {/* start the  footer component*/}
      <Footer1 />
      {/* end the footer componet */}

    </>
  );
};

export default page;
