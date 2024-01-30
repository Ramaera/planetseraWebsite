"use client";
import "@/public/styles/galleryMenu.css";
import { useSelector } from "react-redux";

const GalleryMenu = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const redLine = "/images/backgrounds/redLine.webp";
  const greenLine = "/images/backgrounds/greenLine.webp";
  const yellowLine = "/images/backgrounds/yellowLine.webp";

  return (
    <div
      id="exploreSection"
      className="w-full max-w-full box-border m-auto h-auto mt-40 xl:mt-32 mb-4 galleryContainer"
    >
      <div className="basis-12/12 relative flex justify-center  w-[98%] m-auto items-center flex-col">
        <h2
          className="GalleryMenuHeading"
          style={{
            webkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
          }}
        >
          Choose hand selected premium spices
          <div className="hidden md:block">
            <img
              alt="bg"
              src={
                colorMe === "#ff4f4f"
                  ? redLine
                  : colorMe === "#ffc400"
                  ? yellowLine
                  : greenLine
              }
            />
          </div>
        </h2>

        <p className="GalleryMenuText">
          PlanetsEra spices offers variety of the most desirable spices that
          relish your the taste buds and display the true essence of Indian
          cuisine.
        </p>
      </div>
    </div>
  );
};

export default GalleryMenu;
