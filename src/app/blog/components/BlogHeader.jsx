"use client";
import React from "react";
import "@/public/styles/globals.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useSelector } from "react-redux";

const BlogHeader = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const bg1 = "/images/backgrounds/BlogBg.webp";

  return (
    <>
      <NavItem page={"blog"} className="pb-40" />
      <div className="h-16 sm:h-10 xl:h-20 2xl:h-24  hidden md:block"></div>
      <NavigationMobile page={"blog"} />
      <section
        className="bg-cover bg-center bg-no-repeat mx-4  lg:mx-16 rounded-xl lg:rounded-3xl sm:mt-10 xl:mt-0 sm:h-72 mt-16"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <div className=" mx-auto px-4 py-10 sm:py-[7.5rem]  flex items-center justify-center   w-full">
          <div className="text-center items-center">
            <div
              className="blog-heading text-black "
              // style={{
              //   backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              //     colorMe + "80"
              //   })`,
              //   textShadow: `0px 0px 0px ${colorMe + "85"}`,
              // }}
            >
              Discover Spice Stories Here
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHeader;
