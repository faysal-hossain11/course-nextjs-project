import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/Footer/Footer1";
import Header1 from "@/components/Header/Header1";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import FetureImg1 from "../../../public/assets/img/icon/feture-icon-1.svg";
import FetureImg2 from "../../../public/assets/img/icon/feture-icon-2.svg";
import FetureImg3 from "../../../public/assets/img/icon/feture-icon-3.svg";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Instructor1 from "../../../public/assets/img/all-img/instructor-1.png";
import Instructor2 from "../../../public/assets/img/all-img/instructor-2.png";
import Instructor3 from "../../../public/assets/img/all-img/instructor-3.png";
import ShortUser from "../../../public/assets/img/icon/short-user.svg";
import ShortPlay from "../../../public/assets/img/icon/short-play.svg";
import FaqImgNew from "../../../public/assets/img/all-img/shop/faq.png";
import InstructorProfileCard from "@/components/card/InstructorProfileCard";
import Accordient from "@/components/Accordient";

const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Instructor-two" />
      {/* end the  breadcurmb component*/}

      {/* start the instructor two section */}
      <div className="benefits-section pt-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <h4 className="sub-title mb-25"># Benefits</h4>
              <h2 className="mb-0 fs-35">Your guiding star with our help</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="benefits-box box-shadow-2">
                  <div className="icon">
                    <Image src={FetureImg1} alt="icon" />
                  </div>
                  <div className="content">
                    <h3>Leadership</h3>
                    <p className="mb-0">
                      Successful leaders are lifelong learners. They seek new
                      knowledge, stay informed about industry trends,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="benefits-box box-shadow-2">
                  <div className="icon">
                    <Image src={FetureImg2} alt="icon" />
                  </div>
                  <div className="content">
                    <h3>Deep Honesty</h3>
                    <p className="mb-0">
                      Deep honesty begins with self-awareness and reflection. It
                      requires individuals to honestly confront their own
                      thoughts,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="benefits-box box-shadow-2">
                  <div className="icon">
                    <Image src={FetureImg3} alt="icon" />
                  </div>
                  <div className="content">
                    <h3>Social Impact</h3>
                    <p className="mb-0">
                      Social impact often begins with a clear purpose and
                      mission. Individuals and organizations committed,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the instructor two section */}

      {/* start the instructor two section */}
      <div className="instructor-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Team</h4>
                    <h2 className="mb-0 fs-35">
                      Your guiding star with our help
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="section-btn text-end">
                    <Link
                      href="/instructor"
                      className="btn style-one box-shadow-1"
                    >
                      View All <Image src={LongArrow} alt="Image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <InstructorProfileCard intructorImg={Instructor1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <InstructorProfileCard intructorImg={Instructor2} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <InstructorProfileCard intructorImg={Instructor3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the instructor two section */}


      {/* start the faq section */}
      <div className="faq-section pb-100">
            <div className="container">
                <div className="main-max-width">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mb-50">
                                <h4 className="sub-title mb-25"># Benefits</h4>
                                <h2 className="mb-0 fs-35">A Few Frequently Asked questions</h2>
                            </div>
                            <div className="image">
                              <Image src={FaqImgNew} alt="faq image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-content">
                                <Accordient />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* end the faq section */}

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
