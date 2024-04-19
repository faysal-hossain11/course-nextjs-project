import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LocationIcon from "../../../public/assets/img/icon/location-icon-cont.svg";
import MailIcon from "../../../public/assets/img/icon/mail-icon-cont.svg";
import PhoneIcon from "../../../public/assets/img/icon/phone-icon-cont.svg";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Contact"/>
      {/* end the  breadcurmb component*/}

      {/* start the contact section */}
      <div className="contact-section">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h2 className="fs-35 mb-30 gradient-style">Get In Touch</h2>
                  <p>
                    Whether you have questions about our services, want to
                    explore potential collaboration opportunities,
                  </p>

                  <div className="contact-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group mb-15">
                            <label className="label-style">Fast Name</label>
                            <input
                              type="text"
                              placeholder="Fast Name"
                              className="bg-white input-style border-style w-100 h-60"
                            />
                          </div>
                        </div>
                        <div className="col-6">
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
                      <div className="form-group mb-15">
                        <label className="label-style">Message</label>
                        <textarea
                          name="msg"
                          id="msg"
                          cols="30"
                          rows="5"
                          className="bg-white input-style border-style w-100"
                          placeholder="Your comments here"
                        ></textarea>
                      </div>
                      <button className="btn style-one box-shadow-1">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info">
                  <h4 className="fs-20 text-title">Contact Us</h4>

                  <div className="content mb-40">
                    <div className="info-item d-flex align-items-center">
                      <div className="icon">
                        <Image src={LocationIcon} alt="icon" />
                      </div>
                      <div className="text">
                        <h5 className="fs-16">Address</h5>
                        <p className="mb-0">
                          2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                        </p>
                      </div>
                    </div>
                    <div className="info-item d-flex align-items-center">
                      <div className="icon">
                        <Image src={MailIcon} alt="icon" />
                      </div>
                      <div className="text">
                        <h5 className="fs-16">Email</h5>
                        <Link href="mailto:Info123456@gmail.com">
                          Info123456@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="info-item d-flex align-items-center">
                      <div className="icon">
                        <Image src={PhoneIcon} alt="icon" />
                      </div>
                      <div className="text">
                        <h5 className="fs-16">Phone</h5>
                        <Link href="tel:123456789">+123 456 789</Link>
                      </div>
                    </div>
                  </div>

                  <div className="social-profile d-flex align-items-center">
                    <span className="fs-16">Follow Us:</span>
                    <ul className="list-unstyle d-flex">
                      <li>
                        <Link href="https://www.fb.com" target="_blank">
                          <i className="ri-facebook-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.twitter.com" target="_blank">
                          <i className="ri-twitter-x-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com" target="_blank">
                          <i className="ri-instagram-line"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com" target="_blank">
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
      <div className="map-loc pb-100">
        <div className="container-fluid g-0">
          <div className="office-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
      </div>
      {/* end the contact section */}

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
