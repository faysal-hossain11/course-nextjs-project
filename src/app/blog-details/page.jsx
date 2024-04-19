import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogDetailsImg from "../../../public/assets/img/all-img/blog-details.png";
import BlogUser1 from "../../../public/assets/img/all-img/blog-user-1.png";
import QuoteImg from "../../../public/assets/img/icon/quate-icon-2.svg";
import BlogDetailsImg2 from "../../../public/assets/img/all-img/blog-details-2.png";
import PrevImg from "../../../public/assets/img/all-img/prev-img.png";
import NextImg from "../../../public/assets/img/all-img/next-img.png";
import UserCMT from "../../../public/assets/img/all-img/user-cmt.png";
import RecentBlog1 from "../../../public/assets/img/all-img/recent-blogs-1.png";
import RecentBlog2 from "../../../public/assets/img/all-img/recent-blogs-2.png";
import RecentBlog3 from "../../../public/assets/img/all-img/recent-blogs-3.png";
import RecentBlog4 from "../../../public/assets/img/all-img/recent-blogs-4.png";
import Logo from "../../../public/assets/img/logo/logo.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";

const BlogDetails = () => {
  return (
    <>
      {/* start the header componet */}
      <Header1 />
      {/* end the header componet */}

      {/* start the breadcurmb componet */}
      <Breadcrumb breadcrumb="Blog-details"/>
      {/* end the breadcurmb componet */}

      {/* start the blog-details section */}
      <div className="blog-details-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-8">
                <div className="b-details-content">
                  <div className="image">
                    <Image src={BlogDetailsImg} alt="image" />
                    <span>November 20.2023</span>
                  </div>
                  <div className="meta-info d-flex align-items-center">
                    <div className="author-info d-flex align-items-center">
                      <Image src={BlogUser1} alt="image" />
                      <p className="mb-0">David Maxwell</p>
                    </div>
                    <div className="item-info d-flex align-items-center">
                      <span>
                        <i className="ri-chat-1-line"></i>
                      </span>
                      <p className="mb-0">54 Message</p>
                    </div>
                    <div className="item-info d-flex align-items-center">
                      <span>
                        <i className="ri-calendar-2-line"></i>
                      </span>
                      <p className="mb-0">31 December 2023</p>
                    </div>
                  </div>

                  <div className="content">
                    <h2 className="fs-20">
                      Free online courses have significantly transformed the
                      landscape of education, making learning opportunities more
                      accessible.
                    </h2>
                    <p className="mb-20">
                      The availability of free online courses has democratized
                      education, breaking down barriers like geographical
                      constraints and financial limitations. Individuals can now
                      access high-quality educational content from renowned
                      institutions without having to pay hefty tuition fees.
                      This inclusivity is particularly beneficial for
                    </p>
                    <p>
                      Those who may not have the means to pursue traditional
                      education or who are looking to expand their knowledge and
                      skills beyond formal academic settings. Platforms like
                      Coursera, edX, Khan Academy, and others host a plethora of
                      free courses spanning diverse fields such as science,
                      technology, engineering,
                    </p>

                    <blockquote className="wp-block-quote">
                      <Image className="icon" src={QuoteImg} alt="icon" />
                      <p>
                        Those who may not have the means to pursue traditional
                        education or who are looking to expand their knowledge
                        and skills beyond formal academic settings. Platforms
                        like Coursera, edX, Khan Academy, and others host a
                        plethora of free courses
                      </p>
                      <span>
                        <b>Esther Howard.</b> CEO
                      </span>
                    </blockquote>

                    <p className="mb-30">
                      The availability of free online courses has democratized
                      education, breaking down barriers like geographical
                      constraints and financial limitations. Individuals can now
                      access high-quality educational content from renowned
                      institutions without having to pay hefty tuition fees.
                    </p>

                    <div className="banner mb-20">
                      <Image src={BlogDetailsImg2} alt="iamge" />
                    </div>

                    <h2 className="fs-20 mb-40">
                      Consulting Smart Business Solution For You.
                    </h2>
                    <p className="mb-30">
                      In the realm of consulting, effective time management is
                      the linchpin for success. As consultants, we navigate
                      diverse projects and client demands, requiring a delicate
                      balance to ensure both productivity and personal
                      well-being. Embracing strategic time maintenance is not
                      just a professional necessity; its a commitment to
                      delivering optimal value to our clients.
                    </p>

                    <h2 className="fs-20 mb-40">Keep Your Free Time!</h2>
                    <p className="mb-30">
                      In the realm of consulting, effective time management is
                      the linchpin for success. As consultants, we navigate
                      diverse projects and client demands, requiring a delicate
                      balance to ensure both productivity and personal
                      well-being. Embracing strategic time maintenance is not
                      just a professional necessity; its a commitment to
                      delivering optimal value to our clients.
                    </p>
                  </div>

                  <div className="article-footer d-flex justify-content-between align-items-center">
                    <div className="article-tags">
                      <span>Tags:</span>
                      <Link href="/tag">Business</Link>
                      <Link href="/tag">Education</Link>
                      <Link href="/tag">Design</Link>
                    </div>

                    <div className="article-share d-flex align-items-center">
                      <span>Share On:</span>
                      <ul className="social list-unstyle">
                        <li>
                          <Link href="https://www.facebook.com" target="_blank">
                            <i className="ri-facebook-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com"
                            target="_blank"
                          >
                            <i className="ri-instagram-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com" target="_blank">
                            <i className="ri-twitter-x-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://linkedin.com" target="_blank">
                            <i className="ri-linkedin-fill"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="edu-post-navigation d-flex justify-content-between align-items-center">
                    <div className="prev-link-wrapper d-flex justify-content-between align-items-center">
                      <div className="info-prev-link-wrapper">
                        <Link
                          href="/blog-details"
                          className="d-flex align-items-center"
                        >
                          <span className="image-prev">
                            <Image src={PrevImg} alt="image" />
                          </span>
                          <span className="prev-link-info-wrapper">
                            <span className="post-nav-title fs-15">
                              <i className="ri-arrow-left-s-line"></i> Prev Post
                            </span>
                            <span className="prev-title fs-16">
                              How Technology Can Help You Stay Healthy
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="next-link-wrapper d-flex justify-content-between align-items-center">
                      <div className="info-next-link-wrapper">
                        <Link
                          href="/blog-details"
                          className="d-flex align-items-center"
                        >
                          <span className="prev-link-info-wrapper">
                            <span className="post-nav-title fs-15">
                              Next Post{" "}
                              <i className="ri-arrow-right-s-line"></i>
                            </span>
                            <span className="prev-title fs-16">
                              How Technology Can Help You Stay Healthy
                            </span>
                          </span>
                          <span className="image-prev">
                            <Image src={NextImg} alt="image" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="comments-area">
                    <h3 className="comments-title">Comment (03)</h3>

                    <ol className="comment-list">
                      <li className="comment">
                        <div className="comment-slide">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src={UserCMT}
                                  className="avatar"
                                  alt="image"
                                />
                                <h4 className="fn">Esther Howard</h4>

                                <div className="reply">
                                  <Link
                                    href="/blog-details"
                                    className="comment-reply-link"
                                  >
                                    <i className="ri-reply-fill"></i> Reply
                                  </Link>
                                </div>
                              </div>
                              <div className="comment-metadata">
                                <span>December 25.2023</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                In the consultancy landscape, every minute
                                invested in refining our expertise,
                                understanding client needs, and innovating
                                solutions contributes.
                              </p>
                              <div className="reply">
                                <Link
                                  href="/blog-details"
                                  className="comment-reply-link"
                                >
                                  <i className="ri-reply-fill"></i> Reply
                                </Link>
                              </div>
                            </div>
                          </article>
                        </div>

                        <ol className="children">
                          <li className="comment">
                            <div className="comment-slide">
                              <article className="comment-body">
                                <footer className="comment-meta">
                                  <div className="comment-author vcard">
                                    <Image
                                      src={UserCMT}
                                      className="avatar"
                                      alt="image"
                                    />
                                    <h4 className="fn">Jenny Wilson</h4>
                                    <div className="reply">
                                      <Link
                                        href="/blog-details"
                                        className="comment-reply-link"
                                      >
                                        <i className="ri-reply-fill"></i> Reply
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="comment-metadata">
                                    <span>December 25.2023</span>
                                  </div>
                                </footer>
                                <div className="comment-content">
                                  <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form
                                  </p>
                                  <div className="reply">
                                    <Link
                                      href="/blog-details"
                                      className="comment-reply-link"
                                    >
                                      <i className="ri-reply-fill"></i> Reply
                                    </Link>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </li>
                        </ol>
                      </li>

                      <li className="comment">
                        <div className="comment-slide">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src={UserCMT}
                                  className="avatar"
                                  alt="image"
                                />
                                <h4 className="fn">Esther Howard</h4>

                                <div className="reply">
                                  <Link
                                    href="/blog-details"
                                    className="comment-reply-link"
                                  >
                                    <i className="ri-reply-fill"></i> Reply
                                  </Link>
                                </div>
                              </div>
                              <div className="comment-metadata">
                                <span>December 25.2023</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                In the consultancy landscape, every minute
                                invested in refining our expertise,
                                understanding client needs, and innovating
                                solutions contributes.
                              </p>
                              <div className="reply">
                                <Link
                                  href="/blog-details"
                                  className="comment-reply-link"
                                >
                                  <i className="ri-reply-fill"></i> Reply
                                </Link>
                              </div>
                            </div>
                          </article>
                        </div>
                      </li>
                    </ol>

                    <div className="comment-respond">
                      <h3 className="comment-reply-title">Leave a Reply</h3>

                      <form className="comment-form">
                        <p className="comment-form-author">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="author"
                            placeholder="Your Name*"
                            name="author"
                            required="required"
                          />
                        </p>

                        <p className="comment-form-email">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Your Email*"
                            name="email"
                            required="required"
                          />
                        </p>

                        <p className="comment-form-url">
                          <label>Website</label>
                          <input
                            type="url"
                            id="url"
                            placeholder="Website"
                            name="url"
                          />
                        </p>

                        <p className="comment-form-comment">
                          <label>Comment</label>
                          <textarea
                            name="comment"
                            id="comment"
                            cols="45"
                            placeholder="Your Comment..."
                            rows="5"
                            maxlength="65525"
                            required="required"
                          ></textarea>
                        </p>

                        <p className="comment-form-cookies-consent">
                          <input
                            type="checkbox"
                            value="yes"
                            name="wp-comment-cookies-consent"
                            id="wp-comment-cookies-consent"
                          />
                          <label for="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>

                        <p className="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="submit btn style-one"
                            value="Submit Comment"
                          />
                        </p>
                      </form>
                    </div>
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
                      <Link href="/blog-list" className="thumb">
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
                          <Link href="/blog-list">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-list" className="thumb">
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
                          <Link href="/blog-list">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-list" className="thumb">
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
                          <Link href="/blog-list">
                            learning journey from the comfort of home.
                          </Link>
                        </h4>
                      </div>
                    </article>
                    <article className="item">
                      <Link href="/blog-list" className="thumb">
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
                          <Link href="/blog-list">
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
          </div>
        </div>
      </div>
      {/* end the blog-details section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}


      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
};

export default BlogDetails;
