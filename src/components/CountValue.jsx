"use client";
import React, { useState } from "react";
const CountValue = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="input-counter d-flex">
      {/* <input type="text" value="5" /> */}
      <span className="input">{count}</span>
      <div className="scale-btn">
        <span className="plus-btn" onClick={() => setCount(count + 1)}>
          <i className="ri-arrow-up-s-line"></i>
        </span>
        <span className="minus-btn" onClick={() => setCount(count - 1)}>
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </div>
    </div>
  );
};

export default CountValue;
