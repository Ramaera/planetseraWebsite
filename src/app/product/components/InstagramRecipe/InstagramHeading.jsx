import React from "react";

import { useSelector } from "react-redux";

const InstagramHeading = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="basis-12/12 flex">
      <div className="basis-1/12"></div>
      <div className="basis-10/12 flex items-center flex-col mt-10 ">
        <h2
          className="PlanteraHeading mb-2 2xl:text-center"
          style={{
            webkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
          }}>
          Check out @PlanetsEra on Instagram
          <div
            className="hidden md:block absolute h-[2px] w-[220px] ml-[10px] "
            style={{
              webkitTextFillColor: "transparent",
              background: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}></div>
        </h2>
      </div>
      <div className="basis-1/12"></div>
    </div>
  );
};

export default InstagramHeading;
