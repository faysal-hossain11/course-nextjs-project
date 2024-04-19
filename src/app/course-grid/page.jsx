import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Pagination from "@/components/PaginationItem";
import React from "react";
import CourseImg1 from "../../../public/assets/img/all-img/course-3.png";
import CourseImg2 from "../../../public/assets/img/all-img/course-4.png";
import CourseImg3 from "../../../public/assets/img/all-img/course-5.png";
import CourseImg4 from "../../../public/assets/img/all-img/course-6.png";
import CourseImg5 from "../../../public/assets/img/all-img/course-7.png";
import CourseImg6 from "../../../public/assets/img/all-img/course-8.png";
import CourseUser1 from "../../../public/assets/img/all-img/user-3.png";
import CourseUser2 from "../../../public/assets/img/all-img/user-4.png";
import CourseUser3 from "../../../public/assets/img/all-img/user-5.png";
import CourseUser4 from "../../../public/assets/img/all-img/user-6.png";
import CourseUser5 from "../../../public/assets/img/all-img/user-1.png";
import Image from "next/image";
import Link from "next/link";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import CourseCard from "@/components/card/CourseCard";
import DropdownItem from "@/components/DropdownItem";
import { IoIosArrowDown } from "react-icons/io";

const CourseGrid = () => {
  return (
    <>
      {/* start the header component */}
      <Header1 />
      {/* end the header component */}

      {/* start the breadcurmb component  */}
      <Breadcrumb breadcrumb="Course-Grid" />
      {/* end the breadcurmb component  */}

      {/* start the course grid section */}
      <div className="courses-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting">
              <div className="fitter-option filter-fixe justify-content-between d-flex align-items-center">
                <p className="mb-0 mr-20">Showing 1-6 of 54 results</p>
                <div className="fit-options d-flex">

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Category</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                  
                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Popular</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Rating</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Course Price</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Price Filter</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown newdrp">
                      <option value="apple">Popular Tag</option>
                      <option value="orange">Design</option>
                      <option value="orange">Business</option>
                      <option value="orange">Development</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg1} authorImg={CourseUser1} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg2} authorImg={CourseUser2} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg3} authorImg={CourseUser3} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg4} authorImg={CourseUser4} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg5} authorImg={CourseUser2} />
              </div>
              <div className="col-lg-4 col-sm-6">
                <CourseCard cardImg={CourseImg6} authorImg={CourseUser1} />
              </div>
            </div>

            {/* start the pagination component */}
            <Pagination />
            {/* end the pagination component */}
          </div>
        </div>
      </div>
      {/* end the course grid section */}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe component */}

      {/* start the footer component */}
      <Footer1 />
      {/* end the footer component */}

    </>
  );
};

export default CourseGrid;
