"use client";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Gallery.css";

const Gallery = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const mainImageRef = useRef(null);

  const Mobile = useMediaQuery("(min-width:800px)");

  const images = [
    "/images/backgrounds/dig-1.webp",
    "/images/backgrounds/dig-2.webp",
    "/images/backgrounds/dig-3.webp",
    "/images/backgrounds/dig-4.webp",
    "/images/backgrounds/dig-5.webp",
    "/images/backgrounds/dig-6.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
    mainImageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10 sm:mt-20 mx-auto">
      <div class="basis-12/12 relative flex  flex-col items-center">
        <h2
          ref={mainImageRef}
          class="gallery-heading mb-2 sm:mb-5"
          style={{
            backgroundImage: `linear-gradient(to right, ${colorMe}, ${
              colorMe + "80"
            })`,
          }}>
          Digital Gallery
          <div
            class="gallery-line"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                colorMe + "80"
              })`,
            }}></div>
        </h2>
      </div>

      <div className="gallery-container">
        <div className="flex flex-row justify-center items-center">
          <div>
            <IconButton onClick={prevImage}>
              <ArrowCircleLeftIcon
                sx={{
                  color: colorMe,
                  width: Mobile ? "50px" : "25px",
                  height: Mobile ? "50px" : "25px",
                }}
              />
            </IconButton>
          </div>
          <div className="w-full sm:w-[70%] 2xl:w-[80%] items-center flex  justify-center py-4">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
              className="sm:w-[70%] sm:max-h-[450px] 2xl:max-h-[600px]"
            />
          </div>
          <div>
            <IconButton onClick={nextImage}>
              <ArrowCircleRightIcon
                sx={{
                  color: colorMe,
                  width: Mobile ? "50px" : "25px",
                  height: Mobile ? "50px" : "25px",
                }}
              />
            </IconButton>
          </div>
        </div>

        <div className=" flex justify-center flex-wrap ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => selectImage(index)}
              style={{ borderColor: `${colorMe}` }}
              className={`w-24 sm:w-80 2xl:w-96 m-2 sm:mx-8 sm:my-5 cursor-pointer ${
                currentImageIndex === index
                  ? "border-2 sm:border-4 rounded-md sm:rounded-2xl"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
