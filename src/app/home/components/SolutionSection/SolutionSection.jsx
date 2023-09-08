"use client";
import { useSelector } from "react-redux";

function SolutionSection() {
  const spice = "/images/backgrounds/spcies.webp";
  const spice2 = "/images/backgrounds/spcies2.webp";
  const spice3 = "/images/backgrounds/spcies3.webp";
  const spicebg = "/images/backgrounds/desireAb.png";

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
    <div className=" mt-[380px] md:mt-20 w-full">
      <div className="basis-12/12 bussiness-Flex">
        <div
          className="basis-7/12 md:w-[50%] solution-background"
          data-aos="slide-right">
          <img
            alt="Desired flavour spices"
            title="Desired Flavour and Aroma PlanetsEra Spices"
            src={checkbg(colorMe)}
            className="solution-image w-max-full h-auto mt-12 md:mt-0"
          />
        </div>
        <div className="basis-6/12 md:basis-2"></div>
        <div className="basis-6/12 self-center px-5 md:pr-2 md:pl-0 md:mt-[-15rem]">
          <div data-aos="fade-up">
            <h2
              style={{ color: colorMe }}
              class=" text-[#ff4f4f] text-[30px] md:text-[35px] font-normal md:font-medium md:flex md:items-center md:tracking-wide md:leading-tight  my-2 md:my-3">
              Get the Desired Flavour and Aroma PlanetsEra Spices
            </h2>
            <div className="planetsera_line"></div>
            <div className="desireLine"></div>
          </div>
          <div data-aos="fade-down">
            <p
              className="font-[#1e1e1e] text-[16px] my-1 md:my-5 md:pr-20 leading-[30px]
            md:leading-[42px] font-normal tracking-wider">
              With the fine spices from Planetsera, you can achieve your desired
              flavor and scent. Our spices are painstakingly created to provide
              a remarkable culinary experience, from the cozy embrace of Haldi
              to the fiery allure of Mirch and the aromatic charm of Dhaniya.
              Enhance your meals and taste Indian food's authentic flavor with
              every sprinkle.
            </p>
          </div>
        </div>
      </div>
      <img
        src={spicebg}
        className="w-full md:mt-[-9rem] xl:md:mt-[-18rem] 2xl:mt-[-22rem]"
        alt="masala"
      />
    </div>
  );
}

export default SolutionSection;
