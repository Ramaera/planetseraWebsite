"use client";
import "../../../../../public/styles/review.css";
import { useSelector } from "react-redux";

const ReviewImg = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const experience1 = "/images/backgrounds/reviewRed.webp";
  const experience2 = "/images/backgrounds/reviewyellow.webp";
  const experience3 = "/images/backgrounds/reviewGreen.webp";

  const changeBg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return experience1;
    }
    if (colorMe === "#ffc400") {
      return experience2;
    }
    if (colorMe === "#2dc83c") {
      return experience3;
    }
  };
  return (
    <div className="md:w-[50%] flex flex-col justify-center mt-5">
      {/* <div style={{ backgroundColor: colorMe }} className="small-box1"></div> */}

      <div>
        <img
          loading="lazy"
          src={changeBg(colorMe)}
          alt="customer review"
          title="Customer review about spices"
          className="spices6 hover:scale-110 duration-700 ease-linear	transition-all overflow-hidden"
        />
      </div>
      <div className="spices5"></div>
      {/* <div className="overflow-hidden"></div> */}
      <div
        className="2xl:top-[30%] mx-4 md:mx-0 mb-4 md:mb-0 md:w-[434px] h-auto top-0 md:left-[-15%] absolute z-50 bg-gray-50 rounded-3xl border rotating-border rotating-border--google mt-20"
        style={{
          "--color": colorMe,
        }}>
        <div className="w-[85%] mx-auto my-3">
          <p className="text-[#1e1e1e] text-[21px] leading-[33px] tracking-[0.03em] font-normal mt-6">
            Discover new flavours and elevate your dishes with PlanetsEra Spices
            - order now to start cooking with the best
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewImg;
