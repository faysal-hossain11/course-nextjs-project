import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import React from "react";
import Image from "next/image";

import Thumb1 from "../../../public/assets/img/all-img/shop/product-thum.png";
import Thumb2 from "../../../public/assets/img/all-img/shop/product-thum-2.png";
import Thumb3 from "../../../public/assets/img/all-img/shop/product-thum-3.png";
import Thumb4 from "../../../public/assets/img/all-img/shop/product-thum-4.png";
import Product1 from "../../../public/assets/img/all-img/shop/product-display-2.jpg";
import Product2 from "../../../public/assets/img/all-img/shop/product-display.jpg";
import Product3 from "../../../public/assets/img/all-img/shop/product-display-3.jpg";
import Product4 from "../../../public/assets/img/all-img/shop/product-display-4.jpg";
import Overview from "../../../public/assets/img/icon/over-view-icon.svg";
import Star from "../../../public/assets/img/icon/star-icon.svg";
import User1 from "../../../public/assets/img/all-img/user-cmt.png";
import RelatedPd1 from "../../../public/assets/img/all-img/shop/product-3.png";
import RelatedPd2 from "../../../public/assets/img/all-img/shop/product-2.png";
import RelatedPd3 from "../../../public/assets/img/all-img/shop/product-4.png";
import Link from "next/link";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import CountValue from "@/components/CountValue";
import ProductDetailsSlide from "@/components/ProductDetailsSlide";

