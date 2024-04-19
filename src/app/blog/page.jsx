import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogImg1 from "../../../public/assets/img/all-img/blog-1.png";
import BlogImg2 from "../../../public/assets/img/all-img/blog-2.png";
import BlogImg3 from "../../../public/assets/img/all-img/blog-3.png";
import BlogImg4 from "../../../public/assets/img/all-img/blog-4.png";
import BlogImg5 from "../../../public/assets/img/all-img/blog-5.png";
import BlogImg6 from "../../../public/assets/img/all-img/blog-6.png";
import UserImg1 from "../../../public/assets/img/all-img/blog-user-1.png";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import LatestNestCard from "@/components/card/LatestNestCard";
import Pagination from "@/components/PaginationItem";

const page = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component */}
      <Breadcrumb breadcrumb="Blog" />
      {/* end the breadcurmb component */}

      {/* start the blog section */}
      <div className="blog-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg1}
                  newsCardAuthImg={UserImg1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg2}
                  newsCardAuthImg={UserImg1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg3}
                  newsCardAuthImg={UserImg1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg4}
                  newsCardAuthImg={UserImg1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg5}
                  newsCardAuthImg={UserImg1}
                />
              </div>
              <div className="col-lg-4 col-sm-6">
                <LatestNestCard
                  newsCardImg={BlogImg6}
                  newsCardAuthImg={UserImg1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Pagination />
        </div>
      </div>
      {/* end the blog section */}

      {/* start the subscirobe component  */}
      <Subscribe />
      {/* end the subscirobe component  */}

      {/* start the subscirobe component  */}
      <Footer1 />
      {/* end the subscirobe component  */}

    </>
  );
};

export default page;
