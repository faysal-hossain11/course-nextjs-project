import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import BlogListImg1 from "../../../public/assets/img/all-img/blog-style-1.png";
import BlogListImg2 from "../../../public/assets/img/all-img/blog-style-2.png";
import BlogListImg3 from "../../../public/assets/img/all-img/blog-style-3.png";
import BlogListImg4 from "../../../public/assets/img/all-img/blog-style-4.png";
import BlogListImg5 from "../../../public/assets/img/all-img/blog-style-5.png";
import BlogListImg6 from "../../../public/assets/img/all-img/blog-style-6.png";
import BlogListImg7 from "../../../public/assets/img/all-img/blog-style-7.png";
import BlogListUser1 from "../../../public/assets/img/all-img/blog-user-1.png";
import RecentBlog1 from "../../../public/assets/img/all-img/recent-blogs-1.png";
import RecentBlog2 from "../../../public/assets/img/all-img/recent-blogs-2.png";
import RecentBlog3 from "../../../public/assets/img/all-img/recent-blogs-3.png";
import RecentBlog4 from "../../../public/assets/img/all-img/recent-blogs-4.png";
import Logo from "../../../public/assets/img/logo/logo.svg";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import BlogListCard from "@/components/card/BlogListCard";
import Pagination from "@/components/PaginationItem";

const page = () => {
  return (
    <>
      {/* start the header componet */}
      <Header1 />
      {/* end the header componet */}

      {/* start the breadcurmb component  */}
      <Breadcrumb breadcrumb="Blog-list"/>
      {/* end the breadcurmb component  */}

      {/* start the blog list section */}
      <div className="blog-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-xl-8">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-sm-6">
                    <BlogListCard cardImg={BlogListImg1}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg2}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg3}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg4}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg5}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg6}  teacherImg={BlogListUser1}/>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                  <BlogListCard cardImg={BlogListImg7}  teacherImg={BlogListUser1}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="course-sidebar-widgets">
                  <div className="widget widget-catgory widget-search">
                    <form className="search-form">
                      <label>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                      </label>
                      <button className="widget-search-btn" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </form>

                    <div className="accordion" id="widget-collps">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button widget-title"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                          >
                            Categories
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="widget-collapse collapse show"
                          data-bs-parent="#widget-collps"
                        >
                          <div className="widget-collps-body">
                            <ul>
                              <li>
                                <Link href="/categories">
                                  <p>Business Consulting</p> <span>(15)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Tax Consulting</p> <span>(20)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Art & Design</p> <span>(10)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Tax Consulting</p> <span>(20)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Technology</p> <span>(17)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Development</p> <span>(08)</span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/categories">
                                  <p>Impact of Education</p> <span>(03)</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget-recent-blog">
                    <h3 className="widget-title">Related Blogs</h3>
                    <article className="item">
                      <Link href="/blog-details" className="thumb">
                        <Image src={RecentBlog1} alt="iamge" />
                      </Link>
                      <div className="info">
                        <p>
                          By:{" "}
                          <Link href="/instructor-details">
                            Jon Ebraham
                          </Link>
                        </p>
                        <h4 className="title">
                          <Link href="/blog-details">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-details" className="thumb">
                        <Image src={RecentBlog2} alt="iamge" />
                      </Link>
                      <div className="info">
                        <p>
                          By:{" "}
                          <Link href="/instructor-details">
                            Jon Ebraham
                          </Link>
                        </p>
                        <h4 className="title">
                          <Link href="/blog-details">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-details" className="thumb">
                        <Image src={RecentBlog3} alt="iamge" />
                      </Link>
                      <div className="info">
                        <p>
                          By:{" "}
                          <Link href="/instructor-details">
                            Jon Ebraham
                          </Link>
                        </p>
                        <h4 className="title">
                          <Link href="/blog-details">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-details" className="thumb">
                        <Image src={RecentBlog4} alt="iamge" />
                      </Link>
                      <div className="info">
                        <p>
                          By:{" "}
                          <Link href="/instructor-details">
                            Jon Ebraham
                          </Link>
                        </p>
                        <h4 className="title">
                          <Link href="/blog-details">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                  <div className="widget widget-tag-cloud">
                    <h3 className="widget-title">Popular Tags</h3>
                    <div className="tagcloud">
                      <Link href="/tag">Business</Link>
                      <Link href="/tag">Course</Link>
                      <Link href="/tag">Consulting</Link>
                      <Link href="/tag">Online</Link>
                      <Link href="/tag">Remote</Link>
                      <Link href="/tag">Solution</Link>
                    </div>
                  </div>
                  <div className="widget-add">
                    <div className="content">
                      <Link className="text-decoration-none" href="/">
                        <Image src={Logo} alt="image" />
                      </Link>
                      <p className="fs-20">
                        Need Help? We Are Here To Help You
                      </p>
                      <Link href="/contact" className="btn style-one">
                        {" "}
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      {/* end the blog list section */}

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
