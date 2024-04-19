import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SuccessImg from "../../../public/assets/img/all-img/sucess.png";
import LongArrow from "../../../public/assets/img/icon/long-arrow-left.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Success" />
      {/* end the breadcurmb component */}

      {/* start the success section */}
      <div className="success-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="success-content text-center">
              <Image className="mb-50" src={SuccessImg} alt="Image" />
              <h2 className="fs-35 mb-20">Payment Successfully</h2>
              <p className="mb-30">
                Your payment of $35.00 was successfully completed
              </p>
              <Link href="/" className="btn style-one box-shadow-1">
                <Image src={LongArrow} alt="icon" /> Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end the success section */}

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
