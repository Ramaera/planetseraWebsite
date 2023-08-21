"use client";
import { useSelector } from "react-redux";

function SectionMain() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div id="produce" className="container mt-401 bg-no-repeat relative">
      <div className="basis-12/12 flex taste-cooking">
        <div className="basis-12/12 w-full">
          <div data-aos="slide-left" data-aos-anchor-placement="top-bottom">
            <h2
              style={{ color: colorMe }}
              className="text-center my-5 tracking-wide text-[26px] md:text-[55px] leading-[35px] md:leading-[130px] font-normal px-5 md:px-0">
              Producing the treasures of the Indian cuisines
            </h2>
            <div
              style={{ backgroundColor: colorMe }}
              className="produce_line 2xl:hidden lg:block"></div>
          </div>
        </div>
      </div>
      <div className="basis-12/12 flex px-5">
        <div className="basis-12/12 w-full">
          <div data-aos="slide-right">
            <p class="font-[#1e1e1e] text-[18px] md:px-16 md:mb-16 text-left	md:text-center leading-[30px] md:leading-[42px] font-thin tracking-wider">
              Spices have an inseparable bond with our Indian culture. Each and
              every flavor of different spices in our country reflect the taste
              of the region and carry the story of the richness of our country.
              Relishing your taste buds with the best quality of spices to add
              spice to your life and devouring delicacies, PlanetsEra spices is
              a step ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="basis-12/12 flex my-3 px-5">
        <div className="basis-12/12 w-full">
          <img
            alt="masala"
            src="images/backgrounds/m1.webp"
            class="max-w-full  md:h-auto vert-move mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
export default SectionMain;
