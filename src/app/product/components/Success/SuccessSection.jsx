"use client";
import "./SuccessSection.css";
import React, { useState } from "react";
import { SliderData } from "./SuccessSectionData";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";

const SuccessSection = () => {
  const colorMe = useSelector((state) => state.colorUs.color);
  const redLine = "/images/backgrounds/redLine.webp";
  const greenLine = "/images/backgrounds/greenLine.webp";
  const yellowLine = "/images/backgrounds/yellowLine.webp";
  const vegMixImg = "/images/backgrounds/vegMixImg.webp";

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="mb-40 ">
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
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}>
              {index === current && (
                <div>
                  <img
                    alt="bg"
                    loading="lazy"
                    src={slide.image}
                    className="absolute  left-0 pt-40 w-[340px] md:w-auto hidden md:block"
                  />

                  <img
                    alt="bg"
                    loading="lazy"
                    src={slide.completeImg}
                    className="absolute  left-0 pt-40 w-96 md:w-auto md:hidden"
                  />
                  <section class="carousel" aria-label="Gallery">
                    <li>
                      <div class="carousel__snapper">
                        <div className="basis-12/12 flex mt-40">
                          <div className="basis-6/12">
                            <div className="basis-12/12 flex">
                              <div className="basis-6/12"></div>
                              <div className="basis-6/12 success-alignment">
                                <img
                                  alt="bg"
                                  loading="lazy"
                                  src={slide.imageCircle}
                                  className="success-img hidden md:block"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="borderLine"></div>
                          <div className="md:basis-6/12 mt-56 md:mt-0">
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
                                    : colorMe === "#ffde39"
                                    ? yellowLine
                                    : greenLine
                                }
                                className="w-2/3"
                              />
                            </div>
                            <p className="success-text mt-4 md:mt-10 tracking-[2px]">
                              {slide.para}
                            </p>
                            <button
                              style={{
                                boxShadow: `2px 4px 7px -2px ${colorMe}`,
                                background: `linear-gradient(72.44deg, ${colorMe} 0%, ${
                                  colorMe + "95"
                                } 100%)`,
                                cursor: "pointer",
                              }}
                              className=" explore px-6  py-3 my-4 rounded-full transition-all hover:scale-105 text-white">
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <img
                      alt="bg"
                      loading="lazy"
                      src={vegMixImg}
                      className="pizza-img 2xl:bottom-0"
                    />
                  </section>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SuccessSection;
