"use client";
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
    <div className=" mt-[450px] md:mt-72  w-full">
      <div className="basis-12/12 bussiness-Flex">
        <div className="basis-7/12 solution-background" data-aos="slide-right">
          <img
            alt="masala"
            src={checkbg(colorMe)}
            className="solution-image w-max-full h-auto mt-12 md:mt-0"
          />
        </div>
        <div className="basis-6/12 md:basis-2"></div>
        <div className="basis-6/12 self-center px-5 md:pr-2 md:pl-0 md:mt-[-5rem]">
          <div data-aos="fade-up">
            <h2
              style={{ color: colorMe }}
              class=" text-[#ff4f4f] text-[30px] md:text-2xl xl:text-3xl font-normal md:flex md:items-center md:tracking-[0.17em] md:leading-snug  my-2 md:my-3">
              Get the Desired Flavour and Aroma with PlanetsEra Spices
            </h2>
            <div className="planetsera_line"></div>
            <div className="desireLine"></div>
          </div>
          <div data-aos="fade-down">
            <p
              className="font-[#1e1e1e] text-[18px] md:text-xl my-1 md:my-5 leading-[30px]
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
