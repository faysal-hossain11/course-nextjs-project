import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrThumImg from "../../../public/assets/img/all-img/pr-thum.png";
import IconBoxImg from "../../../public/assets/img/icon/x-iocn.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import CountValue from "@/components/CountValue";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Shopping Cart" />
      {/* end the breadcurmb component */}

      {/* start the cart price section */}
      <section className="cart-area ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="cart-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th></th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className="product-info">
                        <div className="product-thumbnail position-relative">
                          <Link
                            href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
                            target="_blank"
                            className="popup-youtube"
                          >
                            <Image src={PrThumImg} alt="image" />
                            <i className="ri-play-fill"></i>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-name">
                        <Link href="/product-details" className="fs-20">
                          Elevate your skills in 2024 with our Web Design.
                        </Link>
                      </div>
                    </td>
                    <td className="product-price">
                      <span className="unit-amount">$85.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="input-counter d-flex">
                        {/* <input type="text" value="1" />
                        <div className="scale-btn">
                          <span className="plus-btn">
                            <i className="ri-arrow-up-s-line"></i>
                          </span>
                          <span className="minus-btn">
                            <i className="ri-arrow-down-s-line"></i>
                          </span>
                        </div> */}
                        <CountValue />
                      </div>
                    </td>
                    <td>
                      <div className="remove-icon">
                        <Link href="/cart">
                          <Image src={IconBoxImg} alt="Icon" />
                        </Link>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="subtotal-amount">$85.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <div className="product-thumbnail position-relative">
                          <Link
                            href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
                            target="_blank"
                            className="popup-youtube"
                          >
                            <Image src={PrThumImg} alt="image" />
                            <i className="ri-play-fill"></i>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-name">
                        <Link href="/product-details" className="fs-20">
                          Elevate your skills in 2024 with our Web Design.
                        </Link>
                      </div>
                    </td>
                    <td className="product-price">
                      <span className="unit-amount">$85.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="input-counter d-flex">
                        {/* <input type="text" value="1" />
                                                <div className="scale-btn">
                                                    <span className="plus-btn"><i className="ri-arrow-up-s-line"></i></span>
                                                    <span className="minus-btn"><i className="ri-arrow-down-s-line"></i></span>
                                                </div> */}
                        <CountValue />
                      </div>
                    </td>
                    <td>
                      <div className="remove-icon">
                        <Link href="/cart">
                          <Image src={IconBoxImg} alt="Icon" />
                        </Link>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="subtotal-amount">$85.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-info">
                        <div className="product-thumbnail position-relative">
                          <Link
                            href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
                            className="popup-youtube"
                          >
                            <Image src={PrThumImg} alt="image" />
                            <i className="ri-play-fill"></i>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-name">
                        <Link href="/product-details" className="fs-20">
                          Elevate your skills in 2024 with our Web Design.
                        </Link>
                      </div>
                    </td>
                    <td className="product-price">
                      <span className="unit-amount">$85.00</span>
                    </td>
                    <td className="product-quantity">
                      <div className="input-counter d-flex">
                        {/* <input type="text" value="1" />
                        <div className="scale-btn">
                          <span className="plus-btn">
                            <i className="ri-arrow-up-s-line"></i>
                          </span>
                          <span className="minus-btn">
                            <i className="ri-arrow-down-s-line"></i>
                          </span>
                        </div> */}
                        <CountValue />
                      </div>
                    </td>
                    <td>
                      <div className="remove-icon">
                        <Link href="/cart">
                          <Image src={IconBoxImg} alt="Icon" />
                        </Link>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="subtotal-amount">$85.00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cart-options-ft">
              <div className="row justify-content-between">
                <div className="col-lg-5 col-sm-12 col-md-7">
                  <div className="shopping-coupon-code">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Coupon code"
                      name="coupon-code"
                      id="coupon-code"
                    />
                    <button type="submit">Apply</button>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 col-md-5 text-right">
                  <div className="cart-totals">
                    <h3 className="fs-20 mb-20 fc-main">Cart Totals</h3>
                    <ul>
                      <li>
                        Subtotal <span className="fw-600 fc-main">85.00</span>
                      </li>
                      <li>
                        Shipping <span className="fw-600 fc-sec">Free</span>
                      </li>
                      <li>
                        Total <span className="fw-600 fc-main">85.00</span>
                      </li>
                    </ul>
                    <Link
                      href="/checkout"
                      className="btn style-one box-shadow-1 w-100"
                    >
                      Proceed To Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end the cart price section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}

      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
};

export default page;
