"use client";
import React from "react";
import "@/public/styles/globals.css";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useSelector } from "react-redux";

const BlogHeader = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const bg1 = "/images/backgrounds/BlogBg.webp";

  console.log("colorMe", colorMe);
  return (
    <>
      <NavItem page={"blog"} className="pb-40" />
      <div className="h-16 sm:h-10 xl:h-20 2xl:h-24  hidden md:block"></div>
      <section
        className="bg-cover bg-center bg-no-repeat  lg:mx-16 lg:rounded-3xl sm:mt-10 xl:mt-0"
        style={{
          backgroundImage: `url(${bg1})`,
        }}>
        <NavigationMobile page={"blog"} />
        <div className=" mx-auto px-4 py-10 sm:py-20  flex items-center justify-center  w-full">
          <div className="text-center">
            <h1
              className="blog-heading text-white"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
                textShadow: `0px 0px 0px ${colorMe + "85"}`,
              }}>
              Planetsera <br /> special blogs
            </h1>

            {/* <div className="flex justify-center	md:justify-start sm:mt-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "20px",
                }}>
                <h2 className="font-bold sm:font-normal text-black text-3xl  ">
                  100+
                </h2>
                <h3 className="font-bold sm:font-normal text-black text-lg ">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHeader;
