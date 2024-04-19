import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorImg from "../../../public/assets/img/all-img/error-02.png";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Error-two" />
      {/* end the  breadcurmb component*/}

      {/* start the error two section */}
      <div className="error-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-8">
                <div className="error-content text-center">
                  <Image className="mb-50" src={ErrorImg} alt="Image" />
                  <h2 className="fs-35 mb-20">Page not found</h2>
                  <p className="mb-30">Sorry, This page could not be Found!</p>
                  <Link href="/" className="btn style-one dark">
                    Go To Home Page
                  </Link>
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
      {/* end the error two section */}

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
