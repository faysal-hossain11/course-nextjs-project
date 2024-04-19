import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogListCard = ({ cardImg, teacherImg }) => {
  return (
    <div className="single-blog-box style-2 mb-30">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="image position-relative">
            <Link href="/blog-details">
              <Image src={cardImg} alt="image" />
            </Link>
            <div className="cr-tag">
              <Link href="/author">Design</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content">
            <Link className="author" href="/author">
              <Image src={teacherImg} alt="image" />
              <span>Eleanor Pena</span>
            </Link>
            <ul className="cr-items d-flex list-unstyle">
              <li className="mr-20">
                <Link href="#">
                  <i className="ri-chat-1-line"></i>
                  <span>54 Message</span>
                </Link>
              </li>
              <li>
                <i className="ri-calendar-2-line"></i>
                <span>31 December 2023</span>
              </li>
            </ul>
            <h3 className="mb-15 fs-20">
              <Link href="/blog-details">
                Business modeless and pricing strategies are essential.
              </Link>
            </h3>
            <p>This immersive course is crafted to provide participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
