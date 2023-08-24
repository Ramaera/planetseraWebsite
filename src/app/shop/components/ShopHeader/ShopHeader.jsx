"use client";
import React from "react";
import "./ShopHeader.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";

const ShopHeader = () => {
  const bg1 = "/images/backgrounds/ShopBg.webp";
  const bg2 = "/images/backgrounds/ShopSpices1.webp";
  return (
    <>
      <NavItem page={"shop"} />
      <section
        className="relative  bg-center bg-no-repeat md:top-20 md:mb-10 xl:mb-1 xl:top-1"
        style={{
          backgroundImage: `url(${bg1})`,
        }}>
        <NavigationMobile page={"shop"} />
        <div className="relative mx-auto px-4 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 2xl:w-9/12">
          <div className="text-center sm:text-left md:ml-28 md:w-4/12 pt-24 md:pt-0">
            <h1 className="shop-heading">Experience a burst of flavors</h1>

            <div className="flex justify-center	md:justify-start	">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h2 className="font-normal text-white text-2xl ">50+</h2>
                <h5 className="text-white">Plant Species</h5>
              </div>
              <div className="text-white border-r-2 mx-8"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h2 className="font-normal text-white text-2xl">100+</h2>
                <h5 className="text-white">Customers</h5>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 relative  md:ml-[-80px] ">
            <img alt="bg" src={bg2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopHeader;
