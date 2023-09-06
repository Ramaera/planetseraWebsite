"use client";
import { useSelector } from "react-redux";

const ReviewInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const Quotes = "/images/backgrounds/Quotes.webp";
  const Quotes2 = "/images/backgrounds/Quotes2.webp";
  const Quotes3 = "/images/backgrounds/Quotes3.webp";

  const checkbg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return Quotes;
    }
    if (colorMe === "#ffde39") {
      return Quotes2;
    }
    if (colorMe === "#2dc83c") {
      return Quotes3;
    }
  };
  return (
    <>
      <div className="review-info">
        <h2
          style={{ color: colorMe }}
          className="text-[32px] md:text-[49px] font-light md:font-medium text-center md:text-left  md:leading-[50px]  leading-normal">
          Customer Review
        </h2>
        <div className="flex lg:ml-2 mt-6">
          <img
            src={checkbg(colorMe)}
            alt="bg"
            className="lg:mr-2 h-[60px] w-[60px] quotes w-none "
          />
        </div>
        <p className="font-[#1e1e1e] text-[18px] md:text-[20px] font-normal	w-[95%] md:w-[80%] m-auto md:m-0 text-left leading-[38px] md:tracking-[0.055em] ">
          "I'm blown away by the quality and depth of flavour in PlanetsEra
          Spices. The smoked paprika added a whole new level of complexity to my
          dishes. I'll definitely be ordering more!"
        </p>
        <div className="customer-info flex mt-6 md:mt-10 items-center">
          <div className="customer-nameflex w-[60%] justify-between">
            <div>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "26px",
                  color: "##1E1E1E",
                  textAlign: "left",
                }}>
                Deepti
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "##1E1E1E",
                  textAlign: "left",
                }}>
                Consumer
              </p>
            </div>
            {/*  <div>
            <WestIcon />
            <EastIcon className="ml-2" />
          </div> */}
          </div>
        </div>
        {/* <img src={transparentbg} alt="" className="absolute transbg" /> */}
      </div>
    </>
  );
};

export default ReviewInfo;
