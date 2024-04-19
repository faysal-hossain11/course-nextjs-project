import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseListCard = ({ cardImg, teacher}) => {
  return (
    <>
    <div className="single-courses-box style-two mb-25 box-shadow-2 mb-30">
      <div className="row align-items-center">
        <div className="col-lg-6 col-sm-6 col-md-12">
          <div className="image position-relative">
            <Link href="/course-details" className="d-block">
              <Image src={cardImg} alt="image" />
            </Link>
            <div className="cr-option">
              <Link href="/author">
                <i className="ri-heart-fill"></i>
              </Link>
              <Link href="/author">
                <i className="ri-shopping-basket-fill"></i>
              </Link>
            </div>
            <div className="cr-tag">
              <Link href="/course-details">Engineering</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-12">
          <div className="content">
            <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
              <div className="author d-flex align-items-center">
                <Image src={teacher} alt="image" />
                <span>Eleanor Pena</span>
              </div>
              <div className="cr-price">
                <h5 className="fs-16 mb-0">
                  <span className="price">$100/</span>{" "}
                  <span className="old-price">$400</span>
                </h5>
              </div>
            </div>
            <h3 className="mb-15 fs-20">
              <Link href="/course-details">
                Full web Designing Course with 42 web Template.
              </Link>
            </h3>
            <div className="ratings mb-20">
              <ul className="d-flex list-unstyle p-0">
                <li>
                  <i className="ri-star-fill"></i>
                </li>
                <li>
                  <i className="ri-star-fill"></i>
                </li>
                <li>
                  <i className="ri-star-fill"></i>
                </li>
                <li>
                  <i className="ri-star-fill"></i>
                </li>
                <li>
                  <i className="ri-star-fill"></i>
                </li>
                <li>
                  <span>(45)</span>
                </li>
              </ul>
            </div>
          </div>
          <ul className="cr-items d-flex list-unstyle">
            <li className="mr-15">
              <i className="ri-vidicon-fill"></i> <span>(45) lesson</span>{" "}
            </li>
            <li>
              <i className="ri-time-line"></i> <span>10 Week</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseListCard;
