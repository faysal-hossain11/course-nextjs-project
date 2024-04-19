"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderLogo from "../../../public/assets/img/logo/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Headroom from "react-headroom";

const Header3 = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    // setToggle((e) => !e);
    setToggle(!toggle)
    console.log("hello");
  };

  return (
    <>
      {/* start the top header area */}
      <div className="top-header-area">
        <div className="container">
          <div className="main-max-width">
            <div className="top-header-content text-center">
              <h3>
                Are you a university pf school looking for an online tutoring
                partnership ? <a href="#">Talk to us</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* end the top header area */}

      <Headroom>
        <div className="navbar-area style-one style-2 style-3" id="navbar">
          <div className="container">
            <div className="main-max-width">
              <nav className="navbar insocour-nav navbar-expand-lg">
                <Link className="navbar-brand" href="/">
                  <Image className="logo-light" src={HeaderLogo} alt="logo" />
                </Link>
                <div className="other-options d-flex flex-wrap justify-content-end align-items-center d-lg-none">
                  <div className="option-item d-flex">
                    <Link href="/contact" className="serarch-btn">
                      <i className="ri-user-3-line"></i>
                    </Link>
                    <Link href="/cart" className="shop-btn">
                      <i className="ri-shopping-cart-2-line"></i>
                      <span className="cart-number">1</span>
                    </Link>
                    <button
                      className="navbar-toggler"
                      onClick={handleToggle}
                      // data-bs-toggle="offcanvas"
                      // href="#navbarOffcanvas"
                      // role="button"
                      // aria-controls="navbarOffcanvas"
                    >
                      <span className="burger-menu">
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                      </span>
                    </button>
                  </div>
                </div>
                {toggle && (
                  <div className=" navbar-collapse align-items-center justify-content-between">
                    <ul className="navbar-nav ms-1">
                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link active"
                        >
                          Home
                        </Link>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <Link
                              href="/"
                              className={`nav-link ${
                                pathname === "/" ? "active" : ""
                              }`}
                            >
                              Home One
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="index-2"
                              className={`nav-link ${
                                pathname === "index-2" ? "active" : ""
                              }`}
                            >
                              Home Two
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="index-3"
                              className={`nav-link ${
                                pathname === "index-3" ? "active" : ""
                              }`}
                            >
                              Home Three
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link"
                        >
                          Courses
                        </Link>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <Link
                              href="/courses"
                              className={`nav-link ${
                                pathname === "/courses" ? "active" : ""
                              }`}
                            >
                              Courses
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/course-list"
                              className={`nav-link ${
                                pathname === "/course-list" ? "active" : ""
                              }`}
                            >
                              Course List
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/course-grid"
                              className={`nav-link ${
                                pathname === "/course-grid" ? "active" : ""
                              }`}
                            >
                              Courses Grid
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/course-details"
                              className={`nav-link ${
                                pathname === "/course-details" ? "active" : ""
                              }`}
                            >
                              Course Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link"
                        >
                          Shop
                        </Link>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <Link
                              href="/shop"
                              className={`nav-link ${
                                pathname === "/shop" ? "active" : ""
                              }`}
                            >
                              Shop
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/shop-sidebar"
                              className={`nav-link ${
                                pathname === "/shop-sidebar" ? "active" : ""
                              }`}
                            >
                              Shop Sidebar
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/product details"
                              className={`nav-link ${
                                pathname === "/product-details" ? "active" : ""
                              }`}
                            >
                              Product Details
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/cart"
                              className={`nav-link ${
                                pathname === "/cart" ? "active" : ""
                              }`}
                            >
                              Cart
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/checkout"
                              className={`nav-link ${
                                pathname === "/checkout" ? "active" : ""
                              }`}
                            >
                              Checkout
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/success"
                              className={`nav-link ${
                                pathname === "/seccess" ? "active" : ""
                              }`}
                            >
                              Success
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link"
                        >
                          <span>Blog</span>
                        </Link>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <Link
                              href="/blog"
                              className={`nav-link ${
                                pathname === "/blog" ? "active" : ""
                              }`}
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-list"
                              className={`nav-link ${
                                pathname === "/blog-list" ? "active" : ""
                              }`}
                            >
                              Blog List
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-details"
                              className={`nav-link ${
                                pathname === "/blog-details" ? "active" : ""
                              }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link"
                        >
                          Pages
                        </Link>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <Link
                              href="/about"
                              className={`nav-link ${
                                pathname === "/about" ? "active" : ""
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/sign-in"
                              className={`nav-link ${
                                pathname === "/sign-in" ? "active" : ""
                              }`}
                            >
                              Sign in
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/sign-up"
                              className={`nav-link ${
                                pathname === "/sign-up" ? "active" : ""
                              }`}
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="#"
                              className="dropdown-toggle nav-link"
                            >
                              Instructor
                            </Link>
                            <ul className="dropdown-menu list-unstyle">
                              <li className="nav-item">
                                <Link
                                  href="/instructor"
                                  className={`nav-link ${
                                    pathname === "/instructor" ? "active" : ""
                                  }`}
                                >
                                  Instructor
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/instructor-two"
                                  className={`nav-link ${
                                    pathname === "/instructor-two"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Instructor Tow
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/instructor-sidebar"
                                  className={`nav-link ${
                                    pathname === "/instructor-sidebar"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Instructor Sidebar
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/instructor-details"
                                  className={`nav-link ${
                                    pathname === "/instructor-details"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  Instructor Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/faq"
                              className={`nav-link ${
                                pathname === "/faq" ? "active" : ""
                              }`}
                            >
                              FAQ
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="#"
                              className="dropdown-toggle nav-link"
                            >
                              Error
                            </Link>
                            <ul className="dropdown-menu list-unstyle">
                              <li className="nav-item">
                                <Link
                                  href="/error-two"
                                  className={`nav-link ${
                                    pathname === "/error-two" ? "active" : ""
                                  }`}
                                >
                                  Error One
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/error-two"
                                  className={`nav-link ${
                                    pathname === "/error-two" ? "active" : ""
                                  }`}
                                >
                                  Error Two
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/contact"
                          className={`nav-link ${
                            pathname === "/contact" ? "active" : ""
                          }`}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>

                    <div className="option-item style-2 style-3 d-flex align-items-center">
                      <form>
                        <div className="form-group position-relative z-1">
                          <input
                            type="text"
                            className="from-control"
                            placeholder="Search"
                          />
                          <button
                            type="submit"
                            className="border-0 box-shadow-0 bg-transparent"
                          >
                            <i className="ri-search-line"></i>
                          </button>
                        </div>
                      </form>
                      <Link
                        href="/sign-up"
                        className="btn style-one style-2 style-3"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </Headroom>

      {/* start the responsive header */}
      <div
        className="responsive-navbar offcanvas offcanvas-end border-0"
        // data-bs-backdrop="static"
        // tabIndex="-1"
        // id="navbarOffcanvas"
        >
        {/* <div className="offcanvas-header">
          <Link href="/" className="logo d-inline-block">
            <Image className="logo-light" src={HeaderLogo} alt="Image" />
          </Link>
          <button
            type="button"
            className="close-btn bg-transparent position-relative lh-1 p-0 border-0"
            // data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ri-close-line"></i>
          </button>
        </div> */}
        {/* responsive header three */}
        {toggle && (
          <div className="offcanvas-body">
            <ul className="responsive-menu">
              <li className="responsive-menu-list">
                <Link href="#" className="active">
                  Home
                </Link>
                <ul className="responsive-menu-items">
                  <li>
                    <Link href="/" className="active">
                      Home One
                    </Link>
                  </li>
                  <li>
                    <Link href="index-2">Home Two</Link>
                  </li>
                  <li>
                    <Link href="index-3">Home Three</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li className="responsive-menu-list">
                <Link href="#">Courses</Link>
                <ul className="responsive-menu-items">
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/course-list">Course List</Link>
                  </li>
                  <li>
                    <Link href="/course-grid">Courses Grid</Link>
                  </li>
                  <li>
                    <Link href="/course-details">Course Details</Link>
                  </li>
                </ul>
              </li>
              <li className="responsive-menu-list">
                <Link href="#">Shop</Link>
                <ul className="responsive-menu-items">
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/shop-sidebar">Shop Sidebar</Link>
                  </li>
                  <li>
                    <Link href="/product details">Product Details</Link>
                  </li>
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/success">Success</Link>
                  </li>
                </ul>
              </li>
              <li className="responsive-menu-list">
                <Link href="#">Blog</Link>
                <ul className="responsive-menu-items">
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/blog-list">Blog List</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="responsive-menu-list">
                <Link href="#">Pages</Link>
                <ul className="responsive-menu-items">
                  <li>
                    <Link href="/sign-in">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign Up</Link>
                  </li>
                  <li className="responsive-menu-list">
                    <Link href="#">Instructor</Link>
                    <ul className="responsive-menu-items">
                      <li>
                        <Link href="/instructor">Instructor</Link>
                      </li>
                      <li>
                        <Link href="/instructor-two">Instructor Tow</Link>
                      </li>
                      <li>
                        <Link href="/instructor-sidebar">
                          Instructor Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/instructor-details">
                          Instructor Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li className="responsive-menu-list">
                    <Link href="#">Error</Link>
                    <ul className="responsive-menu-items">
                      <li>
                        <Link href="/error-two">Error One</Link>
                      </li>
                      <li>
                        <Link href="/error-two">Error Tow</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="other-option d-md-flex align-items-center">
              <div className="option-item">
                <Link href="/contact" className="btn style-one w-100">
                  Free Consulting
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* end the responsive header */}
    </>
  );
};

export default Header3;
