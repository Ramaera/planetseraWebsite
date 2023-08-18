"use client";
import "./HeaderTwo.css";
import PouchSection from "./PouchSection";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  const bg = "/images/backgrounds/HeroSlider.webp";
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <NavItem page={"product"} />
      <div className="navMobile">
        <NavigationMobile />
      </div>

      <div className="flex absolute z-10 w-full flex-wrap px-6 ">
        <div className="basis-2/12 flex justify-start detailContainer mt-14"></div>
        <div className="basis-12/12 flex justify-end ml-auto items-baseline detailContainer"></div>

        <div className="container flex flex-wrap w-full mt-40">
          <div className="basis-12/12 w-full flex">
            <div className="md:basis-12/12">
              <h1 className="text-center tracking-[5px] SecondPage-Heading">
                Experience a burst of flavors with every sprinkle only with
                PlanetsEra premium spices
              </h1>

              <p className="SecondPageHeading-Text mt-5 md:mx-64 tracking-[1px] 2xl:m-0 2xl:justify-center 2xl:flex 2xl:w-full">
                Unlock the secrets of ancient spice blends and bring <br />
                the timeless flavors of history into your kitchen
              </p>
            </div>
          </div>
          <div className="basis-12/12 flex w-full justify-center">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 flex justify-center">
              <a href="#exploreSection">
                <button
                  type="button"
                  class="explore text-white SecondPage-Button btn-2 tracking-[1px] hover:scale-105"
                  style={{
                    boxShadow: `2px 4px 7px -2px ${colorMe}`,
                    background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                      colorMe + "95"
                    } 100%)`,
                    cursor: "pointer",
                  }}>
                  Explore more
                </button>
              </a>
            </div>
            <div className="basis-5/12"></div>
          </div>

          <div className="basis-12/12 flex w-full justify-around mt-5 ">
            <div className="basis-5/12"></div>
            <div className="basis-2/12 Star-Icon flex justify-center tracking-[6px] pl-2">
              <i className="fa fa-star " style={{ color: colorMe }}></i>
              <i className="fa fa-star " style={{ color: colorMe }}></i>
              <i className="fa fa-star " style={{ color: colorMe }}></i>
              <i className="fa fa-star " style={{ color: colorMe }}></i>
              <i className="fa fa-star " style={{ color: colorMe }}></i>
            </div>
            <div className="basis-5/12"></div>
          </div>
        </div>
        <PouchSection />
      </div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container flex hero-Images"></div>
    </>
  );
};

export default HeaderTwo;
