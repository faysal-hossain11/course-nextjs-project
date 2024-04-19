import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularCourseCard = ({ cardImg }) => {
    return (
        <div className="single-courses-box style-2 mb-25 box-shadow-2 position-relative">
                    <div className="image mb-20 position-relative">
                      <Link href="/course-details" className="d-block">
                        <Image src={cardImg} alt="image" />
                      </Link>
                      <div className="cr-tag">
                        <Link href="/course-details">Engineering</Link>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="ratings">
                          <ul className="d-flex list-unstyle p-0">
                            <li>
                              <i className="ri-star-fill"></i>
                            </li>
                            <li>
                              <span>(4.5Reveiw)</span>
                            </li>
                          </ul>
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
                      <p>
                        The community created within the program is supportive
                        and collaborative.
                      </p>
                    </div>
                    <ul className="cr-items d-flex list-unstyle align-items-center">
                      <li>
                        <Link
                          href="/course-details"
                          className="btn style-one"
                        >
                          Know Details
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </li>
                      <li>
                        <span>By. Wade Warren</span>
                      </li>
                    </ul>
                  </div>
    );
};

export default PopularCourseCard;