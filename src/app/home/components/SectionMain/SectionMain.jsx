"use client";
import { useSelector } from "react-redux";

function SectionMain() {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div id="produce" className="container mt-401 bg-no-repeat relative">
      <div className="basis-12/12 flex taste-cooking">
        <div className="basis-12/12 w-full">
          <div
            data-aos="slide-left"
            data-aos-anchor-placement="top-bottom"
            className="flex items-center basis-10/12  flex-col ">
            <h2
              style={{ color: colorMe }}
              className="text-[1.3rem] font-medium md:text-[35px] mb-2 text-left md:text-center bg-clip-text tracking-[0.16em] md:tracking-wide px-5 md:px-0">
              Producing the treasures of the Indian cuisines
              <div
                className="hidden md:block absolute h-[2px] w-[180px] ml-[3px] "
                style={{
                  webkitTextFillColor: "transparent",
                  background: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}></div>
            </h2>
          </div>
        </div>
      </div>
      <div className="basis-12/12 flex px-5">
        <div className="basis-12/12 w-full">
          <div data-aos="slide-right">
            <p class="font-[#1e1e1e] text-[16px] md:px-16 md:mb-8 text-left	md:text-center leading-[30px] md:leading-[35px] font-normal tracking-wider">
              Our business takes pride in manufacturing a colorful variety of
              spices that capture the spirit of India's rich and varied cuisine.
              We are dedicated to revealing the culinary secrets of India. Our
              spices add authenticity and taste to every dish, from Haldi's cozy
              embrace to Mirch's fiery allure and the aromatic charm of Dhaniya.
            </p>
          </div>
        </div>
      </div>

      <div className="basis-12/12 flex my-3 px-5">
        <div className="basis-12/12 w-full">
          <img
            loading="lazy"
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
