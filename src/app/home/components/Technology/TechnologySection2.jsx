"use client";
import React from "react";
import { useSelector } from "react-redux";

const TechnologySection2 = () => {
  const machines = "/images/backgrounds/machine.webp";
  const machines2 = "/images/backgrounds/machine2.webp";
  const machines3 = "/images/backgrounds/machine3.webp";

  const colorMe = useSelector((state) => state.colorUs.color);
  const checkbg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return machines;
    }
    if (colorMe === "#ffde39") {
      return machines2;
    }
    if (colorMe === "#2dc83c") {
      return machines3;
    }
  };

  return (
    <div className="basis-12/12 bussiness-Flex">
      <div
        className="basis-6/12 self-center pl-141 xl:mt-[-6rem] "
        data-aos="fade-right"
        data-aos-duration="1000">
        <h2
          style={{ color: colorMe }}
          className="text-[#ff4f4f] text-[1.3rem] md:text-[35px] font-normal tracking-[0.17em]	mb-3">
          Quality Preservation Using Latest Technology
        </h2>
        <div className="quality_line"></div>
        <div className="technologyLine"></div>

        <p
          className="mb-3 font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-light tracking-wider">
          To maintain the quality and originality of the spices, we make sure
          that the spices are stored and maintained at lower temperatures
        </p>

        <p
          className="mb-3 font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-light tracking-wider">
          Contemporary spice industries, use hammer mills that enable the
          temperature to rise upto 120°C , which causes the spices to lose their
          pungency and flavors.
        </p>
      </div>

      <div
        className="basis-6/12 relative bussiness-background"
        data-aos="fade-down-left">
        <div data-aos="fade-up-left">
          <img
            alt="masala"
            src={checkbg(colorMe)}
            className="float-right bussiness-image w-max-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologySection2;
