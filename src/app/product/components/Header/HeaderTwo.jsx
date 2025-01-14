"use client";
import "@/public/styles/headerTwo.css";
import PouchSection from "./PouchSection";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import NavItem from "@/components/Navigation/NavItem";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar, faStar } from "@fortawesome/free-solid-svg-icons";

const HeaderTwo = () => {
  const bg = "/images/backgrounds/header.webp";
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

        <div className="w-full max-w-full box-border m-auto h-auto flex flex-wrap mt-20">
          <div className="basis-12/12 w-full flex">
            <div className="md:basis-12/12">
              <h1 className="text-center text-white font-semibold leading-snug	sm:leading-tight text-2xl sm:text-3xl xl:text-4xl 	tracking-[5px] w-full sm:w-[86%] m-auto ">
                Experience a burst of flavors with every sprinkle only with
                PlanetsEra premium spices
              </h1>

              <p className="font-Montserrat flex text-center	font-light leading-[38px] text-[#ededed] m-auto w-full  text-[20px] 2xl:text-3xl md:text-[25px]	 mt-5 sm:mt-2 tracking-[1px] 2xl:m-0 2xl:mt-5  2xl:justify-center md:justify-center 2xl:flex 2xl:w-full">
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
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: colorMe, margin: "1px 2px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: colorMe, margin: "1px 2px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: colorMe, margin: "1px 2px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: colorMe, margin: "1px 2px" }}
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: colorMe, margin: "1px 2px" }}
              />
            </div>
            <div className="basis-5/12"></div>
          </div>
        </div>
        <PouchSection />
      </div>

      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full max-w-full box-border m-auto  flex h-screen hero-Images"></div>
    </>
  );
};

export default HeaderTwo;