const page = () => {
  
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Product-details" />
      {/* end the breadcurmb component */}

      {/* start the product details section */}
      <div className="product-details pt-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                {/* <div
                  id="carouselExampleIndicators"
                  className="carousel slide product-gallery"
                  >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <Image src={Thumb1} alt="image" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <Image src={Thumb2} alt="image" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <Image src={Thumb3} alt="image" />
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    >
                      <Image src={Thumb4} alt="image" />
                    </button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image src={Product1} alt="image" />
                    </div>
                    <div className="carousel-item">
                      <Image src={Product1} alt="image" />
                    </div>
                    <div className="carousel-item">
                      <Image src={Product1} alt="image" />
                    </div>
                    <div className="carousel-item">
                      <Image src={Product1} alt="image" />
                    </div>
                  </div>
                </div> */}
                <ProductDetailsSlide />
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <h3 className="fs-20 fc-main mb-20">
                    Plaices Of Light By T - Shirt
                  </h3>
                  <div className="rating-stars mb-10">
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
                  <div className="pr-price">
                    <h5 className="fs-16">
                      <span className="price fc-sec">$100/</span>
                      <span className="old-price fs-20">$400</span>
                    </h5>
                  </div>

                  <p className="mb-40">
                    Take your first look into our e-book, where the pages unfold
                    a treasure trove of insights, knowledge, and value. Immerse
                    yourself in a world where information meets inspiration,
                  </p>
                  <div className="product-dec mb-30 position-relative">
                    <p>Special Offer</p>
                    <ul className="list-unstyle">
                      <li className="fs-16 fw-600 fc-main">
                        <span>
                          <i className="ri-arrow-right-s-fill"></i>
                        </span>{" "}
                        In Stock
                      </li>
                      <li className="fs-16 fw-600 fc-main">
                        <span>
                          <i className="ri-arrow-right-s-fill"></i>
                        </span>{" "}
                        Free Delivery Available*
                      </li>
                      <li className="fs-16 fw-600 fc-main">
                        <span>
                          <i className="ri-arrow-right-s-fill"></i>
                        </span>{" "}
                        Sale 30% Off Use Code: Deal30
                      </li>
                    </ul>
                  </div>
                  <div className="product-renge d-flex align-items-center mb-20">
                    <CountValue />
                    <Link
                      href="/cart"
                      className="btn style-one box-shadow-1 w-100"
                    >
                      Add To Cart
                    </Link>
                  </div>

                  <div className="meta-info">
                    <ul className="list-unstyle d-flex">
                      <li>
                        <Link href="/cart">
                          <i className="ri-heart-line"></i> Add To Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link href="/sign-up">
                          <i className="ri-share-line"></i> Share
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="tags">
                    <span className="fs-16 fw-600 fc-main">Tag :</span>
                    <Link href="/tag">UI Design</Link>,
                    <Link href="/tag">Web Design</Link>,
                    <Link href="/tag">UI/UX Design</Link>,
                    <Link href="/tag">Graphic Design</Link>,
                  </div>
                </div>
              </div>

              <div className="col-lg-8 pt-70">
                <div className="product-details-wapper">
                  <ul className="nav course-tab pl-30 mb-30" role="tablist">
                    <li className="nav-item pl-30" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="pill"
                        data-bs-target="#course-overview"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <Image src={Overview} alt="icon" /> Overview
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
                        <Image src={Star} alt="icon" /> Reviews
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
                      <div className="overview-content mb-30 ">
                        <h3 className="fs-20 fs-medium mb-40 mt-4">
                          Description
                        </h3>
                        <p className="mb-30">
                          Embark on a transformative learning experience with
                          our comprehensive course designed to empower you with
                          in-depth knowledge and practical skills. Our course
                          goes beyond traditional learning, offering a dynamic
                          blend of theoretical insights and hands-on
                          applications. Dive into engaging lectures, interactive
                          exercises, and real-world case studies that bridge the
                          gap between theory and practice.
                        </p>
                        <p className="mb-30">
                          Designed for learners of all levels, this course
                          provides a structured and accessible approach to
                          mastering Whether you are a novice looking to build a
                          solid foundation or a seasoned professional seeking to
                          enhance your expertise, our course adapts to your
                          unique learning needs
                        </p>
                      </div>
                      <div className="overview-otp">
                        <p className="mb-30">
                          Embark on a transformative learning journey and gain a
                          wealth of knowledge and skills that will empower you
                          both personally and professionally.
                        </p>
                        <ul className="pr-ot list-unstyle">
                          <li>
                            <span>
                              <i className="ri-arrow-right-s-fill"></i>
                            </span>{" "}
                            Take advantage of special discounts and promotions
                            available only during this sale. Secure your copies
                            at unbeatable prices!
                          </li>
                          <li>
                            <span>
                              <i className="ri-arrow-right-s-fill"></i>
                            </span>{" "}
                            Enjoy the convenience of free shipping on orders
                            over $400.00. Your literary treasures will be
                            delivered to your doorstep without any additional
                            cost.
                          </li>
                          <li>
                            <span>
                              <i className="ri-arrow-right-s-fill"></i>
                            </span>{" "}
                            We stand by the quality of our books. If youre not
                            satisfied, contact us for a hassle-free return or
                            exchange.
                          </li>
                        </ul>
                        <p className="mb-0">
                          Each certification is equipped with a unique
                          verification code, allowing employers or interested
                          parties to authenticate your achievement through our
                          platform.
                        </p>
                      </div>
                    </div>
                    {/* <!-- Reviews Tab --> */}
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
                                          src={User1}
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
                                              src={User1}
                                              className="avatar"
                                              alt="image"
                                            />
                                            <h4 className="fn">Jenny Wilson</h4>
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
                                          src={User1}
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
                              <form className="comment-form">
                                <h3 className="comment-reply-title">
                                  Leave a Reply
                                </h3>
                                <div className="student-rating">
                                  <input
                                    type="radio"
                                    id="star5"
                                    name="rating"
                                    value="5"
                                  />
                                  <label for="star5"></label>
                                  <input
                                    type="radio"
                                    id="star4"
                                    name="rating"
                                    value="4"
                                  />
                                  <label for="star4"></label>
                                  <input
                                    type="radio"
                                    id="star3"
                                    name="rating"
                                    value="3"
                                  />
                                  <label for="star3"></label>
                                  <input
                                    type="radio"
                                    id="star2"
                                    name="rating"
                                    value="2"
                                  />
                                  <label for="star2"></label>
                                  <input
                                    type="radio"
                                    id="star1"
                                    name="rating"
                                    value="1"
                                  />
                                  <label for="star1"></label>
                                </div>

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
                                    name="submit"
                                    id="submit"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the product details section */}

      {/* start the related product section */}
      <div className="related-product pb-100 pt-70">
        <div className="container">
          <div className="main-max-width">
            <div className="course-section-title mb-30 text-center">
              <h3 className="fs-35 mb-20">Related Product</h3>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-product mb-30">
                  <div className="image">
                    <Link href="/product-details">
                      <Image src={RelatedPd1} alt="image" />
                    </Link>
                    <div className="product-opt">
                      <ul className="list-unstyle">
                        <li>
                          <Link href="/author">
                            <i className="ri-heart-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-loop-right-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-drag-move-2-line"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-15">
                      <Link className="fs-20" href="/product-details">
                        Plaices Of Light By T - Shirt
                      </Link>
                    </h3>
                    <div className="pr-price mb-20">
                      <h5 className="fs-16">
                        <span className="price">$100/</span>
                        <span className="old-price">$400</span>
                      </h5>
                    </div>
                    <div className="meta-info d-flex align-items-center justify-content-between">
                      <Link href="/cart" className="pr-btn">
                        Add To Cart
                      </Link>
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
                          <li>
                            <span>(341)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-product mb-30">
                  <div className="image">
                    <Link href="/product-details">
                      <Image src={RelatedPd2} alt="image" />
                    </Link>
                    <div className="product-opt">
                      <ul className="list-unstyle">
                        <li>
                          <Link href="/author">
                            <i className="ri-heart-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-loop-right-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-drag-move-2-line"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-15">
                      <Link className="fs-20" href="/product-details">
                        Plaices Of Light By T - Shirt
                      </Link>
                    </h3>
                    <div className="pr-price mb-20">
                      <h5 className="fs-16">
                        <span className="price">$100/</span>
                        <span className="old-price">$400</span>
                      </h5>
                    </div>
                    <div className="meta-info d-flex align-items-center justify-content-between">
                      <Link href="/cart" className="pr-btn">
                        Add To Cart
                      </Link>
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
                          <li>
                            <span>(341)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-product mb-30">
                  <div className="image">
                    <Link href="/product-details">
                      <Image src={RelatedPd3} alt="image" />
                    </Link>
                    <div className="product-opt">
                      <ul className="list-unstyle">
                        <li>
                          <Link href="/author">
                            <i className="ri-heart-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-loop-right-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            <i className="ri-drag-move-2-line"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-15">
                      <Link className="fs-20" href="/product-details">
                        Plaices Of Light By T - Shirt
                      </Link>
                    </h3>
                    <div className="pr-price mb-20">
                      <h5 className="fs-16">
                        <span className="price">$100/</span>
                        <span className="old-price">$400</span>
                      </h5>
                    </div>
                    <div className="meta-info d-flex align-items-center justify-content-between">
                      <Link href="/cart" className="pr-btn">
                        Add To Cart
                      </Link>
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
                          <li>
                            <span>(341)</span>
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
      {/* end the related product section */}

      {/* start the subscribe section */}
      <Subscribe />
      {/* end the subscribe section */}

      {/* start the  footer componet*/}
      <Footer1 />
      {/* end the  footer componet*/}

    </>
  );
};

export default page;
