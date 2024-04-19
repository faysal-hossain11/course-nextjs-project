import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CourseImg1 from "../../../public/assets/img/all-img/course-style-1.png";
import CourseImg2 from "../../../public/assets/img/all-img/course-style-2.png";
import CourseImg3 from "../../../public/assets/img/all-img/course-style-3.png";
import CourseImg4 from "../../../public/assets/img/all-img/course-style-4.png";
import CourseImg5 from "../../../public/assets/img/all-img/course-style-5.png";
import CourseImg6 from "../../../public/assets/img/all-img/course-style-6.png";
import CourseImg7 from "../../../public/assets/img/all-img/course-style-7.png";
import CourseUser1 from "../../../public/assets/img/all-img/user-1.png";
import CourseUser2 from "../../../public/assets/img/all-img/user-2.png";
import CourseUser3 from "../../../public/assets/img/all-img/user-3.png";
import CourseUser4 from "../../../public/assets/img/all-img/user-4.png";
import CourseUser5 from "../../../public/assets/img/all-img/user-5.png";
import CourseUser6 from "../../../public/assets/img/all-img/user-6.png";
import CourseUser7 from "../../../public/assets/img/all-img/user-2.png";
// import Pagination from "@/components/pagination";
import CourseListCard from "@/components/card/CourseListCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PaginationItem from "@/components/PaginationItem";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb section */}
      <Breadcrumb breadcrumb="Course-List" />
      {/* end the breadcurmb section */}

      {/* start the course list section */}
      <div className="courses-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting bg-fw">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <p className="mb-0">Showing 1-6 of 54 results</p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="fitter-option d-flex align-items-center justify-content-end">
                    <div className="nice-select mr-20">
                      <select>
                        <option>Sort By: Popularity</option>
                        <option>Popularity</option>
                        <option>Another option</option>
                        <option>Potato</option>
                      </select>
                    </div>
                    <div className="item d-flex align-items-center">
                      <Link
                        href="/course-grid"
                        className="d-flex align-items-center"
                      >
                        <div className="icon newIcon">
                          <i className="ri-layout-grid-line"></i>
                        </div>{" "}
                        <span>Grid</span>
                      </Link>
                      <Link
                        href="/course-list"
                        className="d-flex align-items-center active"
                      >
                        <div className="icon ">
                          <i className="ri-layout-grid-line"></i>
                        </div>{" "}
                        <span>List</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-6">
                    <CourseListCard
                      cardImg={CourseImg1}
                      teacher={CourseUser1}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg2}
                      teacher={CourseUser2}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg3}
                      teacher={CourseUser3}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg4}
                      teacher={CourseUser4}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg5}
                      teacher={CourseUser5}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg6}
                      teacher={CourseUser6}
                    />
                  </div>
                  <div className="col-lg-12 col-md-6">
                  <CourseListCard
                      cardImg={CourseImg7}
                      teacher={CourseUser7}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="course-sidebar-widgets">
                  <div className="widget widget-catgory widget-search">
                    <form className="search-form">
                      <label>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                      </label>
                      <button className="widget-search-btn" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </form>

                    <div className="accordion" id="widget-collps">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button widget-title"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                          >
                            Categories
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="widget-collapse collapse show"
                          data-bs-parent="#widget-collps"
                        >
                          <div className="widget-collps-body">
                            <ul>
                              <li>
                                <Link href="/categories">
                                  <p>Business Consulting</p> <span>(15)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Tax Consulting</p> <span>(20)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Art & Design</p> <span>(10)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Tax Consulting</p> <span>(20)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Technology</p> <span>(17)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Development</p> <span>(08)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Impact of Education</p> <span>(03)</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-checkbox">
                    <div className="accordion" id="widget-collps-two">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button widget-title"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                          >
                            Level
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="widget-collapse collapse show"
                          data-bs-parent="#widget-collps-two"
                        >
                          <div className="widget-collps-body">
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck2"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck2"
                              >
                                Beginner
                              </label>
                            </div>
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck3"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck3"
                              >
                                Advanced
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-rating">
                    <div className="accordion" id="widget-collps-three">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button widget-title"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                          >
                            Rating
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="widget-collapse collapse show"
                          data-bs-parent="#widget-collps-three"
                        >
                          <div className="widget-collps-body">
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck4"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck4"
                              >
                                <span>
                                  <i className="ri-star-fill"></i>
                                </span>{" "}
                                5 Star
                              </label>
                            </div>
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck5"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck5"
                              >
                                <span>
                                  <i className="ri-star-fill"></i>
                                </span>{" "}
                                4 Star or adobe
                              </label>
                            </div>
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck6"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck6"
                              >
                                <span>
                                  <i className="ri-star-fill"></i>
                                </span>{" "}
                                3 Star or adobe
                              </label>
                            </div>
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck7"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck7"
                              >
                                <span>
                                  <i className="ri-star-fill"></i>
                                </span>{" "}
                                2 Star or adobe
                              </label>
                            </div>
                            <div className="form-check edu-check">
                              <input
                                className="form-check-input edu-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck8"
                              />
                              <label
                                className="form-check-label edu-check-label"
                                for="defaultCheck8"
                              >
                                <span>
                                  <i className="ri-star-fill"></i>
                                </span>{" "}
                                1 Star or adobe
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget filter-widget">
                    <h3 className="widget-title">Price Filter</h3>
                    <div className="filter-info">
                      <div className="filter-bar">
                        <div className="price-range-slider">
                          <div id="slider-range" className="range-bar"></div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="range-value mb-0 d-flex align-items-center">
                              <input type="text" id="amount" readonly />
                            </p>
                            <Link
                              className="btn-filter"
                              href="/courses-list"
                            >
                              Filter
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-tag-cloud">
                    <div className="accordion" id="widget-collps-four">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button widget-title"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                          >
                            Popular Tags
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="widget-collapse collapse show"
                          data-bs-parent="#widget-collps-four"
                        >
                          <div className="widget-collps-body">
                            <div className="tagcloud">
                              <Link href="/tag">Business</Link>
                              <Link href="/tag">Course</Link>
                              <Link href="/tag">Consulting</Link>
                              <Link href="/tag">Online</Link>
                              <Link href="/tag">Remote</Link>
                              <Link href="/tag">Solution</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {/* start the pagination component */}
            <PaginationItem />
            {/* end the pagination component */}
          </div>
        </div>
      </div>
      {/* end the course list section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}

      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

      {/* scroll to top button */}
      <ScrollToTopButton />
    </>
  );
};

export default page;
