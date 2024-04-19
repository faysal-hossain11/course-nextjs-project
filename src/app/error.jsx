"use client";
import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorImg from "../../public/assets/img/all-img/error-01.png";
import LongArrow from "../../public/assets/img/icon/long-arrow-left.svg";

const error = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Error" />
      {/* end the  breadcurmb component*/}

      {/* start the error section */}
      <div className="error-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="error-content text-center">
              <Image className="mb-50" src={ErrorImg} alt="Image" />
              <h2 className="fs-35 mb-20">Page not found</h2>
              <p className="mb-30">
                Sorry, the page you are looking for doesnt exist. <br /> here
                are some helpful links,
              </p>
              <div className="error-btns d-flex justify-content-center">
                <Link href="/" className="btn style-one box-shadow-1">
                  <Image src={LongArrow} alt="icon" /> Go To Back
                </Link>
                <Link href="/" className="btn style-one dark">
                  Go To Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the error section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe componet */}

      {/* start the  footer component*/}
      <Footer1 />
      {/* end the footer componet */}
    </>
  );
};

export default error;
