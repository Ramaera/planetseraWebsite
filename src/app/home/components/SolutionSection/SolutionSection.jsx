"use client";
import "../../../../../src/styles/globals.css";

import { useSelector } from "react-redux";

function SolutionSection() {
  const spice = "/images/backgrounds/spcies.webp";
  const spice2 = "/images/backgrounds/spcies2.webp";
  const spice3 = "/images/backgrounds/spcies3.webp";
  const spicebg = "/images/backgrounds/desireAb.webp";

  const colorMe = useSelector((state) => state.colorUs.color);
  const checkbg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return spice;
    }
    if (colorMe === "#ffde39") {
      return spice2;
    }
    if (colorMe === "#2dc83c") {
      return spice3;
    }
  };
  return (
    <div className="container mt-[500px] md:mt-72">
      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-7/12 solution-background" data-aos="slide-right">
          <img
            alt="masala"
            src={checkbg(colorMe)}
            className="solution-image w-max-full h-auto my-12 md:my-0"
          />
        </div>
        <div className="basis-1/12"></div>
        <div className="basis-5/12 self-center px-5 md:pr-5 md:pl-0">
          <div data-aos="fade-up">
            <h1
              style={{ color: colorMe }}
              class=" text-[#ff4f4f] text-[30px] md:text-[45px] font-normal md:flex md:items-center md:tracking-[0.17em] md:leading-snug  my-10 md:my-3">
              Get the Desired Flavour and Aroma with PlanetsEra Spices
            </h1>
            <div className="planetsera_line"></div>
            <div className="desireLine"></div>
          </div>
          <div data-aos="fade-down">
            <p
              className="font-[#1e1e1e] text-[18px] md:text-[21px] my-1 md:my-5 leading-[30px]
            md:leading-[42px] font-light tracking-wider">
              Our premium, handcrafted blends will transport your taste buds to
              new heights. Discover the magic of our authentic, ethically
              sourced ingredients and elevate your culinary creations with
              PlanetsEra spices.
            </p>
          </div>
        </div>
      </div>
      <img src={spicebg} className="w-full" alt="masala" />
    </div>
  );
}

export default SolutionSection;
