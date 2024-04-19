import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Link from "next/link";
import Image from "next/image";
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
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
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

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Shop" />
      {/* end the breadcurmb component */}

      {/* start the products section */}
      <div className="product-section pt-100 pb-70">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting style-one">
              <div className="fitter-option filter-fixe justify-content-between d-flex align-items-center">
                <p className="mb-0 mr-20">Showing 1-6 of 54 results</p>
                <div className="fit-options d-flex">
                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newItemDropdownpd">
                      <option value="apple">Category</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newItemDropdownpd">
                      <option value="apple">Price Filter</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newItemDropdownpd" >
                      <option value="apple">Popular Tag</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown extraDropdown" >
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
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product2} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product3} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product4} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product5} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product6} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product7} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product8} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the products section */}

      {/* start the feature product section */}
      <div className="feature-product pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-feature-product pr-bg-1 position-relative">
                  <div className="content">
                    <h4>
                      <Link
                        className="text-white fs-20"
                        href="/product-details"
                      >
                        Best Selling Book Of the Month.
                      </Link>
                    </h4>
                    <div className="meta-info mb-15 d-flex justify-content-between align-items-center">
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
                      <span className="text-white">$400.59</span>
                    </div>
                    <p className="text-white">
                      Take your first look into our e-book, where the pages
                      unfold a treasure trove of insights, knowledge, and value.
                    </p>

                    <div className="card-btn d-flex justify-content-between align-items-center">
                      <Link className="btn style-one" href="/product-details">
                        Buy Now <Image src={LongArrow} alt="icon" />
                      </Link>
                      <p className="text-white mb-0 ">1 k Millions Doller</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-feature-product pr-bg-2 position-relative">
                  <div className="content">
                    <h4>
                      <Link
                        className="text-white fs-20"
                        href="/product-details"
                      >
                        Best Selling Book Of the Month.
                      </Link>
                    </h4>
                    <div className="meta-info mb-15 d-flex justify-content-between align-items-center">
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
                      <span className="text-white">$400.59</span>
                    </div>
                    <p className="text-white">
                      Take your first look into our e-book, where the pages
                      unfold a treasure trove of insights, knowledge, and value.
                    </p>

                    <div className="card-btn d-flex justify-content-between align-items-center">
                      <Link className="btn style-one" href="/product-details">
                        Buy Now <Image src={LongArrow} alt="icon" />
                      </Link>
                      <p className="text-white mb-0">1 k Millions Doller</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the feature product section */}

      {/* start the best sellar section */}
      <div className="slider-product pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <h2 className="mb-0 fs-35">Best Seller Books</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product2} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <ProductCard productImg={Product3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the best sellar section */}

      {/* start the subscribe section */}
      <Subscribe />
      {/* end the subscribe section */}

      {/* start the footer section */}
      <Footer1 />
      {/* end the footer section */}

    </>
  );
};

export default page;
