import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import React from "react";
import Visa from "../../../public/assets/img/icon/visa-card.svg";
import Paypal from "../../../public/assets/img/icon/paypal-card.svg";
import Master from "../../../public/assets/img/icon/master-card.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Checkout"/>
      {/* end the breadcurmb component */}

      {/* start the checkout details section */}
      <div className="checkout-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-8">
                <div className="checkout-from">
                  <h4 className="fs-20 mb-30">Billing Details</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Fast Name</label>
                          <input
                            type="text"
                            placeholder="Fast Name"
                            className="bg-white input-style border-style w-100 h-60"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Last Name</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-white input-style border-style w-100 h-60"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-15">
                      <label className="label-style">Course name</label>
                      <input
                        type="text"
                        placeholder="Course name"
                        className="bg-white input-style border-style w-100 h-60"
                      />
                    </div>

                    <div className="form-group mb-15">
                      <label className="label-style">Your email</label>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="bg-white input-style border-style w-100 h-60"
                      />
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Country</label>
                          <select className="form-select fs-15 h-60 input-style border-style form-select-lg mb-3">
                            <option selected>Your Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Town/City</label>
                          <select className="form-select fs-15 h-60 input-style border-style form-select-lg mb-3 ">
                            <option selected>Town/City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-20">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Phone number</label>
                          <input
                            type="text"
                            placeholder="Phone number"
                            className="bg-white input-style border-style w-100 h-60"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-15">
                          <label className="label-style">Zip code</label>
                          <input
                            type="text"
                            placeholder="Zip code"
                            className="bg-white input-style border-style w-100 h-60"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="condetion d-flex mb-20">
                      <div className="form-check edu-check">
                        <input
                          className="form-check-input edu-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label edu-check-label"
                          for="defaultCheck1"
                        >
                          Create a new account?
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
                          Ship to a different address?
                        </label>
                      </div>
                    </div>

                    <h4 className="fs-20 mb-30">Additional information</h4>
                    <div className="form-group mb-15">
                      <textarea
                        name="msg"
                        id="msg"
                        cols="30"
                        rows="5"
                        className="bg-white input-style border-style w-100"
                        placeholder="Order Notes"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="checkout-sidebar">
                  <h4 className="fs-20 mb-30">Your Orders</h4>
                  <div className="details-list">
                    <div className="list-head justify-content-between d-flex align-items-center">
                      <h3 className="fs-16">Product</h3>
                      <h3 className="fs-16">Total</h3>
                    </div>
                    <div className="list-body">
                      <ul className="list-unstyle">
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Watermelon Plant</span>
                          <span>$85.00</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Hoodie x2</span>
                          <span>$85.00</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Design s25</span>
                          <span>$85.00</span>
                        </li>
                      </ul>
                    </div>

                    <div className="list-body">
                      <ul className="list-unstyle">
                        <li className="d-flex align-items-center justify-content-between">
                          <span className="fw-600 fc-main">Sub Total</span>
                          <span className="fw-600 fc-main">$310.00</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span className="fw-600 fc-main">Shipping</span>
                          <span className="fw-600 fc-sec">Free</span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>Shipping To BA</span>
                          <span className="fc-sec">Change Location</span>
                        </li>
                      </ul>
                    </div>

                    <div className="list-head justify-content-between d-flex align-items-center">
                      <h3 className="fs-16">Order Total</h3>
                      <h3 className="fs-16">$310.00</h3>
                    </div>

                    <div className="card-details">
                      <div className="card-list mb-20 d-flex align-items-center justify-content-between">
                        <span className="fw-600 fc-main">Credit Card:</span>
                        <div className="card-types">
                          <Image src={Visa} alt="card" />
                        </div>
                        <div className="card-types">
                          <Image src={Paypal} alt="card" />
                        </div>
                        <div className="card-types">
                          <Image src={Master} alt="card" />
                        </div>
                      </div>

                      <p>Pay with your credit card visa</p>

                      <div className="form-group mb-15">
                        <label className="label-style">Card Number</label>
                        <input
                          type="text"
                          placeholder="XXXX"
                          className="input-style w-100"
                        />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-15">
                            <label className="label-style">Exp</label>
                            <input
                              type="number"
                              placeholder="XXXX"
                              className="input-style w-100"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-15">
                            <label className="label-style">CVC</label>
                            <input
                              type="number"
                              placeholder="XXXX"
                              className="input-style w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn style-one box-shadow-1 w-100"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the checkout details section */}


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
