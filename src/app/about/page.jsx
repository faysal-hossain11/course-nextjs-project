import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import AboutIcon from "../../../public/assets/img/icon/about-icon.svg";
import QuoteIcon from "../../../public/assets/img/icon/quate-icon.svg";
import StudentImg from "../../../public/assets/img/all-img/student-rev.png";
import ShapeImg from "../../../public/assets/img/all-img/shape-img.png";
import CounterIcon from "../../../public/assets/img/icon/counter-icon-1.svg";
import BlogUser1 from "../../../public/assets/img/all-img/blog-user-1.png";
import BlogImg1 from "../../../public/assets/img/all-img/blog-1.png";
import BlogImg2 from "../../../public/assets/img/all-img/blog-2.png";
import BlogImg3 from "../../../public/assets/img/all-img/blog-3.png";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import Testimonial from "@/components/Testimonial";
import LatestNestCard from "@/components/card/LatestNestCard";
import VideoModal from "@/components/VideoModal";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="About" />
      {/* end the breadcurmb component */}

      {/* start the about section */}
      <div className="about-section pb-100 pt-100 ">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h4 className="sub-title mb-25"># About Us</h4>
                  <h2 className="mb-50 fs-35">Why Will You Choose Our?</h2>
                  <p className="mb-30">
                    Delve into Insocour guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is Designed
                    to impart not just theoretical knowledge but practical
                    insights gained from real-world experience.
                  </p>
                  <p className="mb-30">
                    Learn by doing. Our course emphasizes hands-on projects,
                    case studies, and interactive sessions to ensure you can
                    apply your newfound knowledge directly to real-world
                    scenarios.
                  </p>
                </div>
                <div className="about-meta d-flex align-items-center mt-40">
                  <div className="about-btn mr-20">
                    <Link href="/about" className="btn style-one box-shadow-1">
                      About More
                      <Image src={LongArrow} alt="Image" />
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
              <div className="col-lg-6">
                <div className="about-wrapper">
                  <div className="card about-card active" id="my-element1">
                    <h4 className="heading">Learn From The Experts</h4>
                    <div className="description">
                      <div className="icon">
                        <Image src={AboutIcon} alt="icon" />
                      </div>
                      <h4>Learn From The Experts</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <Link className="btn" href="/about">
                        Read More <Image src={LongArrow} alt="Image" />
                      </Link>
                    </div>
                  </div>

                  <div className="card about-card" id="my-element2">
                    <h4 className="heading">Seven Easy Rules Of Education</h4>
                    <div className="description">
                      <div className="icon">
                        <Image src={AboutIcon} alt="icon" />
                      </div>
                      <h4>Seven Easy Rules Of Education</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <Link className="btn" href="/about">
                        Read More <Image src={LongArrow} alt="Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="card about-card" id="my-element3">
                    <h4 className="heading">Explore our Beliefs</h4>
                    <div className="description">
                      <div className="icon">
                        <Image src={AboutIcon} alt="icon" />
                      </div>
                      <h4>Explore our Beliefs</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <Link className="btn" href="/about">
                        Read More <Image src={LongArrow} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the about section */}

      {/* start the testimonial section */}
      {/* <div className="testimonial-section custom-nav pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-5">
                <div className="content">
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
                  <div className="testimonial-box">
                    <div className="info mb-25 d-flex align-items-center justify-content-between">
                      <div className="image d-flex align-items-center">
                        <Image src={StudentImg} alt="image" />
                        <div className="content">
                          <h5 className="fs-16">Jonson Maxwell</h5>
                          <p className="mb-0">Customer</p>
                        </div>
                      </div>
                      <div className="icon">
                        <Image src={QuoteIcon} alt="icon" />
                      </div>
                    </div>
                    <div className="box-content">
                      <p>
                        The impact of consulting services was evident in the
                        measurable results we achieved. Our organization is now
                        better positioned for success, and our team is equipped
                        with the knowledge and tools needed to navigate future
                        challenges.
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
                  <div className="testimonial-box">
                    <div className="info mb-25 d-flex align-items-center justify-content-between">
                      <div className="image d-flex align-items-center">
                        <Image src={StudentImg} alt="image" />
                        <div className="content">
                          <h5 className="fs-16">Jonson Maxwell</h5>
                          <p className="mb-0">Customer</p>
                        </div>
                      </div>
                      <div className="icon">
                        <Image src={QuoteIcon} alt="icon" />
                      </div>
                    </div>
                    <div className="box-content">
                      <p>
                        The impact of consulting services was evident in the
                        measurable results we achieved. Our organization is now
                        better positioned for success, and our team is equipped
                        with the knowledge and tools needed to navigate future
                        challenges.
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
                  <div className="testimonial-box">
                    <div className="info mb-25 d-flex align-items-center justify-content-between">
                      <div className="image d-flex align-items-center">
                        <Image src={StudentImg} alt="image" />
                        <div className="content">
                          <h5 className="fs-16">Jonson Maxwell</h5>
                          <p className="mb-0">Customer</p>
                        </div>
                      </div>
                      <div className="icon">
                        <Image src={QuoteIcon} alt="icon" />
                      </div>
                    </div>
                    <div className="box-content">
                      <p>
                        The impact of consulting services was evident in the
                        measurable results we achieved. Our organization is now
                        better positioned for success, and our team is equipped
                        with the knowledge and tools needed to navigate future
                        challenges.
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
                </div>
                <div className="benefits-prev">
                  <Image src={LongArrow} alt="Image" />
                </div>
                <div className="benefits-next">
                  <Image src={LongArrow} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Testimonial />
      {/* end the testimonial section */}

      {/* start the top teacher section */}
      <div className="contributor-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="contributor-content position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>Free Online Courses From School To Education</h3>
                  <p>
                    Free online courses have significantly transformed the
                    landscape of education,
                  </p>
                  <Link href="#" className="btn style-one box-shadow-1">
                    Become A Instructor <Image src={LongArrow} alt="Image" />
                  </Link>
                  <div className="shape"></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contributor-content style-two position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>
                    Online Courses From <br /> History.
                  </h3>
                  <p>
                    Free online courses have significantly <br /> transformed
                    the landscape of education,
                  </p>
                  <Link
                    href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
                    target="_blank"
                    className="btn style-one popup-youtube paly box-shadow-1"
                  >
                    <i className="ri-play-fill"></i>
                  </Link>
                  <div className="shape-image">
                    <Image src={ShapeImg} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the top teacher section */}

      {/* start the video section */}
      <div className="video-section">
        <div className="container">
          <div className="main-max-width">
            <div className="play">
              <Link
                className="btn style-one popup-youtube"
                href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
                target="_blank"
              >
                <i className="ri-play-fill"></i> Watch Our Video
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end the video section */}

      {/* start the scure area section */}
      <div className="score-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-yl-clr">
                    <Image src={CounterIcon} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">15.525</div>
                    <p>Happy Student</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-rd-clr">
                    <Image src={CounterIcon} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">586</div>
                    <p>Good Comment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-gr-clr">
                    <Image src={CounterIcon} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">35.200</div>
                    <p>Services Download</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-pr-clr">
                    <Image src={CounterIcon} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">55</div>
                    <p>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the scure area section */}

      {/* start the blog section */}
      <div className="blog-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row">
                <div className="col-lg-7 col-sm-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Blog</h4>
                    <h2 className="mb-0 fs-35">Latest News & Articles</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5">
                  <div className="section-btn text-end">
                    <Link href="/blog" className="btn style-one box-shadow-1">
                      View All <Image src={LongArrow} alt="Image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg1}
                  newsCardAuthImg={BlogUser1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg2}
                  newsCardAuthImg={BlogUser1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg3}
                  newsCardAuthImg={BlogUser1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the blog section */}

      {/* start the subscribe section */}
      <Subscribe />
      {/* end the subscribe section */}

      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}
      
    </>
  );
};

export default page;
