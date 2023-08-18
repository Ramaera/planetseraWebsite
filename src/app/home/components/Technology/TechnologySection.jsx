"use client";
import TechnologySection1 from "./TechnologySection1";
import TechnologySection2 from "./TechnologySection2";
import { useSelector } from "react-redux";

function TechnologySection() {
  const manuabsolute = "/images/backgrounds/manuabsolute.webp";
  const manuabsolute2 = "/images/backgrounds/manuabsolute2.webp";
  const manuabsolute3 = "/images/backgrounds/manuabsolute3.webp";

  const colorMe = useSelector((state) => state.colorUs.color);
  const checkbg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return manuabsolute;
    }
    if (colorMe === "#ffde39") {
      return manuabsolute2;
    }
    if (colorMe === "#2dc83c") {
      return manuabsolute3;
    }
  };
  return (
    <>
      <div className="container relative md:pt-16">
        <TechnologySection1 />
        <TechnologySection2 />

        <img
          alt="masala"
          className=" manuAb  md:pt-16"
          src={checkbg(colorMe)}
        />
      </div>
    </>
  );
}

export default TechnologySection;
