import Image from "next/image";
import Link from "next/link";
import React from "react";
// import PlayImg from "../../public/assets/img/icon/short-play.svg";
import PlayImg from "../../../public/assets/img/icon/short-play.svg";
import ShortUser from "../../../public/assets/img/icon/short-user.svg";

const InstructorProfileCard = ({ intructorImg }) => {
  return (
    <div className="single-instructor-box style-one box-shadow-2 mb-30">
      <div className="image">
        <Image src={intructorImg} alt="image" />
        <ul className="social-profile list-unstyle">
          <li>
            <Link href="https://www.fb.com" target="_blank">
              <i className="ri-facebook-fill"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com" target="_blank">
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
      <div className="content">
        <div className="details-info d-flex justify-content-between">
          <div className="text">
            <h3 className="fs-16">Cameron Williamson</h3>
            <p>Marketing & Sale</p>
          </div>
          <div className="reat">
            <i className="ri-star-fill"></i> 4.5
          </div>
        </div>
        <div className="meta-info d-flex align-items-center">
          <div className="item">
            <Image src={PlayImg} alt="image" /> (20) Course
          </div>
          <div className="item">
            <Image src={ShortUser} alt="image" /> 588 Student
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfileCard;
