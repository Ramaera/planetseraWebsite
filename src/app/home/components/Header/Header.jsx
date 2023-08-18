"use client";
import "./Header.css";
import "../../../../styles/mediaQuery.css";
import "../../../../styles/globals.css";
import LogoSection from "@/components/Navigation/LogoSection";
import NavItem from "@/components/Navigation/NavItem";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { useDispatch } from "react-redux";
import { PouchData } from "./PouchData";
import { changeColor } from "@/state/slice/colorUsSlice";
import { useState } from "react";

function Header() {
  const sliderImage0 = "/images/backgrounds/sliderHeader.webp";
  const sliderImage1 = "/images/backgrounds/slider3Header.webp";
  const sliderImage2 = "/images/backgrounds/slider2Header.webp";
  const background0 = "/images/backgrounds/background.webp";
  const background1 = "/images/backgrounds/background2.webp";
  const background2 = "/images/backgrounds/background3.webp";
  const cusinesImage = "/images/backgrounds/cusinesImg.webp";
  const masalabg = "/images/backgrounds/spi-2.webp";

  const dispatch = useDispatch();
  const [bgcolor, setBgcolor] = useState(background0);
  const [slider, setSlider] = useState(sliderImage0);

  const changeTheColor = (index) => {
    if (index === 0) {
      setBgcolor(background0);
      setSlider(sliderImage0);
      dispatch(changeColor("#ff4f4f"));
    }
    if (index === 1) {
      setBgcolor(background1);
      setSlider(sliderImage1);
      dispatch(changeColor("#ffde39"));
    }
    if (index === 2) {
      setBgcolor(background2);
      setSlider(sliderImage2);
      dispatch(changeColor("#2dc83c"));
    }
  };
  return (
    <>
      <NavItem page={"/"} />
      <header className="bg-white">
        <nav className="relative">
          <NavigationMobile />
          <div className="container nav-flex">
            <LogoSection />
            <div
              className="basis-8/12 slider-Image w-[75vw] relative top-[-15px] md:top-0 ml-auto 2xl:ml-64  scale-125 md:scale-100"
              style={{
                backgroundImage: `url(${bgcolor})`,
              }}>
              <div className=" basis-12/12 flex  items-center justify-center">
                <div className="basis-12/12 ml-12"></div>
              </div>
              <div className="  basis-12/12 flex">
                <div className="basis-4/12 header-display"></div>
                <div className="basis-8/12 ">
                  <img alt="masala" src={slider} className="header-img" />
                </div>
              </div>
            </div>
            <div id="mobile-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ right: "0%", top: "38%" }}>
                <div className="basis-12/12 flex justify-between items-center relative scale-90 w-full ">
                  {PouchData.map((item, index) => {
                    return (
                      <div>
                        <img
                          alt={`masala` + index}
                          loading="lazy"
                          src={item.masalaImg}
                          onClick={() => {
                            changeTheColor(index);
                          }}
                          absolute
                          z-10
                        />
                        <div flex justify-center items-end absolute></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div id="desktop-pouch">
              <div
                className="basis-12/12 flex absolute image-top w-full"
                style={{ top: "100%" }}>
                <img
                  alt="masala"
                  loading="lazy"
                  src={masalabg}
                  className="redChilli"
                />
                <div className="basis-4/12 flex"></div>

                <div className="basis-8/12 flex justify-end relative top-[-40px] items-center">
                  {PouchData.map((item, index) => {
                    return (
                      <div className="hover:scale-110 transition-all">
                        <img
                          alt={`masala` + index}
                          loading="lazy"
                          src={item.masalaImg}
                          onClick={() => {
                            changeTheColor(index);
                          }}
                          width={"175px"}
                          className="pr-3 cursor-pointer"
                        />
                        <div
                          className={`${item.pouchProperty1} flex justify-center items-end absolute `}
                          style={{ display: "none" }}></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <img
                alt="masala"
                src={cusinesImage}
                className="absolute cus_ab"
              />
            </div>
          </div>
        </nav>

        <div className="clearfix"></div>
      </header>
    </>
  );
}

export default Header;
