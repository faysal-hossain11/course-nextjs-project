import Image from "next/image";
import Link from "next/link";
import React from "react";
import LongArrow from '../../public/assets/img/icon/long-arrow.svg';

const PaginationItem = () => {
  return (
    <div>
      <ul className="page-nav list-style text-start p-0 mt-40">
        <li>
          <Link href="/courses-list">
            <Image src={LongArrow} alt="icon" />
          </Link>
        </li>
        <li>
          <Link className="active" href="/courses-list">
            01
          </Link>
        </li>
        <li>
          <Link href="/courses-list">02</Link>
        </li>
        <li>
          <Link href="/courses-list">03</Link>
        </li>
        <li>
          <Link href="/courses-list">04</Link>
        </li>
        <li>
          <Link href="/courses-list">
            {/* <Image src={LongArrow} alt="icon" /> */}
            <Image src={LongArrow} alt="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PaginationItem;
