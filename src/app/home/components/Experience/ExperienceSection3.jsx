"use client";
import { useSelector } from "react-redux";

const ExperienceSection3 = () => {
  const experienceRed = "/images/backgrounds/experienceRed.webp";
  const experienceRed2 = "/images/backgrounds/experienceRed2.webp";
  const experienceRed3 = "/images/backgrounds/experienceRed3.webp";
  const experienceRed4 = "/images/backgrounds/experienceRed4.webp";
  const experienceYellow = "/images/backgrounds/experienceYellow.webp";
  const experienceYellow2 = "/images/backgrounds/experienceYellow2.webp";
  const experienceYellow3 = "/images/backgrounds/experienceYellow3.webp";
  const experienceYellow4 = "/images/backgrounds/experienceYellow4.webp";
  const experienceGreen = "/images/backgrounds/experienceGreen.webp";
  const experienceGreen2 = "/images/backgrounds/experienceGreen2.webp";
  const experienceGreen3 = "/images/backgrounds/experienceGreen3.webp";
  const experienceGreen4 = "/images/backgrounds/experienceGreen4.webp";

  const colorMe = useSelector((state) => state.colorUs.color);
  const checkImg1 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return experienceRed;
    }
    if (colorMe === "#ffc400") {
      return experienceYellow;
    }
    if (colorMe === "#2dc83c") {
      return experienceGreen;
    }
  };
  const checkImg2 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return experienceRed2;
    }
    if (colorMe === "#ffc400") {
      return experienceYellow2;
    }
    if (colorMe === "#2dc83c") {
      return experienceGreen2;
    }
  };
  const checkImg3 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return experienceRed3;
    }
    if (colorMe === "#ffc400") {
      return experienceYellow3;
    }
    if (colorMe === "#2dc83c") {
      return experienceGreen3;
    }
  };
  const checkImg4 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return experienceRed4;
    }
    if (colorMe === "#ffc400") {
      return experienceYellow4;
    }
    if (colorMe === "#2dc83c") {
      return experienceGreen4;
    }
  };
  return (
    <>
      <div className="md:basis-5/12 2xl:basis-4/12 md:px-6 transition-transform flex ">
        <div>
          <img
            loading="lazy"
            alt="Extra ordinary taste"
            title="Extra ordinary taste with Experience"
            className=" md:hover:scale-105 overflow-hidden p-2"
            src={checkImg1(colorMe)}
          />
          <img
            loading="lazy"
            alt="Extra ordinary taste"
            title="Extra ordinary taste with Experience"
            className="  hover:scale-105 overflow-hidden p-2"
            src={checkImg3(colorMe)}
          />
        </div>
        <div>
          <img
            loading="lazy"
            alt="Extra ordinary taste"
            title="Extra ordinary taste with Experience"
            className="  hover:scale-105 overflow-hidden p-2"
            src={checkImg2(colorMe)}
          />
          <img
            loading="lazy"
            alt="Extra ordinary taste"
            title="Extra ordinary taste with Experience"
            className="  hover:scale-105 overflow-hidden p-2"
            src={checkImg4(colorMe)}
          />
        </div>
      </div>
      <div className="md:basis-1/12"></div>
    </>
  );
};

export default ExperienceSection3;
