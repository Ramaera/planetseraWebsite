"use client";
import React from "react";
import "../../../../../public/styles/spicesandHealth.css";
import { useSelector } from "react-redux";
import HealthySpices from "./HealthySpices";

const SpiceandHealth = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="spicesandHealth relative mt-2 md:mt-0">
      <h2
        style={{ color: colorMe }}
        className="text-[1.8rem] md:text-[49px] font-normal sm:font-medium text-center leading-[40px] md:leading-[40px] space-x-1 md:mt-10 tracking-widest">
        Spices and Health
      </h2>
      <div className="health_line"></div>
      <div className="spciesLine"></div>
      <div className="spicesandHealth-container flex lg:justify-between">
        <div className="healthy-spice-container mt-5">
          <HealthySpices />
        </div>
        <div></div>
        <div className="spice-image-container lg:p-12 lg:w-[47%]">
          <img
            loading="lazy"
            alt="masala"
            title="Spices and Health"
            src="images/backgrounds/spicws4.webp"
            className="spice-image"
          />
        </div>
      </div>
      {/* <div className="overflow-x-hidden">
        <img alt="masala"  
          src={Spices3}
          className="lg:w-[473px] lg:h-[445px] lg:absolute lg:z-30 spices3 lg:top-[75%] opacity-70"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default SpiceandHealth;
