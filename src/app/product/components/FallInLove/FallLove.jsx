"use client";
import "@/public/styles/fallLove.css";
import { useSelector } from "react-redux";

const FallLove = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const redLine = "/images/backgrounds/redLine.webp";
  const greenLine = "/images/backgrounds/greenLine.webp";
  const yellowLine = "/images/backgrounds/yellowLine.webp";

  return (
    <>
      <img
        alt="masala"
        loading="lazy"
        src="images/backgrounds/desireAb.png"
        style={{ marginTop: "10px" }}
        className="w-full"
        id="know"
      />

      <div className="flex flex-col justify-center m-auto">
        <h2
          className="falllove-heading relative"
          style={{
            webkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
          }}>
          Get fit with flavor - PlanetsEra spices bring a healthy kick to your
          meals.
        </h2>
      </div>
      <div className="container fallloveBackground mt-20 px-6">
        <div className="basis-12/12 flex justify-between flex-col md:flex-row items-center p-4 sm:px-10 sm:py-6">
          <div className="basis-6/12 flex flex-col items-center justify-center">
            <a href="#blendedSpices">
              <img
                alt="Blended spices"
                title="PlanetsEra Blended Spices"
                loading="lazy"
                src="images/backgrounds/falllove-1.webp"
                className="myMenuImage"
              />
            </a>
            <a href="#blendedSpices">
              <button
                type="button"
                className="fallloveButton mx-auto block hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                  color: "white",
                  textShadow: `0 4px 4px ${colorMe}`,
                  boxShadow: `2px 4px 7px -2px ${colorMe}`,
                }}>
                Blended
              </button>
            </a>
          </div>

          <div className="basis-6/12 flex flex-col items-center justify-center mt-10 sm:mt-0">
            <a href="#groundSpices">
              <img
                alt="Ground spices"
                title="PlanetsEra Ground Spices"
                loading="lazy"
                src="images/backgrounds/falllove-2.webp"
                className="myMenuImage"
              />
            </a>
            <a href="#groundSpices">
              <button
                type="button"
                className="fallloveButton mx-auto block mt-3 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                  color: "white",
                  textShadow: `0 4px 4px ${colorMe}`,
                  boxShadow: `2px 4px 7px -2px ${colorMe}`,
                }}>
                Ground
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FallLove;
