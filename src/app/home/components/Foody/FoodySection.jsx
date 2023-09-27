"use client";
import FoodySection1 from "./FoodySection1";
import FoodySection2 from "./FoodySection2";
import { useSelector } from "react-redux";

function FoodySection() {
  const colorMe = useSelector((state) => state.colorUs.color);
  const bg1 = "/images/backgrounds/background-1.webp";
  const bg2 = "/images/backgrounds/background-2.webp";
  const bg3 = "/images/backgrounds/background-3.webp";

  const checkbg = (colorMe) => {
    if (colorMe === "#ff4f4f") {
      return bg1;
    }
    if (colorMe === "#ffc400") {
      return bg2;
    }
    if (colorMe === "#2dc83c") {
      return bg3;
    }
  };
  return (
    <div class="w-full max-w-full box-border mx-auto h-auto flex mt-10 md:mt-10">
      <div
        className="basis-12/12 foodyBackground bg-cover bussiness-Flex bg-no-repeat"
        style={{ backgroundImage: `url(${checkbg(colorMe)})` }}
        data-aos="slide-right"
        data-aos-duration="1000">
        <FoodySection1 />
        <div class="col-1 "></div>
        <FoodySection2 />
      </div>
    </div>
  );
}
export default FoodySection;
