"use client";
import "@/public/styles/reasonsChoose.css";
import React, { useState } from "react";
import ReasonsChooseData from "./ReasonsChooseData";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";

const ReasonsChoose = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const redLine = "/images/backgrounds/redLine.webp";
  const greenLine = "/images/backgrounds/greenLine.webp";
  const yellowLine = "/images/backgrounds/yellowLine.webp";
  const vegMixImg = "/images/backgrounds/vegMixImg.webp";

  const [current, setCurrent] = useState(0);
  const length = ReasonsChooseData?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ReasonsChooseData) || ReasonsChooseData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="">
        <BsFillArrowLeftCircleFill
          className="left-arrow"
          style={{
            color: colorMe,
          }}
          onClick={prevSlide}
        />
        <BsFillArrowRightCircleFill
          className="right-arrow"
          style={{
            color: colorMe,
          }}
          onClick={nextSlide}
        />
        {ReasonsChooseData?.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}>
              {index === current && (
                <div>
                  <section class="carousel" aria-label="Gallery">
                    <li>
                      <div class="carousel__snapper">
                        <div className="basis-12/12 flex flex-col sm:flex-row sm:mt-28">
                          <div className="basis-5/12 flex mt-4 px-6 sm:px-10  flex-col">
                            <h3 className="text-[1.8rem] sm:text-3xl xl:text-4xl 2xl:text-5xl">
                              {slide.title}
                            </h3>
                            <img
                              alt="masala"
                              src="images/backgrounds/reasonsSpices.webp"
                              className="w-fit "
                            />
                          </div>

                          <div className="md:basis-7/12  px-6 sm:px-0">
                            <h2
                              className="success-heading"
                              style={{
                                webkitTextFillColor: "transparent",
                                backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                                  colorMe + "80"
                                })`,
                              }}>
                              {slide.heading}
                            </h2>
                            <div className="hidden md:block mx-2 md:mt-[-1vh] md:mx-2 2xl:hidden">
                              <img
                                alt="bg"
                                src={
                                  colorMe === "#ff4f4f"
                                    ? redLine
                                    : colorMe === "#ffc400"
                                    ? yellowLine
                                    : greenLine
                                }
                                className="w-2/3"
                              />
                            </div>
                            <p className="success-text mt-4 md:mt-2 tracking-[2px]">
                              {slide.para}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </section>
                </div>
              )}
            </div>
          );
        })}
        {/* <img
          alt="masala"
          src="images/backgrounds/digitalAb.webp"
          className="w-full md:mt-[-300px]"
        /> */}
      </div>
    </>
  );
};

export default ReasonsChoose;
