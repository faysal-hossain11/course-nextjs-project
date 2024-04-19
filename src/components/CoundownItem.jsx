"use client";
import React, { useEffect } from "react";
import CounterImg from "../../public/assets/img/icon/counter-icon-1.svg";
import Image from "next/image";

const CoundownItem = () => {
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      let counterObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let counter = entry.target;
            let target = parseInt(counter.innerText);
            let step = target / 200;
            let current = 0;
            let timer = setInterval(function () {
              current += step;
              counter.innerText = Math.floor(current);
              if (parseInt(counter.innerText) >= target) {
                clearInterval(timer);
              }
            }, 10);
            counterObserver.unobserve(counter);
          }
        });
      });

      let counters = document.querySelectorAll(".count");
      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    }
  }, []);
  return (
    <div>
      <div className="score-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-yl-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">15525</div>
                    <p>Happy Student</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-rd-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">586</div>
                    <p>Good Comment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-gr-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">35200</div>
                    <p>Services Download</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-pr-clr">
                    <Image src={CounterImg} alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">55</div>
                    <p>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoundownItem;
<div className="score-area">
  <div className="container">
    <div className="main-max-width">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon icon-yl-clr">
              <Image src={CounterImg} alt="image" />
            </div>
            <div className="content">
              <div className="count">15525</div>
              <p>Happy Student</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon icon-rd-clr">
              <Image src={CounterImg} alt="image" />
            </div>
            <div className="content">
              <div className="count">586</div>
              <p>Good Comment</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon icon-gr-clr">
              <Image src={CounterImg} alt="image" />
            </div>
            <div className="content">
              <div className="count">35200</div>
              <p>Services Download</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon icon-pr-clr">
              <Image src={CounterImg} alt="image" />
            </div>
            <div className="content">
              <div className="count">55</div>
              <p>Best Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
