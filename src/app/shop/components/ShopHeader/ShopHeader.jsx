"use client";
import React from "react";
import "./ShopHeader.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";

const ShopHeader = () => {
  const bg1 = "/images/backgrounds/ShopBg.webp";

  return (
    <>
      <NavItem page={"shop"} />
      <section
        className="relative bg-center bg-no-repeat sm:bg-contain md:mb-2"
        style={{
          backgroundImage: `url(${bg1})`,
        }}>
        <NavigationMobile page={"shop"} />
        <div className="relative mx-auto px-4 md:py-20  lg:flex  lg:items-center  ">
          <div className="text-center sm:text-left md:ml-28 2xl:ml-40  2xl:w-4/12 pt-24 md:pt-0">
            <h1 className="shop-heading md:text-5xl xl:text-6xl">
              Experience a <br /> burst of flavors
            </h1>

            <div className="flex justify-center	md:justify-start	">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h3 className="font-normal text-white text-2xl ">50+</h3>
                <h5 className="text-white">Plant Species</h5>
              </div>
              <div className="text-white border-r-2 mx-8"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h3 className="font-normal text-white text-2xl">100+</h3>
                <h5 className="text-white">Customers</h5>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 relative  md:ml-[-30px] 2xl:ml-[-130px]">
            <img
              src="/images/backgrounds/ShopSpices1.webp"
              alt="Shop spices"
              title="Buy planetsera spices"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopHeader;
