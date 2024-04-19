import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlogCard = ({ blogImg, author}) => {
  return (
    <div className="single-blog-box">
      <div className="image position-relative">
        <Link href="/blog-details">
          <Image src={blogImg} alt="image" />
        </Link>
        <div className="cr-tag">
          <Link href="/author">Design</Link>
        </div>
        <div className="author">
          <Link href="/author">
            <Image src={author} alt="image" />
            <span>Eleanor Pena</span>
          </Link>
        </div>
      </div>
      <div className="content">
        <ul className="cr-items d-flex list-unstyle">
          <li className="mr-20">
            <Link href="/author">
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
  );
};

export default LatestBlogCard;
