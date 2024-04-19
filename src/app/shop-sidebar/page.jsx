import Header1 from "@/components/Header/Header1";
import Link from "next/link";
import React from "react";
import Product1 from "../../../public/assets/img/all-img/shop/product-1.png";
import Product2 from "../../../public/assets/img/all-img/shop/product-2.png";
import Product3 from "../../../public/assets/img/all-img/shop/product-3.png";
import Product4 from "../../../public/assets/img/all-img/shop/product-4.png";
import Product5 from "../../../public/assets/img/all-img/shop/product-5.png";
import Product6 from "../../../public/assets/img/all-img/shop/product-6.png";
import Product7 from "../../../public/assets/img/all-img/shop/product-7.png";
import Product8 from "../../../public/assets/img/all-img/shop/product-8.png";
import Product9 from "../../../public/assets/img/all-img/shop/product-9.png";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import ProductCard from "@/components/card/ProductCard";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the subscribe section */}
      <Breadcrumb breadcrumb="Shop-Single" />
      {/* end the subscribe section */}

      {/* start the product filter sidebar section  */}
      <div className="product-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting style-one">
              <div className="fitter-option justify-content-between d-flex align-items-center">
                <p className="mb-0 mr-20">Sort By: Most Popular</p>
                <div className="fit-options d-flex">
                <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown extraDropdown">
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
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product1} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product2} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product3} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product4} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product5} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product6} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product7} />
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <ProductCard productImg={Product8} />
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
                            <Link className="btn-filter" href="/shop-sidebar">
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
          </div>
        </div>
      </div>
      {/* end the product filter sidebar section  */}

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
