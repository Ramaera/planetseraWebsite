"use client";
import { useSelector } from "react-redux";

const NewsInfo = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        alt="blog abs"
        loading="lazy"
        src="images/backgrounds/blogabsolute.webp"
        className="blogTab w-full"
      />
      <div className="basis-12/12 flex" id="Spices">
        <div className="basis-1/12"></div>
        <div className="basis-10/12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2
              style={{ color: colorMe }}
              className="text-[32px] md:text-[49px] font-light text-center leading-[40px] md:leading-[130px] tracking-widest relative">
              Latest News and Blog
            </h2>
            <div className="blog_line"></div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="text-[#1e1e1e] text-[16px] md:text-[23px] font-light md:leading-[39px] md:tracking-[0.07em] mt-4 md:text-center">
              Get more information on the how our spices give desirable taste
              enriched with authenticity in flavor. PlanetsEra Spices are
              handpicked for quality to ensure that each product of ours is
              packed with the love of nature.
            </p>
          </div>
        </div>
        <div className="basis-1/12"></div>
      </div>
    </div>
  );
};

export default NewsInfo;
