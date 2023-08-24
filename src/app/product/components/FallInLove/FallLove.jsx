"use client";
import "./FallLove.css";
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
        src="images/backgrounds/desireAb.webp"
        style={{ margin: "50px 0" }}
        className="w-full"
      />

      <div className="basis-4/12 flex flex-col justify-center m-auto">
        <h2
          className="falllove-heading"
          style={{
            webkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
          }}>
          Get fit with flavor - PlanetsEra spices bring a healthy kick to your
          meals.
        </h2>

        <div className="fallLoveLine 2xl:hidden">
          <img
            alt="masala"
            src={
              colorMe === "#ff4f4f"
                ? redLine
                : colorMe === "#ffde39"
                ? yellowLine
                : greenLine
            }
          />
        </div>
      </div>
      <div className="container fallloveBackground mt-20 px-6">
        <div className="basis-12/12 flex justify-between flex-col md:flex-row items-center">
          <div>
            <div className="basis-4/12">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/falllove-1.webp"
                className="myMenuImage"
              />
            </div>
            <div className="basis-3/12">
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
          </div>

          <div>
            <div className="basis-4/12 myMenuImage-2 ">
              <img
                alt="masala"
                loading="lazy"
                src="images/backgrounds/falllove-2.webp"
                className="myMenuImage"
              />
            </div>
            <div className="basis-3/12">
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
                  Pure
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FallLove;
