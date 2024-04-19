import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ authorImg, cardImg }) => {
  return (
    <div className="single-courses-box mb-25 box-shadow-2">
      <div className="image mb-20 position-relative">
        <Link href="/course-details" className="d-block">
          <Image src={cardImg} alt="image" />
        </Link>
        <div className="cr-option">
          <Link href="/course-list">
            <i className="ri-heart-fill"></i>
          </Link>
          <Link href="/course-list">
            <i className="ri-shopping-basket-fill"></i>
          </Link>
        </div>
        <div className="cr-tag">
          <Link href="/course-details">Engineering</Link>
        </div>
      </div>
      <div className="content">
        <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
          <div className="author d-flex align-items-center">
            <Image src={authorImg} alt="image" />
            <span>Jerome Bell</span>
          </div>
          <div className="cr-price">
            <h5 className="fs-16">
              <span className="price">$100/</span>{" "}
              <span className="old-price">$400</span>
            </h5>
          </div>
        </div>
        <h3 className="mb-15 fs-20">
          <Link href="/course-details">Full web Designing Course with 42 web Template.</Link>
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
              <span>(5)</span>
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
  );
};

export default CourseCard;
