"use client";
import { useSelector } from "react-redux";
import "./handpicked.css";
import Link from "next/link";

const HandPicked = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const bg1 = "/images/backgrounds/spiceOrganicRed.webp";
  const bg2 = "/images/backgrounds/spiceOrganicYellow.webp";
  const bg3 = "/images/backgrounds/spiceOrganicGreen.webp";

  const checkImg1 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return bg1;
    }
    if (colorMe === "#ffde39") {
      return bg2;
    }
    if (colorMe === "#2dc83c") {
      return bg3;
    }
  };

  return (
    <div className="md:overflow-hidden md:mt-[-3rem] md:scale-90 md:transition-all md:ease-linear md:duration-700 ">
      <div className="relative mt-10 md:mt-0 md:hover:scale-105 md:transition-all md:ease-linear md:duration-700  ">
        <div className="absolute  z-10 h-full text-white md:flex justify-center md:flex-col p-12 md:px-24 md:py-0 2xl:px-36 ">
          <div className=" flex flex-col mt-10 md:mt-52 items-center">
            <div data-aos="fade-right">
              <p className="text-center text-sm lg:text-4xl xl:text-5xl font-normal	md:leading-10 tracking-normal  text-[Montserrat] md:mx-8 xl:mx-16">
                Spices that are grown organically and handpicked for
                uncompromised taste
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="text-center p-2 md:px-[4rem] xl:px-[7.2rem] space-y-4 text-xs lg:text-2xl 2xl:text-4xl font-light 2xl:px-48 font-Montserrat tracking-wider md:mt-8 ">
                PlanetsEra spices give you unmatched taste and tempting aroma.
                Get your desired flavor of spices blessed with the benefits of
                Nature and heavenly delicacy.
              </p>
            </div>
            <Link
              href="/product"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "auto !important" })
              }
              class="han-button hidden md:flex text-white shadow sm:w-auto hover:scale-105 md:mt-8">
              Explore More
            </Link>
          </div>
        </div>
        <div
          className="btn-container md:flex md:justify-center"
          data-aos="fade-up">
          <img
            src={checkImg1(colorMe)}
            alt="hand picked"
            className=" scale-110 md:scale-90 md:w-[90%]"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default HandPicked;
