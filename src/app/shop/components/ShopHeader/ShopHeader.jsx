"use client";
import React from "react";
import "./ShopHeader.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";

const ShopHeader = () => {
  const bg1 = "/images/backgrounds/ShopBg.webp";

  return (
    <>
      <NavItem page={"shop"} className="pb-40" />
      <div className="h-16 xl:h-20  hidden md:block"></div>
      <section
        className="bg-center bg-no-repeat lg:bg-contain lg:mx-16 md:mb-2 2xl:bg-cover 2xl:mx-24 2xl:rounded-3xl border-b pb-10 "
        style={{
          backgroundImage: `url(${bg1})`,
        }}>
        <NavigationMobile page={"shop"} />
        <div className="relative mx-auto px-4 md:py-20  lg:flex  lg:items-center  ">
          <div className="text-center sm:text-left md:ml-28 2xl:ml-40  2xl:w-4/12 pt-24 md:pt-0">
            <h1 className="shop-heading tracking-wider ">
              Experience a <br /> burst of flavors
            </h1>

            <div className="flex justify-center	md:justify-start sm:mt-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "20px",
                }}>
                <h3 className="font-normal text-black text-3xl">100+</h3>
                <h4 className="text-black text-lg">Customers</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h3 className="font-normal text-black text-3xl ">50+</h3>
                <h4 className="text-black text-lg ">Plant Species</h4>
              </div>
            </div>
          </div>
          {/* <div className="md:w-7/12 relative  md:ml-[-30px] 2xl:ml-[-130px]">
            <img
              src="/images/backgrounds/ShopSpices1.webp"
              alt="Shop spices"
              title="Buy planetsera spices"
            />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ShopHeader;
