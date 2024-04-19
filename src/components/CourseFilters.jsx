"use client";
import React, { useState } from "react";
import CourseCard from "./card/CourseCard";

import Course8 from "../../public/assets/img/all-img/course-1.png";
import Course7 from "../../public/assets/img/all-img/course-2.png";
import Course6 from "../../public/assets/img/all-img/course-3.png";
import Course5 from "../../public/assets/img/all-img/course-4.png";
import Course4 from "../../public/assets/img/all-img/course-5.png";
import Course3 from "../../public/assets/img/all-img/course-6.png";
import User1 from "../../public/assets/img/all-img/user-1.png";
import User2 from "../../public/assets/img/all-img/user-2.png";
import User3 from "../../public/assets/img/all-img/user-3.png";
import User4 from "../../public/assets/img/all-img/user-4.png";
import User5 from "../../public/assets/img/all-img/user-5.png";
import User6 from "../../public/assets/img/all-img/user-6.png";

function CourseFilters() {
  const [filter, setFilter] = useState("all");
  const [courses, setCourses] = useState([
    {
      id: 1,
      category: "Design",
      title: "Design Course",
      cardImg: Course8,
      authorImg: User1,
    },
    {
      id: 2,
      category: "Development Design",
      title: "Development and Design Course",
      cardImg: Course7,
      authorImg: User2,
    },
    {
      id: 3,
      category: "Development Business",
      title: "Development and Business Course",
      cardImg: Course6,
      authorImg: User3,
    },
    {
      id: 4,
      category: "Business Design Development",
      title: "Business, Design, and Development Course",
      cardImg: Course5,
      authorImg: User4,
    },
    {
      id: 5,
      category: "Design Development",
      title: "Design and Development Course",
      cardImg: Course4,
      authorImg: User5,
    },
    {
      id: 6,
      category: "Business Development",
      title: "Business and Development Course",
      cardImg: Course3,
      authorImg: User6,
    },
  ]);

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category.includes(filter));

  return (
    <div className="course-section pb-100">
      <div className="container">
        <div className="main-max-width">
          <div className="section-title mb-50 position-relative">
            <h4 className="sub-title mb-25"># Our Courses List</h4>
            <h2 className="fs-35">Broad Selection Of Course</h2>

            <div className="sorting-menu">
              <ul>
                <li
                  className={filter === "all" ? "filter active" : "filter"}
                  onClick={() => setFilter("all")}
                >
                  All Courses
                </li>
                <li
                  className={filter === "Design" ? "filter active" : "filter"}
                  onClick={() => setFilter("Design")}
                >
                  UI&UX Design
                </li>
                <li
                  className={filter === "Business" ? "filter active" : "filter"}
                  onClick={() => setFilter("Business")}
                >
                  Business
                </li>
                <li
                  className={
                    filter === "Development" ? "filter active" : "filter"
                  }
                  onClick={() => setFilter("Development")}
                >
                  Development
                </li>
              </ul>
            </div>
          </div>
          <div className="course-mix-wrapper">
            <div className="row">
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-lg-4 col-sm-6 mix-target">
                  <CourseCard
                    cardImg={course.cardImg}
                    authorImg={course.authorImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFilters;
