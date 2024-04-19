import Link from "next/link";
import React from "react";

import WhiteLogo from "../../../public/assets/img/logo/white-logo.svg";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Image from "next/image";

const Footer1 = () => {
  return (
    <div className="footer-area ft-bg">
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="footer-widget info-web">
                  <div className="image">
                    <Link className="text-decoration-none" href="index.html">
                      <Image src={WhiteLogo} alt="image" />
                    </Link>
                  </div>
                  <p className="pra-light mb-30">
                    Consulting is a dynamic and multifaceted field that involves
                    providing expert advice and guidance to individuals,
                  </p>

                  <Link href="sign-up.html" className="btn style-one">
                    Sign Up <Image src={LongArrow} alt="Image" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4 className="text-white">Quick Links</h4>
                  <ul>
                    <li>
                      <Link href="/blog-details">Make Appointment</Link>
                    </li>
                    <li>
                      <Link href="/shop">Customers Services</Link>
                    </li>
                    <li>
                      <Link href="/about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/course-grid">Our Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/instructor-sidebar">Free Consulting</Link>
                    </li>
                    <li>
                      <Link href="/instructor-details">Meet Your Experts</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget ml-70">
                  <h4 className="text-white">Categories</h4>
                  <ul>
                    <li>
                      <Link href="/courses">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/course-details">UI&UX Designer</Link>
                    </li>
                    <li>
                      <Link href="/course-grid">Management</Link>
                    </li>
                    <li>
                      <Link href="/course-list">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog News</Link>
                    </li>
                    <li>
                      <Link href="/blog-list">Finance & Accounting</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="footer-widget">
                  <h4 className="text-white">Get In Touch</h4>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-map-pin-5-fill"></i>
                    </div>
                    <div className="content">
                      <p className="mb-0">
                        27 Division Sat, Barakuti, No 12G02, Us
                      </p>
                    </div>
                  </div>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-phone-fill"></i>
                    </div>
                    <div className="content">
                      <Link href="tel:+123456789865">+123 456 789 865</Link>
                      <Link href="tel:+741852963856">+741 852 963 856</Link>
                    </div>
                  </div>
                  <div className="contact-item d-flex align-items-center">
                    <div className="icon">
                      <i className="ri-mail-unread-fill"></i>
                    </div>
                    <div className="content">
                      <Link href="mailto:insocour@gmail.com">
                        insocour@gmail.com
                      </Link>
                      <Link href="mailto:insocour@gmail.com">
                        insocour@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-4 col-xm-6 col-md-6">
                <div className="cpr-left">
                  <p className="mb-0">
                    Copyright @ 2023 Education. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-xm-6 col-md-6">
                <div className="cpr-right">
                  <ul>
                    <li>
                      <span>Follow Us:</span>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com" target="_blank">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://linkedin.com/" target="_blank">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
