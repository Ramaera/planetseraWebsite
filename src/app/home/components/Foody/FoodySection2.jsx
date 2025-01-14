"use client";

import { useSelector } from "react-redux";

const FoodySection2 = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const product1 = "/images/backgrounds/spiceTasteGreen1.webp";
  const product2 = "/images/backgrounds/spiceTasteGreen2.webp";
  const product3 = "/images/backgrounds/spiceTasteGreen3.webp";
  const product4 = "/images/backgrounds/spiceTasteYellow1.webp";
  const product5 = "/images/backgrounds/spiceTasteYellow2.webp";
  const product6 = "/images/backgrounds/spiceTasteYellow3.webp";
  const product7 = "/images/backgrounds/spiceTasteRed1.webp";
  const product8 = "/images/backgrounds/spiceTasteRed2.webp";
  const product9 = "/images/backgrounds/spiceTasteRed3.webp";

  const checkImg1 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return product7;
    }
    if (colorMe === "#ffc400") {
      return product4;
    }
    if (colorMe === "#2dc83c") {
      return product1;
    }
  };
  const checkImg2 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return product8;
    }
    if (colorMe === "#ffc400") {
      return product5;
    }
    if (colorMe === "#2dc83c") {
      return product2;
    }
  };
  const checkImg3 = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return product9;
    }
    if (colorMe === "#ffc400") {
      return product6;
    }
    if (colorMe === "#2dc83c") {
      return product3;
    }
  };
  return (
    <div className="basis-6/12 self-center pr-5 2xl:flex 2xl:basis-7/12 2xl:h-full">
      <div className="basis-12/12  pb-2.5 2xl:pb-0 scale-95 hover:scale-100 transition-transform">
        <img
          alt="spices taste"
          title="Spices that are
          true to their taste"
          loading="lazy"
          src={checkImg1(colorMe)}
          class="mx-w-full h-auto 2xl:h-full"
        />
      </div>
      <div
        className="basis-12/12 2xl:basis-6/12 flex 2xl:flex-col"
        data-aos="fade-left"
        data-aos-duration="1000">
        <div className="basis-6/12 scale-95 hover:scale-100 transition-transform overflow-hidden">
          <img
            alt="spices taste"
            title="Spices - that are
          true to their taste"
            loading="lazy"
            src={checkImg2(colorMe)}
            class="mx-w-full height-auto h-full"
          />
        </div>
        <div className="basis-6/12 scale-95 hover:scale-100 transition-transform">
          <img
            alt="spices taste"
            title="Spices - that are
          true to their taste"
            loading="lazy"
            src={checkImg3(colorMe)}
            class="height-auto mx-w-full 2xl:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodySection2;
