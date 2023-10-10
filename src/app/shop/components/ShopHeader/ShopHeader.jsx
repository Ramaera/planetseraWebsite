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
      <div className="h-16 sm:h-10 xl:h-20 2xl:h-28  hidden md:block"></div>
      <section
        className="bg-cover bg-center bg-no-repeat lg:bg-contain lg:mx-16 2xl:bg-cover 2xl:mx-24 2xl:rounded-3xl"
        style={{
          backgroundImage: `url(${bg1})`,
        }}>
        <NavigationMobile page={"shop"} />
        <div className="relative mx-auto px-4 py-10 sm:py-20  lg:flex  lg:items-center  ">
          <div className="text-center sm:text-left md:ml-28 2xl:ml-40  2xl:w-4/12 pt-10 md:pt-0">
            <h1 className="shop-heading tracking-wider webColor">
              Experience a <br /> burst of flavors
            </h1>

            <div className="flex justify-center	md:justify-start sm:mt-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "20px",
                }}>
                <h2 className="font-bold sm:font-normal text-black text-3xl webColor ">
                  100+
                </h2>
                <h3 className="font-bold sm:font-normal text-black text-lg webColor">
                  Customers
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <h2 className="font-bold sm:font-normal text-black text-3xl webColor">
                  50+
                </h2>
                <h3 className="font-bold sm:font-normal text-black text-lg webColor">
                  Plant Species
                </h3>
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
