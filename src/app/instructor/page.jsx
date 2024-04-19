import Breadcrumb from "@/components/Breadcrumb";
import Header1 from "@/components/Header/Header1";
import Image from "next/image";
import Link from "next/link";
import PrevImg from "../../../public/assets/img/all-img/prev-img.png";
import NextImg from "../../../public/assets/img/all-img/next-img.png";
import Instructor1 from "../../../public/assets/img/all-img/instructor-1.png";
import Instructor2 from "../../../public/assets/img/all-img/instructor-2.png";
import Instructor3 from "../../../public/assets/img/all-img/instructor-3.png";
import Instructor4 from "../../../public/assets/img/all-img/instructor-4.png";
import Instructor5 from "../../../public/assets/img/all-img/instructor-5.png";
import Instructor6 from "../../../public/assets/img/all-img/instructor-6.png";
import LongArrow from "../../../public/assets/img/icon/long-arrow.svg";
import Subscribe from "@/components/Subscribe";
import Footer1 from "@/components/Footer/Footer1";
import InstructorProfileCard from "@/components/card/InstructorProfileCard";
import Pagination from "@/components/PaginationItem";
import { IoIosArrowDown } from "react-icons/io";


const page = () => {
  return (
    <>
      {/* start the  header component*/}
      <Header1 />
      {/* end the  header component*/}

      {/* start the  breadcurmb component*/}
      <Breadcrumb breadcrumb="Instructor" />
      {/* end the  breadcurmb component*/}

      {/* start the  instructor component*/}
      <div className="instructor-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="edu-grid-sorting style-one">
              <div className="fitter-option filter-fixe justify-content-between gap-4 d-flex align-items-center">
                <p className="mb-0 mr-20">Showing 1-6 of 54 results</p>
                <div className="fit-options d-flex">
                  <div className="search-filtter">
                    <form className="search-form position-relative">
                      <label>
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search..."
                        />
                      </label>
                      <button className="search-btn" type="submit">
                        <i className="ri-search-line"></i>
                      </button>
                    </form>
                  </div>
                  

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown" >
                      <option value="apple">Category</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  <div className="drwnBox">
                    <select defaultValue="apple" className="newItemDropdown extraDropdown" >
                      <option value="apple">Sort By: Most Popular</option>
                      <option value="banana">Popular</option>
                      <option value="orange">Creative</option>
                      <option value="orange">Design</option>
                    </select>
                    <IoIosArrowDown className="newArrowIcon" />
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor1} />
              </div>
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor2} />
              </div>
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor3} />
              </div>
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor4} />
              </div>
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor5} />
              </div>
              <div className="col-lg-4 col-md-6">
                <InstructorProfileCard intructorImg={Instructor6} />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      {/* end the  instructor component*/}

      {/* start the subscribe component */}
      <Subscribe />
      {/* end the subscribe componet */}

      {/* start the  footer component*/}
      <Footer1 />
      {/* end the footer componet */}

    </>
  );
};

export default page;
