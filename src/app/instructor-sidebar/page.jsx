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
import InstructorProfileCard from "@/components/card/InstructorProfileCard";
import Pagination from "@/components/PaginationItem";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Instructor-sidebar" />
      {/* end the  breadcurmb component*/}

      {/* start the insctructor sidebar section */}
      <div className="instructor-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting style-one">
              <div className="fitter-option justify-content-between d-flex align-items-center">
                <p className="mb-0 mr-20">Showing 1-6 of 54 results</p>
                <div className="fit-options d-flex">
                  <div className="drwnBox">
                    <select
                      defaultValue="apple"
                      className="newItemDropdown extraDropdown"
                    >
                      <option value="apple">Sort By: Most Popular</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="instructor-contents">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor1} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor2} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor3} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor4} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor5} />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <InstructorProfileCard intructorImg={Instructor6} />
                    </div>
                  </div>
                  {/* pagination component */}
                  <div>
                    <Pagination />
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
          </div>
        </div>
      </div>
      {/* end the insctructor sidebar section */}

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
