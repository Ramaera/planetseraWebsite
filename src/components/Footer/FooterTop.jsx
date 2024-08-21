"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const FooterTop = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="flex items-center px-8  bg-black p-4 h-[130px] mt-8">
        <div className=" w-[50%] flex flex-col">
          <h2 className=" text-white font-semibold">Best Selling Spices</h2>

          <Link
            href="/shop-all"
            className="more-button hidden md:block py-4 hover:scale-105 "
            style={{
              boxShadow: `2px 4px 7px -2px ${colorMe}`,
              background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                colorMe + "95"
              } 100%)`,
              cursor: "pointer",
              zIndex: "19",
              fontWeight: "bold",
              width: "165px",
              height: "56px",
              border: "1px solid white",
              fontSize: "18px",
              padding: "22px",
              display: "flex",
              borderRadius: "30.5px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              color: "white",
            }}>
            Buy Now
          </Link>
        </div>

        <div className="flex w-[50%] flex-row justify-end items-center">
          <h2 className="text-white font-semibold">
            Available on these <br />
            platforms as well
          </h2>
          <a
            className="w-[20%] p-2"
            href="https://www.amazon.in/s?k=Planetsera"
            target="_blank"
            rel="noopener noreferrer">
            <img alt="masala" src="images/backgrounds/ShopBuyAmazon.webp" />
          </a>
          <a
            className="w-[20%] p-2"
            href="https://www.flipkart.com/search?q=Planetsera&otracker=search&otracker1=search&marketplace=FLIPKART"
            target="_blank"
            rel="noopener noreferrer">
            <img alt="bg" src="images/backgrounds/ShopBuyFlipkart.webp" />
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
