"use client";
import "./GalleryMenu.css";
import { useSelector } from "react-redux";

const GalleryMenu = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const redLine = "/images/backgrounds/redLine.webp";
  const greenLine = "/images/backgrounds/greenLine.webp";
  const yellowLine = "/images/backgrounds/yellowLine.webp";

  return (
    <div id="exploreSection" className="container mt-56 mb-20 galleryContainer">
      <div className="basis-12/12 flex text-center justify-center">
        <div>
          <h1
            className="GalleryMenuHeading my-8 tracking-[3px]"
            style={{
              webkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}>
            Choose hand selected premium spices
          </h1>
          <div className="hidden md:block mx-2 md:mt-[-5vh] md:mx-44 2xl:hidden">
            <img
              alt="bg"
              src={
                colorMe === "#ff4f4f"
                  ? redLine
                  : colorMe === "#ffde39"
                  ? yellowLine
                  : greenLine
              }
            />
          </div>
          <p className="GalleryMenuText">
            PlanetsEra spices offers variety of the most desirable spices that
            relish your the taste buds and display the true essence of Indian
            cuisine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryMenu;
