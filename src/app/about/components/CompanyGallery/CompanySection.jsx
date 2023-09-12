import { swiffyslider } from "swiffy-slider";
import "swiffy-slider/css";
import "./CompanySection.css";

if (typeof window !== "undefined") {
  window.swiffyslider = swiffyslider;
  window.addEventListener("load", () => {
    window.swiffyslider.init();
  });
}

import { useSelector } from "react-redux";

const CompanySection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const comOne = "/images/backgrounds/dig-1.webp";
  const comTwo = "/images/backgrounds/dig-2.webp";
  const comThree = "/images/backgrounds/dig-3.webp";
  const comFour = "/images/backgrounds/dig-4.webp";
  const comFive = "/images/backgrounds/dig-5.webp";
  const comSix = "/images/backgrounds/dig-6.webp";

  return (
    <>
      <div className="container mag relative">
        <div class="basis-12/12 relative flex  flex-col items-center">
          <h2
            class="digital-heading mb-5"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}>
            Digital Gallery
            <div
              class="digital-line"
              style={{
                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                  colorMe + "80"
                })`,
              }}></div>
          </h2>
        </div>
      </div>
      <div
        class="swiffy-slider slider-item-ratio slider-item-ratio-16x9 slider-nav-animation slider-nav-animation-fadein slider-item-first-visible "
        style={{ display: "flex", justifyContent: "center" }}
        id="swiffy-animation">
        <ul class="slider-container mycontain" id="container1">
          <li id="slide1" class="slide-visible">
            <img src={comOne} alt="gallery image" loading="lazy" />
          </li>
          <li id="slide2" class="">
            <img src={comTwo} alt="gallery image" loading="lazy" />
          </li>
          <li id="slide3">
            <img src={comThree} alt="gallery image" loading="lazy" />
          </li>
          <li id="slide4">
            <img src={comFour} alt="gallery image" loading="lazy" />
          </li>
          <li id="slide5">
            <img src={comFive} alt="gallery image" loading="lazy" />
          </li>
          <li id="slide5">
            <img src={comSix} alt="gallery image" loading="lazy" />
          </li>
        </ul>
        <div className="myArrow">
          <button
            type="button"
            class="slider-nav"
            aria-label="Go to previous"></button>
        </div>
        <div className="myArrow-1">
          <button
            type="button"
            class="slider-nav slider-nav-next"
            aria-label="Go to next"></button>
        </div>

        <div class="slider-indicators">
          <button aria-label="Go to slide" class="active"></button>
          <button aria-label="Go to slide" class=""></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "1rem" }}>
        <div className="basis-12/12 flex justify-around">
          <div className="basis-1/12"></div>
          <div className="basis">
            <img
              src={comOne}
              alt="gallery image"
              loading="lazy"
              className="sliHei"
            />
          </div>
          <div className="basis">
            <img src={comTwo} alt="gallery image" loading="lazy" />
          </div>
          <div className="basis">
            <img src={comThree} alt="gallery image" loading="lazy" />
          </div>

          <div className="basis-1/12"></div>
        </div>
        <div className="basis-12/12 mt-5 flex justify-around">
          <div className="basis-1/12"></div>
          <div className="basis">
            <img src={comFour} alt="gallery image" loading="lazy" />
          </div>
          <div className="basis">
            <img src={comFive} alt="gallery image" loading="lazy" />
          </div>
          <div className="basis">
            <img src={comSix} alt="gallery image" loading="lazy" />
          </div>

          <div className="basis-1/12"></div>
        </div>
      </div>
    </>
  );
};

export default CompanySection;
