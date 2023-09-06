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
          className="text-[#ff4f4f] text-[1.3rem] md:text-[35px] font-normal md:font-medium tracking-[0.17em]	mb-3">
          Quality Preservation Using Latest Technology
        </h2>
        <div className="quality_line"></div>
        <div className="technologyLine"></div>

        <p
          className="mb-3 font-[#1e1e1e] text-[16px] leading-[30px]
          md:leading-[42px] font-normal tracking-wider">
          We are dedicated to maintaining quality with the latest in technology.
          We use the latest technological advances, from product procurement to
          packaging, to guarantee the integrity of our products. In order to
          offer an unparalleled sensory experience that represents our
          commitment to perfection, we preserve the richness of Haldi, the
          pungency of Mirch, and the freshness of Dhaniya while keeping
          innovation at the forefront of our efforts.
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
