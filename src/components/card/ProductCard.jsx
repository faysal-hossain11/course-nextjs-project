import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ productImg }) => {
  return (
    <div className="single-product mb-30">
      <div className="image">
        <Link href="/product-details">
          <Image src={productImg} alt="image" />
        </Link>
        <div className="product-opt">
          <ul className="list-unstyle">
            <li>
              <Link href="/author">
                <i className="ri-heart-fill"></i>
              </Link>
            </li>
            <li>
              <Link href="/author">
                <i className="ri-loop-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/author">
                <i className="ri-drag-move-2-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h3 className="mb-15">
          <Link className="fs-20" href="/product-details">
            Plaices Of Light By T - Shirt
          </Link>
        </h3>
        <div className="pr-price mb-20">
          <h5 className="fs-16">
            <span className="price">$100/</span>
            <span className="old-price">$400</span>
          </h5>
        </div>
        <div className="meta-info d-flex align-items-center justify-content-between">
          <Link href="/cart" className="pr-btn">
            Add To Cart
          </Link>
          <div className="ratings">
            <ul className="d-flex list-unstyle p-0">
              <li>
                <i className="ri-star-fill"></i>
              </li>
              <li>
                <i className="ri-star-fill"></i>
              </li>
              <li>
                <i className="ri-star-fill"></i>
              </li>
              <li>
                <i className="ri-star-fill"></i>
              </li>
              <li>
                <i className="ri-star-fill"></i>
              </li>
              <li>
                <span>(341)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
