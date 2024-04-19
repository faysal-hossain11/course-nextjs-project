import Image from "next/image";
import React, { useEffect } from "react";
import BannerComplete from "../../public/assets/img/icon/banner-complete.svg";
const Counter = () => {
    useEffect(() => {
        if ("IntersectionObserver" in window) {
          let counterObserver = new IntersectionObserver(function (entries, observer) {
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
      <div className="banner-complete d-flex align-items-center">
        <div className="icon">
          <Image src={BannerComplete} alt="icon" />
        </div>
        <div className="content">
          <span className="d-block">Complete Graduation</span>
          <div className="d-flex align-items-center">
            <h5 className="count">35</h5>
            <h5>K</h5>
          </div>
        </div>
      </div>
  );
};

export default Counter;
