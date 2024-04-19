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

      {/* start the Breadcurmb component */}
      <Breadcrumb breadcrumb="Sign-in"/>
      {/* end the Breadcurmb component */}

      {/* start the sign is section */}
      <div className="sign-in-section ptb-100">
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
                <form action="#">
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
                      placeholder="Enter your password"
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
                    <Link href="/sign-up">Forget password?</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn style-one w-100 box-shadow-1"
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="sign-link text-center">
                <span>
                  Dont have an account?{" "}
                  <Link href="/sign-up">Sign up for free</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the sign is section */}


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
