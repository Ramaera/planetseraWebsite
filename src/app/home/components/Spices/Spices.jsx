"use client";
import "@/public/styles/spices.css";
import SpicesInfo from "./SpicesInfo";
import { useSelector } from "react-redux";

const Spices = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="spices-container w-[100%] m-auto relative flex lg:ml-5 mt-12">
      <div className="basis-7/12 lg:ml-5 box-container">
        <div className="box">
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div
              style={{ backgroundColor: colorMe }}
              className="lg:w-[282px] lg:h-[60px] small-box ml-5 absolute z-10"></div>
          </div>
          <div>
            <img
              loading="lazy"
              src="/images/backgrounds/spices1.webp"
              alt="best spices"
              title="Why we are best"
              className="box1 z-10 lg:w-[424px] lg:h-[523px] absolute bg-center bg-cover border-white border shadow-lg hover:z-50"
            />
          </div>
        </div>
        <div className="box">
          <div>
            <img
              loading="lazy"
              src="/images/backgrounds/spices2.webp"
              alt="best spices"
              title="Why we are best"
              className="box2 z-20 lg:w-[424px] lg:h-[499px] absolute bg-center border-white border shadow-md"
            />
          </div>
          <div
            style={{ backgroundColor: colorMe }}
            className="lg:w-[282px] lg:h-[60px] small-box2 ml-5 absolute"></div>
        </div>
      </div>
      <div className="basis-5/12 md:w-[35%] xl:basis-5/12">
        <SpicesInfo />
      </div>
    </div>
  );
};

export default Spices;
