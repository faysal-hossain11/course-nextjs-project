import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Link from "next/link";
import React from "react";
import FBImg from "../../../public/assets/img/icon/facebook.svg";
import GoogleImg from "../../../public/assets/img/icon/google.svg";
import Image from "next/image";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Sign-up" />
      {/* end the breadcurmb component */}

      {/* start the sign up section */}
      <div className="sign-up-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="sign-content">
              <div className="box-content text-center mb-30">
                <h4>Welcome back</h4>
                <p>
                  Hey there! Ready to log in? Just enter your username and
                  password below and youll be back in action in no time. Lets
                  go!
                </p>
              </div>

              <div className="acount-s d-flex justify-content-between mb-20">
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  className="btn"
                >
                  <Image src={GoogleImg} alt="image" /> Sign in with Google
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="btn"
                >
                  <Image src={FBImg} alt="image" /> Sign in with Facebook
                </Link>
              </div>
              <div className="text-sin text-center position-relative mb-10">
                <p className="mb-0">Or Sign in with Email</p>
              </div>
              <div className="log-from mb-30">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-15">
                        <label className="label-style">Fast Name</label>
                        <input
                          type="text"
                          placeholder="Fast Name"
                          className="bg-white input-style border-style w-100 h-60"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
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
                    <label className="label-style">Your email</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="bg-white input-style border-style w-100 h-60"
                    />
                  </div>
                  <div className="form-group mb-30">
                    <label className="label-style">Password</label>
                    <input
                      type="text"
                      placeholder="password"
                      className="bg-white input-style border-style w-100 h-60"
                    />
                  </div>
                  <div className="form-group mb-30">
                    <label className="label-style">Confirm Password</label>
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="bg-white input-style border-style w-100 h-60"
                    />
                  </div>
                  <div className="meta-info d-flex justify-content-between mb-20">
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
                        I agree to the terms of service
                      </label>
                    </div>
                  </div>
                  <Link
                    className="text-decoration-none btn style-one w-100 mb-20"
                    href="#"
                  >
                    Create Account
                  </Link>
                  <Link
                    className="text-decoration-none btn style-one w-100 signin"
                    href="/sign-in"
                  >
                    Sign In
                  </Link>
                </form>
              </div>

              <div className="sign-link text-center">
                <span>
                  Have an account? <Link href="/sign-in">Sign In</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the sign up section */}

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
