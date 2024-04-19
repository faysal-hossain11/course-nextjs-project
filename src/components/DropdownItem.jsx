"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropdownItem = () => {
  const [isClosed, setIsClosed] = useState(true);
  const toggleItem = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div>
      <nav>
        <ul className={`drop-down ${isClosed ? "closed" : ""}`}>
          <li>
            <Link href="#" className="nav-button" onClick={toggleItem}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Library</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownItem;
